import type { CSSProperties } from 'react';
import { CATEGORY_STYLES } from '../data/categories';
import type { Category, CategoryColor } from '../lib/types';

/** Variables CSS d'une couleur de catégorie (s'adaptent au thème via --cat-*-dark). */
export function catVars(color: CategoryColor): CSSProperties {
  const s = CATEGORY_STYLES[color] ?? CATEGORY_STYLES.green;
  return {
    '--cat': s.base,
    '--cat-bg-l': s.bg,
    '--cat-text-l': s.text,
    '--cat-bg-d': s.bgDark,
    '--cat-text-d': s.textDark,
  } as CSSProperties;
}

export function CategoryBadge({ category, size }: { category: Category; size?: 'sm' }) {
  return (
    <span className={`badge cat${size === 'sm' ? ' badge-sm' : ''}`} style={catVars(category.color)}>
      {category.label}
    </span>
  );
}
