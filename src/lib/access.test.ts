import { pbkdf2Sync } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { addFailure, blockedUntil, blockMessage, fingerprint, parseFailures, type Failures } from './access';

describe('mot de passe', () => {
  it('calcule la même empreinte que l’outil npm run mot-de-passe', async () => {
    const salt = '00112233445566778899aabbccddeeff';
    const expected = pbkdf2Sync('Été-2026'.normalize('NFC'), Buffer.from(salt, 'hex'), 1000, 32, 'sha256').toString('hex');
    expect(await fingerprint('Été-2026', salt, 1000)).toBe(expected);
  });
});

describe('blocage après un mot de passe incorrect', () => {
  const MINUTE = 60_000;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  // Jeudi 8 octobre 2026, 14 h 32 min 20 s (heure locale)
  const t0 = new Date(2026, 9, 8, 14, 32, 20).getTime();
  const after = (n: number) => {
    let failures: Failures = null;
    for (let i = 0; i < n; i += 1) failures = addFailure(failures, t0);
    return failures;
  };
  // Message avec des espaces ordinaires, plus lisible dans les attentes
  const message = (failures: Failures, now: number) => blockMessage(failures, now).replaceAll('\xa0', ' ');

  it('ne coupe pas la durée en fin de ligne', () => {
    expect(blockMessage(after(1), t0)).toContain('5\xa0minutes');
  });

  it('n’est pas bloqué sans échec', () => {
    expect(blockedUntil(null)).toBe(0);
    expect(blockMessage(null, t0)).toBe('');
  });

  it('bloque 5 minutes, 1 heure, 24 heures, 1 semaine, 1 mois, puis définitivement', () => {
    [5 * MINUTE, HOUR, DAY, 7 * DAY, 30 * DAY].forEach((ms, i) => {
      expect(blockedUntil(after(i + 1))).toBe(t0 + ms);
    });
    expect(blockedUntil(after(6))).toBe(Infinity);
    expect(blockedUntil(after(9))).toBe(Infinity);
  });

  it('compte les échecs à partir du précédent', () => {
    expect(addFailure(null, t0)).toEqual({ count: 1, last: t0 });
    expect(addFailure({ count: 2, last: t0 }, t0 + DAY)).toEqual({ count: 3, last: t0 + DAY });
  });

  it('dit jusqu’à quand, minute arrondie au-dessus', () => {
    expect(message(after(1), t0)).toBe('Mot de passe incorrect : accès bloqué 5 minutes, jusqu’à 14:38.');
    expect(message(after(2), t0)).toBe('Mot de passe incorrect : accès bloqué 1 heure, jusqu’à 15:33.');
    expect(message(after(3), t0)).toBe(
      'Mot de passe incorrect : accès bloqué 24 heures, jusqu’au vendredi 9 octobre à 14:33.',
    );
    expect(message(after(4), t0)).toBe(
      'Mot de passe incorrect : accès bloqué 1 semaine, jusqu’au jeudi 15 octobre à 14:33.',
    );
  });

  it('prévient avant le blocage définitif', () => {
    expect(message(after(5), t0)).toBe(
      'Mot de passe incorrect : accès bloqué 1 mois, jusqu’au samedi 7 novembre à 14:33. ' +
        'Au prochain échec, il sera bloqué définitivement.',
    );
    expect(message(after(6), t0)).toBe(
      'Trop de mots de passe incorrects : l’accès est bloqué définitivement sur ce navigateur.',
    );
  });

  it('donne l’année quand le blocage finit l’année suivante', () => {
    const december = new Date(2026, 11, 20, 9, 0).getTime();
    expect(message({ count: 5, last: december }, december)).toMatch(/jusqu’au mardi 19 janvier 2027 à 09:00\./);
  });

  it('n’a plus de message une fois le blocage fini', () => {
    expect(blockMessage(after(1), t0 + 5 * MINUTE)).toBe('');
  });

  it('ignore des échecs enregistrés invalides', () => {
    expect(parseFailures({ count: 2, last: t0 })).toEqual({ count: 2, last: t0 });
    for (const value of [null, true, 'x', { count: 0, last: t0 }, { count: 1.5, last: t0 }, { count: 1 }]) {
      expect(parseFailures(value)).toBe(null);
    }
  });
});
