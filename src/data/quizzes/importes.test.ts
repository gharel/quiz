import { describe, expect, it } from 'vitest';
import IMPORTED_QUIZZES from './importes';

const questions = IMPORTED_QUIZZES.flatMap((z) => z.questions.map((q, i) => ({ z: z.title, n: i + 1, q })));
const label = (x: { z: string; n: number }) => `${x.z} #${x.n}`;

describe('quiz importés', () => {
  it('ont un identifiant unique et une description propre', () => {
    expect(new Set(IMPORTED_QUIZZES.map((z) => z.id)).size).toBe(IMPORTED_QUIZZES.length);
    for (const z of IMPORTED_QUIZZES) {
      expect(z.source, z.title).toBe('import');
      expect(z.description.length, z.title).toBeGreaterThanOrEqual(40);
    }
    expect(new Set(IMPORTED_QUIZZES.map((z) => z.description)).size).toBe(IMPORTED_QUIZZES.length);
  });

  it('respectent les durées : vrai/faux 30 s, QCM 45 ou 60 s, choix multiples 60 s', () => {
    for (const x of questions) {
      const expected = x.q.type === 'truefalse' ? [30] : x.q.type === 'multiple' ? [60] : [45, 60];
      expect(expected, label(x)).toContain(x.q.time);
    }
  });

  it('ont des réponses cohérentes', () => {
    for (const x of questions) {
      const { q } = x;
      expect(q.text.trim(), label(x)).toBe(q.text);
      if (q.type === 'truefalse') {
        expect(typeof q.truth, label(x)).toBe('boolean');
        expect(q.text, label(x)).not.toMatch(/\?$/);
        continue;
      }
      const answers = q.answers ?? [];
      expect(answers.length, label(x)).toBeGreaterThanOrEqual(2);
      // Comparaison sans ignorer la ponctuation : « #id » et « .id » sont deux réponses distinctes
      expect(new Set(answers.map((a) => a.trim().toLowerCase())).size, label(x)).toBe(answers.length);
      expect(q.correct?.every((k) => k >= 0 && k < answers.length), label(x)).toBe(true);
      expect(q.correct?.length, label(x)).toBe(q.type === 'single' ? 1 : q.correct!.length);
      if (q.type === 'multiple') expect(q.correct!.length, label(x)).toBeGreaterThan(1);
    }
  });
});
