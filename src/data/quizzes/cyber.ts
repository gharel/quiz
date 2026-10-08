import { curseur, ordre, qcm, quiz, saisie, vf } from '../build';

export default quiz('cybersecurite-essentiels', 'web', 'Les essentiels de la cybersécurité',
  'Mots de passe, hameçonnage, sauvegardes : les bons réflexes pour protéger vos données.', [
  qcm('Quel est le signe le plus fiable d’un e-mail d’hameçonnage ?', [
    'Il contient un logo officiel',
    '*L’adresse de l’expéditeur ne correspond pas au domaine officiel',
    'Il est envoyé un lundi',
    'Il contient une signature',
  ], { explanation: 'Les logos se copient facilement : vérifiez toujours le domaine réel de l’expéditeur et des liens.' }),
  vf('Le cadenas dans la barre d’adresse garantit que le site est honnête.', false, {
    explanation: 'Le cadenas (HTTPS) chiffre la connexion, mais un site frauduleux peut aussi l’afficher.',
  }),
  qcm('Lesquelles de ces pratiques renforcent la sécurité de vos comptes ?', [
    '*Activer la double authentification',
    'Réutiliser un mot de passe robuste partout',
    '*Utiliser un gestionnaire de mots de passe',
    'Noter ses mots de passe sur un post-it',
  ]),
  curseur('Selon la règle 3-2-1, combien de copies de vos données faut-il conserver au total ?', {
    min: 1, max: 6, step: 1, answer: 3, tolerance: 0,
  }, { explanation: '3 copies, sur 2 supports différents, dont 1 hors site.' }),
  saisie('Comment appelle-t-on un logiciel malveillant qui chiffre vos fichiers et réclame une rançon ?', [
    'rançongiciel', 'ransomware', 'rancongiciel',
  ], { explanation: 'Rançongiciel, ou ransomware en anglais.' }),
  ordre('Classez ces mots de passe du plus faible au plus robuste.', [
    '123456',
    'soleil',
    'Soleil2026',
    'Soleil-Lagon-Tapioca-2026',
  ], { time: 45, explanation: 'La longueur est le critère le plus important, avant la variété des caractères.' }),
  vf('Les mises à jour logicielles corrigent souvent des failles de sécurité.', true),
  qcm('Quel mot de passe est le plus robuste ?', [
    'Azerty123!',
    'Nouméa2026',
    '*cheval-lagon-tapioca-orange',
    'P@ssw0rd',
  ], { explanation: 'Une phrase de passe longue et imprévisible résiste mieux qu’un mot court « complexe ».' }),
  vf('Le Wi-Fi public d’un café est aussi sûr que votre réseau personnel.', false, {
    explanation: 'Sur un réseau public, évitez les opérations sensibles ou utilisez un VPN.',
  }),
  qcm('Que signifie l’authentification à deux facteurs ?', [
    'Utiliser deux mots de passe différents',
    '*Combiner deux preuves d’identité de nature différente',
    'Se connecter depuis deux appareils',
    'Changer de mot de passe deux fois par an',
  ], { explanation: 'Par exemple un mot de passe (ce que vous savez) et un code reçu sur votre téléphone (ce que vous possédez).' }),
]);
