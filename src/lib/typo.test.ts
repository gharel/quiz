import { describe, expect, it } from 'vitest';
import { BUILTIN_QUIZZES } from '../data/quizzes';
import { frenchSpaces } from './typo';

const N = String.fromCharCode(0xa0);

describe('frenchSpaces', () => {
  it('rend insécable l’espace avant la ponctuation haute, », %, €, $ et ·', () => {
    expect(frenchSpaces('Vrai ou faux ? Oui ! Note : 50 % ; 10 €')).toBe(`Vrai ou faux${N}? Oui${N}! Note${N}: 50${N}%${N}; 10${N}€`);
    expect(frenchSpaces('le « quishing » ici')).toBe(`le «${N}quishing${N}» ici`);
    expect(frenchSpaces('0,6 $ · Quiz')).toBe(`0,6${N}$${N}· Quiz`);
  });

  it('garde le tiret d’incise en fin de ligne', () => {
    expect(frenchSpaces('Skazy Formation - Tous droits réservés')).toBe(`Skazy Formation${N}- Tous droits réservés`);
    expect(frenchSpaces('e-mail, -5, a-t-il')).toBe('e-mail, -5, a-t-il');
  });

  it('lie les groupes de chiffres et un nombre au mot qui le suit', () => {
    expect(frenchSpaces('150 000 utilisateurs, 1 000 000 de vues')).toBe(`150${N}000${N}utilisateurs, 1${N}000${N}000${N}de vues`);
    expect(frenchSpaces('30 s, 500 points, 2009 2010')).toBe(`30${N}s, 500${N}points, 2009 2010`);
  });

  it('laisse intacts le code et les textes déjà corrects', () => {
    for (const s of ['A1:C4', 'https://exemple.nc/?q=1', 'display: flex', 'Azerty123!', 'Question 3']) expect(frenchSpaces(s)).toBe(s);
    const once = frenchSpaces('Bonne réponse : « 150 000 » !');
    expect(frenchSpaces(once)).toBe(once);
  });

  it('ne laisse aucune ponctuation sécable dans les quiz de la bibliothèque', () => {
    const texts = BUILTIN_QUIZZES.flatMap((q) => [q.title, q.description, ...q.questions.flatMap((x) => [x.text, x.explanation ?? '', ...(x.answers ?? []), ...(x.items ?? []), ...(x.accepted ?? [])])]);
    const left = texts.map(frenchSpaces).filter((t) => /[ \t\n][:;!?»%€]|«[ \t\n]/.test(t));
    expect(left).toEqual([]);
  });
});

describe('tirets', () => {
  it('aucun tiret cadratin ni demi-cadratin dans les sources : utiliser le trait d’union', () => {
    const sources = import.meta.glob('/src/**/*.{ts,tsx,css}', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
    const dashes = new RegExp('[\\u2013\\u2014]');
    const found = Object.entries(sources).flatMap(([file, text]) => text.split('\n').filter((l) => dashes.test(l)).map((l) => `${file} : ${l.trim()}`));
    expect(Object.keys(sources).length).toBeGreaterThan(50);
    expect(found).toEqual([]);
  });
});
