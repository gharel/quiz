import { curseur, ordre, qcm, quiz, saisie, vf } from '../build';

export default quiz('microsoft-365-copilot', 'ia', 'Microsoft 365 Copilot : l’assistant dans vos applications',
  'Copilot Chat ou licence Copilot, données de l’organisation, Word, Excel, PowerPoint, Outlook, Teams et agents : Copilot au quotidien.', [
  qcm('Qu’apporte la licence Microsoft 365 Copilot par rapport à Copilot Chat ?', [
    'La recherche d’informations sur le web',
    '*L’accès aux données de l’organisation',
    'La rédaction de textes et de résumés',
    'L’utilisation sans connexion Internet',
  ], { explanation: 'Copilot Chat s’appuie sur le web et sur ce que vous lui transmettez ; la licence ajoute les données de l’organisation (e-mails, fichiers, réunions).' }),
  saisie('Comment s’appelle la couche qui relie e-mails, fichiers, réunions et contacts, et sur laquelle s’appuie Microsoft 365 Copilot ?', [
    'Microsoft Graph', 'Graph', 'le graph',
  ]),
  vf('Microsoft 365 Copilot peut vous montrer des documents auxquels vous n’avez pas accès.', false, {
    explanation: 'Il respecte les autorisations existantes : d’où l’importance de bien gérer les partages.',
  }),
  qcm('Dans quelles applications trouve-t-on Microsoft 365 Copilot ?', [
    '*Word',
    '*Excel',
    '*PowerPoint',
    '*Teams',
    'Access',
  ]),
  qcm('Dans Outlook, quelle fonction de Copilot aide à rattraper un long échange ?', [
    '*Le résumé de l’échange',
    'La mise en attente',
    'Les règles de tri',
    'L’accusé de lecture',
  ]),
  qcm('Quelle fonction d’Excel n’a PAS besoin de Copilot ?', [
    '*La mise en forme conditionnelle', 'L’analyse de données en langage naturel', 'La suggestion de formules', 'La proposition de graphiques',
  ]),
  qcm('Que peut faire Copilot dans PowerPoint ?', [
    '*Créer une présentation à partir d’un document Word', '*Résumer une présentation', '*Ajouter des diapositives sur un sujet', 'Présenter à votre place en réunion',
  ]),
  ordre('Remettez dans l’ordre l’usage de Copilot pour une réunion Teams.', [
    'Activer la transcription', 'Tenir la réunion', 'Demander le récapitulatif à Copilot', 'Partager les actions à mener',
  ]),
  qcm('Qu’est-ce qu’un agent dans Microsoft 365 Copilot (par exemple Researcher ou Analyst) ?', [
    '*Un assistant spécialisé pour une tâche',
    'Un utilisateur externe invité dans Teams',
    'Une extension du navigateur Edge',
    'Un modèle de document partagé',
  ], { explanation: 'Un agent est un assistant spécialisé qui enchaîne plusieurs étapes pour mener à bien une tâche, par exemple la recherche approfondie pour Researcher.' }),
  curseur('Copilot vous fait gagner 20 minutes sur chacune de vos 6 réunions hebdomadaires. Combien d’heures gagnez-vous par semaine ?', {
    min: 0, max: 6, step: 0.5, answer: 2, tolerance: 0, unit: 'h',
  }, { explanation: '6 × 20 min = 120 min, soit 2 h.' }),
], 2);
