import { Keyboard, ListOrdered, Pause, Play, SkipForward, SlidersHorizontal, TimerOff } from 'lucide-react';
import { sfx } from '../../audio/sfx';
import type { Question } from '../../lib/types';
import type { PlayQuestion } from '../../lib/play';
import { formatValue } from '../../lib/quizMeta';
import { QuestionCard, QuestionType } from '../game/QuestionCard';
import { Shape, TF_INDEX } from '../game/Shape';
import { TimerRing, useCountdown } from '../game/Timer';
import { Avatar } from '../avatars/Avatar';

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
  players: { id: string; name: string; avatar: string; answered: boolean }[];
  /** Temps restant figé (ms) quand le chrono est en pause, sinon null. */
  pausedLeft: number | null;
  /** La question précédente a été passée. */
  previousSkipped: boolean;
  onStopTimer: () => void;
  onTogglePause: () => void;
  onSkipQuestion: () => void;
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
  const paused = p.pausedLeft !== null;
  const running = useCountdown(p.phase === 'question' && !paused ? p.deadline : null, (s) => {
    if (s <= 5 && s > 0) sfx.tick(s === 1);
  });
  const msLeft = paused ? p.pausedLeft! : running;
  const skipButton = (
    <button type="button" className="btn btn-ghost" onClick={p.onSkipQuestion} title="La question ne comptera pour personne">
      <SkipForward aria-hidden="true" />Passer la question
    </button>
  );

  return (
    <div className="host-q">
      <div className="q-head">
        <span className="q-type">Question {p.qi + 1} sur {p.qn}</span>
        <QuestionType q={p.q} />
      </div>
      {p.phase === 'intro' ? (
        <div className="host-intro">
          {p.previousSkipped && <p className="skip-note" role="status">Question précédente passée : elle ne compte pas.</p>}
          <div className="fx-pop"><QuestionCard q={{ ...p.q, image: p.question.image }} /></div>
          <div className="progress intro-bar intro-fill" aria-hidden="true"><span key={p.introEndsAt} /></div>
          <p className="muted intro-hint">Lisez bien la question, les réponses arrivent…</p>
          <div className="stage-actions">{skipButton}</div>
        </div>
      ) : (
        <>
          <div className={`host-q-main${paused ? ' is-paused' : ''}`}>
            <div className="timer-wrap">
              <TimerRing msLeft={msLeft} total={p.question.time * 1000} size={96} />
              {paused && <span className="pause-badge" role="status">En pause</span>}
            </div>
            <QuestionCard q={{ ...p.q, image: p.question.image }} />
            <div className="answer-count" aria-live="polite">
              <strong key={p.answered} className={p.answered ? 'bump' : undefined}>{p.answered}</strong>
              <span>{p.answered > 1 ? 'réponses' : 'réponse'} sur {p.total}</span>
            </div>
          </div>
          <AnswerBoard q={p.q} question={p.question} />
          {p.players.length > 0 && (
            <ul className="answer-strip" aria-label="Participants ayant répondu">
              {p.players.map((pl) => (
                <li key={pl.id} className={pl.answered ? 'on' : undefined} title={pl.answered ? `${pl.name} a répondu` : `${pl.name} n’a pas encore répondu`}>
                  <Avatar id={pl.avatar} size={36} />
                  <span className="sr-only">{pl.name}{pl.answered ? ' a répondu' : ''}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="stage-actions">
            <button type="button" className={`btn ${paused ? 'btn-primary' : 'btn-secondary'}`} onClick={p.onTogglePause} aria-keyshortcuts="P">
              {paused ? <><Play aria-hidden="true" />Reprendre</> : <><Pause aria-hidden="true" />Pause</>}
            </button>
            {skipButton}
            <button type="button" className="btn btn-ghost" onClick={p.onStopTimer} title="Corriger tout de suite : les réponses reçues comptent">
              <TimerOff aria-hidden="true" />Arrêter le chrono
            </button>
          </div>
        </>
      )}
    </div>
  );
}
