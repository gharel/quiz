# AGENTS.md : quiz Skazy Formation

Consignes pour les agents de code (Claude Code, Codex, Copilot…) et pour les humains qui travaillent sur ce dépôt. Le fonctionnement de l’application est décrit dans le `README.md`.

## Commandes

| Commande        | Rôle                                                   |
| --------------- | ------------------------------------------------------ |
| `npm run dev`   | Serveur de développement                               |
| `npm test`      | Tests unitaires Vitest                                 |
| `npm run build` | Vérification TypeScript et build de production `dist/` |

Avant chaque commit : `npm test` et `npm run build`. Un push sur `main` déploie https://gharel.github.io/quiz/.

## Typographie

- **Français soigné** : apostrophe ’, guillemets « » (jamais de guillemets droits hors code), points de suspension …
- **Espaces insécables** : écrire une espace ordinaire avant `: ; ! ?`, `»`, `%`, `€`, `$`, `·` et après `«`. À l’affichage, `src/lib/typo.ts` la rend insécable, comme dans les grands nombres (150 000), entre un nombre et le mot qui le suit (30 s, 10 questions) et avant un tiret d’incise : aucun signe ne se retrouve seul en début de ligne. Il corrige aussi le texte ajouté ensuite par React et les quiz personnels ou importés, donc inutile de saisir des espaces insécables. Le code (`code`, `pre`) et les champs de saisie ne sont pas modifiés. Les attributs (`title`, `aria-label`, `placeholder`) ne passent pas par ce correctif : y écrire `&nbsp;` si besoin. Ne pas utiliser l’espace fine (U+202F), invisible dans la police Georama.
- **Pas de tiret cadratin (—) ni demi-cadratin (–)** : utiliser le trait d’union `-`, y compris pour une incise (« Skazy Formation - Tous droits réservés ») ou une valeur absente (`-`). Entre un sujet et son angle, les deux-points (« Sujet : angle ») ; entre les parties d’un titre d’onglet, le point médian (« Page · Quiz · Skazy Formation »). `typo.test.ts` refuse tout tiret cadratin ou demi-cadratin dans `src/`.

## Contenus des quiz

- Titre « Sujet » ou « Sujet : angle », sans durée, client ni niveau (le niveau est porté par les pastilles). Description d’une phrase.
- 10 questions par quiz (12 pour Microsoft 365), en mélangeant les types : QCM, vrai/faux, choix multiples, réponse libre, curseur, remise en ordre.
- Durées : vrai/faux 20 s, QCM 40 s (50 s si la question est longue), choix multiples 50 s, réponse libre et curseur 30 s, remise en ordre 40 s (45 s si longue).
- **QCM qui ne se devinent pas** : la bonne réponse ne doit se repérer ni à sa longueur ni à son évidence.
  - Réponses de longueur et de forme proches (à 30 % près) : la bonne n’est pas la plus longue, la plus détaillée ou la plus nuancée. Si elle a besoin d’une précision, la mettre dans l’explication.
  - Mauvaises réponses plausibles : vraies confusions de débutant, notions voisines du même outil, même registre. Jamais de réponse absurde, humoristique ou hors sujet.
  - Pas d’indice involontaire : la bonne réponse ne reprend pas les mots de la question, elle n’est pas la seule à s’accorder avec elle, et les mots absolus (toujours, jamais, uniquement) ne sont pas réservés aux mauvaises réponses.
  - Chaque mauvaise réponse reste sans ambiguïté fausse : pas de seconde bonne réponse défendable.
  - `importes.test.ts` refuse une bonne réponse plus longue de 25 % (et de 10 caractères) que la plus longue des autres, et exige qu’elle soit la plus longue dans 30 % des QCM au plus.
- **Réponse libre** : lister les variantes acceptées (sigle, nom complet, avec ou sans article). `matchesText()` (`src/lib/scoring.ts`) ignore casse, accents et ponctuation et tolère une faute de frappe par mot (deux pour un mot de 8 lettres et plus, deux au total) pour ne pas frustrer sur l’orthographe ; les nombres, les sigles (SaaS, RGAA) et les mots de 3 lettres au plus restent exacts, si bien que « git stash » n’est pas pris pour « git status ». Ne pas poser une réponse libre dont une faute de frappe donnerait une autre réponse plausible.
- Aucune question répétée d’un quiz à l’autre. `importes.test.ts` vérifie titres, descriptions, niveaux, durées, cohérence des réponses, longueur des réponses de QCM et doublons.

## Fichiers

- Fins de ligne CRLF (`core.autocrlf=true`). Sous Git Bash, `sed -i` les retire : les rétablir avant de commiter.
