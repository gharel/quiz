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
  qcm('Quelle balise HTML définit le titre de plus haut niveau dans le contenu d’une page ?', ['<header>', '*<h1>', '<title>', '<main>']),
  vf('Un lien intitulé « Cliquez ici » est suffisamment explicite pour un lecteur d’écran.', false, {
    explanation: 'L’intitulé d’un lien doit indiquer sa destination, même lu hors de son contexte.',
  }),
  curseur('Pour un texte de grande taille, quel ratio de contraste minimal le niveau AA exige-t-il ? (x:1)', {
    min: 1, max: 10, step: 0.5, answer: 3, tolerance: 0,
  }, { explanation: '3:1 pour le texte de grande taille (24 px, ou environ 18,7 px en gras).' }),
  qcm('Qui bénéficie d’un site accessible ?', [
    '*Les personnes malvoyantes', '*Les personnes âgées', '*Une personne avec un bras dans le plâtre', 'Uniquement les personnes en situation de handicap reconnu',
  ], { explanation: 'L’accessibilité profite à tous, y compris dans des situations temporaires.' }),
]);
