import { useSyncExternalStore } from 'react';

/**
 * Accès formateur (bibliothèque, animation, résultats) protégé par un mot de passe simple.
 * Seule l'empreinte PBKDF2 est publiée (même mot de passe que jeu-formation) : c'est une
 * barrière dissuasive, le site restant statique et public. Pour changer de mot de passe :
 * `npm run mot-de-passe`, puis remplacer SEL et EMPREINTE.
 */
const SEL = '284ebb77d9526d1b91143afc658a187b';
export const EMPREINTE = '24c2ef4b388d8d476dec140c6fa2602781626e9a94d31dbf50436e994f0e0be7';
const ITERATIONS = 600_000;
const KEY = 'skq.acces';

const hexToBytes = (hex: string) => Uint8Array.from(hex.match(/../g) ?? [], (h) => parseInt(h, 16));
const bytesToHex = (buf: ArrayBuffer) => Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');

export async function fingerprint(password: string, salt = SEL, iterations = ITERATIONS): Promise<string> {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) throw new Error('Chiffrement indisponible');
  const key = await subtle.importKey('raw', new TextEncoder().encode(password.normalize('NFC')), 'PBKDF2', false, ['deriveBits']);
  const bits = await subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: hexToBytes(salt), iterations }, key, 256);
  return bytesToHex(bits);
}

const read = () => {
  try {
    return localStorage.getItem(KEY) === EMPREINTE;
  } catch {
    return false;
  }
};

let unlocked = read();
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

/** Vérifie le mot de passe et mémorise l'accès sur ce navigateur. */
export async function unlock(password: string): Promise<boolean> {
  if (!password || (await fingerprint(password)) !== EMPREINTE) return false;
  try {
    localStorage.setItem(KEY, EMPREINTE);
  } catch {
    /* navigation privée : accès limité à cette visite */
  }
  unlocked = true;
  emit();
  return true;
}

export function lock() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* rien à effacer */
  }
  unlocked = false;
  emit();
}

export function useUnlocked(): boolean {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => unlocked,
  );
}
