import { curseur, ordre, qcm, quiz, saisie, vf } from '../build';

export default quiz('webmarketing-reseaux-sociaux', 'webmarketing', 'Webmarketing et réseaux sociaux',
  'SEO, indicateurs clés et publicité en ligne : maîtrisez le vocabulaire du webmarketing.', [
  qcm('Que mesure le taux de clics (CTR) ?', [
    'Le nombre d’abonnés gagnés',
    '*Le rapport entre les clics et les impressions',
    'Le temps passé sur une page',
    'Le coût d’une campagne',
  ]),
  saisie('Quel sigle désigne l’optimisation pour les moteurs de recherche ?', ['SEO'], {
    explanation: 'SEO : Search Engine Optimization (référencement naturel).',
  }),
  vf('Le SEA désigne le référencement payant, via des annonces sponsorisées.', true),
  curseur('Une publication vue 2 000 fois obtient 50 clics. Quel est son taux de clics, en % ?', {
    min: 0, max: 10, step: 0.5, answer: 2.5, tolerance: 0, unit: '%',
  }, { explanation: '50 / 2 000 = 0,025, soit 2,5 %.' }),
  ordre('Remettez dans l’ordre les étapes du tunnel de conversion AIDA.', [
    'Attention', 'Intérêt', 'Désir', 'Action',
  ]),
  qcm('Quels indicateurs mesurent l’engagement sur une publication ?', [
    '*Les commentaires', '*Les partages', 'Le nombre de salariés', '*Les mentions J’aime',
  ]),
  qcm('Qu’est-ce qu’un test A/B ?', [
    '*Comparer deux versions pour garder la plus performante',
    'Tester un site sur deux navigateurs',
    'Publier deux fois le même contenu',
    'Valider une campagne en deux étapes',
  ]),
]);
