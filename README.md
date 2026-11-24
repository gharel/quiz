# Quiz · Skazy Formation

Application de quiz interactifs, en direct ou en solo, pour tester les connaissances des apprenants, aux couleurs du design system **Skazy Formation**.

**En ligne : https://gharel.github.io/quiz/**

## Fonctionnalités

- **Bibliothèque** : quiz d’exemple, quiz importés (badge « Importé ») et quiz personnels, recherche, tri (alphabétique par défaut), **filtre par catégorie** (domaines de formation Skazy), par niveau et par origine. Le **niveau** (Initiation, Intermédiaire, Avancé) est symbolisé par 3 points dans la couleur de la catégorie. Chaque quiz se **modifie**, se **duplique** ou se **supprime** depuis sa page (réponses masquées par défaut) ; un quiz de la bibliothèque modifié ou supprimé ne l’est que sur l’appareil, avec retour à la version d’origine et restauration possibles. Import/export JSON et partage par lien. **Sélectionner** permet de cocher plusieurs quiz et de les **exporter** dans un seul fichier JSON, réimportable avec **Importer**.
- **Six types de questions** : QCM, choix multiples, vrai ou faux, réponse libre (casse, accents et ponctuation ignorés, une faute de frappe tolérée par mot, deux pour un mot de 8 lettres et plus, sauf sur les nombres, les sigles et les mots de 3 lettres au plus), curseur avec marge d’erreur, remise en ordre. Image et explication facultatives, temps et points (standard, doublés, sans points) réglables par question. Durées conseillées : vrai ou faux 20 s, QCM 40 s (50 s si la question est longue), choix multiples 50 s (la question est lue 4 s avant l’affichage des réponses).
- **Points** : une bonne réponse rapporte 1 000 points si elle est immédiate, puis de moins en moins avec le temps, jusqu’à 500 points au gong (jamais moins). La série de bonnes réponses est affichée, sans bonus.
- **Mode en direct** : vous projetez le quiz, les apprenants rejoignent depuis leur téléphone avec un code à 4 chiffres ou un QR code, et reçoivent un animal (24 au choix, modifiable). Chrono, participants ayant répondu, répartition des réponses, plus rapide, classement animé (points qui défilent, changements de place), podium avec confettis, musique et effets sonores. Pendant une question, l’animateur peut **mettre le chrono en pause** (bouton ou touche P ; les réponses sont bloquées et le temps de pause n’est pas compté), **passer la question** (après confirmation : les réponses sont ignorées, aucun point n’est gagné ni perdu et la question n’apparaît pas dans les résultats) ou **arrêter le chrono** pour corriger tout de suite.
- **Mode solo** : chaque apprenant s’entraîne à son rythme, avec correction et explication après chaque question, puis un bilan détaillé.
- **Résultats** : chaque partie est enregistrée (classement, réussite par question, questions difficiles, réponses de chaque participant), filtrable par catégorie et par mode. Le détail s’ouvre sur une **synthèse** (participants acquis / en cours d’acquisition / à consolider, notions acquises et à retravailler) ; on peut y saisir la formation, le formateur et des observations, repris dans le **bilan PDF** (Imprimer → Enregistrer au format PDF, mise en page A4) et l’**export CSV** pour Excel (bilan, participants, questions). **Importer un bilan (CSV)** reconstruit une partie à partir de ce fichier (sur un autre appareil, ou après avoir vidé le navigateur).
- **Accès formateur protégé** : l’accueil sert aux apprenants (Rejoindre) ; la bibliothèque, l’animation et les résultats demandent le mot de passe de l’animateur (le même que jeux).
- **Responsive** (mobile, tablette, bureau) et **thème sombre** : trois modes (celui du système, clair, sombre), choix commun à tous les outils Skazy Formation (clé `skazy-outils:theme` du navigateur).
- **Mode nuit des navigateurs** : la balise `<meta name="darkreader-lock" />` de `index.html` empêche le mode nuit de Brave (Dark Reader) de repeindre la page, même en thème clair. À conserver.
- **Typographie française** : à l’affichage, `src/lib/typo.ts` remplace l’espace ordinaire avant `: ; ! ? » % € $ ·` et un tiret d’incise, après `«`, dans les grands nombres (150 000) et entre un nombre et le mot qui le suit (30 s) par une espace insécable, pour qu’aucun signe ne se retrouve seul en début de ligne. Cela vaut pour l’interface et pour tous les quiz, y compris personnels et importés : inutile de saisir des espaces insécables. Le code (`code`, `pre`) et les champs de saisie ne sont pas modifiés. Pas de tiret cadratin : le trait d’union `-`. Règles complètes de rédaction dans `AGENTS.md`.

## Animer une partie en direct

