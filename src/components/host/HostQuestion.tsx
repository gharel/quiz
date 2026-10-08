import { Keyboard, ListOrdered, SkipForward, SlidersHorizontal } from 'lucide-react';
import { sfx } from '../../audio/sfx';
import type { Question } from '../../lib/types';
import type { PlayQuestion } from '../../lib/play';
import { formatValue } from '../../lib/quizMeta';
import { QuestionCard, QuestionType } from '../game/QuestionCard';
import { Shape, TF_INDEX } from '../game/Shape';
import { TimerRing, useCountdown } from '../game/Timer';

interface Props {
  phase: 'intro' | 'question';
  q: PlayQuestion;
  question: Question;
  qi: number;
  qn: number;
  introEndsAt: number;
  deadline: number;
  answered: number;
  total: number;
  onSkip: () => void;
}

/** Ce qui s'affiche au tableau pendant la réponse (non interactif). */
function AnswerBoard({ q, question }: { q: PlayQuestion; question: Question }) {
  if (q.type === 'single' || q.type === 'multiple') {
    return (
      <div className="tiles board">
        {q.answers?.map((a, i) => (
          <div key={i} className={`tile tile-${i}`}><Shape index={i} /><span className="tile-text">{a}</span></div>
        ))}
      </div>
    );
  }
  if (q.type === 'truefalse') {
    return (
      <div className="tiles tiles-2 board">
        {[true, false].map((v) => {
          const k = TF_INDEX[String(v) as 'true' | 'false'];
          return <div key={String(v)} className={`tile tile-${k}`}><Shape index={k} /><span className="tile-text">{v ? 'Vrai' : 'Faux'}</span></div>;
        })}
      </div>
    );
  }
  if (q.type === 'order') {
    return (
      <div className="board-note">
        <ListOrdered aria-hidden="true" />
        <p>Remettez ces éléments dans l’ordre sur votre appareil :</p>
        <ul className="board-items">{q.items?.map((it) => <li key={it.i}>{it.label}</li>)}</ul>
      </div>
    );
  }
  if (q.type === 'slider') {
    const s = question.slider!;
    return (
      <div className="board-note">
        <SlidersHorizontal aria-hidden="true" />
        <p>Choisissez une valeur entre <strong>{formatValue(s.min)}</strong> et <strong>{formatValue(s.max)}</strong>{s.unit ? ` ${s.unit}` : ''} sur votre appareil.</p>
      </div>
    );
  }
  return (
    <div className="board-note">
      <Keyboard aria-hidden="true" />
      <p>Saisissez votre réponse sur votre appareil.</p>
    </div>
  );
}

export function HostQuestion(p: Props) {
  const introLeft = useCountdown(p.phase === 'intro' ? p.introEndsAt : null);
  const msLeft = useCountdown(p.phase === 'question' ? p.deadline : null, (s) => {
    if (s <= 5 && s > 0) sfx.tick(s === 1);
  });

  return (
    <div className="host-q">
      <div className="q-head">
        <span className="q-type">Question {p.qi + 1} sur {p.qn}</span>
        <QuestionType q={p.q} />
      </div>
      {p.phase === 'intro' ? (
        <div className="host-intro appear">
          <QuestionCard q={{ ...p.q, image: p.question.image }} />
          <div className="progress intro-bar" aria-hidden="true"><span style={{ width: `${100 - (introLeft / 4000) * 100}%`, transition: 'none' }} /></div>
          <p className="muted">Préparez-vous…</p>
        </div>
      ) : (
        <>
          <div className="host-q-main">
            <TimerRing msLeft={msLeft} total={p.question.time * 1000} size={96} />
            <QuestionCard q={{ ...p.q, image: p.question.image }} />
            <div className="answer-count" aria-live="polite">
              <strong>{p.answered}</strong>
              <span>{p.answered > 1 ? 'réponses' : 'réponse'} sur {p.total}</span>
            </div>
          </div>
          <AnswerBoard q={p.q} question={p.question} />
          <div className="stage-actions">
            <button type="button" className="btn btn-ghost" onClick={p.onSkip}><SkipForward aria-hidden="true" />Arrêter le chrono</button>
          </div>
        </>
      )}
    </div>
  );
}
