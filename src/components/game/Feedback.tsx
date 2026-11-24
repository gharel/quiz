import { Check, ChevronDown, ChevronUp, Clock, Flame, X } from 'lucide-react';
import { ordinal } from '../../lib/util';
import { CountUp } from './fx';

interface Props {
  correct: boolean;
  answered: boolean;
  points: number;
  streak: number;
  correctText?: string;
  explanation?: string;
  /** Mode direct : rang et score après la question, rang avant. */
  rank?: number;
  prevRank?: number;
  score?: number;
}

const CHEERS = ['Bonne réponse !', 'Bravo !', 'Excellent !', 'Bien joué !', 'Parfait !'];

export function Feedback({ correct, answered, points, streak, correctText, explanation, rank, prevRank, score }: Props) {
  const title = correct ? CHEERS[Math.min(streak, CHEERS.length) - 1] ?? CHEERS[0] : answered ? 'Mauvaise réponse' : 'Temps écoulé';
  const moved = rank && prevRank ? prevRank - rank : 0;
  return (
    <div className="stack" style={{ alignItems: 'center' }}>
      <div className={`feedback ${correct ? 'feedback-ok' : 'feedback-ko'} ${correct ? 'fx-pop' : 'fx-shake'}`} style={{ width: '100%' }}>
        <div className="feedback-icon">{correct ? <Check aria-hidden="true" /> : answered ? <X aria-hidden="true" /> : <Clock aria-hidden="true" />}</div>
        <h2>{title}</h2>
        {correct && <p className="feedback-points">+ <CountUp value={points} duration={900} delay={250} /> points</p>}
        {correct && streak >= 2 && (
          <p className="feedback-streak"><Flame aria-hidden="true" />Série de {streak} bonnes réponses</p>
        )}
        {rank !== undefined && score !== undefined && (
          <p className="feedback-rank">
            Vous êtes <strong>{ordinal(rank)}</strong> avec <strong><CountUp value={score} from={score - points} duration={900} delay={250} /></strong> points
            {moved > 0 && <span className="feedback-move up"><ChevronUp aria-hidden="true" />{moved}</span>}
            {moved < 0 && <span className="feedback-move down"><ChevronDown aria-hidden="true" />{-moved}</span>}
          </p>
        )}
      </div>
      {(correctText && !correct) || explanation ? (
        <div className="correction fx-in" style={{ animationDelay: '300ms' }}>
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