1. Dans la Bibliothèque, choisissez un quiz puis **En direct**.
2. Les apprenants vont sur **gharel.github.io/quiz** (ou scannent le QR code), saisissent le code à 4 chiffres, leur pseudo, et peuvent changer d’animal.
3. Cliquez sur **Démarrer** quand tout le monde est là. Barre d’espace ou Entrée pour passer à l’écran suivant.

Les échanges en direct passent par un relais MQTT public et gratuit (EMQX, HiveMQ, shiftr.io ou Mosquitto, sans compte). Le premier chiffre du code indique le relais utilisé. Si des participants ne parviennent pas à se connecter (réseau filtré), utilisez **Changer de relais** dans le salon d’attente. N’utilisez que des pseudos : les données transitent par un service public.

## Mot de passe

Seule une empreinte PBKDF2 (SHA-256, 600 000 itérations) est publiée dans `src/lib/access.ts`. Pour changer de mot de passe : `npm run mot-de-passe`, puis recopier `SEL` et `EMPREINTE` dans ce fichier. L’accès reste ouvert sur le navigateur jusqu’au clic sur « Verrouiller l’accès sur cet appareil » (pied de page). Chaque mot de passe incorrect bloque la saisie sur ce navigateur, de plus en plus longtemps : 5 minutes, 1 heure, 24 heures, 1 semaine, 1 mois, puis définitivement (le bon mot de passe remet le compte à zéro). Il s’agit d’une protection dissuasive : le site reste statique et public.

## Données

Tout est enregistré dans le navigateur de l’appareil utilisé (aucun serveur, aucun compte). Pensez à **exporter** vos quiz (JSON) pour les sauvegarder ou les transférer sur un autre poste, et vos résultats (CSV).

Les quiz importés (`src/data/quizzes/importes.ts`) ont été relus et corrigés : titres au format « Sujet : angle » (le niveau est porté par les pastilles, jamais par le titre), descriptions, fautes, réponses ambiguës ou dépassées, quiz trop proches fusionnés, et chaque quiz mélange désormais QCM, vrai/faux, choix multiples, réponse libre, curseur et remise en ordre. Durées : vrai/faux 20 s, QCM 40 s (50 s si long), choix multiples 50 s, réponse libre et curseur 30 s, remise en ordre 40 s (45 s si longue). Les corrections se font directement dans ce fichier ; `importes.test.ts` vérifie descriptions, niveaux, durées, cohérence des réponses par type, titres et absence de question répétée d’un quiz à l’autre.

## Développement

```bash
npm install
npm run dev      # serveur de développement
npm test         # tests unitaires (scores, moteur de partie, accès, bandeau, thème)
npm run build    # build de production dans dist/
```

Pile : React, TypeScript, Vite, Web Audio API (sons synthétisés, sans fichier audio), MQTT.js, Lucide. Le déploiement sur GitHub Pages est automatique à chaque push sur `main` (`.github/workflows/deploy.yml`).

Les quiz d’exemple sont dans `src/data/quizzes/`. Les jetons de couleurs, typographie (Georama), rayons et ombres proviennent du design system Skazy Formation (`src/styles/tokens.css`).

Chaque outil Skazy Formation a sa couleur de l’arc-en-ciel, dans cet ordre : Vigie rouge, Quiz orange, Mini-jeux jaune, Atelier d’exercices IA vert, L’IA en schémas turquoise, Permis IA bleu, Prompthèque indigo, Captif violet. Le favicon (`public/favicon.svg`, pictogramme blanc sur un dégradé orange) sert aussi de pastille dans le bandeau commun aux outils (`src/components/Header.tsx`), de gauche à droite : la pastille et le nom « Quiz », en un seul lien vers l’accueil (`Logo`, `aria-current="page"` sur l’accueil) ; la navigation (Rejoindre, Bibliothèque, Résultats), en barre d’onglets en bas sur téléphone ; puis, à droite, le thème, le lien « Les outils » vers https://gharel.github.io/pro/ dans le même onglet (la roue `public/img/les-outils.svg`, copiée de la page d’accueil des outils ; icône seule sur téléphone, le texte restant dans le nom accessible), un filet, et en dernier le logo Skazy Formation, lien vers https://formation.skazy.nc dans un nouvel onglet (« Site de Skazy Formation (nouvel onglet) »). Les écrans projetés (partie en direct, solo, partage, manette du joueur) gardent leur barre `StageBar`. Les pages longues (bibliothèque, détail d’un quiz, éditeur, résultats) ont un bouton rond « Remonter en haut » (`src/components/BackToTop.tsx`), visible après 1,2 écran de défilement, au-dessus de la barre d’onglets et de la barre d’enregistrement. Titre d’onglet : « Page · Quiz · Skazy Formation » (accueil : « Quiz · Skazy Formation »), fixé pour chaque vue dans `src/App.tsx`.

## Droits

© Skazy Formation - Tous droits réservés. Les quiz, contenus et résultats de cette application sont protégés : toute reproduction ou réutilisation, même partielle, est interdite sans l’accord écrit préalable de Skazy Formation.
