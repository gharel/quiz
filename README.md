# Quiz · Skazy Formation

Application de quiz interactifs pour tester les connaissances des apprenants, inspirée du mode « quiz classique » de Kahoot, aux couleurs du design system **Skazy Formation**.

**En ligne : https://gharel.github.io/quiz/**

## Fonctionnalités

- **Bibliothèque** : quiz d’exemple et quiz personnels, recherche, tri et **filtre par catégorie** (domaines de formation Skazy). Création, modification, duplication, import/export JSON et partage par lien.
- **Six types de questions** : QCM, choix multiples, vrai ou faux, réponse libre (casse, accents et ponctuation ignorés), curseur avec marge d’erreur, remise en ordre. Image et explication facultatives, temps et points (standard, doublés, sans points) réglables par question.
- **Mode en direct** : vous projetez le quiz, les apprenants rejoignent depuis leur téléphone avec un code à 4 chiffres ou un QR code, et reçoivent un animal (24 au choix, modifiable). Chrono, répartition des réponses, classement, podium, musique et effets sonores.
- **Mode solo** : chaque apprenant s’entraîne à son rythme, avec correction et explication après chaque question, puis un bilan détaillé.
- **Résultats** : chaque partie est enregistrée (classement, réussite par question, questions difficiles, réponses de chaque participant), filtrable par catégorie et par mode, exportable en CSV pour Excel depuis la liste ou le détail.
- **Accès formateur protégé** : l’accueil sert aux apprenants (Rejoindre) ; la bibliothèque, l’animation et les résultats demandent le mot de passe de l’animateur (le même que jeu-formation).
- **Responsive** (mobile, tablette, bureau) et **thème sombre** (automatique, clair ou sombre).

## Animer une partie en direct

1. Dans la Bibliothèque, choisissez un quiz puis **En direct**.
2. Les apprenants vont sur **gharel.github.io/quiz** (ou scannent le QR code), saisissent le code à 4 chiffres, leur pseudo, et peuvent changer d’animal.
3. Cliquez sur **Démarrer** quand tout le monde est là. Barre d’espace ou Entrée pour passer à l’écran suivant.

Les échanges en direct passent par un relais MQTT public et gratuit (EMQX, HiveMQ, shiftr.io ou Mosquitto, sans compte). Le premier chiffre du code indique le relais utilisé. Si des participants ne parviennent pas à se connecter (réseau filtré), utilisez **Changer de relais** dans le salon d’attente. N’utilisez que des pseudos : les données transitent par un service public.

## Mot de passe

Seule une empreinte PBKDF2 (SHA-256, 600 000 itérations) est publiée dans `src/lib/access.ts`. Pour changer de mot de passe : `npm run mot-de-passe`, puis recopier `SEL` et `EMPREINTE` dans ce fichier. L’accès reste ouvert sur le navigateur jusqu’au clic sur « Verrouiller l’accès sur cet appareil » (pied de page). Il s’agit d’une protection dissuasive : le site reste statique et public.

## Données

Tout est enregistré dans le navigateur de l’appareil utilisé (aucun serveur, aucun compte). Pensez à **exporter** vos quiz (JSON) pour les sauvegarder ou les transférer sur un autre poste, et vos résultats (CSV).

## Développement

```bash
npm install
npm run dev      # serveur de développement
npm test         # tests unitaires (scores, moteur de partie)
npm run build    # build de production dans dist/
```

Pile : React, TypeScript, Vite, Web Audio API (sons synthétisés, sans fichier audio), MQTT.js, Lucide. Le déploiement sur GitHub Pages est automatique à chaque push sur `main` (`.github/workflows/deploy.yml`).

Les quiz d’exemple sont dans `src/data/quizzes/`. Les jetons de couleurs, typographie (Georama), rayons et ombres proviennent du design system Skazy Formation (`src/styles/tokens.css`).

Chaque outil Skazy Formation a sa couleur de l’arc-en-ciel, dans cet ordre : Quiz rouge, Mini-jeux orange, Vigie jaune, Atelier d’exercices IA vert, Comprendre l'IA bleu, Prompthèque violet. Le favicon (`public/favicon.svg`, pictogramme blanc sur un dégradé rouge) sert aussi de pastille dans le bandeau : logo Skazy Formation, filet, pastille, nom de l’outil (`Logo` dans `src/components/Header.tsx`). Titre d’onglet : « Page · Quiz · Skazy Formation » (accueil : « Quiz · Skazy Formation »), fixé pour chaque vue dans `src/App.tsx`.

## Droits

© Skazy Formation — Tous droits réservés. Les quiz, contenus et résultats de cette application sont protégés : toute reproduction ou réutilisation, même partielle, est interdite sans l’accord écrit préalable de Skazy Formation.
