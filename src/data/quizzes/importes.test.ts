import { describe, expect, it } from 'vitest';
import { normalize } from '../../lib/scoring';
import type { QuestionType } from '../../lib/types';
import { BUILTIN_QUIZZES } from '.';
import IMPORTED_QUIZZES from './importes';

const questions = IMPORTED_QUIZZES.flatMap((z) => z.questions.map((q, i) => ({ z: z.title, n: i + 1, q })));
const label = (x: { z: string; n: number }) => `${x.z} #${x.n}`;

/** Durées attendues par type (mêmes valeurs que les constructeurs de src/data/build.ts). */
const TIMES: Record<QuestionType, number[]> = {
  truefalse: [20], single: [40, 50], multiple: [50], text: [30], slider: [30], order: [40, 45],
};

describe('quiz importés', () => {
  it('ont un identifiant unique et une description propre', () => {
    expect(new Set(IMPORTED_QUIZZES.map((z) => z.id)).size).toBe(IMPORTED_QUIZZES.length);
    for (const z of IMPORTED_QUIZZES) {
      expect(z.source, z.title).toBe('import');
      expect([1, 2, 3], z.title).toContain(z.level);
      expect(z.description.length, z.title).toBeGreaterThanOrEqual(40);
    }
    expect(new Set(IMPORTED_QUIZZES.map((z) => z.description)).size).toBe(IMPORTED_QUIZZES.length);
    expect(new Set(BUILTIN_QUIZZES.map((z) => z.id)).size, 'identifiants uniques entre exemples et quiz importés').toBe(BUILTIN_QUIZZES.length);
  });

  it('respectent les durées par type de question', () => {
    for (const x of questions) expect(TIMES[x.q.type], label(x)).toContain(x.q.time);
  });

  it('ont des réponses cohérentes', () => {
    for (const x of questions) {
      const { q } = x;
      expect(q.text.trim(), label(x)).toBe(q.text);
      switch (q.type) {
        case 'truefalse':
          expect(typeof q.truth, label(x)).toBe('boolean');
          expect(q.text, label(x)).not.toMatch(/\?$/);
          break;
        case 'text':
          expect(q.accepted?.length, label(x)).toBeGreaterThanOrEqual(1);
          expect(q.accepted?.every((a) => normalize(a) !== ''), label(x)).toBe(true);
          break;
        case 'slider': {
          const s = q.slider!;
          const steps = (s.answer - s.min) / s.step;
          expect(s.min <= s.answer && s.answer <= s.max, label(x)).toBe(true);
          expect(Math.abs(steps - Math.round(steps)), label(x)).toBeLessThan(1e-9);
          expect(s.tolerance, label(x)).toBeGreaterThanOrEqual(0);
          break;
        }
        case 'order': {
          const items = q.items ?? [];
          expect(items.length, label(x)).toBeGreaterThanOrEqual(3);
          expect(items.length, label(x)).toBeLessThanOrEqual(6);
          expect(new Set(items).size, label(x)).toBe(items.length);
          break;
        }
        default: {
          const answers = q.answers ?? [];
          expect(answers.length, label(x)).toBeGreaterThanOrEqual(2);
          // Comparaison sans ignorer la ponctuation : « #id » et « .id » sont deux réponses distinctes
          expect(new Set(answers.map((a) => a.trim().toLowerCase())).size, label(x)).toBe(answers.length);
          expect(q.correct?.every((k) => k >= 0 && k < answers.length), label(x)).toBe(true);
          expect(q.correct?.length, label(x)).toBe(q.type === 'single' ? 1 : q.correct!.length);
          if (q.type === 'multiple') expect(q.correct!.length, label(x)).toBeGreaterThan(1);
        }
      }
    }
  });
});

describe('bibliothèque', () => {
  it('a des titres uniques, sans durée, client ni niveau', () => {
    expect(new Set(BUILTIN_QUIZZES.map((z) => z.title)).size).toBe(BUILTIN_QUIZZES.length);
    for (const z of BUILTIN_QUIZZES) {
      expect(z.title, z.id).not.toMatch(/\d+\s?h\b/);
      expect(z.title, z.id).not.toMatch(/\b(Initiation|Intermédiaire|Perfectionnement|Avancé)\b/);
      expect(z.title, z.id).not.toMatch(/ - /);
    }
  });

  it('ne répète pas une même question d’un quiz à l’autre', () => {
    const seen = new Map<string, string>();
    for (const z of BUILTIN_QUIZZES) {
      for (const q of z.questions) {
        const key = normalize(q.text);
        const other = seen.get(key);
        expect(other === undefined || other === z.id, `« ${q.text} » : ${other} et ${z.id}`).toBe(true);
        seen.set(key, z.id);
      }
    }
  });
});
