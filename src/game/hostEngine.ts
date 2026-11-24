import { toPlayQuestion, type PlayQuestion } from '../lib/play';
import { correctAnswerText } from '../lib/quizMeta';
import { basePoints, isCorrect, shuffledIndexes } from '../lib/scoring';
import type { AnswerRecord, AnswerValue, Question, Quiz, Session } from '../lib/types';
import { uid } from '../lib/util';
import { isAvatar } from '../components/avatars/Avatar';
import type { LivePhase, PlayerMessage, PlayerOutcome, PublicState } from '../live/protocol';

export interface HostPlayer {
  id: string;
  name: string;
  avatar: string;
  score: number;
  streak: number;
  left: boolean;
  answers: AnswerRecord[];
}

export interface HostOptions {
  shuffleQuestions: boolean;
  shuffleAnswers: boolean;
}

const INTRO_MS = 4000;
const GRACE_MS = 1500;

/** Moteur de partie en direct, indépendant de l'interface et du réseau. */
export class HostEngine {
  readonly gid = uid(8);
  phase: LivePhase = 'lobby';
  qi = 0;
  seq = 0;
  questions: Question[];
  play: PlayQuestion[];
  players = new Map<string, HostPlayer>();
  kicked = new Set<string>();
  outcomes: Record<string, PlayerOutcome> = {};
  deadline = 0;
  qStart = 0;
  introEndsAt = 0;
  startedAt = 0;
  /** Chrono en pause : temps restant figé (ms), null sinon. */
  pausedLeft: number | null = null;
  pausedAt = 0;
  /** Durée cumulée des pauses sur la question en cours (ms). */
  pausedTotal = 0;
  /** Questions passées par l'animateur : ni points, ni bonnes ou mauvaises réponses. */
  skipped = new Set<number>();
  readonly sessionId = uid();

  constructor(public quiz: Quiz, opts: HostOptions) {
    this.questions = [];
    this.play = [];
    this.configure(opts);
  }

  /** Prépare l'ordre des questions et des réponses (avant le début de la partie). */
  configure(opts: HostOptions) {
    if (this.phase !== 'lobby') return;
    const quiz = this.quiz;
    const order = opts.shuffleQuestions ? shuffledIndexes(quiz.questions.length) : quiz.questions.map((_, i) => i);
    this.questions = order.map((i) => (opts.shuffleAnswers ? shuffleChoices(quiz.questions[i]) : quiz.questions[i]));
    this.play = this.questions.map((q) => toPlayQuestion(q, false));
  }

  get question() {
    return this.questions[this.qi];
  }

  get active() {
    return [...this.players.values()].filter((p) => !p.left);
  }

  /** Traite un message joueur. Renvoie un évènement utile à l'interface. */
  receive(msg: PlayerMessage, now = Date.now()): 'joined' | 'updated' | 'answered' | 'left' | null {
    if (!msg || typeof msg !== 'object' || typeof msg.pid !== 'string') return null;
    if (this.kicked.has(msg.pid)) return null;
    if (msg.t === 'join') {
      const avatar = isAvatar(msg.avatar) ? msg.avatar : 'licorne';
      const existing = this.players.get(msg.pid);
      if (existing) {
        const changed = existing.left || existing.avatar !== avatar;
        existing.left = false;
        existing.avatar = avatar;
        return changed ? 'updated' : null;
      }
      if (this.phase === 'podium' || this.phase === 'closed') return null;
      const name = this.uniqueName(String(msg.name || 'Joueur').trim().slice(0, 20) || 'Joueur');
      this.players.set(msg.pid, { id: msg.pid, name, avatar, score: 0, streak: 0, left: false, answers: [] });
      return 'joined';
    }
    const p = this.players.get(msg.pid);
    if (!p) return null;
    if (msg.t === 'leave') {
      p.left = true;
      return 'left';
    }
    if (msg.t === 'answer') {
      if (this.phase !== 'question' || msg.qi !== this.qi || now > this.deadline + GRACE_MS) return null;
      if (p.answers.some((a) => a.q === this.qi)) return null;
      const limit = this.question.time * 1000;
      const elapsed = now - this.qStart - this.pausedTotal - (this.pausedLeft !== null ? now - this.pausedAt : 0);
      // Le joueur mesure son temps depuis l'affichage de la question : on retire les pauses écoulées
      const ms = Math.round(Math.min(Math.max((Number(msg.ms) || 0) - this.pausedTotal, 0), limit, Math.max(elapsed, 0) + 1000));
      p.answers.push({ q: this.qi, value: msg.value ?? null, ms, correct: false, points: 0 });
      return 'answered';
    }
    return null;
  }

  private uniqueName(name: string) {
    const taken = new Set([...this.players.values()].map((p) => p.name.toLowerCase()));
    if (!taken.has(name.toLowerCase())) return name;
    let n = 2;
    while (taken.has(`${name} ${n}`.toLowerCase())) n++;
    return `${name} ${n}`;
  }

  answeredIds() {
    return [...this.players.values()].filter((p) => p.answers.some((a) => a.q === this.qi)).map((p) => p.id);
  }

  allAnswered() {
    const act = this.active;
    return act.length > 0 && act.every((p) => p.answers.some((a) => a.q === this.qi));
  }

  kick(pid: string) {
    this.kicked.add(pid);
    this.players.delete(pid);
  }

  startIntro(i: number, now = Date.now()) {
    if (i === 0) this.startedAt = now;
    this.qi = i;
    this.phase = 'intro';
    this.introEndsAt = now + INTRO_MS;
  }

  startQuestion(now = Date.now()) {
    this.phase = 'question';
    this.qStart = now;
    this.deadline = now + this.question.time * 1000;
    this.pausedLeft = null;
    this.pausedTotal = 0;
  }

