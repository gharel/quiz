import { useSyncExternalStore } from 'react';
import { load, save } from './util';

/**
 * Accès formateur (bibliothèque, animation, résultats) protégé par un mot de passe simple.
 * Seule l'empreinte PBKDF2 est publiée (même mot de passe que jeu-formation) : c'est une
 * barrière dissuasive, le site restant statique et public. Pour changer de mot de passe :
 * `npm run mot-de-passe`, puis remplacer SEL et EMPREINTE.
 *
 * Chaque mot de passe incorrect bloque la saisie, de plus en plus longtemps : 5 minutes, 1 heure,
 * 24 heures, 1 semaine, 1 mois, puis définitivement. Le bon mot de passe remet le compte à zéro.
 * Le blocage est gardé dans ce navigateur : il freine les essais à la main, pas qui efface son stockage.
 */
const SEL = '284ebb77d9526d1b91143afc658a187b';
export const EMPREINTE = '24c2ef4b388d8d476dec140c6fa2602781626e9a94d31dbf50436e994f0e0be7';
const ITERATIONS = 600_000;
const KEY = 'skq.acces';
const FAILURES_KEY = 'skq.acces-echecs';

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
/** Blocage après le 1er, le 2e… mot de passe incorrect ; au-delà, il est définitif. Espaces insécables : « 5 minutes » ne se coupe pas. */
const BLOCKS = [
  { ms: 5 * MINUTE, label: '5\xa0minutes' },
  { ms: HOUR, label: '1\xa0heure' },
  { ms: DAY, label: '24\xa0heures' },
  { ms: 7 * DAY, label: '1\xa0semaine' },
  { ms: 30 * DAY, label: '1\xa0mois' },
];
/** Plus grand délai accepté par setTimeout (environ 24 jours) : au-delà, il part tout de suite. */
export const MAX_DELAY = 2 ** 31 - 1;

/** Échecs consécutifs : leur nombre et la date du dernier (ms). */
export type Failures = { count: number; last: number } | null;

const hexToBytes = (hex: string) => Uint8Array.from(hex.match(/../g) ?? [], (h) => parseInt(h, 16));
const bytesToHex = (buf: ArrayBuffer) => Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');

export async function fingerprint(password: string, salt = SEL, iterations = ITERATIONS): Promise<string> {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) throw new Error('Chiffrement indisponible');
  const key = await subtle.importKey('raw', new TextEncoder().encode(password.normalize('NFC')), 'PBKDF2', false, ['deriveBits']);
  const bits = await subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: hexToBytes(salt), iterations }, key, 256);
  return bytesToHex(bits);
}

/** Échecs enregistrés, nettoyés (null si aucun ou valeur invalide). */
export function parseFailures(value: unknown): Failures {
  const { count, last } = (value ?? {}) as { count?: unknown; last?: unknown };
  return Number.isInteger(count) && (count as number) >= 1 && Number.isFinite(last)
    ? { count: count as number, last: last as number }
    : null;
}

export const addFailure = (failures: Failures, now: number): Failures => ({ count: (failures?.count ?? 0) + 1, last: now });

/** Fin du blocage en ms : 0 sans échec, Infinity quand il est définitif. */
export function blockedUntil(failures: Failures): number {
  if (!failures) return 0;
  const block = BLOCKS[failures.count - 1];
  return block ? failures.last + block.ms : Infinity;
}

const timeFmt = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' });

/** « jusqu’à 14:38 » le jour même, « jusqu’au vendredi 16 octobre à 14:38 » sinon (minute arrondie au-dessus). */
function until(end: number, now: number): string {
  const date = new Date(Math.ceil(end / MINUTE) * MINUTE);
  const today = new Date(now);
  const time = timeFmt.format(date);
  if (date.toDateString() === today.toDateString()) return `jusqu’à ${time}`;
  const day = date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    ...(date.getFullYear() === today.getFullYear() ? {} : { year: 'numeric' }),
  });
  return `jusqu’au ${day} à ${time}`;
}

/** Message affiché pendant le blocage, '' s'il n'y en a pas. */
export function blockMessage(failures: Failures, now: number): string {
  const end = blockedUntil(failures);
  if (end === Infinity) return 'Trop de mots de passe incorrects : l’accès est bloqué définitivement sur ce navigateur.';
  if (!failures || end <= now) return '';
  const message = `Mot de passe incorrect : accès bloqué ${BLOCKS[failures.count - 1].label}, ${until(end, now)}.`;
  return failures.count === BLOCKS.length ? `${message} Au prochain échec, il sera bloqué définitivement.` : message;
}

// Échecs gardés en mémoire si le stockage refuse l'écriture : le blocage tient jusqu'au rechargement
let memoryFailures: Failures = null;

/** Échecs actuels de ce navigateur. */
export const currentFailures = (): Failures => parseFailures(load<unknown>(FAILURES_KEY, null)) ?? memoryFailures;

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

/**
 * Vérifie le mot de passe et mémorise l'accès sur ce navigateur. Refuse sans vérifier pendant
 * un blocage ; un mot de passe incorrect en déclenche un nouveau, plus long.
 */
export async function unlock(password: string): Promise<boolean> {
  if (!password || blockedUntil(currentFailures()) > Date.now()) return false;
  if ((await fingerprint(password)) !== EMPREINTE) {
    const failures = addFailure(currentFailures(), Date.now());
    if (!save(FAILURES_KEY, failures)) memoryFailures = failures;
    return false;
  }
  memoryFailures = null;
  try {
    localStorage.removeItem(FAILURES_KEY);
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
