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
      const v = normalize(value);
      return v !== '' && (q.accepted ?? []).some((a) => normalize(a) === v) ? 1 : 0;
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

/** Points façon Kahoot : 1000 si réponse immédiate, 500 au gong. */
export function basePoints(q: Question, value: AnswerValue, ms: number): number {
  const acc = accuracy(q, value);
  if (acc === 0 || q.points === 0) return 0;
  const limit = q.time * 1000;
  const t = Math.min(Math.max(ms, 0), limit) / limit;
  return Math.round(1000 * q.points * acc * (1 - t / 2));
}

/** Bonus de série : +100 par bonne réponse consécutive au-delà de la première, plafonné à 500. */
export function streakBonus(streak: number, q: Question): number {
  if (q.points === 0 || streak < 2) return 0;
  return Math.min(100 * (streak - 1), 500);
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
