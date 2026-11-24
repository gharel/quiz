import type { AnswerValue, Question } from './types';

/** Normalise une saisie libre : casse, accents, ponctuation et espaces ignorés. */
export function normalize(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/**
 * Distance d'édition entre deux textes : insertion, suppression, remplacement
 * ou inversion de deux caractères voisins comptent chacun pour une faute.
 */
export function editDistance(a: string, b: string): number {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array<number>(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
  }
  return d[a.length][b.length];
}

/** Fautes tolérées sur un mot attendu : aucune sur un nombre, un mot de 3 lettres ou un sigle (SaaS, RGAA). */
function typosAllowed(word: string): number {
  if (/\d/.test(word) || word.length <= 3) return 0;
  const upper = word.replace(/[^A-Z]/g, '').length;
  if (word.length <= 5 && upper * 2 >= word.length) return 0;
  return word.length < 8 ? 1 : 2;
}

/**
 * Réponse libre : casse, accents et ponctuation ignorés, et une faute de frappe ou d'orthographe
 * tolérée par mot (deux pour un mot de 8 lettres et plus, deux au total), pour ne pas pénaliser
 * l'orthographe. Les nombres, sigles et mots courts restent exacts (« git stash » n'est pas
 * « git status », Ctrl + G n'est pas Ctrl + F).
 */
export function matchesText(answer: string, expected: string): boolean {
  const v = normalize(answer);
  const e = normalize(expected);
  if (!v || !e) return false;
  if (v === e) return true;
  const got = v.split(' ');
  const want = e.split(' ');
  // Une espace en trop ou en moins (« packagejson ») : seulement si rien d'autre ne change
  if (got.length !== want.length) return v.replace(/ /g, '') === e.replace(/ /g, '');
  const raw = expected.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9]+/g, ' ').trim().split(' ');
  let total = 0;
  for (let i = 0; i < want.length; i++) {
    if (got[i] === want[i]) continue;
    const d = editDistance(got[i], want[i]);
    if (d > typosAllowed(raw[i] ?? want[i])) return false;
    total += d;
  }
  return total <= 2;
}

/** Précision 0..1 d'une réponse (1 = parfaite). */
export function accuracy(q: Question, value: AnswerValue): number {
  if (value === null || value === undefined) return 0;
  switch (q.type) {
    case 'single':
      return typeof value === 'number' && (q.correct ?? []).includes(value) ? 1 : 0;
    case 'multiple': {
      if (!Array.isArray(value)) return 0;
      const want = [...(q.correct ?? [])].sort().join(',');
      const got = [...new Set(value)].sort().join(',');
      return want === got ? 1 : 0;
    }
    case 'truefalse':
      return value === q.truth ? 1 : 0;
    case 'text': {
      if (typeof value !== 'string') return 0;
      return (q.accepted ?? []).some((a) => matchesText(value, a)) ? 1 : 0;
    }
    case 'slider': {
      const s = q.slider;
      if (!s || typeof value !== 'number') return 0;
      const diff = Math.abs(value - s.answer);
      if (diff > s.tolerance + 1e-9) return 0;
      return s.tolerance > 0 ? 1 - 0.5 * (diff / s.tolerance) : 1;
    }
    case 'order': {
      const items = q.items ?? [];
      return Array.isArray(value) && value.length === items.length && value.every((v, i) => v === i) ? 1 : 0;
    }
  }
}

export const isCorrect = (q: Question, v: AnswerValue) => accuracy(q, v) > 0;

/**
 * Points d'une bonne réponse : 1000 si elle est immédiate, puis de moins en moins
 * à mesure que le temps passe, jusqu'à 500 au gong (jamais moins pour une bonne réponse).
 * Curseur : la précision réduit seulement la part liée à la rapidité.
 */
export function basePoints(q: Question, value: AnswerValue, ms: number): number {
  const acc = accuracy(q, value);
  if (acc === 0 || q.points === 0) return 0;
  const limit = q.time * 1000;
  const t = Math.min(Math.max(ms, 0), limit) / limit;
  return Math.round((500 + 500 * acc * (1 - t)) * q.points);
}

/** Mélange déterministe d'indices (ne renvoie jamais l'ordre initial si n > 1). */
export function shuffledIndexes(n: number, rand: () => number = Math.random): number[] {
  const idx = Array.from({ length: n }, (_, i) => i);
  if (n < 2) return idx;
  do {
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
  } while (idx.every((v, i) => v === i));
  return idx;
}
