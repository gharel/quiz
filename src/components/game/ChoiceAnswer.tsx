import { Check } from 'lucide-react';
import { useState } from 'react';
import type { PlayQuestion } from '../../lib/play';
import type { AnswerValue } from '../../lib/types';
import { Shape, TF_INDEX } from './Shape';

interface Props {
  q: PlayQuestion;
  onSubmit: (v: AnswerValue) => void;
  disabled?: boolean;
}

/** Tuiles colorées : un appui suffit (QCM, vrai/faux) ; plusieurs + Valider (choix multiples). */
export function ChoiceAnswer({ q, onSubmit, disabled }: Props) {
  const [picked, setPicked] = useState<number[]>([]);

  if (q.type === 'truefalse') {
    return (
      <div className="tiles tiles-2">
        {[true, false].map((v) => (
          <button key={String(v)} type="button" className={`tile tile-${TF_INDEX[String(v) as 'true' | 'false']}`} disabled={disabled} onClick={() => onSubmit(v)}>
            <Shape index={TF_INDEX[String(v) as 'true' | 'false']} />
            <span className="tile-text">{v ? 'Vrai' : 'Faux'}</span>
          </button>
        ))}
      </div>
    );
  }

  const answers = q.answers ?? [];
  const toggle = (i: number) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  return (
    <>
      {q.multi && <p className="pad-hint">Plusieurs réponses possibles : sélectionnez-les puis validez.</p>}
      <div className={`tiles${answers.length <= 2 ? ' tiles-2' : ''}`}>
        {answers.map((a, i) => {
          const on = picked.includes(i);
          return (
            <button
              key={i}
              type="button"
              className={`tile tile-${i}${q.multi && picked.length && !on ? ' tile-dim' : ''}`}
              aria-pressed={q.multi ? on : undefined}
              disabled={disabled}
              onClick={() => (q.multi ? toggle(i) : onSubmit(i))}
            >
              <Shape index={i} />
              <span className="tile-text">{a}</span>
              {q.multi && <span className={`tile-check${on ? ' on' : ''}`} aria-hidden="true">{on && <Check />}</span>}
            </button>
          );
        })}
      </div>
      {q.multi && (
        <button type="button" className="btn btn-primary btn-lg btn-block pad-submit" disabled={disabled || picked.length === 0} onClick={() => onSubmit([...picked].sort())}>
          Valider ma réponse
        </button>
      )}
    </>
  );
}
