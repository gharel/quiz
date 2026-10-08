import { answerText, correctAnswerText, TYPE_INFO } from './quizMeta';
import type { Session } from './types';
import { percent } from './util';

export function sessionStats(s: Session) {
  const n = s.quiz.questions.length;
  const totalAnswers = s.players.length * n;
  const correct = s.players.reduce((acc, p) => acc + p.answers.filter((a) => a.correct).length, 0);
  return {
    successRate: percent(correct, totalAnswers),
    durationMs: Math.max(0, s.endedAt - s.startedAt),
  };
}

export function ranking(s: Session) {
  return [...s.players]
    .sort((a, b) => b.score - a.score)
    .map((p, i) => ({ ...p, rank: i + 1, correct: p.answers.filter((a) => a.correct).length }));
}

export function questionStats(s: Session) {
  return s.quiz.questions.map((q, i) => {
    const answers = s.players.map((p) => p.answers.find((a) => a.q === i)).filter(Boolean);
    const answered = answers.filter((a) => a!.value !== null && a!.value !== undefined);
    const ok = answers.filter((a) => a!.correct).length;
    const counts = (q.answers ?? []).map((_, k) =>
      answered.filter((a) => (Array.isArray(a!.value) ? (a!.value as number[]).includes(k) : a!.value === k)).length,
    );
    const tf = [true, false].map((v) => answered.filter((a) => a!.value === v).length);
    const avgMs = answered.length ? answered.reduce((t, a) => t + a!.ms, 0) / answered.length : 0;
    return { q, index: i, rate: percent(ok, s.players.length), ok, answered: answered.length, counts, tf, avgMs };
  });
}

const csvCell = (v: string | number) => {
  const s = String(v);
  return /[";\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

/** CSV compatible Excel (séparateur « ; », UTF-8 avec BOM). */
export function sessionCsv(s: Session): string {
  const head = ['Rang', 'Participant', 'Score', 'Bonnes réponses', 'Réussite (%)'];
  s.quiz.questions.forEach((q, i) => head.push(`Q${i + 1} — ${q.text} (${TYPE_INFO[q.type].label})`));
  const rows = ranking(s).map((p) => {
    const cells: (string | number)[] = [p.rank, p.name, p.score, p.correct, percent(p.correct, s.quiz.questions.length)];
    s.quiz.questions.forEach((q, i) => {
      const a = p.answers.find((x) => x.q === i);
      cells.push(`${a?.correct ? '✔' : '✘'} ${answerText(q, a?.value ?? null)}`);
    });
    return cells;
  });
  const key = ['', 'Bonne réponse', '', '', ''].concat(s.quiz.questions.map((q) => correctAnswerText(q)));
  return '﻿' + [head, ...rows, [], key].map((r) => r.map(csvCell).join(';')).join('\r\n');
}

/** Synthèse de plusieurs parties : une ligne par participant (CSV Excel). */
export function sessionsCsv(sessions: Session[], categoryLabel: (id: string) => string): string {
  const head = ['Date', 'Quiz', 'Catégorie', 'Mode', 'Rang', 'Participant', 'Score', 'Bonnes réponses', 'Questions', 'Réussite (%)'];
  const rows: (string | number)[][] = [];
  for (const s of sessions) {
    const date = new Date(s.startedAt).toLocaleString('fr-FR');
    for (const p of ranking(s)) {
      const n = s.quiz.questions.length;
      rows.push([date, s.quiz.title, categoryLabel(s.quiz.category), s.mode === 'live' ? 'En direct' : 'En solo', p.rank, p.name, p.score, p.correct, n, percent(p.correct, n)]);
    }
  }
  return '\uFEFF' + [head, ...rows].map((r) => r.map(csvCell).join(';')).join('\r\n');
}
