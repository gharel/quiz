import { describe, expect, it } from 'vitest';
import { accuracy, basePoints, normalize, shuffledIndexes, streakBonus } from './scoring';
import type { Question } from './types';

const q = (over: Partial<Question>): Question => ({ id: 'q', type: 'single', text: '?', time: 20, points: 1, ...over });

describe('normalize', () => {
  it('ignore casse, accents, ponctuation', () => {
    expect(normalize('  Élève, ÉTÉ ! ')).toBe('eleve ete');
    expect(normalize('<a>')).toBe('a');
  });
});

describe('accuracy', () => {
  it('single', () => {
    const s = q({ answers: ['a', 'b'], correct: [1] });
    expect(accuracy(s, 1)).toBe(1);
    expect(accuracy(s, 0)).toBe(0);
    expect(accuracy(s, null)).toBe(0);
  });
  it('multiple exige toutes les bonnes réponses', () => {
    const m = q({ type: 'multiple', answers: ['a', 'b', 'c'], correct: [0, 2] });
    expect(accuracy(m, [2, 0])).toBe(1);
    expect(accuracy(m, [0])).toBe(0);
    expect(accuracy(m, [0, 1, 2])).toBe(0);
  });
  it('truefalse', () => {
    expect(accuracy(q({ type: 'truefalse', truth: false }), false)).toBe(1);
    expect(accuracy(q({ type: 'truefalse', truth: false }), true)).toBe(0);
  });
  it('text tolère accents et casse', () => {
    const t = q({ type: 'text', accepted: ['Nouméa'] });
    expect(accuracy(t, 'noumea')).toBe(1);
    expect(accuracy(t, '')).toBe(0);
  });
  it('slider avec tolérance', () => {
    const s = q({ type: 'slider', slider: { min: 0, max: 100, step: 1, answer: 50, tolerance: 10 } });
    expect(accuracy(s, 50)).toBe(1);
    expect(accuracy(s, 60)).toBeCloseTo(0.5);
    expect(accuracy(s, 61)).toBe(0);
  });
  it('order', () => {
    const o = q({ type: 'order', items: ['a', 'b', 'c'] });
    expect(accuracy(o, [0, 1, 2])).toBe(1);
    expect(accuracy(o, [1, 0, 2])).toBe(0);
  });
});

describe('points', () => {
  const s = q({ answers: ['a', 'b'], correct: [0] });
  it('1000 immédiat, 500 au gong, 0 si faux', () => {
    expect(basePoints(s, 0, 0)).toBe(1000);
    expect(basePoints(s, 0, 20000)).toBe(500);
    expect(basePoints(s, 1, 0)).toBe(0);
  });
  it('double points et sans points', () => {
    expect(basePoints({ ...s, points: 2 }, 0, 0)).toBe(2000);
    expect(basePoints({ ...s, points: 0 }, 0, 0)).toBe(0);
  });
  it('bonus de série plafonné', () => {
    expect(streakBonus(1, s)).toBe(0);
    expect(streakBonus(3, s)).toBe(200);
    expect(streakBonus(12, s)).toBe(500);
  });
  it('mélange différent de l’ordre initial', () => {
    for (let i = 0; i < 20; i++) expect(shuffledIndexes(3).join()).not.toBe('0,1,2');
  });
});
