import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Route } from '../lib/router';

/** Pages longues qui défilent : bibliothèque, détail d'un quiz, éditeur, résultats. */
const LONG_PAGES: Route['name'][] = ['library', 'quiz', 'edit', 'results', 'result'];

/** Le bouton ne concerne que les pages longues (jamais l'accueil ni les écrans projetés). */
export const hasBackToTop = (route: Route) => LONG_PAGES.includes(route.name);

/** Visible à partir de 1,2 écran de défilement. */
export const isPastFold = (scrollY: number, innerHeight: number) => scrollY >= innerHeight * 1.2;

/**
 * Bouton rond « Remonter en haut », fixe en bas à droite, au-dessus de la barre d'onglets
 * (téléphone) et de la barre d'enregistrement de l'éditeur (`aboveSavebar`).
 */
export function BackToTop({ aboveSavebar = false }: { aboveSavebar?: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => setVisible(isPastFold(window.scrollY, window.innerHeight));
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  const goUp = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    document.getElementById('haut-de-page')?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      className={`to-top${visible ? ' is-visible' : ''}${aboveSavebar ? ' to-top-savebar' : ''}`}
      onClick={goUp}
      aria-label="Remonter en haut de la page"
      title="Remonter en haut de la page"
    >
      <ArrowUp aria-hidden="true" />
    </button>
  );
}
