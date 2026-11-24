import { curseur, ordre, qcm, quiz, saisie, vf } from '../build';

export default quiz('claude-aller-plus-loin', 'ia', 'Claude : aller plus loin',
  'Projets, Artifacts, tâches planifiées, Claude Code, connecteurs, Skills et recherche approfondie : exploitez Claude au-delà de la conversation.', [
  qcm('Dans Claude, à quoi sert un Projet ?', [
    '*Regrouper des conversations qui partagent documents et instructions',
    'Planifier des réunions',
    'Partager son écran',
    'Héberger un site web',
  ]),
  saisie('Comment s’appellent les documents, tableaux ou mini-applications que Claude affiche à côté de la conversation ?', [
    'Artifact', 'Artifacts', 'artefact', 'artefacts',
  ]),
  vf('Une tâche planifiée permet à Claude de traiter une demande de façon récurrente, par exemple chaque lundi matin.', true),
  qcm('Qu’est-ce que Claude Code ?', [
    '*Un agent qui lit, modifie et exécute le code d’un projet',
    'Un langage de programmation',
    'Un éditeur de texte sans IA',
    'Un antivirus',
  ]),
  qcm('Que peut faire Claude Code dans un projet ?', [
    '*Expliquer le code existant', '*Corriger un bug', '*Lancer les tests', 'Garantir un code sans aucune erreur',
  ]),
  qcm('À quoi servent les connecteurs ?', [
    '*Donner à Claude un accès autorisé à des outils comme Google Drive, Slack ou un agenda',
    'Accélérer la connexion internet',
    'Traduire l’interface',
    'Partager un abonnement',
  ]),
  saisie('Quel protocole ouvert, publié par Anthropic, permet de connecter Claude à des outils externes ? (sigle)', [
    'MCP', 'Model Context Protocol',
  ]),
  qcm('Qu’est-ce qu’un Skill dans Claude ?', [
    '*Un ensemble d’instructions et de fichiers que Claude charge pour une tâche précise',
    'Un niveau d’abonnement',
    'Un badge de certification',
    'Un modèle Claude',
  ]),
  ordre('Remettez dans l’ordre le déroulé d’une recherche approfondie avec Claude.', [
    'Poser la question', 'Claude planifie ses recherches', 'Claude consulte de nombreuses sources', 'Claude rédige un rapport avec citations',
  ]),
  curseur('Une tâche planifiée tourne chaque jour ouvré, du lundi au vendredi. Combien de fois s’exécute-t-elle en 4 semaines ?', {
    min: 0, max: 30, step: 1, answer: 20, tolerance: 0,
  }, { explanation: '5 jours × 4 semaines = 20 exécutions.' }),
], 2);
