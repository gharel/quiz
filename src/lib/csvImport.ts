import { LEVELS, TYPE_INFO } from './quizMeta';
import { isCorrect, normalize } from './scoring';
import type { AnswerRecord, AnswerValue, Category, Question, QuestionType, Quiz, Session } from './types';
import { uid } from './util';

/** Lit un CSV (séparateur « ; », « , » ou tabulation, guillemets, BOM). */
export function parseCsv(text: string): string[][] {
  const src = text.replace(/^\uFEFF/, '');
  const first = src.split(/\r?\n/).find((l) => l.trim()) ?? '';
  const sep = [';', '\t', ','].sort((a, b) => first.split(b).length - first.split(a).length)[0];
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let quoted = false;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (quoted) {
      if (c === '"' && src[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') quoted = false;
      else cell += c;
    } else if (c === '"' && cell === '') quoted = true;
    else if (c === sep) { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && src[i + 1] === '\n') i++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
    } else cell += c;
  }
  if (cell || row.length) rows.push([...row, cell]);
  return rows.map((r) => r.map((x) => x.trim()));
}

/** Décode un fichier en UTF-8, ou en Windows-1252 s'il a été réenregistré par Excel. */
export function decodeCsv(bytes: ArrayBuffer): string {
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  } catch {
    return new TextDecoder('windows-1252').decode(bytes);
  }
}

const MONTHS = ['janv', 'févr', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'déc'];

/** « 24 nov. 2026 à 17:28 » → horodatage (null si illisible). */
export function parseFrDate(s: string): number | null {
  const m = s.match(/(\d{1,2})\s+([a-zéû]+)\.?\s+(\d{4})(?:\D+(\d{1,2})[:h](\d{2}))?/i);
  if (m) {
    const month = MONTHS.findIndex((x) => m[2].toLowerCase().startsWith(x.slice(0, 3)));
    if (month >= 0) return new Date(+m[3], month, +m[1], +(m[4] ?? 0), +(m[5] ?? 0)).getTime();
  }
  const d = s.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\D+(\d{1,2}):(\d{2}))?/);
  return d ? new Date(+d[3], +d[2] - 1, +d[1], +(d[4] ?? 0), +(d[5] ?? 0)).getTime() : null;
}

const parseNumber = (s: string) => Number(s.replace(/[\s\u00a0\u202f]/g, '').replace(',', '.').replace(/[^\d.-].*$/, ''));
/** Retire la marque ✔ / ✘ (devenue « ? » si Excel a réenregistré le fichier en ANSI). */
const stripMark = (cell: string) => cell.replace(/^(✔|✘|\?)\s?/, '').trim();
const TYPE_BY_LABEL = new Map(Object.entries(TYPE_INFO).map(([k, v]) => [normalize(v.label), k as QuestionType]));

/** Valeur de réponse d'après le texte exporté (« Pas de réponse » → null). */
function valueOf(q: Question, text: string): AnswerValue {
  if (!text || text === 'Pas de réponse') return null;
  switch (q.type) {
    case 'single': {
      const i = q.answers?.indexOf(text) ?? -1;
      return i >= 0 ? i : null;
    }
    case 'multiple': return text.split(' · ').map((t) => q.answers?.indexOf(t) ?? -1).filter((i) => i >= 0);
    case 'truefalse': return normalize(text) === 'vrai';
    case 'slider': return parseNumber(text);
    case 'order': return text.split(' → ').map((t) => q.items?.indexOf(t) ?? -1);
    default: return text;
  }
}

/** Question reconstruite quand le quiz n'est plus dans la bibliothèque. */
function guessQuestion(text: string, type: QuestionType, correct: string, given: string[]): Question {
  const q: Question = { id: uid(8), type, text, time: type === 'multiple' ? 50 : type === 'truefalse' ? 20 : 40, points: 1 };
  if (type === 'single' || type === 'multiple') {
    const ok = type === 'multiple' ? correct.split(' · ') : [correct];
    const others = given.filter((g) => g && g !== 'Pas de réponse').flatMap((g) => (type === 'multiple' ? g.split(' · ') : [g]));
    q.answers = [...new Set([...ok, ...others])];
    q.correct = ok.map((a) => q.answers!.indexOf(a));
  } else if (type === 'truefalse') q.truth = normalize(correct) === 'vrai';
  else if (type === 'text') q.accepted = correct.split(' / ');
  else if (type === 'order') q.items = correct.split(' → ');
  else if (type === 'slider') {
    const values = [correct, ...given].map(parseNumber).filter((n) => Number.isFinite(n));
    const unit = correct.replace(/^[\d\s\u00a0\u202f,.-]+/, '').trim() || undefined;
    q.slider = { min: Math.min(...values), max: Math.max(...values), step: 1, answer: parseNumber(correct), tolerance: 0, unit };
  }
  return q;
}

