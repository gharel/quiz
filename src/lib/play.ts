import { shuffledIndexes } from './scoring';
import type { Question, QuestionType } from './types';

/** Question telle qu'envoyée aux joueurs : sans la bonne réponse. */
export interface PlayQuestion {
  type: QuestionType;
  text: string;
  image?: string;
  time: number;
  points: number;
  answers?: string[];
  multi?: boolean;
  slider?: { min: number; max: number; step: number; unit?: string };
  items?: { i: number; label: string }[]; // ordre mélangé, i = position correcte
}

export function toPlayQuestion(q: Question, withImage = true): PlayQuestion {
  const p: PlayQuestion = { type: q.type, text: q.text, time: q.time, points: q.points };
  if (withImage && q.image) p.image = q.image;
  if (q.type === 'single' || q.type === 'multiple') {
    p.answers = q.answers ?? [];
    p.multi = q.type === 'multiple';
  }
  if (q.type === 'slider' && q.slider) {
    const { min, max, step, unit } = q.slider;
    p.slider = { min, max, step, unit };
  }
  if (q.type === 'order') {
    const items = q.items ?? [];
    p.items = shuffledIndexes(items.length).map((i) => ({ i, label: items[i] }));
  }
  return p;
}

/** Valeur de départ du curseur : milieu de l'intervalle, aligné sur le pas. */
export function sliderStart(s: NonNullable<PlayQuestion['slider']>): number {
  const mid = s.min + (s.max - s.min) / 2;
  return Math.round((mid - s.min) / s.step) * s.step + s.min;
}
