import { curseur, ordre, qcm, quiz, saisie, vf } from '../build';

export default quiz('ia-generative-quotidien', 'ia', 'IA générative',
  'LLM, hallucinations, confidentialité, vérification des réponses : comprendre ce que l’IA générative sait faire, et ses limites.', [
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
  qcm('Lesquelles de ces limites concernent les IA génératives ?', [
    '*Des biais hérités des données d’entraînement', '*Des erreurs présentées comme des faits', '*Des informations parfois dépassées', 'La distance géographique avec le serveur',
  ], { explanation: 'Une IA générative peut se tromper avec aplomb : vérifiez toujours les informations importantes.' }),
  ordre('Classez ces étapes de l’histoire de l’IA dans l’ordre chronologique.', [
    'Le test de Turing (1950)', 'Deep Blue bat Kasparov aux échecs (1997)', 'AlphaGo bat un champion de go (2016)', 'Lancement de ChatGPT (2022)',
  ]),
  vf('Une IA générative peut produire des contenus différents à partir du même prompt.', true),
  qcm('Que signifie le « G » de GPT ?', ['Global', '*Generative', 'Graphic', 'Guided'], {
    explanation: 'GPT : Generative Pre-trained Transformer.',
  }),
  saisie('Comment appelle-t-on le texte que l’on soumet à une IA générative pour obtenir une réponse ?', [
    'prompt', 'un prompt', 'invite', 'requête',
  ]),
  vf('Une IA est toujours fiable, car elle signale quand elle se trompe.', false, {
    explanation: 'Elle peut inventer une réponse sans le signaler (hallucination) : la vérification reste indispensable.',
  }),
]);
