import { describe, expect, it } from 'vitest';
import { qcm, quiz, vf } from '../data/build';
import { HostEngine } from './hostEngine';

const z = quiz('t', 'general', 'Test', '', [qcm('Q1', ['a', '*b']), vf('Q2', true)]);

describe('HostEngine', () => {
  it('joue une partie complète', () => {
    const e = new HostEngine(z, { shuffleQuestions: false, shuffleAnswers: false });
    expect(e.receive({ t: 'join', pid: 'p1', name: 'Léa' })).toBe('joined');
    expect(e.receive({ t: 'join', pid: 'p2', name: 'léa' })).toBe('joined');
    expect(e.players.get('p2')!.name).toBe('léa 2');
    e.startIntro(0, 0);
    e.startQuestion(1000);
    expect(e.receive({ t: 'answer', pid: 'p1', qi: 0, value: 1, ms: 0 }, 1000)).toBe('answered');
    expect(e.receive({ t: 'answer', pid: 'p1', qi: 0, value: 0, ms: 0 }, 1100)).toBeNull();
    expect(e.allAnswered()).toBe(false);
    e.receive({ t: 'answer', pid: 'p2', qi: 0, value: 0, ms: 3000 }, 4000);
    expect(e.allAnswered()).toBe(true);
    e.reveal();
    e.reveal();
    expect(e.players.get('p1')!.score).toBe(1000);
    expect(e.players.get('p2')!.score).toBe(0);
    expect(e.outcomes.p1.rank).toBe(1);
    e.startIntro(1, 5000);
    e.startQuestion(6000);
    e.receive({ t: 'answer', pid: 'p1', qi: 1, value: true, ms: 0 }, 6000);
    e.reveal();
    expect(e.players.get('p1')!.score).toBe(1000 + 1000 + 100);
    expect(e.outcomes.p2.answered).toBe(false);
    expect(e.snapshot().results?.p1.streak).toBe(2);
  });

  it('refuse les réponses tardives et les joueurs exclus', () => {
    const e = new HostEngine(z, { shuffleQuestions: false, shuffleAnswers: false });
    e.receive({ t: 'join', pid: 'p1', name: 'A' });
    e.kick('p1');
    expect(e.receive({ t: 'join', pid: 'p1', name: 'A' })).toBeNull();
    e.receive({ t: 'join', pid: 'p3', name: 'B' });
    e.startIntro(0, 0);
    e.startQuestion(0);
    expect(e.receive({ t: 'answer', pid: 'p3', qi: 0, value: 1, ms: 0 }, 25000)).toBeNull();
  });

  it('mélange les réponses sans perdre la bonne', () => {
    const e = new HostEngine(z, { shuffleQuestions: true, shuffleAnswers: true });
    const q = e.questions.find((x) => x.type === 'single')!;
    expect(q.answers![q.correct![0]]).toBe('b');
  });
});
