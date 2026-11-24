// Quiz importés (bibliothèque historique du formateur), relus et corrigés.
// Ce fichier est la référence : les corrections se font ici.
import type { Quiz } from '../../lib/types';

const IMPORTED_QUIZZES: Quiz[] = [
 {
  "id": "ia-intermediaire",
  "category": "ia",
  "title": "IA - Intermédiaire",
  "description": "Types d'IA, usages, limites, fiabilité et bonnes pratiques de prompt : les bases de l'IA générative pour mieux l'utiliser.",
  "level": 2,
  "questions": [
   {
    "id": "k1",
    "text": "Une intelligence artificielle est basée sur des statistiques.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k2",
    "text": "Quel assistant n'est PAS américain ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "ChatGPT",
     "Gemini",
     "Claude",
     "DeepSeek"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k3",
    "text": "Que signifie le caractère « multimodal » d’un assistant ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Il fonctionne sur plusieurs ordinateurs",
     "Il utilise plusieurs modèles simultanément",
     "Il peut traiter plusieurs types de contenus",
     "Il répond dans plusieurs fenêtres"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k4",
    "text": "L'IA est toujours fiable, car elle indiquera quand elle se trompe.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k5",
    "text": "Quels sont les ingrédients fondamentaux d’un prompt ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Une source et une conclusion",
     "Un objectif et un contexte",
     "Une date et une signature",
     "Une image et un lien"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k6",
    "text": "Parmi les éléments suivants, lequel ne nécessite PAS systématiquement une vérification lorsqu’il est généré par une IA ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Données chiffrées et statistiques",
     "Dates et événements historiques",
     "Citations",
     "Proposition de reformulation"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k7",
    "text": "Un prompt doit être réécrit à chaque utilisation.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k8",
    "text": "Quelle fonctionnalité n'existe PAS dans ChatGPT ou Claude ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Tâche planifiée",
     "Traduction de vidéos",
     "Recherche web",
     "Mode vocal"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k9",
    "text": "Quel élément distingue un agent IA d'un assistant IA ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Il fonctionne sans modèle d’intelligence artificielle",
     "Il génère seulement des images",
     "Il répond à des questions techniques",
     "Il peut enchaîner plusieurs actions"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k10",
    "text": "L'IA apprend en direct de vos conversations pour être plus performante dans les interactions avec d'autres utilisateurs.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1784542003905,
  "updatedAt": 1793855401606,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "claude-initiation",
  "category": "ia",
  "title": "Claude - Initiation",
  "description": "Modèles Claude, IA générative, ingrédients d'un prompt, fonctionnalités : les bases pour bien démarrer avec Claude.",
  "level": 1,
  "questions": [
   {
    "id": "k11",
    "text": "Une intelligence artificielle est basée sur des statistiques.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k12",
    "text": "Quel modèle ne fait PAS partie de Claude ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Haiku",
     "Fable",
     "Opus",
     "Astra"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k13",
    "text": "Que signifie le caractère « génératif » d’un assistant ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Il fonctionne sur plusieurs ordinateurs",
     "Il utilise plusieurs modèles simultanément",
     "Il peut créer plusieurs types de contenu",
     "Il répond dans plusieurs fenêtres"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k14",
    "text": "L'IA est toujours fiable, car elle indiquera quand elle se trompe.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k15",
    "text": "Quels sont les trois ingrédients fondamentaux d’un prompt ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Une source, un tableau et une conclusion",
     "Une tâche, un objectif et un contexte",
     "Un titre, une date et une signature",
     "Un exemple, une image et un lien"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k16",
    "text": "Trouvez l'intrus parmi ces fonctionnalités :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Mode vocal",
     "Vision et analyse de fichiers",
     "Recherche",
     "Montage vidéo"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k17",
    "text": "Un prompt doit être réécrit à chaque utilisation.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k18",
    "text": "Quelle notion ne concerne PAS l'IA ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Prompt",
     "Responsive",
     "Skill",
     "Hallucination"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k19",
    "text": "Quel élément distingue un agent IA d'un assistant IA ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Il fonctionne sans modèle d’intelligence artificielle",
     "Il génère seulement des images",
     "Il répond à des questions techniques",
     "Il peut enchaîner plusieurs actions"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k20",
    "text": "L'IA apprend en direct de vos conversations pour être plus performante dans les interactions avec d'autres utilisateurs.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1790735011062,
  "updatedAt": 1793769632901,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "reseaux-sociaux",
  "category": "webmarketing",
  "title": "Réseaux Sociaux",
  "description": "Stratégie de visibilité, engagement, ligne éditoriale, LinkedIn, Facebook : les bases pour animer vos réseaux sociaux.",
  "level": 1,
  "questions": [
   {
    "id": "k21",
    "text": "En Nouvelle-Calédonie, il est conseillé de publier le même contenu sur tous les réseaux sans modification.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k22",
    "text": "Quel est l’objectif principal d’une stratégie de visibilité sur les réseaux sociaux ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Vendre un produit",
     "Fédérer une communauté",
     "Faire connaître sa marque",
     "Récolter des avis"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k23",
    "text": "Le taux d’engagement moyen d’un post vidéo sur Facebook est supérieur à celui d’un post image.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k24",
    "text": "Quelle plateforme est la plus adaptée au B2B ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "YouTube",
     "LinkedIn",
     "Facebook",
     "TikTok"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k25",
    "text": "Quelle action relève de l’engagement ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Cliquer sur une publicité",
     "Aimer ou commenter un post",
     "Acheter un produit",
     "Télécharger une brochure"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k26",
    "text": "Le community manager et le social media manager ont les mêmes missions.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k27",
    "text": "Quelle est la bonne pratique de publication sur Facebook ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Poster plusieurs fois par jour",
     "Ignorer les commentaires",
     "Mettre de nombreux emojis",
     "Créer du contenu court et visuel"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k28",
    "text": "Quelle phrase décrit le mieux la ligne éditoriale ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Une publicité ponctuelle",
     "Un plan de communication externe",
     "Un ensemble de règles définissant les sujets de publications",
     "Une liste d’influenceurs à contacter"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k29",
    "text": "Facebook, LinkedIn et Instagram sont les trois réseaux sociaux les plus utilisés en Europe et aux États-Unis.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k30",
    "text": "Quel site gratuit est utile pour créer des visuels de publication ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Buffer",
     "Mention",
     "Canva",
     "Behance"
    ],
    "correct": [
     2
    ]
   }
  ],
  "createdAt": 1759981936400,
  "updatedAt": 1792454960034,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "atelier-cybersecurite-7h",
  "category": "web",
  "title": "Atelier Cybersécurité 7h",
  "description": "Phishing, ingénierie sociale, mots de passe, MFA, ransomware : les réflexes essentiels pour se protéger des cyberattaques.",
  "level": 1,
  "questions": [
   {
    "id": "k31",
    "text": "Qu’est-ce que le phishing ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Un antivirus spécialisé dans les SMS",
     "Une sauvegarde automatique",
     "Une usurpation d’identité par e-mail",
     "Une mise à jour système"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k32",
    "text": "La règle de sauvegarde 3-2-1 prévoit notamment…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "3 antivirus différents",
     "2 supports ou emplacements différents",
     "2 mots de passe différents",
     "1 seul fichier local"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k33",
    "text": "La DSI peut avoir besoin de votre mot de passe.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k34",
    "text": "L’ingénierie sociale exploite surtout…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "les failles d'antivirus",
     "la confiance humaine",
     "le débit Internet",
     "la puissance du processeur"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k35",
    "text": "Trouvez l'intrus parmi ces leviers d'ingénierie sociale :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "L'autorité",
     "L'urgence",
     "L’appartenance au groupe",
     "Le mot de passe"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k36",
    "text": "Quel mot de passe est particulièrement risqué ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "MotdePasseTrèsRisqué !",
     ",P4ssW0rd !",
     "4dMin4Ever#:",
     "Azerty123"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k37",
    "text": "À quoi sert la MFA ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Supprimer les pièces jointes",
     "Ajouter un niveau de vérification",
     "Accélérer la navigation web",
     "Remplacer toutes les sauvegardes"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k38",
    "text": "Que fait un ransomware ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Il chiffre les données et exige une rançon",
     "Il supprime les fichiers temporaires",
     "Il espionne l'activité et vole les données",
     "Il intercepte les frappes clavier"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k39",
    "text": "Parmi ces navigateurs, lequel intègre par défaut un bloqueur de publicités et de traqueurs ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Chrome",
     "Edge",
     "Safari",
     "Brave"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k40",
    "text": "Les réflexes ISOLER, ALERTER, DOCUMENTER, INFORMER et STOP sont dans le bon ordre.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1781562015418,
  "updatedAt": 1781564080787,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "davinci-resolve-initiation",
  "category": "graphisme",
  "title": "Davinci Resolve - Initiation",
  "description": "Pages, bins, points In et Out, étalonnage, export : les bases du montage vidéo avec DaVinci Resolve.",
  "level": 1,
  "questions": [
   {
    "id": "k41",
    "text": "Quelle page sert à importer et organiser les fichiers ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Fairlight",
     "Exportation",
     "Media",
     "Fusion"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k42",
    "text": "Que désignent les IPS dans une vidéo ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Le nombre de pistes audio disponibles",
     "Le type de codec utilisé à l’export",
     "Le nombre d’images affichées par seconde",
     "Le volume sonore du fichier final"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k43",
    "text": "Plus la résolution est élevée, plus l’image est nette, mais plus la vidéo est lourde.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k44",
    "text": "Qu'est-ce que le multipiste ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Disposer de plusieurs pistes audio et vidéo pour placer des éléments",
     "Pouvoir ajouter plusieurs éléments les uns à la suite des autres",
     "Ajouter un calque pour gérer plusieurs effets",
     "Avoir plusieurs méthodes pour importer des médias"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k45",
    "text": "La méthode pancake facilite le dérushage.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k46",
    "text": "Quelle structure de bins est recommandée dans la page Media ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Vidéos / Musiques / Sons / Images / Exports",
     "Plans / Filtres / Logos / Sous-titres / Archives",
     "Clips / LUTs / Effets / Rendus / Brouillons",
     "Rushes / Final / Brouillon / Tests / Autres"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k47",
    "text": "Quelle étape consiste à harmoniser les couleurs des plans ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Assemblage",
     "Étalonnage",
     "Encodage",
     "Habillage"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k48",
    "text": "Que permettent les points In et Out ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Régler les niveaux audio d’une piste",
     "Sélectionner l’entrée et la sortie d’un clip à insérer",
     "Créer automatiquement un générique",
     "Choisir le codec d’export"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k49",
    "text": "Placer les cuts sur les pics de la musique peut aider à obtenir un rendu sonore de qualité.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k50",
    "text": "Quel format privilégier pour vos exports ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "DIVX",
     "JPG",
     "PDF",
     "MP4"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1779170451671,
  "updatedAt": 1779237423731,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "atelier-numerique-responsable-4h",
  "category": "gestion",
  "title": "Atelier Numérique responsable 4h",
  "description": "Empreinte du numérique, sobriété, économie circulaire, règle des 5R : les bases d'un numérique plus responsable.",
  "level": 1,
  "questions": [
   {
    "id": "k51",
    "text": "Quelle part des émissions mondiales de gaz à effet de serre représente le numérique ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "1%",
     "2%",
     "4%",
     "8%"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k52",
    "text": "En moyenne, la durée de vie d’un ordinateur aujourd’hui est de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "2 ans",
     "4 ans",
     "7 ans",
     "11 ans"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k53",
    "text": "La raréfaction de l’eau n’a aucun lien avec le numérique.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k54",
    "text": "Le pilier social du numérique responsable inclut :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "L’économie circulaire",
     "L’accessibilité numérique",
     "Réduction des émissions",
     "Gestion des déchets électroniques"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k55",
    "text": "L’un des enjeux économiques du numérique responsable est de :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Accélérer le renouvellement des appareils",
     "Augmenter les marges de production",
     "Favoriser la consommation énergétique",
     "Réduire les coûts et favoriser la durabilité du matériel"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k56",
    "text": "Quel geste réduit les émissions liées à une recherche internet ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Ouvrir plusieurs pages de résultats",
     "Aller directement à l’adresse du site",
     "Utiliser un moteur de recherche",
     "Stocker la page dans le cloud"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k57",
    "text": "Quelle stratégie des 5R consiste à éviter l’achat inutile ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Réparer",
     "Refuser",
     "Réutiliser",
     "Recycler"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k58",
    "text": "Quel usage représente une part importante du trafic web mondial ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le streaming vidéo",
     "Les signatures d’e-mail",
     "Les calendriers partagés",
     "Le stockage cloud"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k59",
    "text": "Quelle est une bonne pratique professionnelle de sobriété numérique ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Multiplier les appareils pour le confort",
     "Conserver les doublons de fichiers",
     "Archiver tous les e-mails sur le cloud",
     "Limiter les destinataires d’un e-mail aux personnes concernées"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k60",
    "text": "Le greenwashing et le pinkwashing sont des techniques marketing.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1778037720327,
  "updatedAt": 1778039344833,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "git-gitlab-initiation",
  "category": "dev",
  "title": "Git & Gitlab - Initiation",
  "description": "Git, commits, branches, GitLab : les notions clés pour versionner un projet et collaborer sur des dépôts.",
  "level": 1,
  "questions": [
   {
    "id": "k61",
    "text": "Quel est le rôle de Git ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Héberger des dépôts en ligne",
     "Versionner un projet",
     "Créer des tickets de suivi",
     "Générer automatiquement du HTML"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k62",
    "text": "Quel est le rôle de GitLab ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Un éditeur de code HTML",
     "Un langage de programmation",
     "Un outil de génération de fichiers CSS",
     "Une plateforme pour héberger et collaborer sur des dépôts Git"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k63",
    "text": "Après fusion d’une branche, on ne peut pas la supprimer.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k64",
    "text": "Que représente un commit ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Une invitation à rejoindre un dépôt",
     "Une correction automatique de bug",
     "Un instantané du projet avec une description",
     "Un lien vers une issue GitLab"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k65",
    "text": "Quel type de fichier est à versionner dans un site web statique ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "node_modules/",
     "HTML",
     ".env",
     ".idea/"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k66",
    "text": "Quelle commande sert à sélectionner des changements à enregistrer ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "git add",
     "git commit",
     "git stash",
     "git push"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k67",
    "text": "Dans la norme commitlint, le scope est obligatoire.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k68",
    "text": "Que permet git status ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Afficher l’état actuel du dépôt",
     "Créer une branche distante",
     "Générer un changelog",
     "Fusionner une merge request"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k69",
    "text": "Dans GitLab, où peut-on voir un historique visuel du dépôt ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Code ⇨ Branches ⇨ New branch",
     "Plan ⇨ Issues",
     "Code ⇨ Repository graph",
     "Manage ⇨ Members"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k70",
    "text": "Une convention courante pour nommer les tags est le format v1.5.3.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1777956835674,
  "updatedAt": 1777963105722,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "wordpress-bonnes-pratiques-dev-initiation",
  "category": "dev",
  "title": "WordPress Bonnes pratiques Dev - Initiation",
  "description": "CPT, taxonomies, ACF, widgets, hooks : structurer et étendre un site WordPress dans les règles de l'art.",
  "level": 1,
  "questions": [
   {
    "id": "k71",
    "text": "Quel outil est recommandé pour structurer proprement des données personnalisées ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Elementor",
     "ACF",
     "WooCommerce",
     "FileZilla"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k72",
    "text": "Quel type de champ ACF est recommandé pour des listes d’éléments ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Champ couleur",
     "Champ liste",
     "Champ URL",
     "Répéteur"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k73",
    "text": "Les taxonomies sont adaptées pour classer des données répétées comme une ville ou une catégorie.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k74",
    "text": "Un CPT correspond à :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Une taxonomie native hiérarchique",
     "Un champ personnalisé texte",
     "Un type de contenu personnalisé",
     "Un système de cache"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k75",
    "text": "Une taxonomie sert principalement à…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Générer des templates PHP",
     "Héberger des médias",
     "Gérer les rôles utilisateurs",
     "Organiser, structurer et filtrer les contenus"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k76",
    "text": "Quelle est l'utilité des widgets dans WordPress ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Gérer les révisions des articles",
     "Créer une page de formulaire",
     "Attribuer une catégorie à une page",
     "Ajouter une zone réutilisable"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k77",
    "text": "Le nettoyage de l’admin peut passer par la suppression des menus inutiles et l’adaptation des rôles.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k78",
    "text": "Quel plugin facilite la création de Custom Post Types ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Simple CPT",
     "WPForms",
     "Rank Math",
     "Yoast SEO"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k79",
    "text": "Que permettent les hooks WordPress ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Modifier le cœur de WordPress directement",
     "Désactiver PHP",
     "Étendre le comportement sans modifier le cœur ou les plugins tiers",
     "Générer une base de données"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k80",
    "text": "WordPress ne permet pas de changer les menus.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1775789246382,
  "updatedAt": 1775790840356,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "shopify-initiation",
  "category": "dev",
  "title": "Shopify - Initiation",
  "description": "Back-office, produits, pages légales, paiement en Nouvelle-Calédonie : prenez en main votre boutique Shopify.",
  "level": 1,
  "questions": [
   {
    "id": "k81",
    "text": "Shopify est une solution :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "PaaS",
     "SaaS",
     "Open Source",
     "IaaS"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k82",
    "text": "Un site e-commerce se compose de deux parties :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Catalogue et panier",
     "Front-office et back-office",
     "Hébergement et nom de domaine",
     "Vitrine et entrepôt"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k83",
    "text": "Shopify est présenté comme une solution nécessitant une installation locale complète.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k84",
    "text": "Pour accéder à l’administration, on utilise :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Une adresse Gmail",
     "Une URL spécifique de type votreboutique.myshopify.com/admin",
     "Un logiciel à installer",
     "Une adresse FTP"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k85",
    "text": "Dans la structure d’une boutique, la section « Produits » correspond à :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Les modes de paiement uniquement",
     "La comptabilité",
     "Ce que vous vendez",
     "Les paramètres juridiques"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k86",
    "text": "La section « Pages » sert à gérer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Les stocks",
     "Les campagnes d’emailing",
     "Les expéditions",
     "Le contenu informatif"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k87",
    "text": "Une page devenue inutile peut être supprimée ou dépubliée par sécurité.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k88",
    "text": "Quel système de paiement choisir, si vous avez un compte calédonien ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "EPay",
     "Paypal",
     "Stripe",
     "Visa"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k89",
    "text": "Quelle page fait partie des pages légales obligatoires d'une boutique en ligne ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Galerie photo",
     "Blog actualités",
     "Politique de confidentialité",
     "Fiche produit"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k90",
    "text": "Shopify propose de vendre des produits virtuels.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1775788351171,
  "updatedAt": 1775789202384,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "ia-arbe",
  "category": "ia",
  "title": "IA Arbé",
  "description": "Vocabulaire de l'IA, construction d'un bon prompt, génération d'images et inpainting : les bases pour bien utiliser l'IA.",
  "level": 1,
  "questions": [
   {
    "id": "k91",
    "text": "Une intelligence artificielle utilise un modèle d'apprentissage.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k92",
    "text": "Quel mot ne fait PAS partie du vocabulaire lié à l'intelligence artificielle ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Prompt",
     "Hallucination",
     "Inpainting",
     "Responsive"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k93",
    "text": "Trouvez l'intrus parmi ces applications possibles de l'IA :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "prédiction",
     "monitoring",
     "variabilité",
     "automatisation"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k94",
    "text": "L'IA est toujours fiable, car elle indiquera quand elle se trompe.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k95",
    "text": "Quel est un des points fondamentaux du prompt ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Confus et court",
     "Clair et précis",
     "Long et simple",
     "Subjectif et partiel"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k96",
    "text": "Trouvez l'intrus parmi ces éléments à ajouter au prompt :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Format",
     "Action",
     "Contexte",
     "Modèle"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k97",
    "text": "ChatGPT peut vous poser des questions pour améliorer ses réponses.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k98",
    "text": "Quel ajout n'est PAS utile à un prompt graphique ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La lumière",
     "La politesse",
     "Un moteur de rendu",
     "Un style graphique"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k99",
    "text": "Que permet Photoshop grâce à l'IA ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "L'aérographe",
     "Le painting",
     "L'inpainting",
     "La sélection de tracé"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k100",
    "text": "Les IA de génération d'images ont de meilleurs résultats en ajoutant des adjectifs à vos prompts.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1773112623486,
  "updatedAt": 1773112908076,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "jotform-intermediaire",
  "category": "nocode",
  "title": "Jotform - Intermédiaire",
  "description": "Champs conditionnels, éditeur PDF, workflows, rapports, applications : aller plus loin avec Jotform.",
  "level": 2,
  "questions": [
   {
    "id": "k101",
    "text": "À quoi servent principalement les champs conditionnels dans Jotform ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Modifier l’apparence du formulaire",
     "Exporter les données",
     "Rendre le formulaire dynamique en fonction des réponses",
     "Ajouter un logo personnalisé"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k102",
    "text": "Que permet l’éditeur PDF dans Jotform ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Modifier le code HTML du formulaire",
     "Créer des PDF professionnels et personnalisés",
     "Traduire automatiquement les formulaires",
     "Ajouter des animations"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k103",
    "text": "Il est possible de limiter les soumissions dans les options de sécurité.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k104",
    "text": "Parmi ces modèles de formulaires, lequel n'existe PAS dans Jotform ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Formulaires multipages",
     "Formulaires avec calculs",
     "Formulaires conditionnels imbriqués",
     "Formulaires en réalité augmentée"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k105",
    "text": "Où trouve-t-on le générateur d’applications Jotform ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Dans les paramètres du compte",
     "Dans le menu principal Jotform",
     "Dans l’éditeur PDF",
     "Dans la bibliothèque de modèles"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k106",
    "text": "Quel rôle peut jouer un approbateur dans un workflow ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Modifier le formulaire",
     "Supprimer les données",
     "Approuver, refuser ou demander une révision",
     "Modifier les conditions"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k107",
    "text": "Quel type de document peut être généré via l’éditeur PDF ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Vidéo interactive",
     "Contrat ou devis",
     "Application mobile",
     "Module de paiement"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k108",
    "text": "Les rapports de données permettent de créer des graphiques basés sur les soumissions.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k109",
    "text": "Quelle action peut être automatisée dans Jotform ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "L’envoi d’un document PDF",
     "Le design automatique du formulaire",
     "La création de comptes utilisateurs",
     "L'ajout de champs conditionnels"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k110",
    "text": "Que peut-on ajouter dans une application Jotform ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Du code Java uniquement",
     "Un serveur externe",
     "Un tableau croisé dynamique",
     "Des pages, du texte et des données de soumission"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1765162740677,
  "updatedAt": 1765235917030,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "jotform-initiation",
  "category": "nocode",
  "title": "Jotform - Initiation",
  "description": "Jotform : créer, intégrer et exporter des formulaires, utiliser Jotform Tables et appliquer les bonnes pratiques de conception.",
  "level": 1,
  "questions": [
   {
    "id": "k111",
    "text": "Jotform est principalement une plateforme permettant de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Créer des sites e-commerce",
     "Créer et automatiser des formulaires",
     "Gérer des campagnes publicitaires",
     "Créer des bases de données SQL"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k112",
    "text": "Quel endroit permet d’afficher la liste des formulaires créés ou partagés ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Boîte de réception",
     "Paramètres",
     "Espace de travail",
     "Form Builder"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k113",
    "text": "Jotform ne propose pas d'intégrer un formulaire sur un site web.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k114",
    "text": "Quel type de champ fait partie des \"Champs basiques\" ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Adresse",
     "Saut de page",
     "Signature",
     "Sélecteur de dates"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k115",
    "text": "Quels formats d'export Jotform propose-t-il pour les données d'un formulaire ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Uniquement en PDF",
     "Impossible d'exporter",
     "Uniquement vers Google Sheets",
     "Excel, CSV et PDF"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k116",
    "text": "Quelle vue n’est PAS proposée dans Jotform Tables ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Calendrier",
     "Timeline Gantt",
     "Tableau",
     "Carte"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k117",
    "text": "Jotform permet de connecter des colonnes à…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Des bases SQL uniquement",
     "Des fichiers Word",
     "D’autres formulaires ou données relationnelles",
     "Des vidéos YouTube"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k118",
    "text": "Quelle action peut-on effectuer sur une colonne dans Jotform Tables ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Modifier son format",
     "Ajouter un sous-tableau",
     "Exporter seulement cette colonne en PDF",
     "Créer un formulaire à partir d’elle automatiquement"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k119",
    "text": "Une bonne pratique de conception UX est…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Regrouper l’information par thème",
     "Forcer le plein écran",
     "Ajouter beaucoup de questions ouvertes",
     "Mettre des validations uniquement à la fin"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k120",
    "text": "Jotform propose plus de 10 000 modèles pré-conçus.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1765161640587,
  "updatedAt": 1765162730328,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "prototypage-avec-node-js",
  "category": "dev",
  "title": "Prototypage avec Node.js",
  "description": "Node.js, npm, Express, TypeScript : les notions clés pour prototyper une API et structurer un projet JavaScript.",
  "level": 2,
  "questions": [
   {
    "id": "k121",
    "text": "En quelle année a été créé Node.js ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "2007",
     "2005",
     "2009",
     "2011"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k122",
    "text": "Quel est le principal avantage de l’Event Loop de Node.js ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Accélérer les calculs mathématiques",
     "Supprimer les bugs automatiquement",
     "Transpiler du JavaScript",
     "Gérer des connexions multiples de façon non bloquante"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k123",
    "text": "Quel fichier central décrit les dépendances d’un projet Node.js ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "app.js",
     "package.json",
     "node_modules",
     "config.js"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k124",
    "text": "Quelle commande initialise un projet Node.js avec npm ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "npm install -y",
     "npm start",
     "npm i -D",
     "npm init -y"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k125",
    "text": "À quoi sert Prettier ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Transpiler le code",
     "Obi-Wan Kenobi",
     "Formater automatiquement le code",
     "Tester le code"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k126",
    "text": "Quelle est la bonne syntaxe pour démarrer un serveur Express ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "app.listen(3000)",
     "express.run(3000)",
     "server.start(3000)",
     "http.listen(3000)"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k127",
    "text": "Pourquoi utiliser Express plutôt que Node.js seul pour créer une API REST ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Il est plus rapide pour compiler",
     "Il simplifie la gestion des routes et middlewares",
     "Il utilise un langage différent",
     "Il ne nécessite pas d’installation"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k128",
    "text": "Qui a créé TypeScript ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Microsoft",
     "Google",
     "Facebook",
     "Oracle"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k129",
    "text": "Quel est l’avantage principal de TypeScript ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Supprimer les dépendances",
     "Ajouter du typage",
     "Rendre le code plus rapide",
     "Remplacer JavaScript"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k130",
    "text": "Quel framework de test, créé par Facebook, permet d'écrire des tests unitaires en Node.js ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Mocha",
     "Karma",
     "Jest",
     "Aucune de ces réponses"
    ],
    "correct": [
     2
    ]
   }
  ],
  "createdAt": 1757909731112,
  "updatedAt": 1765153324493,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "numerique-responsable-et-green-it",
  "category": "gestion",
  "title": "Numérique responsable et Green IT",
  "description": "Impact des CMS, loi AGEC, Ecoindex, bilan GES : les repères du numérique responsable et du Green IT.",
  "level": 2,
  "questions": [
   {
    "id": "k131",
    "text": "Quelle part des émissions mondiales de gaz à effet de serre représente le numérique ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "1%",
     "2%",
     "4%",
     "8%"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k132",
    "text": "En moyenne, la durée de vie d’un ordinateur aujourd’hui est de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "2 ans",
     "4 ans",
     "7 ans",
     "11 ans"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k133",
    "text": "La raréfaction de l’eau n’a aucun lien avec le numérique.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k134",
    "text": "Le pilier social du numérique responsable inclut :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "L’économie circulaire",
     "L’accessibilité numérique",
     "Réduction des émissions",
     "Gestion des déchets électroniques"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k135",
    "text": "L’un des enjeux économiques du numérique responsable est de :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Accélérer le renouvellement des appareils",
     "Augmenter les marges de production",
     "Favoriser la consommation énergétique",
     "Réduire les coûts et favoriser la durabilité du matériel"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k136",
    "text": "Les CMS posent problème notamment parce qu’ils :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "sont toujours open source",
     "génèrent des bases de données volumineuses et du code inutile",
     "ne s'installent que sur un ordinateur local",
     "ont trop peu de fonctionnalités"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k137",
    "text": "Quelle loi a instauré l’indice de réparabilité des produits ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Loi Climat et Résilience",
     "Loi AGEC",
     "Loi Numérique Équitable",
     "Loi REEN"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k138",
    "text": "Quel outil permet d’évaluer l’impact environnemental d’un site web ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Ecoindex",
     "Canva",
     "Notion",
     "Matomo"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k139",
    "text": "Quelle est une bonne pratique professionnelle de sobriété numérique ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Multiplier les appareils pour le confort",
     "Conserver les doublons de fichiers",
     "Archiver tous les e-mails sur le cloud",
     "Limiter les destinataires d’un e-mail aux personnes concernées"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k140",
    "text": "Le bilan GES réglementaire prend en compte toutes les émissions directes et indirectes.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1761805877657,
  "updatedAt": 1761805909526,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "css-perfectionnement",
  "category": "dev",
  "title": "CSS Perfectionnement",
  "description": "Sélecteurs, box-model, Flexbox, Grid, transitions, BEM : les notions pour perfectionner vos feuilles de style.",
  "level": 3,
  "questions": [
   {
    "id": "k141",
    "text": "Quelle est la signification de CSS ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Creative Style Sheets",
     "Cascading Style Sheets",
     "Computer Style System",
     "Code Styling Syntax"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k142",
    "text": "Quelle balise HTML permet d’inclure une feuille de style externe ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "<style>",
     "<stylesheet>",
     "<css>",
     "<link>"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k143",
    "text": "Parmi ces sélecteurs, lequel est basé sur l’ID ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "element",
     ".element",
     "#element",
     "*element"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k144",
    "text": "Quelle notation couleur n’existe PAS en CSS ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Nom de couleur (ex: red)",
     "Hexadécimal (ex: #FF0000)",
     "RGB (ex: rgb(255,0,0))",
     "CMYK (ex: cmyk(0,100,100,0))"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k145",
    "text": "Le box-model comprend :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "margin, border, padding, content",
     "margin, table, cell, box",
     "content, frame, area, border",
     "padding, row, div, align"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k146",
    "text": "Quelle propriété contrôle la profondeur d’affichage d’un élément ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "depth",
     "layer",
     "z-index",
     "position"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k147",
    "text": "À quoi sert un Reset CSS ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Supprimer toutes les propriétés CSS",
     "Réinitialiser les styles par défaut des navigateurs",
     "Ajouter automatiquement les préfixes navigateurs",
     "Créer une nouvelle grille CSS"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k148",
    "text": "La différence principale entre Flex et Grid est :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Flex = 2D, Grid = 1D",
     "Flex = animation, Grid = positionnement",
     "Flex = 1D, Grid = 2D",
     "Aucune différence"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k149",
    "text": "Quelle propriété permet une transition fluide entre deux états ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "animate",
     "transition",
     "easing",
     "delay"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k150",
    "text": "Quelle méthodologie CSS repose sur des blocs, éléments et modificateurs ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "OOCSS",
     "SMACSS",
     "BEM",
     "Atomic CSS"
    ],
    "correct": [
     2
    ]
   }
  ],
  "createdAt": 1758165839441,
  "updatedAt": 1761103447045,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "contributeur-web-wordpress-initiation",
  "category": "dev",
  "title": "Contributeur web (WordPress) - Initiation",
  "description": "Tableau de bord, articles, pages, catégories, menus, widgets, extensions : prendre en main WordPress pour publier du contenu.",
  "level": 1,
  "questions": [
   {
    "id": "k151",
    "text": "WordPress est…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "un serveur web",
     "un système de gestion de contenu",
     "un logiciel de gestion de stock",
     "un module pour WordPress"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k152",
    "text": "Quel élément n'est PAS présent dans le menu d'administration WordPress ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Pages",
     "Contenu",
     "Médias",
     "Articles"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k153",
    "text": "WordPress est composé d'un front et d'un back office.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k154",
    "text": "Quelle action n'est PAS disponible sur un contenu dans WordPress ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Voir",
     "Archiver",
     "Modifier",
     "Supprimer"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k155",
    "text": "Trouvez l'intrus : l'éditeur de WordPress permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "insérer une citation",
     "créer du texte automatiquement",
     "ajouter une image",
     "mettre en gras"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k156",
    "text": "Pour quel élément les catégories sont-elles disponibles ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "une page",
     "un commentaire",
     "une étiquette",
     "un article"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k157",
    "text": "WordPress permet de modifier les menus du site.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k158",
    "text": "Qu'est-ce qu'un widget dans WordPress ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "une zone de contenu réutilisable",
     "des images qui défilent automatiquement",
     "un bloc de texte",
     "un module pour ajouter une fonctionnalité"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k159",
    "text": "Où peut-on installer ou supprimer un plugin ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Apparence",
     "Réglages",
     "Extensions",
     "Outils"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k160",
    "text": "WordPress permet aussi de gérer les formulaires nativement.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1759983771420,
  "updatedAt": 1759984231520,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "php-intermediare",
  "category": "dev",
  "title": "PHP - Intermédiaire",
  "description": "MVC, Composer, PDO, API REST, DRY, KISS, XSS : les bonnes pratiques pour développer en PHP.",
  "level": 2,
  "questions": [
   {
    "id": "k161",
    "text": "Les variables PHP sont toujours globales par défaut.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k162",
    "text": "Quel est le rôle principal du contrôleur dans une architecture MVC ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Gérer les données",
     "Faire le lien entre modèle et vue",
     "Afficher les vues",
     "Gérer la sécurité"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k163",
    "text": "Quelle bonne pratique favorise la réutilisation du code ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "NPM",
     "YAGNI",
     "DRY",
     "YOLO"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k164",
    "text": "Quel outil est utilisé pour gérer les dépendances externes en PHP ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Bower",
     "PIP",
     "Gradle",
     "Composer"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k165",
    "text": "L’utilisation de PDO est recommandée pour interagir avec une base de données.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k166",
    "text": "Que signifie le sigle MVC ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Main - Variable - Condition",
     "Modèle - Vue - Contrôleur",
     "Méthode - Vue - Classe",
     "Module - Viewport - Controller"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k167",
    "text": "Quel est le format de réponse typique d’une API REST ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "JSON",
     "XML",
     "HTML",
     "CSV"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k168",
    "text": "Quel principe recommande d’écrire du code simple et compréhensible ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "SOLID",
     "KISS",
     "Clean",
     "DRY"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k169",
    "text": "Une API REST peut utiliser les méthodes HTTP comme GET, POST, PUT et DELETE.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k170",
    "text": "Quelle mesure protège contre les attaques XSS ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Échapper les données avant affichage",
     "Utiliser des sessions HTTPS",
     "Filtrer les adresses IP",
     "Crypter les cookies"
    ],
    "correct": [
     0
    ]
   }
  ],
  "createdAt": 1759982771366,
  "updatedAt": 1759983740912,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "javascript-jquery-perfectionnement",
  "category": "dev",
  "title": "Javascript & jQuery Perfectionnement",
  "description": "Portée des variables, fonctions fléchées, déstructuration, hoisting, promesses et jQuery : les notions clés de JavaScript avancé.",
  "level": 3,
  "questions": [
   {
    "id": "k171",
    "text": "En JavaScript, let et const ont une portée de bloc.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k172",
    "text": "Quelle syntaxe crée une fonction fléchée correcte ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "function => { return 1; }",
     "() => 1",
     "(1) => {}",
     "arrow() = function {}"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k173",
    "text": "Que retourne la ligne const [a, b] = [10, 20]; ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Crée un tableau [a, b]",
     "Lance une erreur",
     "Attribue 10 à a et 20 à b",
     "Retourne {a:10, b:20}"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k174",
    "text": "Quel est l’effet de const arr2 = [...arr1]; ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Crée une copie indépendante du tableau",
     "Copie par référence",
     "Vide le tableau",
     "Fusionne deux tableaux"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k175",
    "text": "jQuery n'est plus utilisé en 2026.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k176",
    "text": "Quel mot décrit le mécanisme où les déclarations sont “remontées” ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Memoization",
     "Hoisting",
     "Scoping",
     "Binding"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k177",
    "text": "Quelle méthode appelle immédiatement une fonction avec un this donné ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     ".apply()",
     ".new()",
     ".bind()",
     ".setThis()"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k178",
    "text": "Quelle méthode jQuery permet d’attacher un événement ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     ".trigger()",
     ".on()",
     ".event()",
     ".do()"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k179",
    "text": "Une promesse JavaScript peut être dans l’un des trois états : pending, fulfilled, rejected.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k180",
    "text": "Quelle est la bonne façon de gérer les erreurs dans un async/await ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     ".fail()",
     ".always()",
     "try/catch",
     "throw/catch"
    ],
    "correct": [
     2
    ]
   }
  ],
  "createdAt": 1759980975762,
  "updatedAt": 1759982850861,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "performance-ia-edd",
  "category": "ia",
  "title": "Performance IA EDD",
  "description": "Vocabulaire de l'IA, applications, prompt clair et précis, choix des outils : les repères essentiels pour gagner en performance.",
  "level": 1,
  "questions": [
   {
    "id": "k181",
    "text": "Une intelligence artificielle utilise un modèle d'apprentissage.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k182",
    "text": "Quel mot ne fait PAS partie du vocabulaire lié à l'intelligence artificielle ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Prompt",
     "Hallucination",
     "Entraînement",
     "Responsive"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k183",
    "text": "Trouvez l'intrus parmi ces applications possibles :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "prédiction",
     "monitoring",
     "pilotage",
     "automatisation"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k184",
    "text": "L'IA est toujours fiable, car elle indiquera quand elle se trompe.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k185",
    "text": "Quel est un des points fondamentaux du prompt ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Transparent et court",
     "Clair et précis",
     "Ouvert et simple",
     "Complet et subjectif"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k186",
    "text": "Trouvez l'intrus parmi ces éléments à ajouter au prompt :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Format",
     "Action",
     "Rôle",
     "Algorithme"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k187",
    "text": "L'IA peut vous poser des questions pour améliorer ses réponses.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k188",
    "text": "Quel critère n'est PAS utile pour choisir son outil ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Coût",
     "Mode veille",
     "Qualité des résultats",
     "Ergonomie"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k189",
    "text": "Trouvez l'intrus parmi ces tons :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Humoristique",
     "Concis",
     "Régional",
     "Formel"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k190",
    "text": "ChatGPT apprend des conversations avec les utilisateurs pour être plus performant dans les interactions futures.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1757475976982,
  "updatedAt": 1757476658093,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "ia-chatgpt-initiation",
  "category": "ia",
  "title": "IA / ChatGPT - Initiation",
  "description": "Réseaux de neurones, types d'IA, prompts clairs et limites : les bases de l'IA générative et de ChatGPT.",
  "level": 1,
  "questions": [
   {
    "id": "k191",
    "text": "Une intelligence artificielle utilise un réseau de neurones artificiels.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k192",
    "text": "Quel type d'intelligence artificielle ne fait PAS partie des trois niveaux classiques ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Superintelligente",
     "Spécialisée",
     "Générale",
     "En essaim"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k193",
    "text": "Trouvez l'intrus parmi ces applications possibles de l'IA :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "prédiction",
     "monitoring",
     "téléportation",
     "automatisation"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k194",
    "text": "L'IA est toujours fiable, car elle indiquera quand elle se trompe.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k195",
    "text": "Quel est un des points fondamentaux du prompt ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Transparent et court",
     "Clair et précis",
     "Ouvert et simple",
     "Complet et ambigu"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k196",
    "text": "Trouvez l'intrus parmi ces éléments à ajouter au prompt selon les frameworks :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Format",
     "Action",
     "Rôle",
     "Vision"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k197",
    "text": "L'IA peut vous poser des questions pour améliorer ses réponses.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k198",
    "text": "Quelle limite n'est PAS présente dans l'IA générative ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Biais",
     "Distance géographique",
     "Précision",
     "Compréhension"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k199",
    "text": "Trouvez l'intrus parmi ces propositions d'utilisation de l'IA :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Faire le café",
     "Rédiger un mail",
     "Générer une image",
     "Analyser des données"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k200",
    "text": "L'IA apprend en direct de vos conversations pour être plus performante dans les interactions avec d'autres utilisateurs.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1728603655904,
  "updatedAt": 1756958314319,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "microsoft-365-partiel-initiation",
  "category": "bureautique",
  "title": "Microsoft 365 Partiel - Initiation",
  "description": "Outlook, OneDrive, OneNote, Planner, Teams, SharePoint, Forms : découvrez les principaux services de Microsoft 365.",
  "level": 1,
  "questions": [
   {
    "id": "k201",
    "text": "Quel service ne fait PAS partie de Microsoft 365 ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Word",
     "Looker Studio",
     "Teams",
     "Excel"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k202",
    "text": "Que permet de faire le bouton répéter/mise en attente dans Outlook ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "répéter un e-mail qui reviendra plus tard dans votre boîte de réception",
     "mettre en attente un évènement reçu via la messagerie",
     "répéter une mise en forme sur le contenu sélectionné",
     "mettre en attente une pièce jointe pour archivage"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k203",
    "text": "Trouvez l'intrus, OneDrive permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "télécharger une copie d'un fichier",
     "stocker des fichiers",
     "partager un dossier",
     "éditer des vidéos"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k204",
    "text": "OneNote ne permet PAS de créer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des plans 3D",
     "des blocs-notes",
     "des sections",
     "des pages"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k205",
    "text": "Trouvez l'intrus, Planner propose d'enrichir les tâches avec :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "la progression",
     "les calories consommées",
     "la priorité",
     "la répétition"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k206",
    "text": "Teams permet de créer des canaux.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k207",
    "text": "SharePoint permet de créer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des sites d'équipe",
     "des sites e-commerce",
     "des affiches",
     "des cartes de visite"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k208",
    "text": "Forms offre la possibilité de concevoir :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des questionnaires",
     "des listes",
     "des contrats",
     "des coachings"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k209",
    "text": "OneDrive inclut un historique des versions des fichiers.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k210",
    "text": "Quel élément ne figure PAS dans les modèles de Microsoft Lists ou SharePoint ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Suivi des problèmes",
     "Gestion des ventes",
     "Demande de déplacement",
     "Inventaire de cryptomonnaies"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1739495481109,
  "updatedAt": 1756957069746,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "bureautique-avec-l-ia-initiation",
  "category": "ia",
  "title": "Bureautique avec l'IA - Initiation",
  "description": "Copilot dans Word, Excel, PowerPoint et Outlook : ce que l'IA apporte à la bureautique, et ses limites.",
  "level": 1,
  "questions": [
   {
    "id": "k211",
    "text": "Une intelligence artificielle utilise un réseau de neurones artificiels.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k212",
    "text": "Quel logiciel ne dispose PAS de Copilot ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Word",
     "Excel",
     "PowerPoint",
     "Calculatrice"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k213",
    "text": "Que ne peut PAS faire Copilot dans Outlook ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Trier",
     "Rédiger",
     "Planifier",
     "Résumer"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k214",
    "text": "L'IA est toujours fiable, car elle indiquera quand elle se trompe.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k215",
    "text": "Quelle fonctionnalité n'est PAS disponible dans Excel grâce à l'IA ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Prévision des tendances",
     "Mise en forme conditionnelle",
     "Suggestions de visualisation",
     "Détection d'anomalies"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k216",
    "text": "Que propose PowerPoint grâce à l'IA ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Créer une présentation",
     "Générer des images pour vos slides",
     "Vous évaluer avec Speaker Coach",
     "Toutes les propositions précédentes"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k217",
    "text": "Copilot peut vous poser des questions pour améliorer ses réponses.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k218",
    "text": "Quelle limite n'est PAS présente dans Copilot ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Biais",
     "Distance",
     "Précision",
     "Compréhension"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k219",
    "text": "Trouvez l'intrus parmi ces propositions d'utilisation de l'IA :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Faire le café",
     "Rédiger un mail",
     "Générer une image",
     "Analyser des données"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k220",
    "text": "L'IA apprend immédiatement des échanges avec vous pour être plus performante dans les interactions avec d'autres.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1754540569655,
  "updatedAt": 1754541167803,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "les-ia-generatives-perfectionnement",
  "category": "ia",
  "title": "Les IA génératives - Perfectionnement",
  "description": "Frameworks de prompt, choix d'une IA, modes de ChatGPT, images : perfectionnez vos usages de l'IA générative.",
  "level": 3,
  "questions": [
   {
    "id": "k222",
    "text": "Dans le framework RTF, à quoi correspondent les lettres ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Régulation, Tendance, Force",
     "Rapide, Technologie, Framework",
     "Robot, Test, Fond",
     "Rôle, Tâche, Format"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k223",
    "text": "Trouvez l'intrus parmi ces frameworks :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "RTF",
     "RACEF",
     "Chaîne de variation",
     "Chaîne de densité"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k224",
    "text": "L'IA est toujours fiable, car elle indiquera quand elle se trompe.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k226",
    "text": "Trouvez l'intrus parmi ces critères pour le choix d'une IA :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Coût",
     "Facilité d'utilisation",
     "Qualité des résultats",
     "Popularité"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k227",
    "text": "ChatGPT pourra utiliser un ton décontracté.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k228",
    "text": "Quel mode ne fait PAS partie des modes de ChatGPT ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Coach",
     "Facilitateur",
     "Professeur",
     "Stagiaire"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k229",
    "text": "Trouvez l'intrus parmi ces IA :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Midjourney",
     "WriteSonic",
     "Smodin",
     "Paraphraser"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k230",
    "text": "La génération d'images stéréotypées n'est pas possible avec les IA.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1714080391159,
  "updatedAt": 1754540542663,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "premiere-initiation",
  "category": "graphisme",
  "title": "Premiere - Initiation",
  "description": "Types de vidéo, raccourcis, titres, marques, stabilisation, colorimétrie et audio : les bases du montage avec Premiere.",
  "level": 1,
  "questions": [
   {
    "id": "k231",
    "text": "Quel type de vidéo n'existe PAS ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Éducative",
     "Institutionnelle",
     "Animée",
     "Promotionnelle"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k232",
    "text": "Quel raccourci permet de lire ou mettre en pause ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Ctrl",
     "P",
     "Espace",
     "J"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k233",
    "text": "La colorimétrie est une étape importante dans le montage vidéo.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k234",
    "text": "Qu'est-ce que le multipiste ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Disposer de plusieurs pistes audio et vidéo pour placer des éléments",
     "Pouvoir ajouter plusieurs éléments les uns à la suite des autres",
     "Ajouter un calque pour gérer plusieurs effets",
     "Avoir plusieurs méthodes pour importer des médias"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k235",
    "text": "La méthode pancake facilite le dérushage.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k236",
    "text": "Trouvez l'intrus parmi les types de sons de l'amélioration essentielle de l'audio :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Lieu",
     "Dialogue",
     "Effets sonores",
     "Musique"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k237",
    "text": "Quel paramètre ne peut PAS être changé pour un titre ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Couleur",
     "Langue de traduction",
     "Police",
     "Taille"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k238",
    "text": "Que sont les marques sur un montage ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Une piste prévue pour ajouter du texte",
     "Des repères avec commentaires possibles",
     "Des zones pour ajouter vos éléments manquants par la suite",
     "Des logos sur un élément vidéo"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k239",
    "text": "La stabilisation rogne l'image pour éviter les tremblements.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k240",
    "text": "Quel format privilégier pour vos exports ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "DIVX",
     "JPG",
     "PDF",
     "MP4"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1701317658956,
  "updatedAt": 1753067682483,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "chatgpt-cci-initiation",
  "category": "ia",
  "title": "ChatGPT CCI - Initiation",
  "description": "Méthodes de prompt (RTF, RACEF), capacités de ChatGPT et protection des données personnelles : les bases pour bien démarrer.",
  "level": 1,
  "questions": [
   {
    "id": "k241",
    "text": "Une intelligence artificielle utilise un réseau de neurones artificiels.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k242",
    "text": "La méthode de prompt RTF veut dire Rôle, Tâche et…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Forward",
     "Forting",
     "For testing",
     "Format"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k243",
    "text": "ChatGPT ne crée PAS de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "texte",
     "présentation",
     "plan 3D",
     "image"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k244",
    "text": "Trouvez l'intrus parmi ces éléments à ajouter au prompt pour du texte :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Format",
     "Action",
     "Role",
     "Couleurs"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k245",
    "text": "L'IA est toujours fiable, car elle indiquera quand elle se trompe.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k246",
    "text": "Quel est un des points fondamentaux du prompt ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Transparent et court",
     "Clair et précis",
     "Ouvert et simple",
     "Complet et subjectif"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k247",
    "text": "ChatGPT peut vous poser des questions pour améliorer ses réponses.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k248",
    "text": "Trouvez l'intrus parmi ces frameworks pour le prompt :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Chaîne de densité",
     "RISK",
     "RACEF",
     "RTF"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k249",
    "text": "Je peux sans problème partager mes données personnelles avec ChatGPT.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k250",
    "text": "ChatGPT apprend en direct des conversations avec les utilisateurs pour plus de performance dans les interactions futures.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1730114584726,
  "updatedAt": 1752699156499,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "reseaux-sociaux-avec-l-ia",
  "category": "webmarketing",
  "title": "Réseaux Sociaux avec l'IA",
  "description": "Plateformes, chatbots, création de contenu, analyse de performance : utiliser l'IA pour animer vos réseaux sociaux.",
  "level": 2,
  "questions": [
   {
    "id": "k251",
    "text": "Quelle plateforme n'est PAS recommandée si vous souhaitez toucher les jeunes ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "LinkedIn",
     "TikTok",
     "YouTube",
     "Instagram"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k252",
    "text": "Trouvez l'intrus parmi ces notions :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Machine Learning",
     "Automatisation",
     "IA générative",
     "Big Data"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k253",
    "text": "Facebook est le réseau social numéro 1 en Nouvelle-Calédonie.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k254",
    "text": "Trouvez l'intrus parmi les rôles de l'IA :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Création de contenu assistée",
     "Stockage de données",
     "Analyse de performance",
     "Automatisation des tâches"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k255",
    "text": "Quelle IA est développée par une entreprise française ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "ChatGPT",
     "Mistral",
     "Gemini",
     "Claude"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k256",
    "text": "Adobe Express et Canva proposent des modèles prêts à l'emploi pour créer des visuels.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k257",
    "text": "Qu'est-ce qu'un chatbot ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Un logiciel de visioconférence automatisé",
     "Un outil pour créer des sites web automatiquement",
     "Un assistant vocal intégré aux enceintes connectées",
     "Un assistant conversationnel automatisé, capable de dialoguer en temps réel"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k258",
    "text": "Quel est un usage typique de l’IA pour l’analyse de performance ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Créer des visuels pour les réseaux sociaux",
     "Répondre aux clients via un chatbot",
     "Suivre des indicateurs et détecter les tendances",
     "Programmer des campagnes publicitaires"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k259",
    "text": "L'IA permet de facilement changer le style d'un texte.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k260",
    "text": "Quelle action l’IA peut-elle automatiser dans la gestion des publications ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Négociation des tarifs avec les annonceurs",
     "Réalisation d'interviews avec des influenceurs",
     "Création du calendrier éditorial",
     "Gestion des paiements publicitaires"
    ],
    "correct": [
     2
    ]
   }
  ],
  "createdAt": 1748847548704,
  "updatedAt": 1748851455205,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "canva-ia",
  "category": "ia",
  "title": "Canva IA",
  "description": "Écriture magique, Dream Lab, gomme magique, filtres intelligents : les outils d'IA de Canva pour vos visuels.",
  "level": 2,
  "questions": [
   {
    "id": "k261",
    "text": "Quel outil n'existe PAS dans Canva ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Écriture magique",
     "Plan magique",
     "Édition magique",
     "Dream Lab"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k262",
    "text": "Trouvez l'intrus parmi les fonctions de l'écriture magique :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Corriger l'orthographe",
     "Continuer la rédaction",
     "Générer une liste à puces",
     "Reformuler le texte"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k263",
    "text": "Qu'est-ce que la voix de marque ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Créer une voix off en chargeant un son de départ",
     "Paramétrer les prochaines publications Facebook",
     "Définir un ton pour l'écriture magique",
     "Choisir parmi les voix proposées pour les voix off"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k264",
    "text": "Dream Lab permet de générer des illustrations.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k265",
    "text": "L'IA permet aux graphistes de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "trouver de nouvelles sources d'inspiration",
     "remplacer tous les logiciels de design",
     "automatiser entièrement la création de logos",
     "uniformiser les créations graphiques"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k266",
    "text": "La gomme magique permet d'effacer les fichiers inutiles.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k267",
    "text": "Quel style n'existe PAS dans les filtres intelligents ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Pastel",
     "Art",
     "Sketch",
     "Cartoon"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k268",
    "text": "Trouvez l'intrus parmi ces stratégies d'intégration des images IA :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Adapter les couleurs, le style, etc.",
     "Ajouter des arrière-plans complexes",
     "Utiliser les images comme éléments de composition",
     "Aligner le visuel au message"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k269",
    "text": "Canva ne dispose que du format carré pour la génération d'image par IA.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k270",
    "text": "Trouvez l'intrus parmi ces IA de génération d'images :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Midjourney",
     "Firefly",
     "ChatGPT",
     "Claude"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1748843657656,
  "updatedAt": 1748847498605,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "facebook-1-bien-demarrer",
  "category": "webmarketing",
  "title": "Facebook - 1 Bien démarrer",
  "description": "Formats, stratégie de publication, algorithme, Meta Business Suite : les bases pour bien démarrer sur Facebook.",
  "level": 1,
  "questions": [
   {
    "id": "k271",
    "text": "Combien d'utilisateurs Facebook compte la Nouvelle-Calédonie ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "environ 170 000",
     "environ 200 000",
     "environ 140 000",
     "environ 110 000"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k272",
    "text": "Quel format est mis en avant par Facebook et augmente le taux d'engagement ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Texte",
     "Photo",
     "Vidéo",
     "Live"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k273",
    "text": "Le meilleur moment pour publier sur Facebook est le mardi à 8h.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k274",
    "text": "Quel élément ne fait PAS partie d'une stratégie de publication ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La fréquence",
     "Le cahier des charges",
     "Le planning",
     "La cible"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k275",
    "text": "Pour une publication réussie, on privilégie un contenu :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "long et précis",
     "court et sans visuel",
     "court et percutant",
     "long avec un appel à l'action"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k276",
    "text": "Meta Business Suite est un outil pour vous aider dans la gestion de vos comptes sociaux.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k277",
    "text": "Facebook permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "retoucher la photo d'une publication",
     "consulter les statistiques",
     "créer une vidéo par l'IA",
     "générer les textes par l'IA"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k278",
    "text": "Qu'est-ce que l'engagement dans l'algorithme Facebook ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "La performance du post auprès d'autres utilisateurs",
     "L'intérêt de l'utilisateur envers le créateur de contenu",
     "Les commentaires des utilisateurs sur une publication",
     "Les relations entre deux utilisateurs"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k279",
    "text": "Meta Business Suite permet de programmer ses publications Facebook.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k280",
    "text": "Trouvez l'intrus parmi ces objectifs marketing :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Visibilité",
     "Performance",
     "Stabilité",
     "Engagement"
    ],
    "correct": [
     2
    ]
   }
  ],
  "createdAt": 1681433681372,
  "updatedAt": 1743568004719,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "microsoft-365-complet-initiation",
  "category": "bureautique",
  "title": "Microsoft 365 Complet - Initiation",
  "description": "OneDrive, Planner, Stream, Sway, Power Automate, Power Apps, To Do, Lists : découvrez les outils de Microsoft 365.",
  "level": 1,
  "questions": [
   {
    "id": "k281",
    "text": "Quel service ne fait PAS partie de Microsoft 365 ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Word",
     "Looker Studio",
     "Teams",
     "Excel"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k282",
    "text": "Que permet de faire le bouton répéter/mise en attente dans Outlook ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "répéter un e-mail qui reviendra plus tard dans votre boîte de réception",
     "mettre en attente un évènement reçu via la messagerie",
     "répéter une mise en forme sur le contenu sélectionné",
     "mettre en attente une pièce jointe pour archivage"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k283",
    "text": "Trouvez l'intrus, OneDrive permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "télécharger une copie d'un fichier",
     "stocker des fichiers",
     "partager un dossier",
     "personnaliser les métadonnées"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k284",
    "text": "OneNote ne permet PAS de créer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des plans 3D",
     "des blocs-notes",
     "des sections",
     "des pages"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k285",
    "text": "Trouvez l'intrus, Planner propose d'enrichir les tâches avec :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "la progression",
     "le service concerné",
     "la priorité",
     "la répétition"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k286",
    "text": "Teams permet de créer des canaux.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k287",
    "text": "SharePoint permet de créer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des sites d'équipe",
     "des sites e-commerce",
     "des affiches",
     "des cartes de visite"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k288",
    "text": "Forms offre la possibilité de concevoir :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des questionnaires",
     "des listes",
     "des contrats",
     "des coachings"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k289",
    "text": "Stream permet de gérer la diffusion vidéo en direct et en différé.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k290",
    "text": "Avec Sway, je peux créer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des animations pour Word",
     "des fonctions personnalisées pour Excel",
     "des présentations enrichies",
     "des montages vidéos"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k291",
    "text": "Power Automate propose d'automatiser…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "le nettoyage de son bureau",
     "la génération d'images",
     "des tâches récurrentes",
     "la rédaction de documents"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k292",
    "text": "Power Apps est un service pour générer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des applications en Low-Code",
     "des sites en No-Code",
     "des listes de données",
     "des formulaires interactifs"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k293",
    "text": "To Do est un service de prise de notes.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k294",
    "text": "Quel élément Microsoft Lists ne propose-t-il PAS dans ses modèles ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Suivi des problèmes",
     "Liste de lecture",
     "Demande de déplacement",
     "Dossier de financement"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1685067737024,
  "updatedAt": 1739495471038,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "sharepoint-initiation",
  "category": "dev",
  "title": "SharePoint - Initiation",
  "description": "Listes, bibliothèques, métadonnées, WebParts et flux de travail : les bases pour créer et gérer un site SharePoint.",
  "level": 1,
  "questions": [
   {
    "id": "k295",
    "text": "SharePoint est un logiciel pour…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "créer des sites internet",
     "réaliser des sites intranet",
     "échanger des messages",
     "concevoir des rapports"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k296",
    "text": "Trouvez l'intrus, SharePoint permet de créer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des listes",
     "des pages",
     "des bibliothèques",
     "des vidéos"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k297",
    "text": "SharePoint peut se synchroniser avec Google Drive.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k298",
    "text": "Quel élément n'est PAS présent dans les paramètres ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Contenu du site",
     "Éditeur de scripts",
     "Modifier l'apparence",
     "Autorisation du site"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k299",
    "text": "Quelle est l'utilité des bibliothèques dans SharePoint ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "envoyer en PDF des documents",
     "classer les pages du site",
     "archiver les articles du site",
     "partager et gérer des documents"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k300",
    "text": "Que sont les métadonnées ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des données pour les meta-analyses",
     "des informations complémentaires sur un fichier ou dossier",
     "des informations sur l'utilisation du site SharePoint",
     "des données sur l'entreprise Meta"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k301",
    "text": "SharePoint permet de gérer des alertes ou notifications.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k302",
    "text": "Que permet un modèle de site ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Avoir un site avec des pages et du contenu préparés",
     "Personnaliser les couleurs et les polices du site",
     "Avoir des modèles de documents disponibles pour son site",
     "Générer des produits préremplis pour son site"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k303",
    "text": "Qu'est-ce qu'un composant WebPart ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "un logiciel externe à installer pour accéder à SharePoint",
     "un programme de sécurité utilisé pour protéger les données",
     "un élément réutilisable qui permet d'ajouter des fonctionnalités",
     "une application mobile pour gérer les permissions"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k304",
    "text": "SharePoint ne permet pas de créer un flux de travail.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1726693344516,
  "updatedAt": 1733805357273,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "microsoft-copilot-initiation",
  "category": "ia",
  "title": "Microsoft Copilot - Initiation",
  "description": "Types d'IA, applications, éléments d'un prompt et confidentialité : les bases pour bien démarrer avec Microsoft Copilot.",
  "level": 1,
  "questions": [
   {
    "id": "k305",
    "text": "Une intelligence artificielle utilise un réseau de neurones artificiels.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k306",
    "text": "Quel type d'intelligence artificielle n'existe PAS ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Superintelligente",
     "Spécialisée",
     "Générale",
     "Multifactorielle"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k307",
    "text": "Trouvez l'intrus parmi ces applications possibles :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "prédiction",
     "monitoring",
     "variation",
     "automatisation"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k308",
    "text": "L'IA est toujours fiable, car elle indiquera quand elle se trompe.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k309",
    "text": "Quel est un des points fondamentaux du prompt ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Transparent et court",
     "Clair et précis",
     "Ouvert et simple",
     "Complet et subjectif"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k310",
    "text": "Trouvez l'intrus parmi ces éléments à ajouter au prompt :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Format",
     "Action",
     "Exemple",
     "Scénario"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k311",
    "text": "Copilot peut vous poser des questions pour améliorer ses réponses.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k312",
    "text": "Quelle limite n'est PAS présente dans Copilot ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Biais",
     "Distance",
     "Précision",
     "Compréhension"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k313",
    "text": "Trouvez l'intrus parmi ces propositions d'utilisation de l'IA :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Faire le café",
     "Rédiger un mail",
     "Générer une image",
     "Analyser des données"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k314",
    "text": "Copilot apprend des conversations avec vous pour être plus performant dans les interactions avec d'autres utilisateurs.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1733018616669,
  "updatedAt": 1733288408438,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "microsoft-teams-initiation",
  "category": "bureautique",
  "title": "Microsoft Teams - Initiation",
  "description": "Équipes, canaux, réunions, partage de fichiers, rôles et sécurité : prendre en main Microsoft Teams au quotidien.",
  "level": 1,
  "questions": [
   {
    "id": "k315",
    "text": "Microsoft Teams est adapté pour travailler sur des fichiers privés.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k316",
    "text": "Qu'est-ce qui ne crée PAS un groupe chez Microsoft ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Une équipe Teams",
     "Un document sur OneDrive",
     "Un plan sur Planner",
     "Un site sur SharePoint"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k317",
    "text": "Trouvez l'intrus : Teams permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "envoyer un fichier",
     "faire des sondages",
     "partager des GIF animés",
     "personnaliser les métadonnées"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k318",
    "text": "Dans les options d'une réunion, on ne retrouve PAS :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "la localisation",
     "des blocs-notes",
     "la salle d'attente",
     "un plan"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k319",
    "text": "Teams permet de créer des canaux.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k320",
    "text": "Quel type de canal n'existe PAS ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Standard",
     "Externe",
     "Privé",
     "Partagé"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k321",
    "text": "Quelle pratique ne fait PAS partie des bonnes pratiques Teams en termes de sécurité ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Créez des canaux publics",
     "Limitez le partage d’écran",
     "Activez la salle d’attente",
     "Enregistrez les réunions avec consentement"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k322",
    "text": "Quel est le niveau le plus fin pour gérer les droits d'accès à un document ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "au niveau des fichiers",
     "au niveau des canaux",
     "au niveau des membres",
     "au niveau de l'équipe"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k323",
    "text": "Avec Teams, vous pouvez inviter dans une réunion des personnes extérieures à l'organisation.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k324",
    "text": "Quel rôle n'existe PAS dans Teams ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "propriétaire",
     "membre",
     "éditeur",
     "invité"
    ],
    "correct": [
     2
    ]
   }
  ],
  "createdAt": 1732517937473,
  "updatedAt": 1732521149805,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "power-automate-initiation",
  "category": "nocode",
  "title": "Power Automate - Initiation",
  "description": "Déclencheurs, actions, connecteurs, variables, boucles, erreurs : automatisez vos tâches avec Power Automate.",
  "level": 1,
  "questions": [
   {
    "id": "k325",
    "text": "Quelle est la fonction principale de Power Automate ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Créer des présentations",
     "Automatiser des flux de travail",
     "Gérer des bases de données",
     "Concevoir des sites web"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k326",
    "text": "Quel type de déclencheur utiliseriez-vous pour démarrer un flux lors de la réception d'un e-mail spécifique ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Déclencheur manuel",
     "Déclencheur programmé",
     "Déclencheur conditionnel",
     "Déclencheur automatique basé sur un événement"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k327",
    "text": "Dans Power Automate, comment appelle-t-on les étapes individuelles qui composent un flux ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Actions",
     "Connecteurs",
     "Variables",
     "Conditions"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k328",
    "text": "Quel connecteur utiliseriez-vous pour intégrer Power Automate avec SharePoint ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "SQL Server",
     "OneDrive",
     "SharePoint",
     "Outlook"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k329",
    "text": "Quelle action permet d'envoyer une notification par e-mail dans un flux Power Automate ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Envoyer un message Teams",
     "Créer un fichier",
     "Envoyer un e-mail",
     "Démarrer une approbation"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k330",
    "text": "Quelle est la différence principale entre un flux automatisé et un flux instantané dans Power Automate ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "automatisé : nécessite une action manuelle pour démarrer",
     "instantané : déclenché par un événement spécifique",
     "automatisé : déclenché par un événement, instantané : lancé manuellement",
     "pas de différence"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k331",
    "text": "Comment pouvez-vous gérer les erreurs dans un flux Power Automate ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "En utilisant des conditions",
     "En configurant des actions Scope de gestion des erreurs",
     "En ajoutant des délais",
     "En créant des boucles"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k332",
    "text": "Quel est l'avantage principal d'utiliser des variables dans un flux Power Automate ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Elles permettent de stocker et manipuler des données dans le flux",
     "Elles accélèrent l'exécution du flux",
     "Elles réduisent le nombre d'actions nécessaires",
     "Elles améliorent la sécurité du flux"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k333",
    "text": "Dans quel cas utiliseriez-vous une boucle « Do Until » dans Power Automate ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Pour exécuter une action un nombre spécifique de fois",
     "Pour exécuter une action jusqu'à ce qu'une condition soit remplie",
     "Pour exécuter des actions en parallèle",
     "Pour arrêter l'exécution du flux"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k334",
    "text": "Quelle fonctionnalité de Power Automate vous permet d'automatiser des tâches sur votre poste de travail local ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Flux cloud",
     "Connecteurs personnalisés",
     "Power Automate Desktop",
     "Power BI"
    ],
    "correct": [
     2
    ]
   }
  ],
  "createdAt": 1732504855519,
  "updatedAt": 1732511404118,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "chatgpt-edd-initiation",
  "category": "ia",
  "title": "ChatGPT EDD - Initiation",
  "description": "Vocabulaire de l'IA, éléments d'un prompt, rôles et tons : les bases pour bien dialoguer avec ChatGPT.",
  "level": 1,
  "questions": [
   {
    "id": "k335",
    "text": "Une intelligence artificielle utilise un modèle d'apprentissage.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k336",
    "text": "Quel mot ne fait PAS partie du vocabulaire lié à l'intelligence artificielle ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Prompt",
     "Hallucination",
     "Inpainting",
     "Responsive"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k337",
    "text": "Trouvez l'intrus parmi ces applications possibles :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "prédiction",
     "monitoring",
     "variation",
     "automatisation"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k338",
    "text": "L'IA est toujours fiable, car elle indiquera quand elle se trompe.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k339",
    "text": "Quel est un des points fondamentaux du prompt ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Transparent et court",
     "Clair et précis",
     "Ouvert et simple",
     "Complet et subjectif"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k340",
    "text": "Trouvez l'intrus parmi ces éléments à ajouter au prompt :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Format",
     "Action",
     "Exemple",
     "Question"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k341",
    "text": "ChatGPT peut vous poser des questions pour améliorer ses réponses.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k342",
    "text": "Quel mode n'existe PAS avec ChatGPT ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Stagiaire",
     "Directeur",
     "Coach",
     "Partenaire"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k343",
    "text": "Trouvez l'intrus parmi ces tons :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Dynamique",
     "Concis",
     "Humoristique",
     "Formel"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k344",
    "text": "ChatGPT apprend des conversations avec les utilisateurs pour être plus performant dans les interactions futures.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1730929402558,
  "updatedAt": 1730963833493,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "ia-images-textes",
  "category": "ia",
  "title": "IA Images & Textes",
  "description": "Prompts, ChatGPT, Copilot, fiabilité des réponses, images : les bases pour bien utiliser l'IA générative.",
  "level": 1,
  "questions": [
   {
    "id": "k345",
    "text": "Une intelligence artificielle utilise un modèle d'apprentissage.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k346",
    "text": "Quel mot ne fait PAS partie du vocabulaire lié à l'intelligence artificielle ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Prompt",
     "Hallucination",
     "Inpainting",
     "Responsive"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k347",
    "text": "Trouvez l'intrus parmi ces applications possibles :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "prédiction",
     "monitoring",
     "variation",
     "automatisation"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k348",
    "text": "L'IA est toujours fiable, car elle indiquera quand elle se trompe.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k349",
    "text": "Quel est un des points fondamentaux du prompt ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Transparent et court",
     "Clair et précis",
     "Ouvert et simple",
     "Complet et subjectif"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k350",
    "text": "Trouvez l'intrus parmi ces éléments à ajouter au prompt :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Format",
     "Action",
     "Exemple",
     "Question"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k351",
    "text": "ChatGPT peut vous poser des questions pour améliorer ses réponses.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k352",
    "text": "Quel ajout n'est PAS utile à un prompt graphique ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La lumière",
     "La politesse",
     "Un moteur de rendu",
     "Un style graphique"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k353",
    "text": "Que permet Photoshop grâce à l'IA ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "L'aérographe",
     "Le painting",
     "L'inpainting",
     "La sélection de tracé"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k354",
    "text": "Les IA de génération d'images ont de meilleurs résultats en ajoutant des adjectifs à vos prompts.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1730754505180,
  "updatedAt": 1730774977136,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "canva-perfectionnement",
  "category": "graphisme",
  "title": "Canva - Perfectionnement",
  "description": "Modèles, export, historique des versions, raccourcis, retouche d'image, animations et écriture magique : perfectionnez-vous sur Canva.",
  "level": 3,
  "questions": [
   {
    "id": "k355",
    "text": "Quel modèle n'est PAS disponible dans Canva ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Affiche",
     "Plan 3D",
     "Carte de visite",
     "Publication Facebook"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k356",
    "text": "Quel format Canva suggère-t-il par défaut pour l'exportation d'un design ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "JPG",
     "SVG",
     "PNG",
     "PDF"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k357",
    "text": "Qu'est-ce que la voix de marque ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Créer une voix off en chargeant un son de départ",
     "Paramétrer les prochaines publications Facebook",
     "Définir un ton pour l'écriture magique",
     "Choisir parmi les voix proposées pour les voix off"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k358",
    "text": "Canva dispose d'un historique de versions pour les utilisateurs sans abonnement.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k359",
    "text": "Quel est le raccourci pour ajouter une page vide ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Ctrl + Entrée",
     "Ctrl + Z",
     "Ctrl + D",
     "Alt + Espace"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k360",
    "text": "Canva permet d'ajuster la saturation d'une image.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k361",
    "text": "Quelles sont les valeurs possibles pour la transparence ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "entre 0 et 100",
     "entre -100 et 100",
     "entre -50 et 50",
     "entre 0 et 10"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k362",
    "text": "Trouvez l'intrus : quel élément ne peut PAS être animé ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "page",
     "son",
     "texte",
     "image"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k363",
    "text": "Canva ne dispose que du format carré pour la génération d'image par IA.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k364",
    "text": "L'écriture magique ne permet PAS de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "reformuler",
     "changer le ton",
     "raccourcir",
     "dessiner"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1730156816955,
  "updatedAt": 1730159989168,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "newsletter",
  "category": "webmarketing",
  "title": "Newsletter",
  "description": "Typologies, personas, fréquence, contenu, indicateurs et outils d'envoi : les bons réflexes pour réussir vos newsletters.",
  "level": 1,
  "questions": [
   {
    "id": "k365",
    "text": "Quelle typologie de newsletter n'existe PAS ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "live",
     "éducative",
     "promotionnelle",
     "interne"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k366",
    "text": "Quelles données n'aident PAS à définir des personas ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "démographiques",
     "comportementales",
     "psychographiques",
     "quantitatives"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k367",
    "text": "Une fréquence irrégulière est recommandée pour envoyer vos newsletters.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k368",
    "text": "La newsletter doit être correctement lisible sur :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Ordinateur",
     "Tout support",
     "Mobile",
     "Tablette"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k369",
    "text": "Pour le contenu d'une newsletter, que faut-il éviter ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des images optimisées",
     "les sous-titres",
     "les blocs de textes longs",
     "les espaces blancs"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k370",
    "text": "L'A/B testing permet d'essayer deux versions de newsletters différentes.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k371",
    "text": "Quel indicateur n'est PAS révélateur ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "le taux d'ouverture",
     "le taux de change",
     "le taux de clics",
     "le taux de désabonnement"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k372",
    "text": "Quel outil ne permet PAS d'envoyer une newsletter ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Mailchimp",
     "Firefly",
     "Brevo",
     "Sarbacane"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k373",
    "text": "L'organisation des contacts n'est pas utile si vous utilisez un CRM.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k374",
    "text": "Trouvez l'intrus parmi ces paramètres :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "expéditeur",
     "objet",
     "signature",
     "heure d'envoi"
    ],
    "correct": [
     2
    ]
   }
  ],
  "createdAt": 1719974022837,
  "updatedAt": 1719978208436,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "generation-d-images-avec-l-ia-initiation",
  "category": "ia",
  "title": "Génération d'images avec l'IA - Initiation",
  "description": "Histoire de l'IA, outils comme Midjourney ou Firefly, paramètres de prompt et inpainting : créer des images avec l'IA.",
  "level": 1,
  "questions": [
   {
    "id": "k375",
    "text": "Trouvez l'intrus dans ces dates :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Depuis 2010 : Essor avec le Big Data et la puissance de calcul",
     "1970 - 1980 : Essor avec l'arrivée d'internet",
     "1980 - 1990 : Systèmes experts",
     "1940 - 1960 : Naissance de l'IA"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k376",
    "text": "Quelle notion n'appartient PAS à l'IA ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le générateur",
     "Les données d'entraînement",
     "Le processeur",
     "Le discriminateur"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k377",
    "text": "Quelle IA ne génère PAS d'images ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "DALL-E",
     "Firefly",
     "Hume AI",
     "Midjourney"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k378",
    "text": "L'IA peut être utilisée pour donner son avis sur un contenu.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k379",
    "text": "Quel outil permet de vérifier si une image est protégée par copyright ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Google Images",
     "Photoshop Rights",
     "Avocat.nc",
     "Copyright.ai"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k380",
    "text": "ChatGPT peut être utilisé pour enrichir ses prompts.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k381",
    "text": "Quel moteur de rendu n'existe PAS parmi ces mots-clés utilisés pour enrichir un prompt ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Prompt engine",
     "Ray tracing",
     "Unreal engine",
     "Octane render"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k382",
    "text": "Dans Midjourney, le paramètre --ar permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "créer une texture répétable",
     "modifier le ratio de l'image",
     "répéter le prompt",
     "gérer la qualité de l'image"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k383",
    "text": "L'inpainting permet d'étendre l'image en dehors de son cadre.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k384",
    "text": "Que sont les variantes sous Photoshop ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "des variations de colorimétrie du calque",
     "des images recadrées de façon automatisée",
     "des variations sur la courbe de niveau de l'histogramme",
     "des propositions de génération d'images"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1714080424010,
  "updatedAt": 1714090349267,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "microsoft-project-initiation",
  "category": "gestion",
  "title": "Microsoft Project - Initiation",
  "description": "Fichiers .mpp, Gantt, tâches, ressources, effort, dépendances : planifiez vos projets avec Microsoft Project.",
  "level": 1,
  "questions": [
   {
    "id": "k385",
    "text": "Quelle est l'extension d'un fichier Microsoft Project ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "tpp",
     "mpp",
     "ptt",
     "mtt"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k386",
    "text": "Que permet de faire Microsoft Project ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Planifier les tâches et allouer les ressources",
     "Créer une application mobile",
     "Gérer les congés et notes de frais des salariés",
     "Suivre la comptabilité d'une entreprise"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k387",
    "text": "Microsoft Project utilise le diagramme de Gantt.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k388",
    "text": "Trouvez l'intrus, Microsoft Project permet de créer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des tâches principales",
     "des tâches imbriquées",
     "des sous-tâches",
     "des sur-tâches"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k389",
    "text": "Quel est le bon calcul pour l'effort :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Effort = Durée x Unités",
     "Effort = Durée - Unités",
     "Effort = Unités / Durée",
     "Effort = Durée - ( Durée x Unités )"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k390",
    "text": "Trouvez l'intrus, les ressources peuvent être de type :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Travail",
     "Production",
     "Coût",
     "Consommable"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k391",
    "text": "Microsoft Project ne permet pas la gestion de la surutilisation des ressources.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k392",
    "text": "Quelle fonctionnalité permet de créer des dépendances entre les tâches ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Liaison de tâches",
     "Fractionnement de tâches",
     "Verrouillage de tâches",
     "Regroupement de tâches"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k393",
    "text": "Comment peut-on ajuster les unités de travail d'une ressource ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "En modifiant la durée de la tâche associée à cette ressource",
     "En modifiant le calendrier de travail de la ressource",
     "En ajustant le pourcentage d'allocation de la ressource",
     "En changeant le nom de la ressource"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k394",
    "text": "Quelle est la différence entre une tâche à durée fixe et une tâche à unités fixes ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Aucune",
     "Durée fixe : durée constante ; unités fixes : durée selon les ressources",
     "Durée fixe : planifiée en automatique ; unités fixes : en manuel",
     "Durée fixe peut être déplacée ; unités fixes est fixée à une date"
    ],
    "correct": [
     1
    ]
   }
  ],
  "createdAt": 1710477987672,
  "updatedAt": 1710718422024,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "photoshop-intermediaire",
  "category": "graphisme",
  "title": "Photoshop - Intermédiaire",
  "description": "Raccourcis, masques d'écrêtage, plume, styles de calque, filtres, traitement par lots : approfondir Photoshop.",
  "level": 2,
  "questions": [
   {
    "id": "k395",
    "text": "Quel est le raccourci de la main (pour se déplacer dans un document) ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Maj + H",
     "Espace",
     "Ctrl + M",
     "M"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k396",
    "text": "Quel outil n'existe PAS dans Photoshop :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La goutte d'eau",
     "Le pot de peinture",
     "Le feutre",
     "L'outil tranche"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k397",
    "text": "Qu'est-ce qu'un masque d'écrêtage ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "un calque qui change son mode de fusion",
     "un calque qui définit la luminosité du calque parent",
     "un calque qui prend la forme du calque du dessous",
     "un calque qui écrête"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k398",
    "text": "La baguette magique est le meilleur outil pour sélectionner des objets peu contrastés.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k399",
    "text": "La plume permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "dupliquer une zone de l'image",
     "adoucir les couleurs d'une zone de l'image",
     "écrire du contenu en automatique",
     "créer un tracé vectoriel"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k400",
    "text": "Le détourage permet d'extraire un élément par rapport au fond.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k401",
    "text": "Quel effet de style n'existe PAS :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "brillant",
     "lueur interne",
     "ombre portée",
     "contour"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k402",
    "text": "Les formes d'outils permettent de :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "récupérer des statistiques d'utilisation de l'outil",
     "contraindre l'effet de l'outil à une certaine forme",
     "personnaliser les icônes dans la barre d'outils",
     "permettre l'utilisation d'une tablette graphique"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k403",
    "text": "Le traitement par lots permet d'exécuter une action sur plusieurs fichiers.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k404",
    "text": "Trouvez l'intrus parmi ces filtres de déformation :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Cisaillement",
     "Coordonnées polaires",
     "Ondulation",
     "Flammes"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1707951276703,
  "updatedAt": 1707960483384,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "wordpress-initiation",
  "category": "dev",
  "title": "WordPress - Initiation",
  "description": "CMS, administration, articles, médias, thèmes, extensions : les notions clés pour démarrer avec WordPress.",
  "level": 1,
  "questions": [
   {
    "id": "k405",
    "text": "WordPress n'a PAS besoin de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "un serveur web",
     "Python",
     "une base de données",
     "PHP"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k406",
    "text": "WordPress est…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "un logiciel e-commerce",
     "un système de gestion de contenu",
     "un logiciel de gestion de stock",
     "un module pour PrestaShop"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k407",
    "text": "WordPress représente plus de 40% des sites web mondiaux.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k408",
    "text": "Quel élément n'est PAS présent dans le menu d'administration de WordPress ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Pages",
     "Archive",
     "Apparence",
     "Outils"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k409",
    "text": "Trouvez l'intrus, WordPress permet nativement de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Créer un article",
     "Valider des commandes",
     "Ajouter des images",
     "Gérer des commentaires"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k410",
    "text": "Quelle est l'utilité des widgets dans WordPress ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Gérer les révisions des articles",
     "Créer une page de formulaire",
     "Attribuer une catégorie à une page",
     "Ajouter une zone réutilisable"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k411",
    "text": "WordPress permet de gérer les médias.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k412",
    "text": "Que permet un thème ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Personnaliser les couleurs",
     "Créer des comptes utilisateurs",
     "Ajouter un système de sauvegarde",
     "Générer des produits avec description"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k413",
    "text": "Quelle extension pour créer des formulaires ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Formulaire Plus 2",
     "FormBlast",
     "Contact Form 7",
     "SuperForm.com"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k414",
    "text": "WordPress ne permet pas de changer les menus.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1706237677110,
  "updatedAt": 1706507446114,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "contributeur-web-drupal-initiation",
  "category": "dev",
  "title": "Contributeur web (Drupal) - Initiation",
  "description": "Contenus, menus, éditeur WYSIWYG, taxonomies, blocs et champs : les bases pour publier et gérer un site Drupal.",
  "level": 1,
  "questions": [
   {
    "id": "k415",
    "text": "Drupal est…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "un serveur web",
     "un système de gestion de contenu",
     "un logiciel de gestion de stock",
     "un module pour WordPress"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k416",
    "text": "Quel élément n'est PAS présent dans le menu d'administration Drupal ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Contenu",
     "Produits",
     "Personnes",
     "Aide"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k417",
    "text": "Drupal est composé d'un front et d'un back office.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k418",
    "text": "Quelle action n'est PAS disponible sur un contenu dans Drupal ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Voir",
     "Archiver",
     "Modifier",
     "Supprimer"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k419",
    "text": "Trouvez l'intrus : l'éditeur WYSIWYG de Drupal permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "insérer une citation",
     "créer du texte automatiquement",
     "ajouter une image",
     "mettre en gras"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k420",
    "text": "Qu'est-ce qu'une taxonomie ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "un tag",
     "une catégorie",
     "une étiquette",
     "toutes les réponses à la fois"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k421",
    "text": "Drupal permet de modifier les menus du site.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k422",
    "text": "Qu'est-ce qu'un bloc dans Drupal ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "une zone de contenu réutilisable",
     "des images qui défilent automatiquement",
     "un bloc de texte",
     "un module pour ajouter une fonctionnalité"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k423",
    "text": "Quel type de champ n'est PAS disponible dans Drupal ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Texte simple",
     "Référence",
     "Filtre et tri",
     "Fichier"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k424",
    "text": "Drupal permet aussi de gérer les formulaires.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1706237669032,
  "updatedAt": 1706506348621,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "contributeur-web-joomla-initiation",
  "category": "dev",
  "title": "Contributeur web (Joomla) - Initiation",
  "description": "Joomla, extensions, rôles, catégories et éditeur WYSIWYG : les notions clés pour contribuer à un site web et gérer ses articles.",
  "level": 1,
  "questions": [
   {
    "id": "k425",
    "text": "Les extensions permettent de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "mettre en forme les pages",
     "ajouter des fonctionnalités",
     "remplir un formulaire automatiquement",
     "écrire du contenu avec l'IA"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k426",
    "text": "Joomla est…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "un système de gestion de contenu",
     "un module de WordPress",
     "un logiciel de gestion de stock",
     "un module pour PrestaShop"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k427",
    "text": "On ne peut pas personnaliser l'aspect visuel de Joomla.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k428",
    "text": "Quel menu de premier niveau n'existe PAS dans Joomla ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Contenus",
     "Templates",
     "Menus",
     "Utilisateurs"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k429",
    "text": "Trouvez l'intrus : Joomla a besoin de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "PHP",
     "Java",
     "Base de données",
     "Serveur web"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k430",
    "text": "Quel rôle n'existe PAS dans Joomla par défaut ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "auteur",
     "administrateur",
     "enregistré",
     "client"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k431",
    "text": "Joomla permet de créer des catégories pour vos articles.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k432",
    "text": "Trouvez l'intrus parmi les fonctionnalités de l'éditeur WYSIWYG :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "générer du texte automatiquement",
     "créer un tableau",
     "afficher un lien",
     "ajouter une image"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k433",
    "text": "Comment retrouver les articles supprimés dans Joomla ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "via l'auteur qui a créé le contenu",
     "via la corbeille du navigateur",
     "via les filtres d'affichage",
     "via les dossiers de la médiathèque"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k434",
    "text": "Joomla permet nativement de gérer du e-commerce.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1706240941538,
  "updatedAt": 1706505187923,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "figma-initiation",
  "category": "graphisme",
  "title": "Figma - Initiation",
  "description": "Outils vectoriels, commentaires, composants, variantes, historique et interactions : prendre en main Figma.",
  "level": 1,
  "questions": [
   {
    "id": "k435",
    "text": "Quel raccourci n'est PAS utile dans Figma ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Ctrl + :",
     "Ctrl + S",
     "I",
     "Espace"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k436",
    "text": "Quel outil n'existe PAS dans Figma ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La plume",
     "Le crayon",
     "L'aérographe",
     "La pipette"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k437",
    "text": "Quelle fonction n'existe PAS pour les commentaires ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Répondre",
     "Marquer comme non lu",
     "Dissoudre",
     "Résoudre"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k438",
    "text": "Figma dispose d'un historique de versions.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k439",
    "text": "L'outil plume permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "créer un tracé vectoriel",
     "adoucir les couleurs d'une zone de l'image",
     "masquer une zone de l'image",
     "dupliquer une zone de l'image"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k440",
    "text": "Figma ne permet pas de changer le mode de fusion d'un calque.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k441",
    "text": "Les variantes de composants permettent de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "faciliter la gestion de composants",
     "créer des objets identiques",
     "incorporer une image dans un calque",
     "détourer facilement un composant"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k442",
    "text": "La combinaison d'objets permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "supprimer une zone de l'image",
     "unir ou soustraire deux formes",
     "corriger les niveaux de couleurs d'une image",
     "remplacer une zone par de la couleur"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k443",
    "text": "Un texte peut être converti en vecteur pour être déformé.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k444",
    "text": "Trouvez l'intrus, on peut créer une interaction :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "on click",
     "on drag",
     "mouse leave",
     "keyboard enter"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1699157191802,
  "updatedAt": 1700023698903,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "prestashop-initiation",
  "category": "dev",
  "title": "PrestaShop - Initiation",
  "description": "Installation, administration, sécurité, groupes d'utilisateurs, produits : prenez en main une boutique PrestaShop.",
  "level": 1,
  "questions": [
   {
    "id": "k445",
    "text": "Quelle technologie n'est PAS utile pour PrestaShop ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "DNS",
     "Python",
     "PHP",
     "HTML"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k446",
    "text": "Trouvez l'intrus parmi ces avantages de PrestaShop :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Français",
     "Hébergement payant",
     "Dédié au e-commerce",
     "Nombreux modules"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k447",
    "text": "Vous pouvez installer PrestaShop en local ou en ligne.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k448",
    "text": "Quelle section ne fait PAS partie de l'administration ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Vendre",
     "Modifier",
     "Personnaliser",
     "Configurer"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k449",
    "text": "Quelle technique n'améliore PAS la sécurité ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le certificat SSL",
     "Le responsive",
     "Un mot de passe complexe",
     "Les sauvegardes régulières"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k450",
    "text": "Quelle option n'est PAS accessible via la configuration ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Logo",
     "Pages statiques",
     "Mode maintenance",
     "Blog"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k451",
    "text": "PrestaShop permet d'accéder à une fiche détail par produit.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k452",
    "text": "Quel système de paiement choisir, si vous avez un compte calédonien ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "EPay",
     "Paypal",
     "Stripe",
     "Visa"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k453",
    "text": "Que ne permettent PAS les groupes utilisateurs sur PrestaShop ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Catégoriser les clients",
     "Appliquer les privilèges",
     "Regrouper les produits",
     "Restreindre l'accès au site"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k454",
    "text": "PrestaShop propose de vendre des produits virtuels.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1699424047929,
  "updatedAt": 1699429252894,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "woocommerce-initiation",
  "category": "dev",
  "title": "WooCommerce - Initiation",
  "description": "DNS, produits, commandes, clients, statistiques, stock : les notions clés pour gérer une boutique avec WooCommerce.",
  "level": 1,
  "questions": [
   {
    "id": "k455",
    "text": "Le DNS permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "structurer un document du serveur",
     "identifier le serveur avec le nom de domaine",
     "remplir un formulaire automatiquement",
     "écrire du contenu avec l'IA"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k456",
    "text": "WooCommerce est…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "un logiciel e-commerce indépendant de WordPress",
     "un module e-commerce de WordPress",
     "un logiciel de gestion de stock",
     "un module pour PrestaShop"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k457",
    "text": "On ne peut pas personnaliser l'aspect visuel de WooCommerce.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k458",
    "text": "Quel indicateur n'existe PAS dans WooCommerce pour suivre les statistiques ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Total des ventes",
     "Page consultée",
     "Commandes",
     "Produits vendus"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k459",
    "text": "Trouvez l'intrus : WooCommerce permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Créer une commande manuellement",
     "Normaliser ses commandes",
     "Consulter le détail d'une commande",
     "Gérer ses commandes"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k460",
    "text": "Quel rôle WooCommerce ajoute-t-il à WordPress ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "abonné",
     "administrateur",
     "éditeur",
     "client"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k461",
    "text": "WooCommerce permet de créer des catégories pour vos produits.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k462",
    "text": "Quel moyen n'existe PAS pour gérer les fournisseurs ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "charger un fichier PDF",
     "leur créer des comptes",
     "les importer manuellement",
     "installer un module"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k463",
    "text": "Quel outil marketing n'est PAS disponible de base dans WooCommerce ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Les coupons de réduction",
     "Les bannières",
     "Le retargeting publicitaire",
     "Les emailings"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k464",
    "text": "WooCommerce permet aussi de gérer le stock.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1699415509886,
  "updatedAt": 1699424030739,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "canva-initiation",
  "category": "graphisme",
  "title": "Canva - Initiation",
  "description": "Modèles, calques, grilles d'images, blocs de texte, imports : prenez en main Canva pour vos créations.",
  "level": 1,
  "questions": [
   {
    "id": "k465",
    "text": "Quel modèle n'est PAS disponible dans Canva ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Affiche",
     "Plan 3D",
     "Carte de visite",
     "Publication Facebook"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k466",
    "text": "Quel format Canva suggère-t-il par défaut pour l'exportation d'un design ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "JPG",
     "SVG",
     "PNG",
     "PDF"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k467",
    "text": "Quel moyen n'existe PAS pour naviguer dans les modèles ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Par thématique",
     "Par type de design",
     "Par auteur",
     "Par recherche"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k468",
    "text": "Canva dispose d'un historique de versions pour les utilisateurs de la version gratuite.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k469",
    "text": "L'outil faire avancer d'un niveau permet de :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "mettre le calque vers un plan supérieur",
     "mettre le calque au premier plan",
     "mettre le calque vers un plan inférieur",
     "mettre le calque à l'arrière-plan"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k470",
    "text": "Canva permet de changer le mode de fusion d'un calque.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k471",
    "text": "Les grilles d'images sont un moyen de :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "faciliter la disposition des images",
     "créer des images avec une variante de couleur",
     "incorporer une image dans un calque",
     "détourer facilement des images"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k472",
    "text": "Les modèles de blocs de texte permettent de :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "supprimer une zone de texte de l'image",
     "définir des titres et sous-titres avec des polices rapidement",
     "définir une zone pour charger une image de remplacement pour le texte",
     "définir une zone où il faudra importer du texte"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k473",
    "text": "Canva permet d'ajouter des effets sur un texte.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k474",
    "text": "Trouvez l'intrus, on peut importer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "une image",
     "un son",
     "une vidéo",
     "un PSD"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1699412490772,
  "updatedAt": 1699415372587,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "google-workspace-initiation",
  "category": "bureautique",
  "title": "Google Workspace - Initiation",
  "description": "Gmail, Drive, Keep, Agenda, Meet, Slides, Chat : les fonctionnalités clés de Google Workspace pour mieux travailler au quotidien.",
  "level": 1,
  "questions": [
   {
    "id": "k475",
    "text": "Quelle fonctionnalité Gmail propose-t-il ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "envoi distribué",
     "envoi programmé",
     "envoi et retour",
     "envoi et duplication"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k476",
    "text": "Quel outil n'existe PAS dans Drive ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Ajouter un signet",
     "Créer un raccourci",
     "Modifier la couleur",
     "Ajouter un favori"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k477",
    "text": "Google Keep est capable de définir un rappel.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k478",
    "text": "Le planning de rendez-vous :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "est disponible via Google Meet",
     "est disponible via Gmail",
     "n'est pas disponible",
     "est disponible via Google Agenda"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k479",
    "text": "Pour afficher son onglet sur une visioconférence dans Google Meet, on utilise :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le partage d'écran",
     "L'effet Larsen",
     "La caméra",
     "Les effets"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k480",
    "text": "Google Slides permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Créer un tableau blanc pour échanger",
     "Créer des diapositives animées",
     "Créer des notes avec des rappels",
     "Créer un document pour faire des calculs"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k481",
    "text": "Google Chat permet de générer avec l'IA des images de chatons.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k482",
    "text": "Qu'est-ce qu'une mise en attente ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "différer la réception de l'email à une date ultérieure",
     "recevoir un email avec un temps d'attente avant le prochain événement",
     "devoir attendre la fin de maintenance de Google Drive",
     "faire attendre un client pour l'envoi d'un document"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k483",
    "text": "Trouvez l'intrus parmi ces services :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Tasks",
     "Scribus",
     "Keep",
     "Slides"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k484",
    "text": "Google Agenda permet de créer des événements récurrents.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1699337724020,
  "updatedAt": 1699338464731,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "video-web-initiation",
  "category": "graphisme",
  "title": "Vidéo web - Initiation",
  "description": "Formats, outils de montage, structure du récit, composition et motion design : les bases pour réaliser une vidéo web.",
  "level": 1,
  "questions": [
   {
    "id": "k485",
    "text": "Quel format n'est PAS un format vidéo ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "MP4",
     "WEBP",
     "MOV",
     "WEBM"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k486",
    "text": "Quel type de vidéo n'existe PAS ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Éducative",
     "Institutionnelle",
     "Animée",
     "Promotionnelle"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k487",
    "text": "Quel outil ne permet PAS de gérer la vidéo ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "DaVinci Resolve",
     "Clipchamp",
     "Publisher",
     "Canva"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k488",
    "text": "Le snack content est une vidéo de présentation de restaurant.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k489",
    "text": "Quelle méthode n'est PAS utile pour structurer les informations ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Pitch",
     "Méthode SPRI",
     "Storyboard",
     "Mindmap"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k490",
    "text": "Le motion design est une technique d'animations d'illustrations et de textes.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k491",
    "text": "Quelle règle est importante en composition ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La règle des tiers",
     "La règle de trois",
     "La règle graduée",
     "La règle de Pythagore"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k492",
    "text": "Trouvez l'intrus parmi ces types de texte :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Titre",
     "Saxophone",
     "Synthé",
     "Sous-titre"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k493",
    "text": "La transition à privilégier pour donner du rythme est le cut.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k494",
    "text": "Quelle étape n'est PAS présente dans la création d'une vidéo ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Étalonnage",
     "Mixage",
     "Montage",
     "Élagage"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1696582583668,
  "updatedAt": 1696585446551,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "traitement-de-texte-initiation",
  "category": "bureautique",
  "title": "Traitement de texte - Initiation",
  "description": "Images, règle, retraits, en-têtes, titres, révisions et export PDF : maîtriser les bases du traitement de texte.",
  "level": 1,
  "questions": [
   {
    "id": "k495",
    "text": "Une image ne peut PAS être placée :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "derrière le texte",
     "entre deux pages",
     "alignée sur le texte",
     "devant le texte"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k496",
    "text": "Que permet de faire la règle d'un traitement de texte ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "vérifier les alignements",
     "poser un point d'exclamation",
     "éviter les erreurs d'orthographe",
     "contrôler l'écart entre les pages"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k497",
    "text": "Les données d'un graphique inséré :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "sont uniquement numériques",
     "peuvent être modifiées dans un fichier tableur",
     "peuvent être ajoutées via e-mail",
     "sont déterminées uniquement à la création"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k498",
    "text": "Le raccourci Ctrl + F permet de présenter son fichier en visio.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k499",
    "text": "Le retrait de la première ligne est :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "la suppression de la première ligne",
     "un espace au-dessus de la première ligne",
     "un écart sur le paragraphe suivant",
     "un espace devant la première ligne"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k500",
    "text": "Quel outil permet d'envoyer un document ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "L'ajout des métadonnées de copyright",
     "L'enregistrement ou le téléchargement en PDF",
     "L'outil « Supprimer le formatage »",
     "La protection du document"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k501",
    "text": "Les dates peuvent être ajoutées facilement via le menu.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k502",
    "text": "L'outil suggestions ou révisions permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "faciliter le travail collaboratif",
     "revenir en arrière en cas d'erreur",
     "mettre en page le texte",
     "corriger les fautes d'orthographe automatiquement"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k503",
    "text": "Les en-têtes et pieds de page sont :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "toujours identiques",
     "ajoutés au moment de l'enregistrement",
     "différents en fonction des sections du document",
     "figés après génération du sommaire"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k504",
    "text": "Un titre de niveau 4 peut être ajouté juste après un titre de niveau 2 :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "oui mais ce n'est pas recommandé",
     "non",
     "oui",
     "oui après avoir désactivé le message d'avertissement"
    ],
    "correct": [
     0
    ]
   }
  ],
  "createdAt": 1681370949569,
  "updatedAt": 1713312025518,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "scrum",
  "category": "gestion",
  "title": "Scrum",
  "description": "Rôles, release planning, sprint, backlog, définition du done, story points, burndown chart : les bases de Scrum.",
  "level": 2,
  "questions": [
   {
    "id": "k505",
    "text": "Scrum est la meilleure méthode agile.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k506",
    "text": "Trouvez l'intrus parmi ces rôles Scrum :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Scrum Master",
     "Développeurs",
     "Product Owner",
     "Chef de projet"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k507",
    "text": "Quelle affirmation est fausse concernant le release planning meeting ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Il permet de déceler les problèmes",
     "Il permet de présenter le travail aux stakeholders",
     "Il permet d'estimer les dates",
     "Il permet de synchroniser les équipes"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k508",
    "text": "Le sprint 0 est obligatoire pour le lancement d'un projet.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k509",
    "text": "Trouvez l'intrus parmi ces propositions pour la définition du done :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Tests unitaires réussis",
     "Spécifications préparées",
     "Documentation à jour",
     "Acceptation du Product Owner"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k510",
    "text": "Quel adjectif ne décrit PAS le Product Backlog ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Priorisé",
     "Détaillé",
     "Estimé",
     "Équilibré"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k511",
    "text": "Il est préférable d'estimer les tâches en story points plutôt qu'en heures.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k512",
    "text": "Quelle caractéristique n'est PAS applicable à un sprint ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Pas de modification du sprint goal possible",
     "Annulable par les développeurs",
     "Courte durée, limitée à un mois maximum",
     "Durée identique avec les autres sprints"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k513",
    "text": "Quelle cérémonie ne fait PAS partie de Scrum ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Comité de pilotage",
     "Rétrospective",
     "Stand-up meeting",
     "Sprint review"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k514",
    "text": "Le Burn down chart peut être appliqué à un sprint ou une release.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1688710983238,
  "updatedAt": 1688712678769,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "facebook-3-booster-votre-strategie-publicitaire",
  "category": "webmarketing",
  "title": "Facebook - 3 Booster votre stratégie publicitaire",
  "description": "Boost, enchères, ciblage, objectifs, test A/B, pixel : les notions clés pour réussir vos publicités Facebook.",
  "level": 3,
  "questions": [
   {
    "id": "k515",
    "text": "Le boost de publication est :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "payer pour obtenir plus de visibilité sur une publication existante",
     "prendre du temps pour augmenter le nombre de commentateurs d'un post",
     "attendre une semaine avant de publier son contenu",
     "acquérir des faux commentaires et likes sur une publication"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k516",
    "text": "Il est important de vérifier le paramétrage de sa page pour :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "activer l'option d'identification d'une page",
     "désactiver les messages privés",
     "désactiver la double authentification",
     "activer votre mot de passe"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k517",
    "text": "Meta Business Suite permet de publier sur Instagram en plus de Facebook.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k518",
    "text": "La publicité Facebook fonctionne sur :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "un système d'abonnement",
     "un système d'enchères",
     "un forfait annuel",
     "un coût fixe"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k519",
    "text": "Trouvez l'intrus parmi ces objectifs publicitaires :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Conversion",
     "Adaptabilité",
     "Fidélisation",
     "Notoriété"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k520",
    "text": "Les publicités sur Facebook peuvent être gérées sous forme de campagne.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k521",
    "text": "Quel critère de ciblage utilisateur n'existe PAS ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le genre",
     "La localisation",
     "Les centres d'intérêt",
     "Le budget mensuel dépensé"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k522",
    "text": "Qu'est-ce que l'A/B testing ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Facebook vérifie l'orthographe",
     "Facebook vérifie les propos de vos fans",
     "Facebook teste la performance d'une pub A et B puis laisse la meilleure",
     "Facebook teste vos visuels avant publication"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k523",
    "text": "Une offre exclusive permet d'attirer plus de clients.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k524",
    "text": "Le pixel Meta (ex-pixel Facebook) permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Ajouter son logo sur ses visuels",
     "Suivre les internautes sur Amazon",
     "Faire du reciblage publicitaire",
     "Suivre l'ouverture des e-mails Facebook"
    ],
    "correct": [
     2
    ]
   }
  ],
  "createdAt": 1681437037138,
  "updatedAt": 1688462101697,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "accessibilite-web",
  "category": "dev",
  "title": "Accessibilité web",
  "description": "Handicaps, technologies d'assistance, RGAA, WCAG, ergonomie : les bases de l'accessibilité web.",
  "level": 1,
  "questions": [
   {
    "id": "k525",
    "text": "Le handicap est la perte ou l'altération de la fonction d'une partie du corps.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k526",
    "text": "Trouvez l'intrus parmi ces handicaps :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Handicap moteur",
     "Handicap sensoriel",
     "Handicap cognitif",
     "Handicap visible"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k527",
    "text": "Quelle technologie ne fait PAS partie des technologies d'assistance ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Lecteur d'écran",
     "Clavier mécanique",
     "Clavier alternatif",
     "Assistant virtuel"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k528",
    "text": "Le respect de l'accessibilité permet d'élargir l'audience d'une entreprise.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k529",
    "text": "Trouvez l'intrus parmi ces référentiels :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "RGAA",
     "WAI",
     "WCAG",
     "Opquast"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k530",
    "text": "Quel élément ne permet PAS de garantir le respect de l'accessibilité web ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Retour utilisateur",
     "Évaluation périodique",
     "Revue de conformité",
     "Amélioration continue"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k531",
    "text": "Les annotations fonctionnelles d'accessibilité se font directement sur les captures d'écran du site web concerné.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k532",
    "text": "Quelle loi ne fait PAS partie de l'ergonomie web ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Hick",
     "Ohm",
     "Miller",
     "Fitts"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k533",
    "text": "Quel élément n'est PAS régi par le CSS pour l'accessibilité web ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Alternative des images",
     "Mise en évidence des éléments interactifs",
     "Couleur",
     "Taille des polices"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k534",
    "text": "L'audiodescription est un moyen de rendre une vidéo accessible.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1687919272263,
  "updatedAt": 1687923698393,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "after-effects-initiation",
  "category": "graphisme",
  "title": "After Effects - Initiation",
  "description": "Interface, outils, points clés, Keylight, suivi de mouvement, rotoscopie, 3D et expressions : les bases de l'animation avec After Effects.",
  "level": 1,
  "questions": [
   {
    "id": "k535",
    "text": "Quel élément ne fait PAS partie de l'interface d'After Effects ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le panneau projet",
     "Le panneau vectoriel",
     "Le panneau composition",
     "Le panneau montage"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k536",
    "text": "Quel outil n'existe PAS dans After Effects ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La plume",
     "Le roto-pinceau",
     "L'aérographe",
     "La gomme"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k537",
    "text": "Quel effet utiliser pour créer de l'eau ou de la fumée ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Lueur diffuse",
     "Appliquer un cache",
     "Bruit fractal",
     "Contour brut"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k538",
    "text": "Les points clés permettent d'animer l'opacité d'un calque.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k539",
    "text": "L'effet Keylight permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "incruster une vidéo tournée sur fond vert",
     "adoucir les couleurs d'une zone de l'image",
     "masquer une zone de l'image",
     "insérer une source de lumière"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k540",
    "text": "Le calcul pour le suivi de mouvement est rapide.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k541",
    "text": "La rotoscopie permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "peindre ou dessiner sur des images",
     "copier un calque sur le parent",
     "effectuer une rotation sur un calque",
     "ajouter un effet 3D sur un élément"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k542",
    "text": "Trouvez l'intrus, grâce au mode 3D, After Effects propose d'animer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "une caméra",
     "un plan",
     "un calque",
     "une lumière"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k543",
    "text": "Les expressions dans After Effects permettent de créer des animations complexes.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k544",
    "text": "Parmi ces codecs, lequel est le plus efficace pour exporter votre vidéo ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Vorbis",
     "Divx",
     "VP5",
     "H.265"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1686640344701,
  "updatedAt": 1686644284326,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "microsoft-365-vs-office-2013",
  "category": "bureautique",
  "title": "Microsoft 365 vs Office 2013",
  "description": "Word, Excel, PowerPoint, Outlook et OneDrive en ligne : les services et fonctions clés de Microsoft 365 pour travailler en ligne.",
  "level": 1,
  "questions": [
   {
    "id": "k545",
    "text": "Quel service ne fait PAS partie de Microsoft 365 ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Word",
     "Looker Studio",
     "Teams",
     "Excel"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k546",
    "text": "Que permet de faire le bouton répéter/mise en attente dans Outlook ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "répéter un e-mail qui reviendra plus tard dans votre boîte de réception",
     "mettre en attente un évènement reçu via la messagerie",
     "répéter une mise en forme sur le contenu sélectionné",
     "mettre en attente une pièce jointe pour archivage"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k547",
    "text": "Outlook en ligne permet de créer des événements répétitifs dans le calendrier.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k548",
    "text": "Trouvez l'intrus dans ces fonctionnalités Word :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Révision",
     "Mise en forme conditionnelle",
     "Saut de page",
     "Publipostage"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k549",
    "text": "Quelle fonctionnalité n'est PAS disponible sur Excel en ligne ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Les connexions de données",
     "L'enregistrement de macro",
     "La validation de données",
     "Les filtres et les segments"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k550",
    "text": "PowerPoint en ligne ne permet pas de gérer l'historique de versions.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k551",
    "text": "Trouvez l'intrus : OneDrive permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "télécharger une copie d'un fichier",
     "stocker des fichiers",
     "partager un dossier",
     "ajouter des étiquettes"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k552",
    "text": "La sauvegarde automatique permet d'enregistrer automatiquement les documents en local.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k553",
    "text": "OneNote ne permet PAS de créer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des plans 3D",
     "des blocs-notes",
     "des sections",
     "des pages"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k554",
    "text": "Teams permet de créer des canaux.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1686306347043,
  "updatedAt": 1686307954606,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "tableur-initiation",
  "category": "bureautique",
  "title": "Tableur - Initiation",
  "description": "Raccourcis, saisie, formules, recopie, dates, CSV et mise en forme : les bases du tableur pour gérer vos données.",
  "level": 1,
  "questions": [
   {
    "id": "k555",
    "text": "Le raccourci Ctrl + Y permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "répéter la dernière action",
     "imprimer",
     "annuler",
     "ouvrir un document"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k556",
    "text": "Quelle touche du clavier doit-on maintenir pour sélectionner des plages de cellules discontinues ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "ALT",
     "CTRL",
     "SHIFT ou MAJ",
     "ESPACE"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k557",
    "text": "Le bouton de recopie de formule (poignée bleue) permet de faire des séries.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k558",
    "text": "Comment le tableur fait la différence entre le texte et les valeurs (nombres) ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Les nombres sont alignés à droite et le texte à gauche par défaut",
     "Les nombres sont alignés à gauche et le texte à droite",
     "Pas de distinction",
     "Les nombres sont alignés à gauche et le texte centré"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k559",
    "text": "Quel est le résultat de 10 + 5 x 4 ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "60",
     "45",
     "30",
     "20"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k560",
    "text": "Lequel ne permet PAS de saisir une date convenablement ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "21/02/2022",
     "21-02-2022",
     "21022022",
     "21 février 2022"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k561",
    "text": "Il est possible d'exporter les données sous forme de CSV.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k562",
    "text": "Quelle méthode ne permet PAS de déplacer des données ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Dans le menu \"Données\" ⇨ \"Déplacer\"",
     "Clic droit ⇨ Couper, Clic droit ⇨ Coller",
     "Ctrl + X, Ctrl + V",
     "Glisser, déposer"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k563",
    "text": "Il est possible d'ajouter de la couleur sur l'onglet d'une feuille.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k564",
    "text": "La couleur en alternance permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "rapidement mettre en forme un tableau",
     "mettre en évidence des données erronées",
     "changer la couleur de vos graphiques",
     "rapidement changer un dégradé de couleur"
    ],
    "correct": [
     0
    ]
   }
  ],
  "createdAt": 1681376738786,
  "updatedAt": 1713312062562,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "tableur-perfectionnement",
  "category": "bureautique",
  "title": "Tableur - Perfectionnement",
  "description": "Validation de données, mise en forme conditionnelle, sparklines, segments, références absolues : perfectionnez votre tableur.",
  "level": 3,
  "questions": [
   {
    "id": "k565",
    "text": "La validation de données permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "corriger l'orthographe",
     "afficher un menu déroulant",
     "changer le format des données",
     "effectuer des calculs"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k566",
    "text": "Quel outil utilise-t-on pour mettre en forme des cellules selon un critère ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "La mise en forme conditionnelle",
     "Le pot de peinture",
     "Reproduire la mise en forme",
     "La mise en gras"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k567",
    "text": "Le thème permet de changer les couleurs et polices utilisées.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k568",
    "text": "Les sparklines sont…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des lignes de données triées",
     "des graphiques affichés dans une cellule",
     "des segments filtrés",
     "des plages de données nommées"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k569",
    "text": "Que ne permettent PAS les chips intelligents ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "insérer une formule",
     "insérer un événement",
     "insérer un contact",
     "insérer un fichier"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k570",
    "text": "La formule concat() permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "tronquer un texte",
     "additionner deux nombres entiers",
     "regrouper deux chaînes de texte",
     "permuter le contenu de deux cellules"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k571",
    "text": "L'utilisation de $ permet de figer la référence d'une cellule.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k572",
    "text": "Qu'est-ce qu'un segment ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "un filtre pour changer les données affichées",
     "une partie d'un histogramme",
     "la colonne de total d'un tableau croisé dynamique",
     "une portion d'une formule"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k573",
    "text": "Quelle est la formule pour calculer un prix TTC avec la TGC dans la cellule C2 et les prix HT dans la colonne A ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "= A * C2",
     "= A2 + C2 * A",
     "= A2 + $C$2 * A2",
     "= A * $C$2"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k574",
    "text": "Quelle formule de mise en forme conditionnelle colore une ligne dont la valeur en colonne B est égale à 0 ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "=$B2=0",
     "ESTNUL($B$2)",
     "SI(B2=0;1;0)",
     "=VIDE(B2)"
    ],
    "correct": [
     0
    ]
   }
  ],
  "createdAt": 1681378371088,
  "updatedAt": 1713312049006,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "facebook-2-faire-vivre-sa-page",
  "category": "webmarketing",
  "title": "Facebook - 2 Faire vivre sa page",
  "description": "Marronniers, rôles, algorithme, modération, Meta Business Suite : les bons réflexes pour animer votre page Facebook.",
  "level": 2,
  "questions": [
   {
    "id": "k575",
    "text": "Les marronniers en marketing sont :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Les événements récurrents au cours de l'année",
     "Les méthodes d'acquisition de fans",
     "Les arbres qui donnent des marrons",
     "Les fans qui dépensent dans vos produits ou services"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k576",
    "text": "Le rôle de modérateur ne permet PAS de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Créer des publicités",
     "Répondre aux commentaires",
     "Consulter les statistiques",
     "Affecter des rôles"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k577",
    "text": "Facebook est le réseau social numéro 1 en Nouvelle-Calédonie.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k578",
    "text": "Trouvez l'intrus dans la stratégie de publication :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Les types de posts",
     "Le briefing",
     "Les visuels d'exemple",
     "Les objectifs"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k579",
    "text": "Pour une bonne publication, on met en place un contenu :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "long et percutant",
     "court et avec un visuel",
     "court avec du texte uniquement",
     "long avec un appel à l'action"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k580",
    "text": "Meta Business Suite permet de répondre aux commentaires Facebook.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k581",
    "text": "Qu'est-ce que la récence dans l'algorithme Facebook ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "La performance du post auprès d'autres utilisateurs",
     "L'intérêt de l'utilisateur envers le créateur de contenu",
     "Les commentaires des utilisateurs sur une publication",
     "L'âge d'une publication"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k582",
    "text": "Facebook permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "retoucher la photo d'une publication",
     "modifier les statistiques",
     "programmer la publication de ses contenus",
     "identifier chaque personne ayant consulté la page"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k583",
    "text": "La modération est le fait de vérifier les messages et commentaires des utilisateurs.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k584",
    "text": "Trouvez l'intrus parmi ces métiers :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Social media manager",
     "Community manager",
     "Chef de projet",
     "Influenceur"
    ],
    "correct": [
     2
    ]
   }
  ],
  "createdAt": 1681434742137,
  "updatedAt": 1686304321685,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "photoshop-initiation-oriente-gif",
  "category": "graphisme",
  "title": "Photoshop - Initiation (Orienté GIF)",
  "description": "Format PSD, outils, tampon, correcteur, calques de remplissage et retouche de GIF : les bases de Photoshop.",
  "level": 1,
  "questions": [
   {
    "id": "k595",
    "text": "Quel est le format de fichier Photoshop ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "SVG",
     "PSD",
     "EPS",
     "BMP"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k596",
    "text": "Quel outil n'existe PAS dans Photoshop ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La plume",
     "Le tampon",
     "L'aérographe",
     "La pipette"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k597",
    "text": "Quel est le mode colorimétrique pour l'impression ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "RVB",
     "TSL",
     "CMJN",
     "LAB"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k598",
    "text": "La baguette magique est le meilleur outil pour sélectionner des objets peu contrastés.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k599",
    "text": "L'outil tampon permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "dupliquer une zone de l'image",
     "adoucir les couleurs d'une zone de l'image",
     "masquer une zone de l'image",
     "appliquer un logo sur une image"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k600",
    "text": "Pour modifier un GIF, il faut passer en espace de travail peinture.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k601",
    "text": "Le correcteur localisé permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "supprimer une zone de l'image",
     "gommer les défauts sur une zone",
     "corriger les niveaux de couleurs d'une image",
     "remplacer une zone par du blanc"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k602",
    "text": "Le meilleur format de fichier pour une photo est :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "JPG",
     "GIF",
     "AI",
     "SVG"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k603",
    "text": "On peut rechercher dans les calques par leurs noms.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k604",
    "text": "Trouvez l'intrus, on peut créer un calque de remplissage :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "de type dégradé",
     "de type couleur",
     "de type luminosité / contraste",
     "de type texte"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1641962035255,
  "updatedAt": 1686304308053,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "google-apps-script",
  "category": "dev",
  "title": "Google Apps Script",
  "description": "Scripts, variables JavaScript, événements, menus et boîtes de dialogue : les notions clés pour automatiser Google Workspace.",
  "level": 3,
  "questions": [
   {
    "id": "k605",
    "text": "Google Apps Script propose des scripts autonomes et des scripts liés.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k606",
    "text": "Quel service ne fait PAS partie de Google Apps Script ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Docs",
     "Sheets",
     "Calendar",
     "Power Automate"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k607",
    "text": "Trouvez l'intrus pour définir une nouvelle variable en JavaScript :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "const texte = \"Bonjour\";",
     "let tableau = \"18\";",
     "define booleen = true;",
     "var nombre = 2;"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k608",
    "text": "Le debugger permet de définir de nouvelles variables en posant des points d'arrêt.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k609",
    "text": "Trouvez l'intrus pour créer une boucle ou une condition en JavaScript :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "for",
     "each",
     "switch",
     "if"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k610",
    "text": "Quel type de données n'existe PAS en JavaScript ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "string",
     "boolean",
     "number",
     "char"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k611",
    "text": "Google Apps Script crée une fonction myFunction à la création d'un nouveau script.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k612",
    "text": "Quelle classe utilitaire n'existe PAS dans Apps Script ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Ui",
     "Dialog",
     "Logger",
     "Browser"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k613",
    "text": "Trouvez l'intrus parmi les événements Apps Script :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "onChange",
     "onInstall",
     "onEdit",
     "onOpen"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k614",
    "text": "Google Apps Script ne permet pas d'afficher des menus et des boîtes de dialogue personnalisées.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   }
  ],
  "createdAt": 1686304256576,
  "updatedAt": 1686304297246,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "html-css-initiation",
  "category": "dev",
  "title": "HTML & CSS - Initiation",
  "description": "Balises HTML, propriétés CSS, unités, media queries et liens : les fondamentaux pour structurer et styler une page web.",
  "level": 1,
  "questions": [
   {
    "id": "k615",
    "text": "HTML permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "changer les couleurs",
     "structurer le contenu",
     "animer les éléments",
     "récupérer les données"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k616",
    "text": "CSS permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "structurer un document",
     "styliser les éléments",
     "remplir un formulaire",
     "écrire du contenu"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k617",
    "text": "La balise div est une balise HTML.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k618",
    "text": "En HTML, la balise header est…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "une balise de pied de page",
     "une balise d'en-tête",
     "un élément en haut de page",
     "un emplacement pour le style"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k619",
    "text": "En CSS, quelles unités faut-il privilégier pour un site adaptatif ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "px et pt",
     "rem et %",
     "% et px",
     "cm et m"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k620",
    "text": "Qu'est-ce qu'une media query ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "un sélecteur pour ajouter des vidéos",
     "une requête pour ajouter une image de fond",
     "une règle pour supprimer du contenu",
     "une règle pour adapter le contenu visuel en fonction du support"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k621",
    "text": "La propriété font-size sert à définir la taille du texte.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k622",
    "text": "La propriété CSS padding permet de gérer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "les marges internes",
     "les marges externes",
     "la largeur d'un bloc",
     "l'espacement entre les lignes"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k623",
    "text": "Pour créer un lien vers la page d'accueil de Wikipédia, on écrira :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "<a target=\"http://wikipedia.org\">Wikipédia</a>",
     "<a href=\"http://wikipedia.org\">",
     "<a href=\"http://wikipedia.org\">Wikipédia</a>",
     "<link href=\"http://wikipedia.org\">Wikipédia</link>"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k624",
    "text": "La balise h1 est utilisée pour définir :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "un titre de niveau 1",
     "un paragraphe",
     "un calque",
     "un header"
    ],
    "correct": [
     0
    ]
   }
  ],
  "createdAt": 1639999060377,
  "updatedAt": 1686304292266,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "illustrator-initiation",
  "category": "graphisme",
  "title": "Illustrator - Initiation",
  "description": "Formats vectoriels, plume, tangentes, pathfinder, pipette, mode isolation : les bases pour dessiner avec Illustrator.",
  "level": 1,
  "questions": [
   {
    "id": "k625",
    "text": "Quel format n'est PAS vectoriel ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "SVG",
     "TGA",
     "EPS",
     "AI"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k626",
    "text": "Quel outil n'existe PAS dans Illustrator ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La plume",
     "La gomme",
     "Le tampon",
     "La pipette"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k627",
    "text": "De combien de points d'ancrage un cercle est-il composé en vectoriel ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "6",
     "4",
     "3",
     "2"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k628",
    "text": "L'angle d'une tangente ne peut pas être cassé.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k629",
    "text": "La décomposition permet de :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "obtenir des sous-objets avec le contour et le fond d'un objet",
     "retirer la couleur de fond d'un objet",
     "rompre une liaison entre deux calques",
     "créer un calque pour l'élément sélectionné"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k630",
    "text": "L'outil dégradé de formes fonctionne sur les tracés non fermés.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k631",
    "text": "Trouvez l'intrus, le pathfinder permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "diviser des objets",
     "fusionner des objets",
     "effectuer un pochoir sur des objets",
     "multiplier des objets"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k632",
    "text": "La pipette permet de récupérer :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La couleur de fond",
     "La couleur de fond et de contour",
     "La couleur de contour",
     "La couleur de dégradé"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k633",
    "text": "Le texte curviligne nécessite un tracé fermé.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k634",
    "text": "Le mode isolation permet de :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "modifier un groupe ou un objet isolé du reste du dessin",
     "scinder un tracé en plusieurs",
     "récupérer le fond d'une forme",
     "supprimer les points isolés d'un tracé"
    ],
    "correct": [
     0
    ]
   }
  ],
  "createdAt": 1630535427458,
  "updatedAt": 1681370812063,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "principe-de-l-image-numerique",
  "category": "graphisme",
  "title": "Principe de l'image numérique",
  "description": "Vectoriel et bitmap, formats de fichiers, RVB et CMJN, transparence : les fondamentaux de l'image numérique.",
  "level": 1,
  "questions": [
   {
    "id": "k635",
    "text": "Quels sont les deux types d'images ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "RVB et CMJN",
     "JPG et PNG",
     "Vectoriel et Bitmap",
     "Numérique et Analogique"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k636",
    "text": "Les images vectorielles sont soumises à la pixellisation.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k637",
    "text": "Lequel de ces formats est un format d'image bitmap ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "SVG",
     "WEBP",
     "EPS",
     "AI"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k638",
    "text": "JPG est recommandé pour les photos.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k639",
    "text": "Lequel de ces formats est un format vectoriel ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "PNG",
     "SVG",
     "PSD",
     "TIFF"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k640",
    "text": "Quels sont les deux espaces colorimétriques les plus répandus ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "LAB et TSL",
     "RVB et CMJN",
     "RVB et TSL",
     "CMYK et RGB"
    ],
    "correct": [
     1,
     3
    ]
   },
   {
    "id": "k641",
    "text": "CMJN est utilisé pour les écrans.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k642",
    "text": "Quel est le format recommandé pour les photos ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "TIFF",
     "JPG",
     "PDF",
     "SVG"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k643",
    "text": "Il faut conserver un original lors des modifications.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k644",
    "text": "PNG gère la transparence.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   }
  ],
  "createdAt": 1633412622200,
  "updatedAt": 1681370656440,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "traitement-de-texte-perfectionnement",
  "category": "bureautique",
  "title": "Traitement de texte - Perfectionnement",
  "description": "Styles, sections, marges, colonnes, révisions, mise en forme : perfectionnez-vous en traitement de texte.",
  "level": 3,
  "questions": [
   {
    "id": "k645",
    "text": "Quel outil utilise-t-on pour récupérer uniquement le texte lors d'un copier-coller ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le presse-papiers",
     "L'outil \"coller sans formatage\"",
     "L'outil \"supprimer le formatage\"",
     "Le bâton de colle"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k646",
    "text": "Que permet de faire la règle d'un traitement de texte ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Tracer une ligne droite",
     "Insérer une tabulation",
     "Éviter les erreurs de contenu",
     "Mesurer l'écart entre les caractères"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k647",
    "text": "Un saut de page change forcément l'en-tête de la section suivante.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k648",
    "text": "L'interligne permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "gérer l'espacement entre les paragraphes",
     "ajouter un fond entre deux lignes",
     "traduire des lignes de contenu",
     "définir la hauteur de ligne"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k649",
    "text": "En quoi les styles de texte sont-ils importants ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Pour insérer des liens hypertextes",
     "Pour modifier facilement la même mise en forme à des endroits différents",
     "Pour générer les notes de bas de page",
     "Pour dessiner des graphiques"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k650",
    "text": "La marge est une propriété :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "du caractère",
     "de la section",
     "des paragraphes",
     "des lignes"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k651",
    "text": "Justifier un texte revient à l'aligner à gauche et à droite.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k652",
    "text": "À quoi sert l'outil Suggestions ou Révisions ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "À faciliter le travail collaboratif",
     "À revenir en arrière en cas d'erreur",
     "À mettre en page le texte",
     "À corriger les fautes d'orthographe"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k653",
    "text": "Imaginez un texte à 3 colonnes dont les 2 premières sont remplies. Si l'on ajoute du texte dans la 1re, que se passe-t-il ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "On saute automatiquement à la page suivante",
     "Il faut ajouter un saut de colonne",
     "Le texte glisse automatiquement dans les colonnes suivantes",
     "On change de section"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k654",
    "text": "Calibri et Georgia sont des…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "polices de caractères",
     "formules de tableau",
     "chansons de Ray Charles",
     "virus"
    ],
    "correct": [
     0
    ]
   }
  ],
  "createdAt": 1640062394810,
  "updatedAt": 1681370592664,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "photoshop-initiation",
  "category": "graphisme",
  "title": "Photoshop - Initiation",
  "description": "Modes de fusion, liaison de calques, déformation du texte : les bases de Photoshop pour composer et retoucher vos images.",
  "level": 1,
  "questions": [
   {
    "id": "k655",
    "text": "Quel est le format de fichier Photoshop ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "SVG",
     "PSD",
     "EPS",
     "BMP"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k656",
    "text": "Quel outil n'existe PAS dans Photoshop ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La plume",
     "Le tampon",
     "L'aérographe",
     "La pipette"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k657",
    "text": "Quel est le mode colorimétrique pour l'impression ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "RVB",
     "TSL",
     "CMJN",
     "LAB"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k658",
    "text": "La baguette magique est le meilleur outil pour sélectionner des objets peu contrastés.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k659",
    "text": "L'outil tampon permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "dupliquer une zone de l'image",
     "adoucir les couleurs d'une zone de l'image",
     "masquer une zone de l'image",
     "appliquer un logo sur une image"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k660",
    "text": "Le mode de fusion définit l'incidence d'un calque sur le calque supérieur.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k661",
    "text": "La liaison de calques permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "transformer deux calques ensemble",
     "appliquer un calque sur le calque inférieur",
     "incorporer une image dans un calque",
     "détourer les calques"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k662",
    "text": "Le correcteur localisé permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "supprimer une zone de l'image",
     "gommer les défauts sur une zone",
     "corriger les niveaux de couleurs d'une image",
     "remplacer une zone par du blanc"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k663",
    "text": "Le texte ne peut être déformé que s'il est pixellisé avant.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k664",
    "text": "Trouvez l'intrus, on peut créer un calque de remplissage :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "de type dégradé",
     "de type couleur",
     "de type luminosité / contraste",
     "de type texte"
    ],
    "correct": [
     3
    ]
   }
  ],
  "createdAt": 1630992936800,
  "updatedAt": 1691729468762,
  "builtin": true,
  "source": "import"
 }
];

export default IMPORTED_QUIZZES;
