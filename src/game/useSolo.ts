import { useCallback, useMemo, useRef, useState } from 'react';
import { playMusic, stopMusic } from '../audio/music';
import { sfx } from '../audio/sfx';
import { unlockAudio } from '../audio/engine';
import { toPlayQuestion } from '../lib/play';
import { basePoints, isCorrect, streakBonus } from '../lib/scoring';
import { saveSession } from '../lib/store';
import type { AnswerRecord, AnswerValue, Quiz } from '../lib/types';
import { uid } from '../lib/util';

export type SoloPhase = 'intro' | 'question' | 'feedback' | 'end';

export interface LastResult {
  correct: boolean;
  answered: boolean;
  points: number;
  bonus: number;
  streak: number;
}

export function useSolo(quiz: Quiz) {
  const questions = useMemo(() => quiz.questions.map((q) => toPlayQuestion(q)), [quiz]);
  const [phase, setPhase] = useState<SoloPhase>('intro');
  const [index, setIndex] = useState(0);
  const [deadline, setDeadline] = useState<number | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [last, setLast] = useState<LastResult | null>(null);
  const startedAt = useRef(0);
  const qStart = useRef(0);
  const sessionId = useRef(uid());
  const name = useRef('Moi');

  const ask = useCallback((i: number) => {
    setIndex(i);
    setPhase('question');
    qStart.current = Date.now();
    setDeadline(Date.now() + quiz.questions[i].time * 1000);
    sfx.whoosh();
    playMusic('question');
  }, [quiz]);

  const start = useCallback((playerName: string) => {
    unlockAudio();
    name.current = playerName.trim() || 'Moi';
    startedAt.current = Date.now();
    setAnswers([]);
    setScore(0);
    setStreak(0);
    ask(0);
  }, [ask]);

  const answer = useCallback((value: AnswerValue) => {
    if (phase !== 'question') return;
    const q = quiz.questions[index];
    const ms = Math.min(Date.now() - qStart.current, q.time * 1000);
    const ok = value !== null && isCorrect(q, value);
    const newStreak = ok ? streak + 1 : 0;
    const bonus = ok ? streakBonus(newStreak, q) : 0;
    const points = ok ? basePoints(q, value, ms) + bonus : 0;
    const rec: AnswerRecord = { q: index, value, ms, correct: ok, points };
    const all = [...answers, rec];
    setAnswers(all);
    setScore((s) => s + points);
    setStreak(newStreak);
    setLast({ correct: ok, answered: value !== null, points, bonus, streak: newStreak });
    setDeadline(null);
    setPhase('feedback');
    stopMusic(0.2);
    if (value === null) sfx.gong();
    else if (ok) sfx.correct();
    else sfx.wrong();
  }, [phase, quiz, index, streak, answers]);

  const next = useCallback(() => {
    if (index + 1 < quiz.questions.length) {
      ask(index + 1);
      return;
    }
    setPhase('end');
    sfx.fanfare();
    const total = answers.reduce((s, a) => s + a.points, 0);
    saveSession({
      id: sessionId.current,
      mode: 'solo',
      quizId: quiz.id,
      quiz: { ...quiz, questions: quiz.questions.map((q) => ({ ...q, image: q.image?.startsWith('data:') ? undefined : q.image })) },
      startedAt: startedAt.current,
      endedAt: Date.now(),
      players: [{ id: 'solo', name: name.current, score: total, answers }],
    });
  }, [index, quiz, answers, ask]);

  const restart = useCallback(() => {
    sessionId.current = uid();
    setPhase('intro');
    setLast(null);
  }, []);

  return { questions, phase, index, deadline, answers, score, streak, last, start, answer, next, restart };
}
