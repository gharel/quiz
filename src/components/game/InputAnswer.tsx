import { ArrowDown, ArrowUp, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { sliderStart, type PlayQuestion } from '../../lib/play';
import { formatValue } from '../../lib/quizMeta';
import type { AnswerValue } from '../../lib/types';

interface Props {
  q: PlayQuestion;
  onSubmit: (v: AnswerValue) => void;
  disabled?: boolean;
}

export function TextAnswer({ q: _q, onSubmit, disabled }: Props) {
  const [v, setV] = useState('');
  void _q;
  return (
    <form className="pad-form" onSubmit={(e) => { e.preventDefault(); if (v.trim()) onSubmit(v.trim()); }}>
      <label className="field">
        <span className="field-label">Votre réponse</span>
        <input className="input input-xl" value={v} onChange={(e) => setV(e.target.value)} maxLength={80} autoComplete="off" autoCapitalize="off" spellCheck={false} disabled={disabled} autoFocus placeholder="Tapez votre réponse…" />
      </label>
      <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={disabled || !v.trim()}>Valider ma réponse</button>
    </form>
  );
}

export function SliderAnswer({ q, onSubmit, disabled }: Props) {
  const s = q.slider!;
  const [v, setV] = useState(() => sliderStart(s));
  const clamp = (n: number) => Math.min(s.max, Math.max(s.min, Math.round(n / s.step) * s.step));
  const nudge = (d: number) => setV((x) => clamp(Number((x + d * s.step).toFixed(6))));
  return (
    <div className="pad-form">
      <output className="slider-value" aria-live="polite">{formatValue(v)}{s.unit ? <small> {s.unit}</small> : null}</output>
      <div className="slider-row">
        <button type="button" className="btn btn-icon btn-secondary" onClick={() => nudge(-1)} disabled={disabled || v <= s.min} aria-label="Diminuer"><Minus /></button>
        <input type="range" className="range" min={s.min} max={s.max} step={s.step} value={v} disabled={disabled} onChange={(e) => setV(Number(e.target.value))} aria-label="Valeur" />
        <button type="button" className="btn btn-icon btn-secondary" onClick={() => nudge(1)} disabled={disabled || v >= s.max} aria-label="Augmenter"><Plus /></button>
      </div>
      <div className="slider-bounds"><span>{formatValue(s.min)}</span><span>{formatValue(s.max)}</span></div>
      <button type="button" className="btn btn-primary btn-lg btn-block" disabled={disabled} onClick={() => onSubmit(v)}>Valider ma réponse</button>
    </div>
  );
}

export function OrderAnswer({ q, onSubmit, disabled }: Props) {
  const [list, setList] = useState(() => q.items ?? []);
  const move = (from: number, to: number) =>
    setList((l) => {
      if (to < 0 || to >= l.length) return l;
      const c = [...l];
      [c[from], c[to]] = [c[to], c[from]];
      return c;
    });
  return (
    <div className="pad-form">
      <ol className="order-list">
        {list.map((it, pos) => (
          <li key={it.i} className="order-item">
            <span className="order-pos">{pos + 1}</span>
            <span className="order-label">{it.label}</span>
            <span className="order-btns">
              <button type="button" className="btn btn-icon btn-sm" onClick={() => move(pos, pos - 1)} disabled={disabled || pos === 0} aria-label={`Monter « ${it.label} »`}><ArrowUp /></button>
              <button type="button" className="btn btn-icon btn-sm" onClick={() => move(pos, pos + 1)} disabled={disabled || pos === list.length - 1} aria-label={`Descendre « ${it.label} »`}><ArrowDown /></button>
            </span>
          </li>
        ))}
      </ol>
      <button type="button" className="btn btn-primary btn-lg btn-block" disabled={disabled} onClick={() => onSubmit(list.map((x) => x.i))}>Valider cet ordre</button>
    </div>
  );
}