  get paused() {
    return this.pausedLeft !== null;
  }

  /** Met le chrono en pause : le temps restant est figé jusqu'à la reprise. */
  pause(now = Date.now()) {
    if (this.phase !== 'question' || this.paused) return;
    this.pausedLeft = Math.max(0, this.deadline - now);
    this.pausedAt = now;
  }

  resume(now = Date.now()) {
    if (this.phase !== 'question' || this.pausedLeft === null) return;
    this.deadline = now + this.pausedLeft;
    this.pausedTotal += now - this.pausedAt;
    this.pausedLeft = null;
  }

  /** Temps restant sur la question en cours (figé pendant une pause). */
  msLeft(now = Date.now()) {
    return this.pausedLeft ?? Math.max(0, this.deadline - now);
  }

  /**
   * Passe la question en cours (introduction ou réponses) : les réponses reçues sont oubliées,
   * personne ne gagne ni ne perd de points et la question n'apparaît pas dans les résultats.
   * Enchaîne sur la question suivante, ou sur le podium après la dernière (renvoie alors true).
   */
  skipQuestion(now = Date.now()): boolean {
    if (this.phase !== 'intro' && this.phase !== 'question') return false;
    this.skipped.add(this.qi);
    for (const p of this.players.values()) p.answers = p.answers.filter((a) => a.q !== this.qi);
    this.pausedLeft = null;
    if (this.isLast) {
      this.phase = 'podium';
      return true;
    }
    this.startIntro(this.qi + 1, now);
    return false;
  }

  /** Corrige la question courante et met à jour scores, séries et rangs (avec le rang précédent pour l'animation). */
  reveal() {
    if (this.phase !== 'question') return;
    this.phase = 'reveal';
    const q = this.question;
    const before = new Map(this.ranking().map((p, i) => [p.id, i + 1]));
    for (const p of this.players.values()) {
      let a = p.answers.find((x) => x.q === this.qi);
      if (!a) {
        a = { q: this.qi, value: null, ms: q.time * 1000, correct: false, points: 0 };
        p.answers.push(a);
      }
      a.correct = a.value !== null && isCorrect(q, a.value as AnswerValue);
      p.streak = a.correct ? p.streak + 1 : 0;
      a.points = a.correct ? basePoints(q, a.value, a.ms) : 0;
      p.score += a.points;
    }
    const ranked = this.ranking();
    this.outcomes = {};
    ranked.forEach((p, i) => {
      const a = p.answers.find((x) => x.q === this.qi)!;
      this.outcomes[p.id] = { ok: a.correct, answered: a.value !== null, pts: a.points, score: p.score, rank: i + 1, prev: before.get(p.id) ?? i + 1, streak: p.streak };
    });
  }

  ranking() {
    return [...this.players.values()].sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, 'fr'));
  }

  get isLast() {
    return this.qi >= this.questions.length - 1;
  }

  /** État public à diffuser aux joueurs. */
  snapshot(now = Date.now()): PublicState {
    this.seq++;
    const roster: PublicState['roster'] = {};
    this.players.forEach((p) => (roster[p.id] = { name: p.name, avatar: p.avatar }));
    const s: PublicState = { v: 1, gid: this.gid, seq: this.seq, ts: now, phase: this.phase, title: this.quiz.title, qi: this.qi, qn: this.questions.length, roster };
    if (this.phase === 'intro' || this.phase === 'question' || this.phase === 'reveal') s.q = this.play[this.qi];
    if (this.phase === 'question') {
      s.endsIn = this.msLeft(now);
      s.answered = this.answeredIds();
      if (this.paused) s.paused = true;
    }
    if (this.skipped.size) s.skipped = [...this.skipped];
    if (this.phase === 'reveal') {
      s.correct = correctAnswerText(this.question);
      s.explanation = this.question.explanation;
    }
    if (['reveal', 'scoreboard', 'podium'].includes(this.phase)) s.results = this.outcomes;
    if (this.phase === 'scoreboard' || this.phase === 'podium') s.top = this.ranking().slice(0, 5).map((p) => ({ id: p.id, name: p.name, avatar: p.avatar, score: p.score }));
    if (this.kicked.size) s.kicked = [...this.kicked];
    return s;
  }

  /** Résultats enregistrés localement (onglet Résultats). */
  toSession(now = Date.now()): Session {
    // Questions jouées, sans les questions passées (les index des réponses sont renumérotés)
    const played = this.questions.map((_, i) => i).slice(0, this.phase === 'podium' ? undefined : this.qi + 1).filter((i) => !this.skipped.has(i));
    const index = new Map(played.map((i, k) => [i, k]));
    return {
      id: this.sessionId,
      mode: 'live',
      quizId: this.quiz.id,
      quiz: { ...this.quiz, questions: played.map((i) => this.questions[i]) },
      startedAt: this.startedAt || now,
      endedAt: now,
      players: [...this.players.values()].map((p) => ({
        id: p.id, name: p.name, avatar: p.avatar, score: p.score,
        answers: p.answers.filter((a) => index.has(a.q)).map((a) => ({ ...a, q: index.get(a.q)! })),
      })),
    };
  }
}

/** Mélange l'ordre des réponses d'un QCM en conservant les bonnes réponses. */
function shuffleChoices(q: Question): Question {
  if ((q.type !== 'single' && q.type !== 'multiple') || !q.answers) return q;
  const order = shuffledIndexes(q.answers.length);
  return { ...q, answers: order.map((i) => q.answers![i]), correct: order.flatMap((i, k) => (q.correct?.includes(i) ? [k] : [])) };
}
