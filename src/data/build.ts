import type { Question, Quiz } from '../lib/types';

type Extra = Partial<Pick<Question, 'time' | 'points' | 'explanation' | 'image'>>;
let n = 0;
const id = () => `b${++n}`;

/** QCM : la ou les bonnes réponses sont préfixées par « * ». */
export function qcm(text: string, answers: string[], extra: Extra = {}): Question {
  const correct = answers.flatMap((a, i) => (a.startsWith('*') ? [i] : []));
  return {
    id: id(),
    type: correct.length > 1 ? 'multiple' : 'single',
    text,
    answers: answers.map((a) => a.replace(/^\*/, '')),
    correct,
    time: correct.length > 1 ? 30 : 20,
    points: 1,
    ...extra,
  };
}

export function vf(text: string, truth: boolean, extra: Extra = {}): Question {
  return { id: id(), type: 'truefalse', text, truth, time: 15, points: 1, ...extra };
}

export function saisie(text: string, accepted: string[], extra: Extra = {}): Question {
  return { id: id(), type: 'text', text, accepted, time: 30, points: 1, ...extra };
}

export function curseur(text: string, slider: NonNullable<Question['slider']>, extra: Extra = {}): Question {
  return { id: id(), type: 'slider', text, slider, time: 30, points: 1, ...extra };
}

export function ordre(text: string, items: string[], extra: Extra = {}): Question {
  return { id: id(), type: 'order', text, items, time: 40, points: 1, ...extra };
}

export function quiz(idv: string, category: string, title: string, description: string, questions: Question[]): Quiz {
  const t = Date.UTC(2026, 9, 1);
  return { id: idv, category, title, description, questions, createdAt: t, updatedAt: t, builtin: true };
}
