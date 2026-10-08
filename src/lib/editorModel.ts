import type { Question, QuestionType, Quiz } from './types';
import { uid } from './util';

export function blankQuestion(type: QuestionType = 'single'): Question {
  const base = { id: uid(8), type, text: '', time: 20, points: 1 as const, explanation: '' };
  switch (type) {
    case 'single': return { ...base, answers: ['', '', '', ''], correct: [0] };
    case 'multiple': return { ...base, time: 30, answers: ['', '', '', ''], correct: [0, 1] };
    case 'truefalse': return { ...base, time: 15, truth: true };
    case 'text': return { ...base, time: 30, accepted: [''] };
    case 'slider': return { ...base, time: 30, slider: { min: 0, max: 100, step: 1, answer: 50, tolerance: 0, unit: '' } };
    case 'order': return { ...base, time: 40, items: ['', '', ''] };
  }
}

/** Change le type d'une question en conservant ce qui peut l'être. */
export function convertQuestion(q: Question, type: QuestionType): Question {
  const b = blankQuestion(type);
  const keep = { id: q.id, text: q.text, image: q.image, explanation: q.explanation, points: q.points };
  if ((type === 'single' || type === 'multiple') && q.answers) {
    const correct = type === 'single' ? [q.correct?.[0] ?? 0] : q.correct?.length ? q.correct : [0];
    return { ...b, ...keep, answers: q.answers, correct };
  }
  return { ...b, ...keep };
}

export function blankQuiz(): Quiz {
  const now = Date.now();
  return { id: uid(), title: '', description: '', category: 'general', questions: [blankQuestion()], createdAt: now, updatedAt: now };
}

/** Erreurs de saisie, indexées par question (−1 = quiz). */
export function validateQuiz(quiz: Quiz): Map<number, string> {
  const err = new Map<number, string>();
  if (!quiz.title.trim()) err.set(-1, 'Donnez un titre à votre quiz.');
  quiz.questions.forEach((q, i) => {
    const e = questionError(q);
    if (e) err.set(i, e);
  });
  return err;
}

export function questionError(q: Question): string | null {
  if (!q.text.trim()) return 'Saisissez l’intitulé de la question.';
  switch (q.type) {
    case 'single':
    case 'multiple': {
      const filled = (q.answers ?? []).filter((a) => a.trim());
      if (filled.length < 2) return 'Proposez au moins deux réponses.';
      const correct = (q.correct ?? []).filter((i) => q.answers?.[i]?.trim());
      if (correct.length === 0) return 'Indiquez la bonne réponse.';
      if (q.type === 'multiple' && correct.length < 2) return 'Cochez au moins deux bonnes réponses (sinon, choisissez « QCM »).';
      return null;
    }
    case 'text':
      return (q.accepted ?? []).some((a) => a.trim()) ? null : 'Indiquez au moins une réponse acceptée.';
    case 'slider': {
      const s = q.slider!;
      if (!(s.max > s.min)) return 'La valeur maximale doit être supérieure à la valeur minimale.';
      if (!(s.step > 0)) return 'Le pas doit être supérieur à zéro.';
      if (s.answer < s.min || s.answer > s.max) return 'La bonne réponse doit être comprise entre le minimum et le maximum.';
      if (s.tolerance < 0) return 'La marge d’erreur ne peut pas être négative.';
      return null;
    }
    case 'order':
      return (q.items ?? []).filter((x) => x.trim()).length >= 3 ? null : 'Saisissez au moins trois éléments à remettre en ordre.';
    default:
      return null;
  }
}

/** Nettoie un quiz avant enregistrement (réponses vides retirées, index corrigés). */
export function cleanQuiz(quiz: Quiz): Quiz {
  return {
    ...quiz,
    title: quiz.title.trim(),
    description: quiz.description.trim(),
    questions: quiz.questions.map((q) => {
      const c: Question = { ...q, text: q.text.trim(), explanation: q.explanation?.trim() || undefined };
      if (q.type === 'single' || q.type === 'multiple') {
        const keep = (q.answers ?? []).map((a, i) => ({ a: a.trim(), i })).filter((x) => x.a);
        c.answers = keep.map((x) => x.a);
        c.correct = keep.flatMap((x, k) => (q.correct?.includes(x.i) ? [k] : []));
      }
      if (q.type === 'text') c.accepted = (q.accepted ?? []).map((a) => a.trim()).filter(Boolean);
      if (q.type === 'order') c.items = (q.items ?? []).map((a) => a.trim()).filter(Boolean);
      if (q.type === 'slider' && q.slider) c.slider = { ...q.slider, unit: q.slider.unit?.trim() || undefined };
      return c;
    }),
  };
}
