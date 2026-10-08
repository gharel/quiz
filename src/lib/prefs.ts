import { useSyncExternalStore } from 'react';

export type ThemePref = 'auto' | 'light' | 'dark';

interface Prefs {
  theme: ThemePref;
  sound: boolean;
  playerName: string;
}

const read = (): Prefs => {
  try {
    return {
      theme: (localStorage.getItem('skq.theme') as ThemePref) || 'auto',
      sound: localStorage.getItem('skq.sound') !== 'off',
      playerName: localStorage.getItem('skq.name') || '',
    };
  } catch {
    return { theme: 'auto', sound: true, playerName: '' };
  }
};

let prefs = read();
const listeners = new Set<() => void>();
const media = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme() {
  const dark = prefs.theme === 'dark' || (prefs.theme === 'auto' && media.matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#1a1a1a' : '#50967c');
}
media.addEventListener('change', applyTheme);
applyTheme();

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
    write('skq.theme', patch.theme === 'auto' ? '' : patch.theme);
    applyTheme();
  }
  if (patch.sound !== undefined) write('skq.sound', patch.sound ? '' : 'off');
  if (patch.playerName !== undefined) write('skq.name', patch.playerName);
  listeners.forEach((l) => l());
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
