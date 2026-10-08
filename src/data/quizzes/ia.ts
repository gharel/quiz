import { curseur, ordre, qcm, quiz, saisie, vf } from '../build';

export default quiz('ia-generative-quotidien', 'ia', 'L’IA générative au quotidien',
  'ChatGPT, Claude, Gemini, Copilot : comprendre les bases et les bons usages en entreprise.', [
  qcm('Que signifie le sigle LLM ?', [
    'Large Learning Machine',
    '*Large Language Model',
    'Logical Language Module',
    'Linked Language Memory',
  ], { explanation: 'Un LLM est un grand modèle de langage, entraîné sur de très grandes quantités de texte.' }),
  saisie('Comment appelle-t-on une réponse inventée mais présentée comme vraie par une IA ?', [
    'hallucination', 'une hallucination', 'hallucinations',
  ]),
  curseur('En quelle année ChatGPT a-t-il été lancé auprès du grand public ?', {
    min: 2015, max: 2026, step: 1, answer: 2022, tolerance: 0,
  }, { explanation: 'OpenAI a lancé ChatGPT le 30 novembre 2022.' }),
  vf('On peut coller sans risque des données clients confidentielles dans un assistant IA grand public.', false, {
    explanation: 'Vérifiez toujours la politique de confidentialité et les règles de votre entreprise avant de partager des données.',
  }),
  qcm('Lesquels de ces éléments améliorent généralement un prompt ?', [
    '*Préciser le rôle attendu', '*Donner du contexte', 'Écrire le plus court possible', '*Indiquer le format de réponse',
  ]),
  ordre('Classez ces étapes d’une démarche de prompt efficace.', [
    'Définir l’objectif', 'Rédiger le prompt avec contexte', 'Analyser la réponse', 'Affiner le prompt',
  ]),
  qcm('Quel outil est développé par Anthropic ?', ['Gemini', 'Copilot', '*Claude', 'Mistral'], {}),
  vf('Une IA générative peut produire des contenus différents à partir du même prompt.', true),
  qcm('Que signifie le « G » de GPT ?', ['Global', '*Generative', 'Graphic', 'Guided'], {
    explanation: 'GPT : Generative Pre-trained Transformer.',
  }),
  saisie('Comment appelle-t-on le texte que l’on soumet à une IA générative pour obtenir une réponse ?', [
    'prompt', 'un prompt', 'invite', 'requête',
  ]),
]);
