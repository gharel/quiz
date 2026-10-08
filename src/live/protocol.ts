import type { PlayQuestion } from '../lib/play';
import type { AnswerValue } from '../lib/types';
import { TOPIC_ROOT } from './transport';

export type LivePhase = 'lobby' | 'intro' | 'question' | 'reveal' | 'scoreboard' | 'podium' | 'closed';

export interface PlayerOutcome {
  ok: boolean; // bonne réponse
  answered: boolean;
  pts: number; // points gagnés sur la question
  score: number; // total
  rank: number;
  streak: number;
}

/** État public diffusé par l'animateur (message conservé par le relais). */
export interface PublicState {
  v: 1;
  gid: string;
  seq: number;
  ts: number; // horodatage d'envoi (détection des parties abandonnées)
  phase: LivePhase;
  title: string;
  qi: number; // index de la question courante
  qn: number; // nombre de questions
  q?: PlayQuestion; // sans la bonne réponse, sans image
  endsIn?: number; // ms restantes au moment de l'envoi (phase question)
  roster: Record<string, { name: string; avatar: string }>; // id → pseudo et animal
  answered?: string[]; // ids ayant répondu (phase question)
  correct?: string; // bonne réponse lisible (phase reveal)
  explanation?: string;
  results?: Record<string, PlayerOutcome>;
  top?: { id: string; name: string; avatar: string; score: number }[];
  kicked?: string[];
}

export type PlayerMessage =
  | { t: 'join'; pid: string; name: string; avatar?: string }
  | { t: 'answer'; pid: string; qi: number; value: AnswerValue; ms: number }
  | { t: 'leave'; pid: string };

export const topics = (pin: string) => ({
  state: `${TOPIC_ROOT}/${pin}/state`,
  inbox: `${TOPIC_ROOT}/${pin}/in`,
});
