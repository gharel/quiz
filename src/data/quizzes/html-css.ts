import { ordre, qcm, quiz, saisie, vf } from '../build';

export default quiz('html-css-fondamentaux', 'dev', 'HTML & CSS : les fondamentaux',
  'Balises, sélecteurs et mise en page : vérifiez vos bases en intégration web.', [
  qcm('Quelle balise HTML crée un lien hypertexte ?', ['<link>', '*<a>', '<href>', '<url>'], {
    explanation: 'La balise <a> avec l’attribut href. <link> sert à lier une ressource, comme une feuille de style.',
  }),
  saisie('Quel attribut HTML décrit une image pour les lecteurs d’écran ?', ['alt'], {
    explanation: 'L’attribut alt fournit le texte alternatif de l’image.',
  }),
  qcm('Quelle propriété CSS change la couleur du texte ?', ['font-color', 'text-color', '*color', 'foreground'], {}),
  vf('En CSS, un sélecteur d’id (#menu) est plus spécifique qu’un sélecteur de classe (.menu).', true),
  ordre('Dans le modèle de boîte CSS, classez les couches de l’intérieur vers l’extérieur.', [
    'content', 'padding', 'border', 'margin',
  ]),
  qcm('Lesquelles de ces balises sont des balises sémantiques HTML5 ?', [
    '*<header>', '<div>', '*<nav>', '*<article>',
  ]),
  qcm('Avec display: flex, quelle propriété aligne les éléments sur l’axe principal ?', [
    'align-items', '*justify-content', 'flex-wrap', 'align-content',
  ]),
  saisie('Quelle balise contient le titre affiché dans l’onglet du navigateur ?', ['title', '<title>'], {
    explanation: 'La balise <title>, placée dans le <head>.',
  }),
  qcm('Quelle unité CSS est relative à la taille de police de l’élément racine ?', ['em', '*rem', 'px', 'vh'], {
    explanation: 'rem = root em : relatif à la taille de police de l’élément <html>.',
  }),
  vf('La balise <br> nécessite une balise fermante </br>.', false, {
    explanation: '<br> est un élément vide : il n’a pas de balise fermante.',
  }),
]);
