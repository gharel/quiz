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
    expect(e.outcomes.p2.prev).toBe(2);
    expect(e.outcomes.p2.rank).toBe(2);
    e.startIntro(1, 5000);
    e.startQuestion(6000);
    e.receive({ t: 'answer', pid: 'p1', qi: 1, value: true, ms: 0 }, 6000);
    e.reveal();
    expect(e.players.get('p1')!.score).toBe(2000);
    expect(e.outcomes.p1.prev).toBe(1);
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
    expect(e.receive({ t: 'answer', pid: 'p3', qi: 0, value: 1, ms: 0 }, 45000)).toBeNull();
  });

  it('met le chrono en pause sans pénaliser les joueurs', () => {
    const e = new HostEngine(z, { shuffleQuestions: false, shuffleAnswers: false });
    e.receive({ t: 'join', pid: 'p1', name: 'A' });
    e.startIntro(0, 0);
    e.startQuestion(1000); // 40 s : échéance à 41 000
    e.pause(11000);
    const snap = e.snapshot(15000);
    expect(snap.paused).toBe(true);
    expect(snap.endsIn).toBe(30000);
    e.resume(21000);
    expect(e.deadline).toBe(51000);
    // Le joueur a mis 10 s à répondre, mais son appareil compte aussi les 10 s de pause
    e.receive({ t: 'answer', pid: 'p1', qi: 0, value: 1, ms: 20000 }, 21000);
    expect(e.players.get('p1')!.answers[0].ms).toBe(10000);
    e.reveal();
    expect(e.players.get('p1')!.score).toBe(875);
  });

  it('passe une question sans la compter', () => {
    const e = new HostEngine(z, { shuffleQuestions: false, shuffleAnswers: false });
    e.receive({ t: 'join', pid: 'p1', name: 'A' });
    e.startIntro(0, 0);
    e.startQuestion(1000);
    e.receive({ t: 'answer', pid: 'p1', qi: 0, value: 1, ms: 0 }, 1000);
    e.skipQuestion(2000);
    expect(e.phase).toBe('intro');
    expect(e.qi).toBe(1);
    expect(e.players.get('p1')!.answers).toHaveLength(0);
    expect(e.snapshot().skipped).toEqual([0]);
    e.startQuestion(7000);
    e.receive({ t: 'answer', pid: 'p1', qi: 1, value: true, ms: 0 }, 7000);
    e.reveal();
    expect(e.players.get('p1')!.score).toBe(1000);
    e.phase = 'podium';
    const s = e.toSession();
    expect(s.quiz.questions.map((q) => q.text)).toEqual(['Q2']);
    expect(s.players[0].answers.map((a) => a.q)).toEqual([0]);
  });

  it('termine la partie quand la dernière question est passée', () => {
    const e = new HostEngine(z, { shuffleQuestions: false, shuffleAnswers: false });
    e.startIntro(1, 0);
    e.skipQuestion(100);
    expect(e.phase).toBe('podium');
  });

  it('mélange les réponses sans perdre la bonne', () => {
    const e = new HostEngine(z, { shuffleQuestions: true, shuffleAnswers: true });
    const q = e.questions.find((x) => x.type === 'single')!;
    expect(q.answers![q.correct![0]]).toBe('b');
  });
});
