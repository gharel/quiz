import { ordre, qcm, quiz, saisie, vf } from '../build';

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
]);
