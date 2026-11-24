import { answerText, correctAnswerText, levelLabel, TYPE_INFO } from './quizMeta';
import type { Session } from './types';
import { formatDateTime, formatDuration, percent } from './util';

export function sessionStats(s: Session) {
  const n = s.quiz.questions.length;
  const totalAnswers = s.players.length * n;
  const correct = s.players.reduce((acc, p) => acc + p.answers.filter((a) => a.correct).length, 0);
  const given = s.players.reduce((acc, p) => acc + p.answers.filter((a) => a.value !== null && a.value !== undefined).length, 0);
  return {
    successRate: percent(correct, totalAnswers),
    answerRate: percent(given, totalAnswers),
    durationMs: Math.max(0, s.endedAt - s.startedAt),
  };
}

export function ranking(s: Session) {
  const n = s.quiz.questions.length;
  return [...s.players]
    .sort((a, b) => b.score - a.score)
    .map((p, i) => {
      const correct = p.answers.filter((a) => a.correct).length;
      const given = p.answers.filter((a) => a.value !== null && a.value !== undefined);
      const avgMs = given.length ? given.reduce((t, a) => t + a.ms, 0) / given.length : 0;
      return { ...p, rank: i + 1, correct, rate: percent(correct, n), missed: n - given.length, avgMs };
    });
}

/** Niveaux d'acquisition utilisés dans la synthèse et le bilan. */
export const LEVELS = [
  { id: 'ok', label: 'Acquis', range: '75 % et plus', min: 75 },
  { id: 'mid', label: 'En cours d’acquisition', range: 'de 50 à 74 %', min: 50 },
  { id: 'low', label: 'À consolider', range: 'moins de 50 %', min: 0 },
] as const;

export const levelOf = (rate: number) => LEVELS.find((l) => rate >= l.min)!;

export function levels(s: Session) {
  const players = ranking(s);
  return LEVELS.map((l) => ({ ...l, players: players.filter((p) => levelOf(p.rate).id === l.id) }));
}

export function questionStats(s: Session) {
  return s.quiz.questions.map((q, i) => {
    const answers = s.players.map((p) => p.answers.find((a) => a.q === i)).filter(Boolean);
    const answered = answers.filter((a) => a!.value !== null && a!.value !== undefined);
    const ok = answers.filter((a) => a!.correct).length;
    const counts = (q.answers ?? []).map((_, k) =>
      answered.filter((a) => (Array.isArray(a!.value) ? (a!.value as number[]).includes(k) : a!.value === k)).length,
    );
    const tf = [true, false].map((v) => answered.filter((a) => a!.value === v).length);
    const avgMs = answered.length ? answered.reduce((t, a) => t + a!.ms, 0) / answered.length : 0;
    return { q, index: i, rate: percent(ok, s.players.length), ok, answered: answered.length, counts, tf, avgMs };
  });
}

const csvCell = (v: string | number) => {
  const s = String(v);
  return /[";\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const toCsv = (rows: (string | number)[][]) => '﻿' + rows.map((r) => r.map(csvCell).join(';')).join('\r\n');

/** CSV compatible Excel (séparateur « ; », UTF-8 avec BOM) : bilan, participants, puis questions. */
export function sessionCsv(s: Session, categoryLabel = ''): string {
  const st = sessionStats(s);
  const n = s.quiz.questions.length;
  const info: (string | number)[][] = [
    ['Quiz', s.quiz.title],
    ...(categoryLabel ? [['Catégorie', categoryLabel]] : []),
    ...(s.quiz.level ? [['Niveau', levelLabel(s.quiz.level)]] : []),
    ...(s.report?.training ? [['Formation', s.report.training]] : []),
    ...(s.report?.trainer ? [['Formateur', s.report.trainer]] : []),
    ['Date', formatDateTime(s.startedAt)],
    ['Mode', s.mode === 'live' ? 'En direct' : 'En solo'],
    ['Durée', formatDuration(st.durationMs / 1000)],
    ['Participants', s.players.length],
    ['Questions', n],
    ['Réussite moyenne (%)', st.successRate],
    ['Taux de réponse (%)', st.answerRate],
    ...levels(s).map((l) => [`${l.label} (${l.range})`, l.players.length]),
    ...(s.report?.note ? [['Observations', s.report.note]] : []),
  ];
  const head = ['Rang', 'Participant', 'Score', 'Bonnes réponses', 'Réussite (%)', 'Niveau', 'Sans réponse'];
  s.quiz.questions.forEach((q, i) => head.push(`Q${i + 1} — ${q.text} (${TYPE_INFO[q.type].label})`));
  const rows = ranking(s).map((p) => {
    const cells: (string | number)[] = [p.rank, p.name, p.score, p.correct, p.rate, levelOf(p.rate).label, p.missed];
    s.quiz.questions.forEach((q, i) => {
      const a = p.answers.find((x) => x.q === i);
      cells.push(`${a?.correct ? '✔' : '✘'} ${answerText(q, a?.value ?? null)}`);
    });
    return cells;
  });
  const key = ['', 'Bonne réponse', '', '', '', '', ''].concat(s.quiz.questions.map((q) => correctAnswerText(q)));
  const qHead = ['N°', 'Question', 'Type', 'Bonne réponse', 'Réussite (%)', 'Bonnes réponses', 'Réponses données', 'Temps moyen (s)'];
  const qRows = questionStats(s).map(({ q, index, rate, ok, answered, avgMs }) => [
    index + 1, q.text, TYPE_INFO[q.type].label, correctAnswerText(q), rate, ok, answered, (Math.round(avgMs / 100) / 10).toLocaleString('fr-FR'),
  ]);
  return toCsv([['Bilan du quiz'], ...info, [], ['Participants'], head, ...rows, key, [], ['Questions'], qHead, ...qRows]);
}

/** Synthèse de plusieurs parties : une ligne par participant (CSV Excel). */
export function sessionsCsv(sessions: Session[], categoryLabel: (id: string) => string): string {
  const head = ['Date', 'Quiz', 'Catégorie', 'Formation', 'Mode', 'Rang', 'Participant', 'Score', 'Bonnes réponses', 'Questions', 'Réussite (%)', 'Niveau'];
  const rows: (string | number)[][] = [];
  for (const s of sessions) {
    const date = new Date(s.startedAt).toLocaleString('fr-FR');
    for (const p of ranking(s)) {
      const n = s.quiz.questions.length;
      rows.push([date, s.quiz.title, categoryLabel(s.quiz.category), s.report?.training ?? '', s.mode === 'live' ? 'En direct' : 'En solo', p.rank, p.name, p.score, p.correct, n, p.rate, levelOf(p.rate).label]);
    }
  }
  return toCsv([head, ...rows]);
}
