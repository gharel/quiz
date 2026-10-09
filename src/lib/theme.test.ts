import { describe, expect, it } from 'vitest';
import { isThemeStorageKey, NEXT_THEME, parseTheme, serializeTheme, THEME_KEY, themeLabel, type ThemePref } from './theme';

describe('thème commun aux outils', () => {
  it('clé partagée par tous les outils Skazy Formation', () => {
    expect(THEME_KEY).toBe('skazy-outils:theme');
  });

  it('lecture : valeurs JSON clair ou sombre', () => {
    expect(parseTheme('"light"')).toBe('light');
    expect(parseTheme('"dark"')).toBe('dark');
  });

  it('lecture : clé absente ou valeur inconnue = thème du système', () => {
    expect(parseTheme(null)).toBe('auto');
    for (const raw of ['', 'light', 'dark', '"auto"', '"system"', 'null', '42', '{}', '["dark"]', '{"theme":"dark"}']) {
      expect(parseTheme(raw)).toBe('auto');
    }
  });

  it('écriture : JSON pour clair et sombre, clé supprimée pour le système', () => {
    expect(serializeTheme('light')).toBe('"light"');
    expect(serializeTheme('dark')).toBe('"dark"');
    expect(serializeTheme('auto')).toBeNull();
    for (const t of ['light', 'dark'] as const) expect(parseTheme(serializeTheme(t))).toBe(t);
    expect(parseTheme(serializeTheme('auto'))).toBe('auto');
  });

  it('le bouton passe de système à clair, sombre, puis de nouveau système', () => {
    let t: ThemePref = 'auto';
    const seen: ThemePref[] = [];
    for (let i = 0; i < 3; i++) {
      t = NEXT_THEME[t];
      seen.push(t);
    }
    expect(seen).toEqual(['light', 'dark', 'auto']);
  });

  it('nom accessible : thème en cours (espace insécable avant les deux-points), puis l’action', () => {
    expect(themeLabel('auto')).toBe('Thème : celui du système. Changer de thème');
    expect(themeLabel('light')).toBe('Thème : clair. Changer de thème');
    expect(themeLabel('dark')).toBe('Thème : sombre. Changer de thème');
  });

  it('synchronisation : seule la clé du thème (ou un stockage vidé) déclenche la relecture', () => {
    expect(isThemeStorageKey(THEME_KEY)).toBe(true);
    expect(isThemeStorageKey(null)).toBe(true);
    expect(isThemeStorageKey('skq.theme')).toBe(false);
    expect(isThemeStorageKey('skq.sound')).toBe(false);
  });
});
