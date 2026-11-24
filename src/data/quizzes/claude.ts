import { curseur, ordre, qcm, quiz, saisie, vf } from '../build';

export default quiz('claude-aller-plus-loin', 'ia', 'Claude : aller plus loin',
  'Projets, Artifacts, tâches planifiées, Claude Code, connecteurs, Skills et recherche approfondie : exploitez Claude au-delà de la conversation.', [
  qcm('Dans Claude, à quoi sert un Projet ?', [
    'Archiver automatiquement les anciennes conversations',
    '*Organiser des conversations avec des documents communs',
    'Comparer les réponses de deux modèles',
    'Convertir ses conversations en documents Word',
  ], { explanation: 'Un Projet regroupe des conversations qui partagent des documents et des instructions communes.' }),
  saisie('Comment s’appellent les documents, tableaux ou mini-applications que Claude affiche à côté de la conversation ?', [
    'Artifact', 'Artifacts', 'artefact', 'artefacts',
  ]),
  vf('Une tâche planifiée permet à Claude de traiter une demande de façon récurrente, par exemple chaque lundi matin.', true),
  qcm('Qu’est-ce que Claude Code ?', [
    'Un langage de programmation conçu pour l’IA',
    'Un service d’hébergement d’applications web',
    '*Un assistant qui agit directement sur le code',
    'Un outil de maquettage d’interfaces',
  ], { explanation: 'Claude Code est un agent qui lit, modifie et exécute le code d’un projet, avec votre autorisation.' }),
  qcm('Que peut faire Claude Code dans un projet ?', [
    '*Expliquer le code existant',
    '*Corriger un bug',
    'Remplacer entièrement la relecture humaine',
    '*Lancer les tests',
  ], { explanation: 'Claude Code peut expliquer, corriger et tester, mais son code doit toujours être relu : il ne garantit pas l’absence d’erreur.' }),
  qcm('Dans Claude, à quoi servent les connecteurs ?', [
    'Relier plusieurs comptes Claude en un seul',
    '*Relier Claude à des outils comme Drive ou Slack',
    'Brancher des périphériques à son ordinateur',
    'Sécuriser la connexion internet de l’équipe',
  ], { explanation: 'Les connecteurs donnent à Claude un accès autorisé à des outils comme Google Drive, Slack ou un agenda.' }),
  saisie('Quel protocole ouvert, publié par Anthropic, permet de connecter Claude à des outils externes ? (sigle)', [
    'MCP', 'Model Context Protocol',
  ]),
  qcm('Qu’est-ce qu’un Skill dans Claude ?', [
    'Un modèle de langage plus petit et plus rapide',
    '*Un ensemble d’instructions et de fichiers pour une tâche',
    'Un type d’abonnement avec plus de messages',
    'Un raccourci clavier pour lancer une conversation',
  ], { explanation: 'Un Skill regroupe des instructions et des fichiers que Claude charge pour réaliser une tâche précise.' }),
  ordre('Remettez dans l’ordre le déroulé d’une recherche approfondie avec Claude.', [
    'Poser la question', 'Claude planifie ses recherches', 'Claude consulte de nombreuses sources', 'Claude rédige un rapport avec citations',
  ]),
  curseur('Une tâche planifiée tourne chaque jour ouvré, du lundi au vendredi. Combien de fois s’exécute-t-elle en 4 semaines ?', {
    min: 0, max: 30, step: 1, answer: 20, tolerance: 0,
  }, { explanation: '5 jours × 4 semaines = 20 exécutions.' }),
], 2);
