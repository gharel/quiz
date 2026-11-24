import { describe, expect, it } from 'vitest';
import { qcm, quiz, vf } from '../data/build';
import { levelOf, levels, ranking, sessionCsv, sessionStats } from './stats';
import type { AnswerRecord, Session } from './types';

const z = quiz('t', 'general', 'Test', '', [qcm('Q1', ['a', '*b']), vf('Q2', true), vf('Q3', false), vf('Q4', true)]);
const ans = (q: number, correct: boolean, value: AnswerRecord['value'] = correct ? 1 : 0): AnswerRecord => ({ q, value, ms: 2000, correct, points: correct ? 900 : 0 });

const session: Session = {
  id: 's', mode: 'live', quizId: 't', quiz: z, startedAt: 0, endedAt: 600_000,
  report: { training: 'Groupe A', trainer: 'Camille', note: 'RAS' },
  players: [
    { id: 'a', name: 'Ana', score: 3600, answers: [0, 1, 2, 3].map((q) => ans(q, true)) },
    { id: 'b', name: 'Bob', score: 1800, answers: [ans(0, true), ans(1, true), ans(2, false), ans(3, false, null)] },
    { id: 'c', name: 'Cy', score: 900, answers: [ans(0, true), ans(1, false), ans(2, false, null), ans(3, false, null)] },
  ],
};

describe('statistiques de partie', () => {
  it('calcule réussite et taux de réponse', () => {
    expect(sessionStats(session)).toEqual({ successRate: 58, answerRate: 75, durationMs: 600_000 });
  });

  it('classe les participants par niveau', () => {
    expect(ranking(session).map((p) => [p.name, p.rate, p.missed])).toEqual([['Ana', 100, 0], ['Bob', 50, 1], ['Cy', 25, 2]]);
    expect(levelOf(75).id).toBe('ok');
    expect(levelOf(74).id).toBe('mid');
    expect(levelOf(49).id).toBe('low');
    expect(levels(session).map((l) => l.players.map((p) => p.name))).toEqual([['Ana'], ['Bob'], ['Cy']]);
  });

  it('exporte un CSV avec bilan, participants et questions', () => {
    const lines = sessionCsv(session, 'Culture générale').split('\r\n');
    expect(lines[0]).toBe('﻿Bilan du quiz');
    expect(lines).toContain('Formation;Groupe A');
    expect(lines).toContain('Formateur;Camille');
    expect(lines).toContain('Réussite moyenne (%);58');
    expect(lines.some((l) => l.startsWith('2;Bob;1800;2;50;En cours d’acquisition;1;'))).toBe(true);
    expect(lines).toContain('Questions');
    expect(lines.some((l) => l.startsWith('2;Q2;Vrai ou faux;Vrai;67;2;3;2'))).toBe(true);
  });
});
