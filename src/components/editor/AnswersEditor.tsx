import { ArrowDown, ArrowUp, Plus, Trash2 } from 'lucide-react';
import type { Question } from '../../lib/types';
import { Shape, TF_INDEX } from '../game/Shape';

interface Props {
  q: Question;
  set: (patch: Partial<Question>) => void;
  invalid: boolean;
}

function Choices({ q, set }: Props) {
  const answers = q.answers ?? [];
  const multi = q.type === 'multiple';
  const toggle = (i: number) => {
    const c = q.correct ?? [];
    set({ correct: multi ? (c.includes(i) ? c.filter((x) => x !== i) : [...c, i].sort()) : [i] });
  };
  return (
    <fieldset className="ed-answers">
      <legend className="field-label">Réponses <span className="field-hint">— {multi ? 'cochez toutes les bonnes réponses' : 'cochez la bonne réponse'}</span></legend>
      {answers.map((a, i) => (
        <div key={i} className={`ed-answer tile-border-${i}`}>
          <span className={`ed-shape tile-${i}`}><Shape index={i} size={18} /></span>
          <input className="input" value={a} maxLength={90} placeholder={`Réponse ${i + 1}${i >= 2 ? ' (facultative)' : ''}`} onChange={(e) => set({ answers: answers.map((x, k) => (k === i ? e.target.value : x)) })} aria-label={`Réponse ${i + 1}`} />
          <label className="ed-correct" title="Bonne réponse">
            <input type={multi ? 'checkbox' : 'radio'} name={`correct-${q.id}`} checked={!!q.correct?.includes(i)} onChange={() => toggle(i)} />
            <span>Bonne réponse</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}

function ListInputs({ values, onChange, label, placeholder, min, max, ordered }: { values: string[]; onChange: (v: string[]) => void; label: string; placeholder: (i: number) => string; min: number; max: number; ordered?: boolean }) {
  const move = (i: number, d: number) => {
    const c = [...values];
    [c[i], c[i + d]] = [c[i + d], c[i]];
    onChange(c);
  };
  return (
    <fieldset className="ed-answers">
      <legend className="field-label">{label}</legend>
      {values.map((v, i) => (
        <div key={i} className="ed-answer">
          {ordered && <span className="order-pos">{i + 1}</span>}
          <input className="input" value={v} maxLength={90} placeholder={placeholder(i)} onChange={(e) => onChange(values.map((x, k) => (k === i ? e.target.value : x)))} aria-label={placeholder(i)} />
          {ordered && (
            <>
              <button type="button" className="btn btn-icon btn-sm" disabled={i === 0} onClick={() => move(i, -1)} aria-label="Monter"><ArrowUp /></button>
              <button type="button" className="btn btn-icon btn-sm" disabled={i === values.length - 1} onClick={() => move(i, 1)} aria-label="Descendre"><ArrowDown /></button>
            </>
          )}
          <button type="button" className="btn btn-icon btn-sm" disabled={values.length <= min} onClick={() => onChange(values.filter((_, k) => k !== i))} aria-label="Retirer"><Trash2 /></button>
        </div>
      ))}
      {values.length < max && (
        <button type="button" className="btn btn-ghost btn-sm ed-add" onClick={() => onChange([...values, ''])}><Plus aria-hidden="true" />Ajouter</button>
      )}
    </fieldset>
  );
}

function Num({ label, value, onChange, step = 'any' }: { label: string; value: number; onChange: (n: number) => void; step?: string }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <input className="input" type="number" inputMode="decimal" step={step} value={Number.isFinite(value) ? value : ''} onChange={(e) => onChange(e.target.value === '' ? NaN : Number(e.target.value))} />
    </label>
  );
}

export function AnswersEditor(props: Props) {
  const { q, set } = props;
  if (q.type === 'single' || q.type === 'multiple') return <Choices {...props} />;
  if (q.type === 'truefalse') {
    return (
      <fieldset className="ed-answers">
        <legend className="field-label">Bonne réponse</legend>
        <div className="ed-tf">
          {[true, false].map((v) => (
            <label key={String(v)} className={`ed-tf-opt tile-${TF_INDEX[String(v) as 'true' | 'false']}`}>
              <input type="radio" name={`tf-${q.id}`} checked={q.truth === v} onChange={() => set({ truth: v })} />
              <span>{v ? 'Vrai' : 'Faux'}</span>
            </label>
          ))}
        </div>
      </fieldset>
    );
  }
  if (q.type === 'text') {
    return (
      <>
        <ListInputs values={q.accepted ?? ['']} onChange={(accepted) => set({ accepted })} label="Réponses acceptées" placeholder={(i) => (i === 0 ? 'Réponse attendue' : 'Autre formulation acceptée')} min={1} max={5} />
        <p className="field-hint">Les majuscules, les accents et la ponctuation ne sont pas pris en compte.</p>
      </>
    );
  }
  if (q.type === 'order') {
    return <ListInputs ordered values={q.items ?? []} onChange={(items) => set({ items })} label="Éléments, dans le bon ordre (ils seront mélangés pour les joueurs)" placeholder={(i) => `Élément ${i + 1}`} min={3} max={4} />;
  }
  const s = q.slider!;
  const up = (patch: Partial<typeof s>) => set({ slider: { ...s, ...patch } });
  return (
    <div className="ed-grid">
      <Num label="Minimum" value={s.min} onChange={(min) => up({ min })} />
      <Num label="Maximum" value={s.max} onChange={(max) => up({ max })} />
      <Num label="Pas" value={s.step} onChange={(step) => up({ step })} />
      <Num label="Bonne réponse" value={s.answer} onChange={(answer) => up({ answer })} />
      <Num label="Marge d’erreur acceptée (±)" value={s.tolerance} onChange={(tolerance) => up({ tolerance })} />
      <label className="field">
        <span className="field-label">Unité (facultative)</span>
        <input className="input" value={s.unit ?? ''} maxLength={12} placeholder="Ex. : %, km, €" onChange={(e) => up({ unit: e.target.value })} />
      </label>
    </div>
  );
}
