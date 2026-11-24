import { describe, expect, it } from 'vitest';
import { accuracy, basePoints, normalize, shuffledIndexes } from './scoring';
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
  it('text tolère une faute de frappe, deux pour une réponse longue', () => {
    const t = q({ type: 'text', accepted: ['Nouméa', 'package.json'] });
    expect(accuracy(t, 'Nouma')).toBe(1); // lettre oubliée
    expect(accuracy(t, 'Nuoméa')).toBe(1); // lettres inversées
    expect(accuracy(t, 'Noumia')).toBe(1); // faute d'orthographe
    expect(accuracy(t, 'Nomia')).toBe(0); // deux fautes sur un mot court
    expect(accuracy(t, 'pakage.jsno')).toBe(1); // deux fautes sur une réponse longue
    expect(accuracy(t, 'pakag.jsno')).toBe(0);
    expect(accuracy(t, 'Paris')).toBe(0);
  });
  it('text reste exact sur les nombres, sigles et mots courts', () => {
    const ok = (accepted: string, answer: string) => accuracy(q({ type: 'text', accepted: [accepted] }), answer);
    expect(ok('PSD', 'PDF')).toBe(0);
    expect(ok('PSD', 'psd')).toBe(1);
    expect(ok('2009', '2008')).toBe(0);
    expect(ok('HTML5', 'HTML 5')).toBe(1); // espace en plus seulement
    expect(ok('HTML5', 'HTML4')).toBe(0);
    expect(ok('SaaS', 'PaaS')).toBe(0);
    expect(ok('Ctrl + F', 'Ctrl + G')).toBe(0);
    expect(ok('Ctrl + F', 'Crtl + F')).toBe(1);
    expect(ok('git status', 'git stash')).toBe(0);
    expect(ok('Google Agenda', 'Gogle Agenda')).toBe(1);
    expect(ok('package.json', 'packagejson')).toBe(1);
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
  it('1000 immédiat, dégressif, 500 au gong, 0 si faux', () => {
    expect(basePoints(s, 0, 0)).toBe(1000);
    expect(basePoints(s, 0, 10000)).toBe(750);
    expect(basePoints(s, 0, 20000)).toBe(500);
    expect(basePoints(s, 0, 99999)).toBe(500);
    expect(basePoints(s, 1, 0)).toBe(0);
  });
  it('jamais plus de 1000 ni moins de 500 pour une bonne réponse', () => {
    for (let ms = 0; ms <= 20000; ms += 1000) {
      const p = basePoints(s, 0, ms);
      expect(p).toBeLessThanOrEqual(1000);
      expect(p).toBeGreaterThanOrEqual(500);
    }
  });
  it('curseur approximatif : au moins 500 points', () => {
    const c = q({ type: 'slider', slider: { min: 0, max: 100, step: 1, answer: 50, tolerance: 10 } });
    expect(basePoints(c, 60, 0)).toBe(750);
    expect(basePoints(c, 60, 20000)).toBe(500);
  });
  it('double points et sans points', () => {
    expect(basePoints({ ...s, points: 2 }, 0, 0)).toBe(2000);
    expect(basePoints({ ...s, points: 0 }, 0, 0)).toBe(0);
  });
  it('mélange différent de l’ordre initial', () => {
    for (let i = 0; i < 20; i++) expect(shuffledIndexes(3).join()).not.toBe('0,1,2');
  });
});
