import { CircleDot, ListChecks, ListOrdered, SlidersHorizontal, ToggleLeft, Type, type LucideIcon } from 'lucide-react';
import type { Question, QuestionType, Quiz } from './types';

export const TYPE_INFO: Record<QuestionType, { label: string; hint: string; icon: LucideIcon }> = {
  single: { label: 'QCM', hint: 'Une seule bonne réponse', icon: CircleDot },
  multiple: { label: 'Choix multiples', hint: 'Plusieurs bonnes réponses', icon: ListChecks },
  truefalse: { label: 'Vrai ou faux', hint: 'Vrai ou faux', icon: ToggleLeft },
  text: { label: 'Réponse libre', hint: 'Saisissez votre réponse', icon: Type },
  slider: { label: 'Curseur', hint: 'Choisissez une valeur', icon: SlidersHorizontal },
  order: { label: 'Remise en ordre', hint: 'Remettez dans le bon ordre', icon: ListOrdered },
};

export const TIME_OPTIONS = [5, 10, 15, 20, 30, 45, 60, 90, 120];

/** Durée estimée d'une partie (temps de réponse + lecture et correction). */
export function estimatedSeconds(quiz: Quiz): number {
  return quiz.questions.reduce((s, q) => s + q.time + 12, 0);
}

/** Texte lisible de la bonne réponse. */
export function correctAnswerText(q: Question): string {
  switch (q.type) {
    case 'single':
    case 'multiple':
      return (q.correct ?? []).map((i) => q.answers?.[i] ?? '').join(' · ');
    case 'truefalse':
      return q.truth ? 'Vrai' : 'Faux';
    case 'text':
      return (q.accepted ?? []).join(' / ');
    case 'slider':
      return `${formatValue(q.slider?.answer ?? 0)}${q.slider?.unit ? ` ${q.slider.unit}` : ''}`;
    case 'order':
      return (q.items ?? []).join(' → ');
  }
}

export function formatValue(n: number): string {
  return n.toLocaleString('fr-FR', { maximumFractionDigits: 2 });
}

/** Texte lisible d'une réponse donnée. */
export function answerText(q: Question, value: unknown, itemsOrder?: number[]): string {
  if (value === null || value === undefined || value === '') return 'Pas de réponse';
  switch (q.type) {
    case 'single':
      return q.answers?.[value as number] ?? '—';
    case 'multiple':
      return (value as number[]).map((i) => q.answers?.[i] ?? '').join(' · ') || 'Pas de réponse';
    case 'truefalse':
      return value ? 'Vrai' : 'Faux';
    case 'text':
      return String(value);
    case 'slider':
      return `${formatValue(value as number)}${q.slider?.unit ? ` ${q.slider.unit}` : ''}`;
    case 'order':
      return (value as number[]).map((i) => q.items?.[itemsOrder ? itemsOrder[i] : i] ?? '').join(' → ');
  }
}
