import { useSyncExternalStore } from 'react';
import { BUILTIN_QUIZZES } from '../data/quizzes';
import { DEFAULT_CATEGORIES, FALLBACK_CATEGORY } from '../data/categories';
import type { Category, Quiz, Session } from './types';
import { load, save, uid } from './util';

const K = { quizzes: 'skq.quizzes', categories: 'skq.categories', sessions: 'skq.sessions' };

export interface State {
  quizzes: Quiz[]; // quiz créés ou importés (les exemples sont ajoutés à la lecture)
  categories: Category[]; // catégories personnalisées
  sessions: Session[];
}

let state: State = {
  quizzes: load<Quiz[]>(K.quizzes, []),
  categories: load<Category[]>(K.categories, []),
  sessions: load<Session[]>(K.sessions, []),
};

const listeners = new Set<() => void>();
let storageError = false;

function set(patch: Partial<State>) {
  state = { ...state, ...patch };
  let ok = true;
  if (patch.quizzes) ok = save(K.quizzes, state.quizzes) && ok;
  if (patch.categories) ok = save(K.categories, state.categories) && ok;
  if (patch.sessions) ok = save(K.sessions, state.sessions) && ok;
  storageError = !ok;
  listeners.forEach((l) => l());
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

/** Renvoie l'état courant (référence stable tant que rien ne change). */
export function useStore(): State {
  return useSyncExternalStore(subscribe, () => state);
}

export const lastSaveFailed = () => storageError;

/* ---------- Quiz ---------- */
export const allQuizzes = (s: State = state): Quiz[] => [...s.quizzes, ...BUILTIN_QUIZZES];
export const getQuiz = (id: string): Quiz | undefined => allQuizzes().find((q) => q.id === id);

export function saveQuiz(quiz: Quiz): Quiz {
  const q = { ...quiz, builtin: false, updatedAt: Date.now() };
  const exists = state.quizzes.some((x) => x.id === q.id);
  set({ quizzes: exists ? state.quizzes.map((x) => (x.id === q.id ? q : x)) : [q, ...state.quizzes] });
  return q;
}

export function duplicateQuiz(quiz: Quiz, title = `${quiz.title} (copie)`): Quiz {
  const now = Date.now();
  return saveQuiz({ ...structuredClone(quiz), id: uid(), title, builtin: false, createdAt: now, updatedAt: now });
}

export function deleteQuiz(id: string) {
  set({ quizzes: state.quizzes.filter((q) => q.id !== id) });
}

/* ---------- Catégories ---------- */
export const allCategories = (s: State = state): Category[] => [...DEFAULT_CATEGORIES, ...s.categories];
export const getCategory = (id: string, s: State = state): Category =>
  allCategories(s).find((c) => c.id === id) ?? FALLBACK_CATEGORY;

export function addCategory(label: string, color: Category['color']): Category {
  const existing = allCategories().find((c) => c.label.toLowerCase() === label.trim().toLowerCase());
  if (existing) return existing;
  const c: Category = { id: `c-${uid(6)}`, label: label.trim(), color };
  set({ categories: [...state.categories, c] });
  return c;
}

/* ---------- Sessions (résultats) ---------- */
export function saveSession(s: Session) {
  const exists = state.sessions.some((x) => x.id === s.id);
  set({ sessions: exists ? state.sessions.map((x) => (x.id === s.id ? s : x)) : [s, ...state.sessions] });
}

export function deleteSession(id: string) {
  set({ sessions: state.sessions.filter((s) => s.id !== id) });
}

export const getSession = (id: string) => state.sessions.find((s) => s.id === id);
