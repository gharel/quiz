import { pbkdf2Sync } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { fingerprint } from './access';

describe('mot de passe', () => {
  it('calcule la même empreinte que l’outil npm run mot-de-passe', async () => {
    const salt = '00112233445566778899aabbccddeeff';
    const expected = pbkdf2Sync('Été-2026'.normalize('NFC'), Buffer.from(salt, 'hex'), 1000, 32, 'sha256').toString('hex');
    expect(await fingerprint('Été-2026', salt, 1000)).toBe(expected);
  });
});
