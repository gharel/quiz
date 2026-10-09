import { useSyncExternalStore } from 'react';
import { isThemeStorageKey, parseTheme, serializeTheme, THEME_KEY, type ThemePref } from './theme';

interface Prefs {
  theme: ThemePref;
  sound: boolean;
  playerName: string;
}

/** Thème enregistré, commun à tous les outils Skazy Formation. */
const readTheme = (): ThemePref => {
  try {
    return parseTheme(localStorage.getItem(THEME_KEY));
  } catch {
    return 'auto';
  }
};

const read = (): Prefs => {
  try {
    return {
      theme: readTheme(),
      sound: localStorage.getItem('skq.sound') !== 'off',
      playerName: localStorage.getItem('skq.name') || '',
    };
  } catch {
    return { theme: 'auto', sound: true, playerName: '' };
  }
};

let prefs = read();
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());
const media = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme() {
  const dark = prefs.theme === 'dark' || (prefs.theme === 'auto' && media.matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  // Thème clair choisi : « only » interdit au navigateur mobile de l'assombrir de lui-même
  document.documentElement.style.colorScheme = prefs.theme === 'light' ? 'only light' : '';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#1a1a1a' : '#50967c');
}
media.addEventListener('change', applyTheme);
applyTheme();

/** Relit le thème enregistré (changé dans un autre onglet ou un autre outil) et l'applique. */
function syncTheme() {
  const theme = readTheme();
  if (theme !== prefs.theme) {
    prefs = { ...prefs, theme };
    notify();
  }
  applyTheme();
}
window.addEventListener('storage', (e) => {
  if (isThemeStorageKey(e.key)) syncTheme();
});
// Page restaurée depuis le cache arrière/avant : le thème a pu changer entre-temps.
window.addEventListener('pageshow', (e) => {
  if (e.persisted) syncTheme();
});

function write(key: string, value: string) {
  try {
    if (value) localStorage.setItem(key, value);
    else localStorage.removeItem(key);
  } catch {
    /* stockage indisponible : préférence non mémorisée */
  }
}

export function setPrefs(patch: Partial<Prefs>) {
  prefs = { ...prefs, ...patch };
  if (patch.theme !== undefined) {
    write(THEME_KEY, serializeTheme(patch.theme) ?? '');
    applyTheme();
  }
  if (patch.sound !== undefined) write('skq.sound', patch.sound ? '' : 'off');
  if (patch.playerName !== undefined) write('skq.name', patch.playerName);
  notify();
}

export function usePrefs(): Prefs {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => prefs,
  );
}

export const getPrefs = () => prefs;
export const isDarkTheme = () => document.documentElement.dataset.theme === 'dark';
