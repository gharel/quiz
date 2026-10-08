import type { Category, CategoryColor } from '../lib/types';

/** Domaines de formation Skazy Formation (readme du design system). */
export const DEFAULT_CATEGORIES: Category[] = [
  { id: 'bureautique', label: 'Bureautique', color: 'violet', builtin: true },
  { id: 'dev', label: 'Développement web', color: 'blue', builtin: true },
  { id: 'web', label: 'Web & cybersécurité', color: 'blue', builtin: true },
  { id: 'gestion', label: 'Gestion de projet', color: 'pink', builtin: true },
  { id: 'graphisme', label: 'Graphisme & UX', color: 'teal', builtin: true },
  { id: 'ia', label: 'Intelligence artificielle', color: 'orange', builtin: true },
  { id: 'nocode', label: 'NoCode', color: 'orange', builtin: true },
  { id: 'webmarketing', label: 'Webmarketing', color: 'orange', builtin: true },
  { id: 'data', label: 'Data', color: 'yellow', builtin: true },
  { id: 'general', label: 'Culture générale', color: 'green', builtin: true },
];

/** Couleur de catégorie → variables CSS (barre, fond de badge, texte AA). */
export const CATEGORY_STYLES: Record<CategoryColor, { label: string; base: string; bg: string; text: string; bgDark: string; textDark: string }> = {
  green: { label: 'Vert', base: '#50967c', bg: '#e8f5f0', text: '#2f6b53', bgDark: 'rgba(80,150,124,0.18)', textDark: '#8fd0b4' },
  violet: { label: 'Violet', base: '#a07bd4', bg: '#ede5f9', text: '#6b46a8', bgDark: 'rgba(160,123,212,0.18)', textDark: '#c9b0ec' },
  yellow: { label: 'Jaune', base: '#eacb60', bg: '#fdf6da', text: '#7a5f00', bgDark: 'rgba(234,203,96,0.16)', textDark: '#f0d98a' },
  blue: { label: 'Bleu', base: '#5699c5', bg: '#ddeef8', text: '#2a6496', bgDark: 'rgba(86,153,197,0.18)', textDark: '#9cc8e6' },
  teal: { label: 'Turquoise', base: '#5daba0', bg: '#dcf0ee', text: '#2b7168', bgDark: 'rgba(93,171,160,0.18)', textDark: '#97d2c9' },
  orange: { label: 'Orange', base: '#e3764c', bg: '#fbe9e0', text: '#a8441d', bgDark: 'rgba(227,118,76,0.18)', textDark: '#f2a98b' },
  pink: { label: 'Rose', base: '#e78da5', bg: '#fce8ee', text: '#a3405c', bgDark: 'rgba(231,141,165,0.18)', textDark: '#f3b5c6' },
};

export const FALLBACK_CATEGORY: Category = { id: 'general', label: 'Culture générale', color: 'green' };
