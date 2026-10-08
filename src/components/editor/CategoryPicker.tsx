import { Check, Plus } from 'lucide-react';
import { useState } from 'react';
import { CATEGORY_STYLES } from '../../data/categories';
import { addCategory, allCategories, useStore } from '../../lib/store';
import type { CategoryColor } from '../../lib/types';

export function CategoryPicker({ value, onChange }: { value: string; onChange: (id: string) => void }) {
  const state = useStore();
  const [creating, setCreating] = useState(false);
  const [label, setLabel] = useState('');
  const [color, setColor] = useState<CategoryColor>('green');
  const cats = allCategories(state);

  const create = () => {
    if (!label.trim()) return;
    onChange(addCategory(label, color).id);
    setCreating(false);
    setLabel('');
  };

  return (
    <div className="field">
      <label className="field-label" htmlFor="quiz-category">Catégorie</label>
      <div className="ed-cat-row">
        <select id="quiz-category" className="select" value={value} onChange={(e) => onChange(e.target.value)}>
          {cats.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
        </select>
        {!creating && (
          <button type="button" className="btn btn-ghost" onClick={() => setCreating(true)}><Plus aria-hidden="true" />Nouvelle catégorie</button>
        )}
      </div>
      {creating && (
        <div className="ed-newcat">
          <label className="field">
            <span className="field-label">Nom de la catégorie</span>
            <input className="input" value={label} maxLength={40} autoFocus placeholder="Ex. : WordPress" onChange={(e) => setLabel(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), create())} />
          </label>
          <fieldset className="field">
            <legend className="field-label">Couleur</legend>
            <div className="swatches">
              {(Object.keys(CATEGORY_STYLES) as CategoryColor[]).map((c) => (
                <label key={c} className="swatch" style={{ background: CATEGORY_STYLES[c].base }} title={CATEGORY_STYLES[c].label}>
                  <input type="radio" name="cat-color" className="sr-only" checked={color === c} onChange={() => setColor(c)} />
                  <span className="sr-only">{CATEGORY_STYLES[c].label}</span>
                  {color === c && <Check aria-hidden="true" />}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="row">
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => setCreating(false)}>Annuler</button>
            <button type="button" className="btn btn-primary btn-sm" onClick={create} disabled={!label.trim()}>Créer la catégorie</button>
          </div>
        </div>
      )}
    </div>
  );
}
