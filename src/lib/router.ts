import { useEffect, useState } from 'react';

/** Routes de l'application (ancre #/…, compatible GitHub Pages). */
export type Route =
  | { name: 'library' }
  | { name: 'quiz'; id: string }
  | { name: 'edit'; id?: string }
  | { name: 'host'; id: string }
  | { name: 'solo'; id: string }
  | { name: 'shared'; data: string }
  | { name: 'join'; code?: string }
  | { name: 'results' }
  | { name: 'result'; id: string }
  | { name: 'notfound' };

export function parseHash(hash: string): Route {
  const [path, query = ''] = hash.replace(/^#/, '').split('?');
  const parts = path.split('/').filter(Boolean).map(decodeURIComponent);
  const params = new URLSearchParams(query);
  const [a, b, c] = parts;
  if (!a || a === 'bibliotheque') return { name: 'library' };
  if (a === 'quiz' && b && c === 'modifier') return { name: 'edit', id: b };
  if (a === 'quiz' && b) return { name: 'quiz', id: b };
  if (a === 'creer') return { name: 'edit' };
  if (a === 'direct' && b) return { name: 'host', id: b };
  if (a === 'solo' && b) return { name: 'solo', id: b };
  if (a === 'partage') return { name: 'shared', data: params.get('q') ?? '' };
  if (a === 'rejoindre') return { name: 'join', code: b ?? params.get('code') ?? undefined };
  if (a === 'resultats' && b) return { name: 'result', id: b };
  if (a === 'resultats') return { name: 'results' };
  return { name: 'notfound' };
}

export function useRoute(): Route {
  const [route, setRoute] = useState(() => parseHash(location.hash));
  useEffect(() => {
    const on = () => {
      setRoute(parseHash(location.hash));
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}

export const href = {
  library: () => '#/',
  quiz: (id: string) => `#/quiz/${encodeURIComponent(id)}`,
  edit: (id?: string) => (id ? `#/quiz/${encodeURIComponent(id)}/modifier` : '#/creer'),
  host: (id: string) => `#/direct/${encodeURIComponent(id)}`,
  solo: (id: string) => `#/solo/${encodeURIComponent(id)}`,
  join: (code?: string) => (code ? `#/rejoindre/${code}` : '#/rejoindre'),
  results: () => '#/resultats',
  result: (id: string) => `#/resultats/${encodeURIComponent(id)}`,
};

export const navigate = (h: string) => {
  location.hash = h.replace(/^#/, '');
};

/** URL absolue de l'application (pour les liens de partage et le QR code). */
export const appUrl = () => `${location.origin}${location.pathname}`;
