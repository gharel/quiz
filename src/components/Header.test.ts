import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import type { Route } from '../lib/router';
import { Header } from './Header';

// Les préférences (thème) dépendent du navigateur : remplacées par une valeur fixe.
vi.mock('../lib/prefs', () => ({
  usePrefs: () => ({ theme: 'auto', sound: true, playerName: '' }),
  setPrefs: () => {},
}));

const render = (route: Route) => renderToStaticMarkup(createElement(Header, { route }));

/** Balises d'ouverture des liens et boutons de l'en-tête, dans l'ordre du document. */
function headerControls(html: string) {
  const header = html.slice(html.indexOf('<header'), html.indexOf('</header>'));
  return [...header.matchAll(/<(a|button)\b[^>]*>/g)].map((m) => m[0]);
}

describe('bandeau', () => {
  it('le nom de l’outil (pastille + « Quiz ») mène à l’accueil du Quiz', () => {
    const [first] = headerControls(render({ name: 'library' }));
    expect(first).toContain('class="logo"');
    expect(first).toContain('href="#/"');
    expect(first).toContain('aria-label="Quiz, accueil"');
    expect(first).not.toContain('aria-current');
  });

  it('le nom de l’outil porte aria-current sur l’accueil', () => {
    const [first] = headerControls(render({ name: 'join' }));
    expect(first).toContain('aria-current="page"');
  });

  it('à droite : thème, « Les outils », filet, puis le logo en dernier', () => {
    const html = render({ name: 'library' });
    const controls = headerControls(html);
    const [toggle, tools, brand] = controls.slice(-3);
    expect(toggle).toMatch(/^<button[^>]*aria-label="Thème/);
    expect(tools).toContain('href="https://gharel.github.io/home/"');
    expect(tools).not.toContain('target=');
    expect(tools).toContain('title="Tous les outils Skazy Formation"');
    expect(brand).toContain('href="https://formation.skazy.nc"');
    expect(brand).toContain('target="_blank"');
    expect(brand).toContain('rel="noopener"');
    expect(brand).toContain('aria-label="Site de Skazy Formation (nouvel onglet)"');
    // Le filet sépare « Les outils » du logo, qui est bien le dernier élément du bandeau.
    const end = html.slice(html.indexOf('class="tools-link"'), html.indexOf('</header>'));
    expect(end.indexOf('header-sep')).toBeLessThan(end.indexOf('brand-link'));
    expect(end.slice(end.indexOf('brand-link'))).toMatch(/^brand-link"[^>]*>(<img[^>]*>){2}<\/a><\/div><\/div>$/);
  });

  it('le lien « Les outils » garde son texte pour le nom accessible', () => {
    const html = render({ name: 'library' });
    expect(html).toMatch(/class="tools-link"[^>]*><img[^>]*alt=""[^>]*\/?><span class="tools-link-text">Les outils<\/span><\/a>/);
  });

  it('le logo ne figure plus à gauche avec la pastille', () => {
    const html = render({ name: 'library' });
    const logo = html.slice(html.indexOf('class="logo"'), html.indexOf('</a>'));
    expect(logo).not.toContain('brand-logo');
  });
});
