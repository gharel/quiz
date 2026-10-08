export type QuestionType = 'single' | 'multiple' | 'truefalse' | 'text' | 'slider' | 'order';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  image?: string;
  time: number; // secondes
  points: 0 | 1 | 2; // sans points, standard, double
  answers?: string[]; // single / multiple
  correct?: number[]; // index des bonnes réponses (single / multiple)
  truth?: boolean; // truefalse
  accepted?: string[]; // text
  slider?: { min: number; max: number; step: number; answer: number; tolerance: number; unit?: string };
  items?: string[]; // order : dans le bon ordre
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string; // id de catégorie
  questions: Question[];
  createdAt: number;
  updatedAt: number;
  builtin?: boolean;
}

export interface Category {
  id: string;
  label: string;
  color: CategoryColor;
  builtin?: boolean;
}

export type CategoryColor = 'green' | 'violet' | 'yellow' | 'blue' | 'teal' | 'orange' | 'pink';

/** Réponse donnée par un participant (forme selon le type de question). */
export type AnswerValue = number | number[] | boolean | string | null;

export interface AnswerRecord {
  q: number; // index de la question jouée
  value: AnswerValue;
  ms: number; // temps de réponse
  correct: boolean;
  points: number;
}

export interface PlayerResult {
  id: string;
  name: string;
  score: number;
  answers: AnswerRecord[];
}

export interface Session {
  id: string;
  mode: 'live' | 'solo';
  quizId: string;
  quiz: Quiz; // copie figée au moment de la partie
  startedAt: number;
  endedAt: number;
  players: PlayerResult[];
}
