import { curseur, qcm, quiz, saisie, vf } from '../build';

export default quiz('tableur-excel-sheets', 'bureautique', 'Excel & Google Sheets : formules de base',
  'Références, fonctions et calculs : testez vos réflexes sur tableur.', [
  qcm('Quelle formule additionne les cellules A1 à A10 ?', [
    '=ADDITION(A1:A10)', '*=SOMME(A1:A10)', '=TOTAL(A1;A10)', '=PLUS(A1-A10)',
  ]),
  qcm('Dans une formule, que signifie $A$1 ?', [
    'Une valeur en euros',
    '*Une référence absolue',
    'Une cellule masquée',
    'Une référence relative',
  ], { explanation: 'Les $ bloquent la colonne et la ligne lors de la recopie de la formule.' }),
  saisie('Quelle fonction calcule la moyenne d’une plage de cellules ?', ['MOYENNE', '=MOYENNE', 'moyenne()'], {
    explanation: 'La fonction MOYENNE, par exemple =MOYENNE(B2:B20).',
  }),
  curseur('Quel résultat donne la formule =2+3*4 ?', { min: 0, max: 30, step: 1, answer: 14, tolerance: 0 }, {
    explanation: 'La multiplication est prioritaire : 3*4 = 12, puis 2 + 12 = 14.',
  }),
  vf('La fonction RECHERCHEX existe dans Microsoft 365.', true),
  qcm('Quel symbole commence toujours une formule ?', ['#', '@', '*=', '$'], {}),
  qcm('Quelles fonctions renvoient un nombre ?', ['*NB', '*NBVAL', 'CONCAT', '*NB.SI'], {
    explanation: 'NB, NBVAL et NB.SI comptent des cellules ; CONCAT assemble du texte.',
  }),
  vf('Une formule recopiée vers le bas adapte automatiquement ses références relatives.', true),
  qcm('Quelle fonction renvoie une valeur différente selon qu’une condition est vraie ou fausse ?', ['*SI', 'ET', 'NB.SI', 'MAX']),
  qcm('Quel raccourci clavier annule la dernière action ?', ['Ctrl + Y', '*Ctrl + Z', 'Ctrl + X', 'Ctrl + A']),
]);
