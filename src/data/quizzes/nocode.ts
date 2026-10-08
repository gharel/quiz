import { curseur, ordre, qcm, quiz, saisie, vf } from '../build';

export default quiz('nocode-automatisation', 'nocode', 'NoCode et automatisation',
  'Airtable, Notion, Make, n8n : les notions clés pour automatiser sans coder.', [
  qcm('Dans un scénario d’automatisation, comment appelle-t-on l’événement qui le déclenche ?', [
    'Une action', '*Un déclencheur', 'Un filtre', 'Un module',
  ], { explanation: 'Le déclencheur (trigger) lance le scénario : nouvel e-mail, nouvelle ligne, formulaire envoyé…' }),
  saisie('Quel mot anglais désigne une URL qui reçoit automatiquement des données envoyées par une autre application ?', [
    'webhook', 'web hook', 'webhooks',
  ]),
  qcm('Lesquels de ces outils permettent de créer des automatisations ?', [
    '*Make', '*n8n', 'Figma', '*Zapier',
  ]),
  vf('n8n peut être auto-hébergé sur votre propre serveur.', true),
  ordre('Remettez dans l’ordre les étapes d’un scénario simple.', [
    'Un formulaire est envoyé', 'Les données sont filtrées', 'Une ligne est ajoutée dans Airtable', 'Un e-mail de confirmation part',
  ]),
  qcm('Dans Airtable, comment s’appelle l’équivalent d’un fichier de tableur ?', [
    'Un classeur', '*Une base', 'Un dossier', 'Une page',
  ]),
  vf('Une plateforme NoCode permet de créer des applications sans écrire de code.', true),
  qcm('Dans Notion, quel élément organise des pages en tableau, en kanban ou en calendrier ?', ['Un widget', '*Une base de données', 'Un bloc de code', 'Un classeur']),
  qcm('Que signifie le sigle API ?', ['Application Personnelle Intégrée', '*Application Programming Interface', 'Automatic Process Integration', 'Advanced Programming Input']),
  curseur('Un scénario s’exécute toutes les 15 minutes. Combien de fois s’exécute-t-il en une heure ?', {
    min: 0, max: 10, step: 1, answer: 4, tolerance: 0,
  }),
]);
