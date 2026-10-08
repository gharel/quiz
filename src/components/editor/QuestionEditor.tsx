import { ArrowDown, ArrowUp, Copy, ImagePlus, Trash2, X } from 'lucide-react';
import { useRef } from 'react';
import { convertQuestion } from '../../lib/editorModel';
import { imageFileToDataUrl } from '../../lib/image';
import { TIME_OPTIONS, TYPE_INFO } from '../../lib/quizMeta';
import type { Question, QuestionType } from '../../lib/types';
import { Select } from '../Select';
import { toast } from '../Toast';
import { AnswersEditor } from './AnswersEditor';

interface Props {
  q: Question;
  index: number;
  count: number;
  error?: string;
  showError: boolean;
  onChange: (q: Question) => void;
  onMove: (d: -1 | 1) => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

export function QuestionEditor({ q, index, count, error, showError, onChange, onMove, onDuplicate, onDelete }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const set = (patch: Partial<Question>) => onChange({ ...q, ...patch });
  const invalid = showError && !!error;

  async function onImage(file?: File) {
    if (!file) return;
    try {
      set({ image: await imageFileToDataUrl(file) });
    } catch (e) {
      toast((e as Error).message, 'error');
    }
  }

  return (
    <section className={`panel ed-question${invalid ? ' ed-invalid' : ''}`} aria-labelledby={`q-${q.id}-title`}>
      <div className="ed-qhead">
        <h3 id={`q-${q.id}-title`} className="ed-qtitle">Question {index + 1}</h3>
        <div className="ed-qtools">
          <button type="button" className="btn btn-icon btn-sm" disabled={index === 0} onClick={() => onMove(-1)} aria-label="Monter la question"><ArrowUp /></button>
          <button type="button" className="btn btn-icon btn-sm" disabled={index === count - 1} onClick={() => onMove(1)} aria-label="Descendre la question"><ArrowDown /></button>
          <button type="button" className="btn btn-icon btn-sm" onClick={onDuplicate} aria-label="Dupliquer la question"><Copy /></button>
          <button type="button" className="btn btn-icon btn-sm danger-text" disabled={count === 1} onClick={onDelete} aria-label="Supprimer la question"><Trash2 /></button>
        </div>
      </div>

      <div className="ed-grid">
        <div className="field">
          <span className="field-label" id={`${q.id}-type`}>Type de question</span>
          <Select<QuestionType>
            labelledBy={`${q.id}-type`}
            value={q.type}
            onChange={(t) => onChange(convertQuestion(q, t))}
            options={(Object.keys(TYPE_INFO) as QuestionType[]).map((t) => ({ value: t, label: TYPE_INFO[t].label, hint: TYPE_INFO[t].hint }))}
          />
        </div>
        <div className="field">
          <span className="field-label" id={`${q.id}-time`}>Temps pour répondre</span>
          <Select<number>
            labelledBy={`${q.id}-time`}
            value={q.time}
            onChange={(time) => set({ time })}
            options={TIME_OPTIONS.map((t) => ({ value: t, label: t < 60 ? `${t} secondes` : `${t / 60} min` }))}
          />
        </div>
        <div className="field">
          <span className="field-label" id={`${q.id}-pts`}>Points</span>
          <Select<number>
            labelledBy={`${q.id}-pts`}
            value={q.points}
            onChange={(p) => set({ points: p as Question['points'] })}
            options={[{ value: 1, label: 'Standard' }, { value: 2, label: 'Points doublés' }, { value: 0, label: 'Sans points' }]}
          />
        </div>
      </div>

      <label className="field">
        <span className="field-label">Intitulé de la question</span>
        <textarea className="textarea" rows={2} maxLength={240} value={q.text} placeholder="Ex. : Quelle balise HTML crée un lien ?" onChange={(e) => set({ text: e.target.value })} aria-invalid={invalid && !q.text.trim()} />
      </label>

      <div className="ed-image">
        {q.image ? (
          <div className="ed-image-preview">
            <img src={q.image} alt="Illustration de la question" />
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => set({ image: undefined })}><X aria-hidden="true" />Retirer l’image</button>
          </div>
        ) : (
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => fileRef.current?.click()}><ImagePlus aria-hidden="true" />Ajouter une image (facultatif)</button>
        )}
        <input ref={fileRef} type="file" accept="image/*" hidden onChange={(e) => { void onImage(e.target.files?.[0]); e.target.value = ''; }} />
      </div>

      <AnswersEditor q={q} set={set} invalid={invalid} />

      <label className="field">
        <span className="field-label">Explication (facultative)</span>
        <textarea className="textarea" rows={2} maxLength={300} value={q.explanation ?? ''} placeholder="Affichée après la réponse pour aider à retenir la notion." onChange={(e) => set({ explanation: e.target.value })} />
      </label>

      {invalid && <p className="field-error" role="alert">{error}</p>}
    </section>
  );
}
