import { describe, expect, it } from 'vitest';
import { parseHash } from '../lib/router';
import { hasBackToTop, isPastFold } from './BackToTop';

describe('bouton « Remonter en haut »', () => {
  it('apparaît après 1,2 écran de défilement', () => {
    expect(isPastFold(0, 800)).toBe(false);
    expect(isPastFold(959, 800)).toBe(false);
    expect(isPastFold(960, 800)).toBe(true);
    expect(isPastFold(3000, 800)).toBe(true);
  });

  it('figure sur les pages longues', () => {
    for (const hash of ['#/bibliotheque', '#/quiz/abc', '#/creer', '#/quiz/abc/modifier', '#/resultats', '#/resultats/xyz']) {
      expect(hasBackToTop(parseHash(hash)), hash).toBe(true);
    }
  });

  it('ne figure ni sur l’accueil ni sur les écrans projetés', () => {
    for (const hash of ['#/', '#/rejoindre/123456', '#/direct/abc', '#/solo/abc', '#/partage?q=x', '#/inconnu']) {
      expect(hasBackToTop(parseHash(hash)), hash).toBe(false);
    }
  });
});
