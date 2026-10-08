import { curseur, ordre, qcm, quiz, saisie, vf } from '../build';

export default quiz('accessibilite-numerique', 'gestion', 'Accessibilité numérique',
  'RGAA, contrastes, textes alternatifs : concevez des services utilisables par tous.', [
  saisie('Quel est le sigle du référentiel français d’accessibilité des services numériques ?', ['RGAA'], {
    explanation: 'Référentiel général d’amélioration de l’accessibilité.',
  }),
  curseur('Quel ratio de contraste minimal le niveau AA exige-t-il pour un texte normal ? (x:1)', {
    min: 1, max: 10, step: 0.5, answer: 4.5, tolerance: 0,
  }, { explanation: '4,5:1 pour le texte normal, 3:1 pour le texte de grande taille.' }),
  ordre('Classez les niveaux de conformité WCAG du moins au plus exigeant.', ['A', 'AA', 'AAA']),
  vf('Une image purement décorative doit avoir un attribut alt vide.', true, {
    explanation: 'alt="" indique aux lecteurs d’écran d’ignorer l’image.',
  }),
  qcm('Lesquelles de ces pratiques améliorent l’accessibilité ?', [
    '*Associer chaque champ de formulaire à un libellé',
    'Transmettre une information uniquement par la couleur',
    '*Permettre la navigation au clavier',
    '*Sous-titrer les vidéos',
  ]),
  qcm('Que signifie l’acronyme WCAG ?', [
    '*Web Content Accessibility Guidelines',
    'Web Compliance and Access Guide',
    'World Content Access Group',
    'Web Coding Accessibility Grade',
  ]),
]);
