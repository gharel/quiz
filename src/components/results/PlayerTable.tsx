import { Check, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { answerText } from '../../lib/quizMeta';
import { levelOf, ranking } from '../../lib/stats';
import type { Session } from '../../lib/types';
import { formatNumber, formatSeconds } from '../../lib/util';
import { Avatar } from '../avatars/Avatar';

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
              <span className="player-name">{p.avatar && <Avatar id={p.avatar} size={32} />}{p.name}</span>
              <span className="player-score">{formatNumber(p.score)} pts</span>
              <span className="player-rate">
                <span className={`rate-track level-${levelOf(p.rate).id}`} aria-hidden="true"><span style={{ width: `${p.rate}%` }} /></span>
                {p.correct}/{n} · {p.rate} %
              </span>
              <ChevronDown className="player-chevron" aria-hidden="true" />
            </button>
            {isOpen && (
              <>
              <p className="player-facts">
                <span>Niveau : <strong>{levelOf(p.rate).label}</strong></span>
                <span>Temps moyen de réponse : <strong>{p.avgMs ? formatSeconds(p.avgMs) : '-'}</strong></span>
                {p.missed > 0 && <span>Sans réponse : <strong>{p.missed}</strong></span>}
              </p>
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
              </>
            )}
          </li>
        );
      })}
    </ol>
  );
}
