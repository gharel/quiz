import { Check, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { answerText } from '../../lib/quizMeta';
import { ranking } from '../../lib/stats';
import type { Session } from '../../lib/types';
import { formatNumber, formatSeconds, percent } from '../../lib/util';

export function PlayerTable({ session: s }: { session: Session }) {
  const [open, setOpen] = useState<string | null>(null);
  const n = s.quiz.questions.length;
  return (
    <ol className="players">
      {ranking(s).map((p) => {
        const isOpen = open === p.id;
        return (
          <li key={p.id} className="panel player-row">
            <button type="button" className="player-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : p.id)}>
              <span className={`rank rank-${p.rank}`}>{p.rank}</span>
              <span className="player-name">{p.name}</span>
              <span className="player-score">{formatNumber(p.score)} pts</span>
              <span className="player-rate">{p.correct}/{n} · {percent(p.correct, n)} %</span>
              <ChevronDown className="player-chevron" aria-hidden="true" />
            </button>
            {isOpen && (
              <ol className="player-answers">
                {s.quiz.questions.map((q, i) => {
                  const a = p.answers.find((x) => x.q === i);
                  return (
                    <li key={q.id}>
                      <span className={`review-mark ${a?.correct ? 'ok' : 'ko'}`} aria-label={a?.correct ? 'Bonne réponse' : 'Mauvaise réponse'}>
                        {a?.correct ? <Check /> : <X />}
                      </span>
                      <span className="pa-body">
                        <span className="pa-q">{i + 1}. {q.text}</span>
                        <span className="pa-a">{answerText(q, a?.value ?? null)}{a && a.value !== null ? ` · ${formatSeconds(a.ms)}` : ''}</span>
                      </span>
                      <span className="review-points">{a?.points ? `+${formatNumber(a.points)}` : '0'}</span>
                    </li>
                  );
                })}
              </ol>
            )}
          </li>
        );
      })}
    </ol>
  );
}
