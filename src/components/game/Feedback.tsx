import { Check, Clock, Flame, X } from 'lucide-react';
import { formatNumber } from '../../lib/util';

interface Props {
  correct: boolean;
  answered: boolean;
  points: number;
  streak: number;
  bonus?: number;
  correctText?: string;
  explanation?: string;
  extra?: string;
}

export function Feedback({ correct, answered, points, streak, bonus = 0, correctText, explanation, extra }: Props) {
  const title = correct ? 'Bonne réponse !' : answered ? 'Mauvaise réponse' : 'Temps écoulé';
  return (
    <div className="stack appear" style={{ alignItems: 'center' }}>
      <div className={`feedback ${correct ? 'feedback-ok' : 'feedback-ko'}`} style={{ width: '100%' }}>
        <div className="feedback-icon">{correct ? <Check aria-hidden="true" /> : answered ? <X aria-hidden="true" /> : <Clock aria-hidden="true" />}</div>
        <h2>{title}</h2>
        {correct && <p className="feedback-points">+ {formatNumber(points)} points</p>}
        {correct && streak >= 2 && (
          <p className="feedback-streak"><Flame aria-hidden="true" />Série de {streak} bonnes réponses{bonus > 0 ? ` (bonus inclus : + ${bonus})` : ''}</p>
        )}
        {extra && <p className="muted">{extra}</p>}
      </div>
      {(correctText && !correct) || explanation ? (
        <div className="correction">
          {correctText && !correct && (
            <>
              <span className="correction-label">La bonne réponse</span>
              <p className="correction-answer">{correctText}</p>
            </>
          )}
          {explanation && <p className="correction-expl">{explanation}</p>}
        </div>
      ) : null}
    </div>
  );
}