/** Reconstruit une partie à partir du CSV « bilan » exporté depuis Résultats. */
export function sessionFromCsv(text: string, ctx: { quizzes: Quiz[]; categories: Category[] }): Session {
  const rows = parseCsv(text);
  const find = (label: string, from = 0) => rows.findIndex((r, i) => i >= from && normalize(r[0] ?? '') === normalize(label) && r.filter(Boolean).length === 1);
  const pStart = find('Participants');
  const qStart = find('Questions', pStart + 1);
  if (pStart < 0 || qStart < 0) {
    const synthesis = normalize(rows[0]?.[0] ?? '') === 'date' && rows[0].some((c) => normalize(c) === 'participant');
    throw new Error(synthesis
      ? 'Ce fichier est la synthèse de plusieurs parties : il ne contient pas le détail des réponses. Importez le bilan CSV d’une partie (bouton d’export sur chaque partie).'
      : 'Ce fichier n’est pas un bilan de partie exporté depuis Résultats.');
  }
  const info = new Map(rows.slice(1, pStart).filter((r) => r[0]).map((r) => [normalize(r[0]), r[1] ?? '']));
  const get = (k: string) => info.get(normalize(k)) ?? '';

  // Questions (section du bas) et quiz d'origine s'il est encore dans la bibliothèque
  const qHead = rows[qStart + 1].map(normalize);
  const col = (name: string) => qHead.indexOf(normalize(name));
  const qRows = rows.slice(qStart + 2).filter((r) => r[col('Question')]);
  const title = get('Quiz') || 'Quiz importé';
  const original = ctx.quizzes.find((z) => normalize(z.title) === normalize(title));

  const head = rows[pStart + 1];
  const nameCol = head.findIndex((h) => normalize(h) === 'participant');
  const scoreCol = head.findIndex((h) => normalize(h) === 'score');
  const firstQ = head.findIndex((h) => /^Q\d+\s/.test(h));
  const players = rows.slice(pStart + 2, qStart).filter((r) => r[nameCol] && normalize(r[1] ?? '') !== 'bonne reponse');
  if (nameCol < 0 || firstQ < 0 || players.length === 0) throw new Error('Aucun participant trouvé dans ce fichier.');

  const questions = qRows.map((r, i) => {
    const qText = r[col('Question')];
    const type = TYPE_BY_LABEL.get(normalize(r[col('Type')] ?? '')) ?? 'single';
    const known = original?.questions.find((q) => normalize(q.text) === normalize(qText));
    return known ?? guessQuestion(qText, type, r[col('Bonne réponse')] ?? '', players.map((p) => stripMark(p[firstQ + i] ?? '')));
  });
  const avgMs = qRows.map((r, i) => parseNumber(r[col('Temps moyen (s)')] ?? '') * 1000 || questions[i].time * 500);

  const results = players.map((r) => {
    const answers: AnswerRecord[] = questions.map((q, i) => {
      const cell = r[firstQ + i] ?? '';
      const mark = cell.charAt(0);
      const value = valueOf(q, stripMark(cell));
      const correct = mark === '✔' ? true : mark === '✘' ? false : value !== null && isCorrect(q, value);
      return { q: i, value, ms: value === null ? q.time * 1000 : Math.round(avgMs[i]), correct, points: 0 };
    });
    const score = parseNumber(r[scoreCol] ?? '') || 0;
    const ok = answers.filter((a) => a.correct);
    ok.forEach((a, k) => (a.points = k < ok.length - 1 ? Math.round(score / ok.length) : score - Math.round(score / ok.length) * (ok.length - 1)));
    return { id: uid(8), name: r[nameCol], score, answers };
  });

  const startedAt = parseFrDate(get('Date')) ?? Date.now();
  const dur = get('Durée');
  const durMs = (parseNumber(dur) || 0) * (/min/.test(dur) ? 60_000 : 1000);
  const category = ctx.categories.find((c) => normalize(c.label) === normalize(get('Catégorie')))?.id ?? original?.category ?? 'general';
  const level = LEVELS.find((l) => normalize(l.label) === normalize(get('Niveau')))?.value ?? original?.level;
  const report = { training: get('Formation') || undefined, trainer: get('Formateur') || undefined, note: get('Observations') || undefined };
  const quiz: Quiz = {
    id: original?.id ?? uid(), title, description: original?.description ?? '', category, level, questions,
    createdAt: startedAt, updatedAt: startedAt,
  };
  return {
    id: uid(), mode: normalize(get('Mode')).includes('solo') ? 'solo' : 'live', quizId: quiz.id, quiz, startedAt, endedAt: startedAt + durMs,
    players: results, ...(report.training || report.trainer || report.note ? { report } : {}),
  };
}

/** Vrai si une partie identique (même quiz, même date, mêmes participants) existe déjà. */
export const sameSession = (a: Session, b: Session) =>
  a.quiz.title === b.quiz.title && Math.abs(a.startedAt - b.startedAt) < 60_000 && a.players.map((p) => p.name).sort().join() === b.players.map((p) => p.name).sort().join();
