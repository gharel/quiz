import { describe, expect, it } from 'vitest';
import { DEFAULT_CATEGORIES } from '../data/categories';
import { curseur, ordre, qcm, quiz, saisie, vf } from '../data/build';
import { parseCsv, parseFrDate, sameSession, sessionFromCsv } from './csvImport';
import { questionStats, ranking, sessionCsv, sessionStats } from './stats';
import type { Session } from './types';

const z = quiz('t', 'ia', 'Test CSV', 'desc', [
  qcm('Q1 ; avec « guillemets » "x"', ['a', '*b', 'c']),
  qcm('Q2', ['*a', 'b', '*c']),
  vf('Q3', true),
  saisie('Q4', ['Nouméa']),
  curseur('Q5', { min: 0, max: 100, step: 1, answer: 1500, tolerance: 0, unit: 'm' }),
  ordre('Q6', ['un', 'deux', 'trois']),
], 2);

const t0 = new Date(2026, 10, 24, 17, 28).getTime();
const session: Session = {
  id: 's', mode: 'live', quizId: 't', quiz: z, startedAt: t0, endedAt: t0 + 12 * 60_000,
  report: { training: 'Groupe A', trainer: 'Camille' },
  players: [
    { id: 'a', name: 'Ana', score: 4800, answers: [
      { q: 0, value: 1, ms: 2000, correct: true, points: 900 }, { q: 1, value: [0, 2], ms: 5000, correct: true, points: 800 },
      { q: 2, value: true, ms: 1000, correct: true, points: 950 }, { q: 3, value: 'noumea', ms: 8000, correct: true, points: 700 },
      { q: 4, value: 1500, ms: 3000, correct: true, points: 800 }, { q: 5, value: [0, 1, 2], ms: 9000, correct: true, points: 650 },
    ] },
    { id: 'b', name: 'Bob', score: 900, answers: [
      { q: 0, value: 2, ms: 2000, correct: false, points: 0 }, { q: 1, value: [0], ms: 5000, correct: false, points: 0 },
      { q: 2, value: true, ms: 1000, correct: true, points: 900 }, { q: 3, value: null, ms: 20000, correct: false, points: 0 },
      { q: 4, value: 1200, ms: 3000, correct: false, points: 0 }, { q: 5, value: [1, 0, 2], ms: 9000, correct: false, points: 0 },
    ] },
  ],
};

describe('import CSV des résultats', () => {
  it('lit un CSV avec guillemets et séparateur « ; »', () => {
    expect(parseCsv('﻿a;"b;c";"d ""e"""\r\n1;2;3')).toEqual([['a', 'b;c', 'd "e"'], ['1', '2', '3']]);
    expect(parseCsv('a,b\n1,2')).toEqual([['a', 'b'], ['1', '2']]);
  });

  it('lit les dates françaises', () => {
    expect(parseFrDate('24 nov. 2026 à 17:28')).toBe(t0);
    expect(parseFrDate('3 févr. 2026 à 09:05')).toBe(new Date(2026, 1, 3, 9, 5).getTime());
    expect(parseFrDate('n’importe quoi')).toBeNull();
  });

  it('reconstruit une partie complète à partir du bilan exporté', () => {
    const csv = sessionCsv(session, 'Intelligence artificielle');
    const s = sessionFromCsv(csv, { quizzes: [z], categories: DEFAULT_CATEGORIES });
    expect(s.quiz.title).toBe('Test CSV');
    expect(s.quiz.category).toBe('ia');
    expect(s.quiz.level).toBe(2);
    expect(s.mode).toBe('live');
    expect(s.startedAt).toBe(t0);
    expect(s.endedAt - s.startedAt).toBe(12 * 60_000);
    expect(s.report).toEqual({ training: 'Groupe A', trainer: 'Camille' });
    expect(ranking(s).map((p) => [p.name, p.score, p.correct])).toEqual([['Ana', 4800, 6], ['Bob', 900, 1]]);
    const bob = s.players.find((p) => p.name === 'Bob')!;
    expect(bob.answers.map((a) => a.value)).toEqual([2, [0], true, null, 1200, [1, 0, 2]]);
    expect(sessionStats(s).successRate).toBe(sessionStats(session).successRate);
    expect(questionStats(s).map((q) => q.rate)).toEqual(questionStats(session).map((q) => q.rate));
    expect(s.players[0].answers.reduce((t, a) => t + a.points, 0)).toBe(4800);
    expect(sameSession(s, session)).toBe(true);
  });

  it('reconstruit les questions quand le quiz n’est plus dans la bibliothèque', () => {
    const s = sessionFromCsv(sessionCsv(session), { quizzes: [], categories: DEFAULT_CATEGORIES });
    expect(s.quiz.questions.map((q) => q.type)).toEqual(['single', 'multiple', 'truefalse', 'text', 'slider', 'order']);
    expect(questionStats(s).map((q) => q.rate)).toEqual(questionStats(session).map((q) => q.rate));
    expect(sessionCsv(s).split('\r\n').slice(-6)).toEqual(sessionCsv(session).split('\r\n').slice(-6));
  });

  it('refuse la synthèse de plusieurs parties avec un message clair', () => {
    expect(() => sessionFromCsv('Date;Quiz;Participant\n1;2;3', { quizzes: [], categories: [] })).toThrow(/synthèse/);
    expect(() => sessionFromCsv('a;b\n1;2', { quizzes: [], categories: [] })).toThrow(/bilan/);
  });
});
