import type { Category } from '../lib/types';
import { catVars } from './CategoryBadge';

interface Props {
  categories: { category: Category; count: number }[];
  total: number;
  value: string; // '' = toutes
  onChange: (id: string) => void;
}

/** Puces de filtre par catégorie, avec compteurs. */
export function CategoryFilter({ categories, total, value, onChange }: Props) {
  return (
    <div className="chips" role="group" aria-label="Filtrer par catégorie">
      <button type="button" className="chip" aria-pressed={value === ''} onClick={() => onChange('')}>
        Toutes <span className="count">{total}</span>
      </button>
      {categories.map(({ category: c, count }) => (
        <button
          key={c.id}
          type="button"
          className="chip cat"
          style={catVars(c.color)}
          aria-pressed={value === c.id}
          onClick={() => onChange(value === c.id ? '' : c.id)}
        >
          <span className="dot" aria-hidden="true" />
          {c.label} <span className="count">{count}</span>
        </button>
      ))}
    </div>
  );
}
