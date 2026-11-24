import { describe, expect, it } from 'vitest';
import { BUILTIN_QUIZZES } from '../data/quizzes';
import { allQuizzes, deleteQuiz, getQuiz, isModifiedOriginal, restoreHiddenQuizzes, revertQuiz, saveQuiz } from './store';

describe('quiz de la bibliothèque', () => {
  const original = BUILTIN_QUIZZES[0];

  it('se modifient : la version modifiée remplace l’originale', () => {
    saveQuiz({ ...original, title: 'Titre modifié' });
    expect(getQuiz(original.id)?.title).toBe('Titre modifié');
    expect(allQuizzes().filter((q) => q.id === original.id)).toHaveLength(1);
    expect(isModifiedOriginal(original.id)).toBe(true);
    revertQuiz(original.id);
    expect(getQuiz(original.id)?.title).toBe(original.title);
    expect(isModifiedOriginal(original.id)).toBe(false);
  });

  it('se suppriment puis se restaurent', () => {
    const total = allQuizzes().length;
    deleteQuiz(original.id);
    expect(getQuiz(original.id)).toBeUndefined();
    expect(allQuizzes()).toHaveLength(total - 1);
    restoreHiddenQuizzes();
    expect(getQuiz(original.id)?.id).toBe(original.id);
  });
});
