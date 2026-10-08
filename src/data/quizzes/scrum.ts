import { curseur, ordre, qcm, quiz, saisie, vf } from '../build';

export default quiz('scrum-agilite', 'gestion', 'Scrum et agilité',
  'Rôles, événements et artefacts : êtes-vous prêt pour votre premier sprint ?', [
  qcm('Quels sont les trois rôles (responsabilités) définis par Scrum ?', [
    '*Product Owner', '*Scrum Master', 'Chef de projet', '*Développeurs',
  ], { explanation: 'Le Scrum Guide 2020 définit le Product Owner, le Scrum Master et les Developers.' }),
  curseur('Quelle est la durée maximale d’un sprint, en semaines ?', {
    min: 1, max: 8, step: 1, answer: 4, tolerance: 0, unit: 'sem.',
  }, { explanation: 'Un sprint dure un mois au maximum.' }),
  ordre('Remettez les événements d’un sprint dans l’ordre chronologique.', [
    'Sprint Planning', 'Daily Scrum', 'Sprint Review', 'Sprint Retrospective',
  ]),
  qcm('Qui est responsable de maximiser la valeur du produit ?', [
    'Le Scrum Master', '*Le Product Owner', 'Le client', 'Les développeurs',
  ]),
  vf('Le Daily Scrum dure au maximum 15 minutes.', true),
  saisie('Comment s’appelle la liste ordonnée de tout ce qui est nécessaire pour améliorer le produit ?', [
    'Product Backlog', 'backlog', 'backlog produit', 'carnet de produit',
  ]),
  qcm('Que présente-t-on lors de la Sprint Review ?', [
    'Le budget du projet', '*L’incrément réalisé', 'Les congés de l’équipe', 'Le planning annuel',
  ]),
]);
