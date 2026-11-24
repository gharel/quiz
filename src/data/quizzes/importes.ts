// Quiz importés (bibliothèque historique du formateur), relus et corrigés.
// Ce fichier est la référence : les corrections se font ici.
import type { Quiz } from '../../lib/types';

const IMPORTED_QUIZZES: Quiz[] = [
 {
  "id": "ia-intermediaire",
  "category": "ia",
  "title": "IA générative : aller plus loin",
  "description": "Multimodalité, agents, recherche web, fiabilité et confidentialité : mieux exploiter les assistants d’IA générative au travail.",
  "level": 2,
  "questions": [
   {
    "id": "k1",
    "text": "Activer la mémoire permet à un assistant de réutiliser des informations d’une conversation à l’autre.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true,
    "explanation": "La mémoire se consulte, se modifie et se désactive dans les paramètres."
   },
   {
    "id": "k2",
    "text": "Lesquels de ces assistants sont développés par des entreprises américaines ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "ChatGPT",
     "Gemini",
     "Claude",
     "DeepSeek",
     "Le Chat (Mistral)"
    ],
    "correct": [
     0,
     1,
     2
    ],
    "explanation": "DeepSeek est chinois, Mistral AI est français."
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
    "text": "Que fait la recherche approfondie (deep research) d’un assistant ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Elle répond plus vite qu’une recherche simple",
     "Elle croise de nombreuses sources en un rapport",
     "Elle réentraîne le modèle sur votre sujet",
     "Elle recopie la première page web trouvée"
    ],
    "correct": [
     1
    ],
    "explanation": "Elle prend plus de temps qu’une réponse simple, mais produit un rapport avec ses sources."
   },
   {
    "id": "k5",
    "text": "Comment appelle-t-on la quantité maximale de texte qu’un modèle peut prendre en compte en une seule fois ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "fenêtre de contexte",
     "la fenêtre de contexte",
     "contexte",
     "context window"
    ],
    "explanation": "Au-delà, les éléments les plus anciens de la conversation ne sont plus pris en compte."
   },
   {
    "id": "k6",
    "text": "Lesquels de ces éléments faut-il vérifier systématiquement dans une réponse d’IA ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Les données chiffrées et statistiques",
     "Les dates et événements",
     "Les citations",
     "Les reformulations de votre propre texte"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k7",
    "text": "Où enregistrer des consignes pour qu’un assistant les applique à toutes vos conversations ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Dans les instructions personnalisées",
     "Dans l’historique des conversations",
     "Dans les options du mode vocal",
     "Dans le dossier des fichiers joints"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k8",
    "text": "Un assistant qui utilise la recherche web cite ses sources, mais il faut quand même les ouvrir pour vérifier.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k9",
    "text": "Quel élément distingue un agent IA d'un assistant IA ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Il comprend plusieurs langues",
     "Il produit des réponses plus longues",
     "Il peut enchaîner plusieurs actions",
     "Il utilise un modèle plus volumineux"
    ],
    "correct": [
     2
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
  "title": "Claude",
  "description": "Modèles, conversations, fichiers, recherche web et bonnes pratiques : les bases pour bien démarrer avec l’assistant d’Anthropic.",
  "level": 1,
  "questions": [
   {
    "id": "k11",
    "text": "Claude peut analyser les fichiers PDF, images et tableaux que vous lui joignez.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k12",
    "text": "Lesquels de ces noms désignent des modèles Claude ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Haiku",
     "Sonnet",
     "Opus",
     "GPT",
     "Gemini"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k13",
    "text": "Que signifie le caractère « génératif » d’un assistant ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Il retrouve des réponses enregistrées à l’avance",
     "Il crée du contenu nouveau à partir d’une consigne",
     "Il classe des documents dans des dossiers",
     "Il traduit chaque texte vers l’anglais"
    ],
    "correct": [
     1
    ],
    "explanation": "Un assistant génératif produit du contenu nouveau (texte, image, code) à partir de ce qu’on lui demande."
   },
   {
    "id": "k14",
    "text": "Quel modèle Claude privilégier pour des réponses rapides et économiques ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Opus",
     "Haiku",
     "Sonnet",
     "Gemini"
    ],
    "correct": [
     1
    ],
    "explanation": "Haiku est le plus léger et le plus rapide, Sonnet est polyvalent, Opus le plus puissant."
   },
   {
    "id": "k15",
    "text": "On peut modifier un message déjà envoyé pour obtenir une nouvelle réponse de Claude.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k16",
    "text": "Lesquelles de ces fonctionnalités Claude propose-t-il ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Le mode vocal",
     "L’analyse d’images et de fichiers",
     "La recherche web",
     "Le montage vidéo"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k17",
    "text": "Une réponse de Claude ne convient pas : que faire ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La copier telle quelle sans la relire",
     "Préciser la demande ou relancer la réponse",
     "Réinstaller l’application Claude",
     "Changer la langue de l’interface"
    ],
    "correct": [
     1
    ]
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
    "text": "Claude accède par défaut à vos e-mails et à votre agenda, sans autorisation.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false,
    "explanation": "Il faut connecter ces outils et autoriser l’accès."
   },
   {
    "id": "k20",
    "text": "Avant de joindre un document à Claude, que faut-il vérifier ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Qu’il soit parfaitement mis en forme",
     "Qu’il ne contienne pas de données sensibles",
     "Qu’il ait été créé il y a moins d’un an",
     "Qu’il soit rédigé dans un style soutenu"
    ],
    "correct": [
     1
    ],
    "explanation": "Les données que votre organisation interdit de partager ne doivent pas être transmises à l’outil."
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
  "title": "Réseaux sociaux",
  "description": "Visibilité, engagement, ligne éditoriale, choix des plateformes : les bases pour animer les réseaux sociaux de votre structure.",
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
    "text": "Quel réseau social est le plus adapté au B2B ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "LinkedIn"
    ]
   },
   {
    "id": "k25",
    "text": "Que désigne la portée d’une publication ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le nombre de clics sur la publication",
     "Le nombre de personnes touchées",
     "Le nombre de partages obtenus",
     "La durée moyenne de visionnage"
    ],
    "correct": [
     1
    ],
    "explanation": "La portée est le nombre de personnes qui ont vu la publication au moins une fois."
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
     "Supprimer les commentaires négatifs",
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
     "Le budget alloué aux publicités",
     "Un plan de communication externe",
     "Le ton et les sujets abordés",
     "Une liste d’influenceurs à contacter"
    ],
    "correct": [
     2
    ],
    "explanation": "La ligne éditoriale est l’ensemble des règles qui définissent les sujets abordés et le ton des publications."
   },
   {
    "id": "k29",
    "text": "Classez ces réseaux du plus au moins utilisé dans le monde (utilisateurs actifs).",
    "time": 40,
    "points": 1,
    "type": "order",
    "items": [
     "Facebook",
     "YouTube",
     "TikTok",
     "LinkedIn"
    ]
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
  "title": "Cybersécurité : ingénierie sociale et incidents",
  "description": "Leviers de manipulation, hameçonnage, rançongiciels, navigateurs, conduite à tenir en cas d’incident : renforcez votre vigilance.",
  "level": 2,
  "questions": [
   {
    "id": "k31",
    "text": "Qu’est-ce que le phishing ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Une attaque qui sature un site de requêtes",
     "Un logiciel qui chiffre les fichiers contre rançon",
     "Un e-mail frauduleux imitant un organisme connu",
     "Un logiciel espion installé à votre insu"
    ],
    "correct": [
     2
    ],
    "explanation": "Le phishing (hameçonnage) usurpe l’identité d’un organisme de confiance, le plus souvent par e-mail, pour piéger la victime."
   },
   {
    "id": "k32",
    "text": "Un « technicien » vous appelle en urgence et demande vos identifiants. Le bon réflexe ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Donner seulement l’identifiant, pas le mot de passe",
     "Raccrocher et rappeler le support officiel",
     "Envoyer les identifiants par e-mail au technicien",
     "Demander au technicien un numéro de dossier"
    ],
    "correct": [
     1
    ],
    "explanation": "Il faut raccrocher et rappeler le support via un numéro officiel : on ne communique jamais ses identifiants, même sous la pression de l’urgence."
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
     "les failles non corrigées des logiciels",
     "les erreurs et les réflexes humains",
     "les faiblesses du chiffrement des données",
     "les connexions Wi-Fi non sécurisées"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k35",
    "text": "Quels leviers l’ingénierie sociale exploite-t-elle ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "L’autorité",
     "L’urgence",
     "L’appartenance au groupe",
     "Le chiffrement"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k36",
    "text": "Un QR code collé sur un parcmètre peut mener vers un faux site de paiement.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true,
    "explanation": "C’est le « quishing », l’hameçonnage par QR code."
   },
   {
    "id": "k37",
    "text": "Comment appelle-t-on l’hameçonnage par SMS ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "smishing",
     "hameçonnage par SMS"
    ]
   },
   {
    "id": "k38",
    "text": "Un faux dirigeant exige un virement urgent et confidentiel. De quelle arnaque s’agit-il ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La fraude au président",
     "Le rançongiciel",
     "Le typosquatting",
     "Le déni de service"
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
    "text": "Remettez dans l’ordre les réflexes en cas d’incident.",
    "time": 45,
    "points": 1,
    "type": "order",
    "items": [
     "STOP",
     "ISOLER",
     "ALERTER",
     "DOCUMENTER",
     "INFORMER"
    ]
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
  "title": "DaVinci Resolve",
  "description": "Pages, chutiers, points d’entrée et de sortie, étalonnage, export : les bases du montage vidéo avec DaVinci Resolve.",
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
    "text": "Quelle page de DaVinci Resolve est dédiée au son ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Fairlight",
     "Fusion",
     "Color",
     "Media"
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
    "text": "Comment appelle-t-on l’étape qui harmonise les couleurs des plans ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "étalonnage",
     "l’étalonnage",
     "color grading"
    ]
   },
   {
    "id": "k48",
    "text": "Remettez dans l’ordre l’insertion d’un extrait dans la timeline.",
    "time": 40,
    "points": 1,
    "type": "order",
    "items": [
     "Ouvrir le clip dans le visualiseur",
     "Placer le point d’entrée (I)",
     "Placer le point de sortie (O)",
     "Insérer dans la timeline"
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
     "AVI",
     "WMV",
     "MP4",
     "FLV"
    ],
    "correct": [
     2
    ],
    "explanation": "Le MP4 est le format le plus compatible : web, réseaux sociaux, téléphones."
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
  "title": "Numérique responsable",
  "description": "Empreinte environnementale, durée de vie des équipements, règle des 5R, sobriété : les bases d’un numérique plus responsable.",
  "level": 1,
  "questions": [
   {
    "id": "k51",
    "text": "Quelle part des émissions mondiales de gaz à effet de serre le numérique représente-t-il, environ ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 1,
     "min": 0,
     "max": 10,
     "step": 0.5,
     "answer": 4,
     "unit": "%"
    }
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
     "Prolonger la durée de vie du matériel",
     "Favoriser la consommation énergétique"
    ],
    "correct": [
     2
    ],
    "explanation": "Garder le matériel plus longtemps réduit les coûts et favorise la durabilité, ce qui est un enjeu économique du numérique responsable."
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
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "refuser",
     "refus"
    ]
   },
   {
    "id": "k58",
    "text": "Quel usage représente la plus grande part du trafic web mondial ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Les pages web textuelles",
     "Le streaming vidéo",
     "L’envoi d’e-mails",
     "Le stockage cloud"
    ],
    "correct": [
     1
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
     "Cibler les destinataires de ses e-mails",
     "Archiver tous les e-mails sur le cloud"
    ],
    "correct": [
     2
    ],
    "explanation": "Limiter les e-mails aux seuls destinataires concernés réduit le volume de messages stockés et transportés."
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
  "title": "Git et GitLab",
  "description": "Commits, branches, fusion, tags et conventions de messages : versionnez un projet et collaborez sur GitLab.",
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
     "Un éditeur de code avec aperçu HTML",
     "Une plateforme d’hébergement de dépôts Git",
     "Un langage de balisage pour le web",
     "Un logiciel de versionnage en local"
    ],
    "correct": [
     1
    ],
    "explanation": "GitLab est une plateforme qui héberge des dépôts Git et permet de collaborer dessus."
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
    "text": "Parmi ces éléments, lequel faut-il versionner dans un site web statique ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "node_modules/",
     "index.html",
     ".env",
     ".idea/"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k66",
    "text": "Remettez dans l’ordre les commandes pour publier une modification.",
    "time": 40,
    "points": 1,
    "type": "order",
    "items": [
     "git add",
     "git commit",
     "git push"
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
    "text": "Quelle commande affiche l’état du dépôt (fichiers modifiés, indexés…) ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "git status",
     "status"
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
  "title": "WordPress : développement et bonnes pratiques",
  "description": "Types de contenu personnalisés, taxonomies, ACF, hooks, nettoyage de l’administration : structurez et étendez WordPress.",
  "level": 2,
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
    "text": "Quel type de champ ACF gère une liste d’éléments répétés ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "répéteur",
     "repeater",
     "champ répéteur"
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
     "Gérer les rôles des utilisateurs",
     "Créer des gabarits de page PHP",
     "Classer et regrouper les contenus",
     "Stocker les images et les vidéos"
    ],
    "correct": [
     2
    ],
    "explanation": "Une taxonomie (catégories, étiquettes…) sert à organiser, structurer et filtrer les contenus."
   },
   {
    "id": "k76",
    "text": "Où placer son code personnalisé pour qu’il survive aux mises à jour du thème ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Dans le functions.php du thème parent",
     "Dans un thème enfant ou une extension",
     "Dans le dossier wp-includes",
     "Dans le dossier wp-content/uploads"
    ],
    "correct": [
     1
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
     "Réécrire le code source du cœur de WordPress",
     "Optimiser le chargement des images",
     "Modifier le comportement sans toucher au cœur",
     "Sauvegarder le site avant une mise à jour"
    ],
    "correct": [
     2
    ],
    "explanation": "Les hooks (actions et filtres) permettent d’étendre le comportement de WordPress sans modifier le cœur ni les plugins tiers."
   },
   {
    "id": "k80",
    "text": "Quels sont les deux types de hooks WordPress ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Les actions",
     "Les filtres",
     "Les widgets",
     "Les shortcodes"
    ],
    "correct": [
     0,
     1
    ]
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
  "title": "Shopify",
  "description": "Solution SaaS, back-office, produits, pages légales, paiement en Nouvelle-Calédonie : prenez en main votre boutique Shopify.",
  "level": 1,
  "questions": [
   {
    "id": "k81",
    "text": "Shopify est un logiciel en ligne par abonnement. Quel sigle désigne ce modèle ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "SaaS",
     "Software as a Service"
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
     "Un compte Google lié à la boutique",
     "Une URL de type boutique.myshopify.com/admin",
     "Un logiciel de bureau à installer",
     "Un accès FTP à l’hébergeur de la boutique"
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
     "Les moyens de paiement acceptés",
     "Les articles que vous vendez",
     "Les codes de réduction",
     "Les clients et leurs commandes"
    ],
    "correct": [
     1
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
    "text": "Quelles pages légales une boutique en ligne doit-elle afficher ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Politique de confidentialité",
     "Conditions générales de vente",
     "Mentions légales",
     "Charte graphique de la boutique"
    ],
    "correct": [
     0,
     1,
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
  "id": "jotform-intermediaire",
  "category": "nocode",
  "title": "Jotform : workflows et PDF",
  "description": "Champs conditionnels, éditeur PDF, approbations, rapports et applications : allez plus loin avec Jotform.",
  "level": 2,
  "questions": [
   {
    "id": "k101",
    "text": "À quoi servent principalement les champs conditionnels dans Jotform ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Changer le thème du formulaire",
     "Envoyer un e-mail de confirmation",
     "Afficher des champs selon les réponses",
     "Limiter le nombre de soumissions"
    ],
    "correct": [
     2
    ],
    "explanation": "Les champs conditionnels rendent le formulaire dynamique : ils s’affichent ou se masquent en fonction des réponses."
   },
   {
    "id": "k102",
    "text": "Que permet l’éditeur PDF dans Jotform ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Modifier le code HTML du formulaire",
     "Générer des documents à partir des réponses",
     "Traduire automatiquement les formulaires",
     "Modifier les couleurs du formulaire"
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
    "text": "Remettez dans l’ordre un workflow d’approbation.",
    "time": 40,
    "points": 1,
    "type": "order",
    "items": [
     "Le formulaire est soumis",
     "L’approbateur est notifié",
     "Il approuve ou refuse",
     "Le demandeur est informé"
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
     "Dans l’éditeur PDF",
     "Dans le menu principal",
     "Dans la bibliothèque de modèles"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k106",
    "text": "Que peut faire un approbateur dans un workflow ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Approuver",
     "Refuser",
     "Demander une révision",
     "Modifier le formulaire"
    ],
    "correct": [
     0,
     1,
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
     "Un diaporama de présentation",
     "Un contrat ou un devis",
     "Une feuille de calcul Excel",
     "Un site web statique"
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
     "Des scripts Python personnalisés",
     "Un serveur de base de données SQL",
     "Des pages, du texte et des soumissions",
     "Un tableau croisé dynamique Excel"
    ],
    "correct": [
     2
    ],
    "explanation": "Une application Jotform se compose de pages, de texte, de formulaires et des données de soumission."
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
  "title": "Jotform",
  "description": "Création, intégration et export de formulaires, Jotform Tables, bonnes pratiques de conception : prenez en main Jotform.",
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
    "text": "Quelle balise HTML permet d’intégrer un formulaire Jotform dans une page web ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "iframe",
     "<iframe>"
    ]
   },
   {
    "id": "k114",
    "text": "Quel type de champ fait partie des « Champs basiques » ?",
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
    "text": "Dans quels formats exporter les données d’un formulaire ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Excel",
     "CSV",
     "PDF",
     "PowerPoint"
    ],
    "correct": [
     0,
     1,
     2
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
     "Des fichiers Word partagés",
     "D’autres formulaires ou tables",
     "Des vidéos publiques sur YouTube",
     "Des pages d’un site web"
    ],
    "correct": [
     1
    ],
    "explanation": "Dans Jotform Tables, une colonne peut être connectée à d’autres formulaires ou à des données relationnelles."
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
     "Forcer le plein écran",
     "Ajouter beaucoup de questions ouvertes",
     "Regrouper l’information par thème",
     "Mettre les validations en fin de formulaire"
    ],
    "correct": [
     2
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
  "title": "Node.js : prototyper une API",
  "description": "Event Loop, npm, package.json, Express, TypeScript, Prettier et Jest : les outils pour prototyper une API en JavaScript.",
  "level": 2,
  "questions": [
   {
    "id": "k121",
    "text": "En quelle année Node.js a-t-il été créé ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 0,
     "min": 2000,
     "max": 2020,
     "step": 1,
     "answer": 2009
    }
   },
   {
    "id": "k122",
    "text": "Quel est le principal avantage de l’Event Loop de Node.js ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Accélérer les calculs mathématiques",
     "Exécuter le code sur plusieurs processeurs",
     "Vérifier le type des variables",
     "Gérer plusieurs requêtes sans bloquer"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k123",
    "text": "Quel fichier décrit les dépendances d’un projet Node.js ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "package.json"
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
     "Vérifier la logique du code",
     "Mettre en forme le code",
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
     "Il simplifie la gestion des routes",
     "Il utilise un autre langage que JavaScript",
     "Il évite d’installer des dépendances"
    ],
    "correct": [
     1
    ],
    "explanation": "Express ajoute le routage et les middlewares au-dessus du module HTTP de Node.js."
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
     "Jasmine"
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
  "title": "Green IT : mesurer et réduire",
  "description": "Ecoindex, loi AGEC, impact des CMS, bilan GES, écoconception : mesurez et réduisez l’impact de vos services numériques.",
  "level": 2,
  "questions": [
   {
    "id": "k131",
    "text": "Quelle part de l’empreinte carbone du numérique en France vient de la fabrication des équipements ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 10,
     "min": 0,
     "max": 100,
     "step": 5,
     "answer": 80,
     "unit": "%"
    },
    "explanation": "Environ 80 % selon l’ADEME et l’Arcep."
   },
   {
    "id": "k132",
    "text": "Comment appelle-t-on la conception d’un service qui réduit son impact environnemental dès le départ ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "écoconception",
     "éco-conception",
     "eco conception"
    ]
   },
   {
    "id": "k133",
    "text": "Quel référentiel français regroupe les bonnes pratiques d’écoconception des services numériques ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le RGESN",
     "Le RGAA",
     "Le RGPD",
     "L’Ecoindex"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k134",
    "text": "Une page plus légère (moins de requêtes, d’images et de scripts) obtient en général un meilleur Ecoindex.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k135",
    "text": "Quel levier prolonge le plus la durée de vie du matériel informatique ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le recyclage des appareils usagés",
     "Le reconditionnement et la réparation",
     "Le renouvellement régulier du parc",
     "Le stockage des appareils inutilisés"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k136",
    "text": "Les CMS posent problème notamment parce qu’ils :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "ne s’installent que chez un seul hébergeur",
     "embarquent du code et des fonctions inutiles",
     "n’existent qu’en version payante",
     "ne sont pas compatibles avec les mobiles"
    ],
    "correct": [
     1
    ],
    "explanation": "Les CMS génèrent souvent des bases de données volumineuses et du code inutile, ce qui alourdit les pages."
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
     "GTmetrix",
     "Ecoindex",
     "Matomo",
     "Google Search Console"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k139",
    "text": "Classez ces formats d’image du plus léger au plus lourd, pour une photo de qualité comparable.",
    "time": 40,
    "points": 1,
    "type": "order",
    "items": [
     "AVIF",
     "WebP",
     "JPEG",
     "PNG"
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
  "title": "CSS : mise en page avancée",
  "description": "Sélecteurs, z-index, reset, Flexbox et Grid, transitions, méthodologie BEM : perfectionnez vos feuilles de style.",
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
    "text": "Quelles notations de couleur existent en CSS ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "red",
     "#FF0000",
     "rgb(255, 0, 0)",
     "cmyk(0, 100, 100, 0)"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k145",
    "text": "Quelle fonction CSS calcule une taille comme « 100% - 2rem » ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "calc",
     "calc()"
    ]
   },
   {
    "id": "k146",
    "text": "Quelle propriété contrôle l’ordre d’empilement des éléments ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "z-index"
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
     "Flex = mobile, Grid = ordinateur",
     "Flex = 1D, Grid = 2D",
     "Flex = CSS, Grid = JavaScript"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k149",
    "text": "Quelle propriété CSS rend fluide le passage d’un état à un autre ?",
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
  "id": "php-intermediare",
  "category": "dev",
  "title": "PHP : bonnes pratiques",
  "description": "MVC, Composer, PDO, API REST, principes DRY et KISS, protection contre les failles XSS : développez proprement en PHP.",
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
     "Stocker et gérer les données",
     "Afficher les pages à l’utilisateur",
     "Coordonner le modèle et la vue",
     "Gérer la sécurité de l’application"
    ],
    "correct": [
     2
    ],
    "explanation": "Le contrôleur reçoit la requête, interroge le modèle et transmet le résultat à la vue."
   },
   {
    "id": "k163",
    "text": "Quelle bonne pratique favorise la réutilisation du code ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "KISS",
     "YAGNI",
     "DRY",
     "TDD"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k164",
    "text": "Quel outil gère les dépendances externes en PHP ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "Composer"
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
    "text": "Quelles méthodes HTTP une API REST utilise-t-elle couramment ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "GET",
     "POST",
     "PUT",
     "DELETE",
     "SEND"
    ],
    "correct": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "id": "k170",
    "text": "Quelle mesure protège contre les attaques XSS ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Utiliser HTTPS sur tout le site",
     "Échapper les données avant affichage",
     "Filtrer les adresses IP des visiteurs",
     "Chiffrer les cookies de session"
    ],
    "correct": [
     1
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
  "title": "JavaScript et jQuery",
  "description": "Portée des variables, fonctions fléchées, déstructuration, hoisting, promesses, async/await et jQuery : JavaScript en profondeur.",
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
    "text": "Après const [a, b] = [10, 20]; que vaut a + b ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 0,
     "min": 0,
     "max": 50,
     "step": 1,
     "answer": 30
    }
   },
   {
    "id": "k174",
    "text": "Quel est l’effet de const arr2 = [...arr1]; ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Copie la référence du tableau",
     "Vide le tableau d’origine",
     "Crée une copie du tableau",
     "Fusionne deux tableaux"
    ],
    "correct": [
     2
    ],
    "explanation": "L’opérateur de décomposition crée une nouvelle copie superficielle : arr2 est indépendant de arr1 (les objets imbriqués restent partagés)."
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
    "text": "Comment appelle-t-on la remontée des déclarations en début de portée ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "hoisting",
     "hissage"
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
     ".bind()",
     ".then()",
     ".assign()"
    ],
    "correct": [
     0
    ],
    "explanation": ".apply() exécute tout de suite la fonction avec un this donné ; .bind() renvoie une nouvelle fonction sans l’exécuter."
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
     ".listen()",
     ".addEvent()"
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
  "id": "les-ia-generatives-perfectionnement",
  "category": "ia",
  "title": "IA générative : agents et automatisation",
  "description": "Agents, connecteurs, fenêtre de contexte, sources documentaires, évaluation : passez de l’assistant ponctuel aux usages avancés.",
  "level": 3,
  "questions": [
   {
    "id": "k222",
    "text": "Que désigne la RAG (génération augmentée par récupération) ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Appuyer la réponse sur des documents retrouvés",
     "Réentraîner entièrement le modèle sur vos données",
     "Compresser le modèle pour qu’il tourne en local",
     "Générer plusieurs réponses et garder la meilleure"
    ],
    "correct": [
     0
    ],
    "explanation": "Le modèle retrouve d’abord des passages pertinents dans une base de documents, puis s’en sert pour répondre."
   },
   {
    "id": "k223",
    "text": "Comment appelle-t-on l’unité de découpage du texte qui sert à mesurer et facturer l’usage d’un modèle ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "token",
     "tokens",
     "jeton",
     "jetons"
    ]
   },
   {
    "id": "k224",
    "text": "Un modèle « open weights » peut être exécuté sur votre propre serveur, sans envoyer vos données à un fournisseur.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k226",
    "text": "Lesquels de ces critères comptent pour choisir une IA ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Le coût",
     "La qualité des résultats",
     "La confidentialité des données",
     "Sa popularité sur les réseaux sociaux"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k227",
    "text": "Un modèle coûte 3 $ par million de tokens en entrée. Combien coûtent 200 000 tokens ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 0,
     "min": 0,
     "max": 3,
     "step": 0.1,
     "answer": 0.6,
     "unit": "$"
    },
    "explanation": "200 000 / 1 000 000 × 3 = 0,6 $."
   },
   {
    "id": "k228",
    "text": "Dans une très longue conversation, un modèle risque d’oublier ou de mélanger les consignes du début.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true,
    "explanation": "Mieux vaut repartir d’une nouvelle conversation avec un résumé des consignes."
   },
   {
    "id": "k229",
    "text": "Avec les bons connecteurs, que peut faire un agent ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Lire un agenda",
     "Créer un ticket dans un outil de suivi",
     "Envoyer un e-mail",
     "Réentraîner le modèle en temps réel"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k230",
    "text": "La génération d'images stéréotypées n'est pas possible avec les IA.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": false
   },
   {
    "id": "k665",
    "text": "Pourquoi garder un humain dans la boucle avec un agent qui agit à votre place ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Pour accélérer l’exécution des tâches",
     "Pour valider les actions à risque",
     "Pour réduire le coût de l’abonnement",
     "Pour éviter de rédiger des consignes"
    ],
    "correct": [
     1
    ],
    "explanation": "Une action irréversible (envoi, suppression, paiement) doit être validée par une personne avant son exécution."
   },
   {
    "id": "k666",
    "text": "Comment évaluer la qualité d’un assistant déployé dans votre service ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Compter les utilisateurs actifs",
     "Mesurer la rapidité des réponses",
     "Demander à l’assistant s’il est fiable",
     "Le tester sur des cas à réponse connue"
    ],
    "correct": [
     3
    ],
    "explanation": "On compare les réponses de l’assistant à des questions dont on connaît la bonne réponse."
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
  "title": "Premiere Pro",
  "description": "Raccourcis, multipiste, titres, marques, stabilisation et audio : les bases du montage vidéo avec Adobe Premiere Pro.",
  "level": 1,
  "questions": [
   {
    "id": "k231",
    "text": "Quel outil de Premiere Pro coupe un clip dans la timeline ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "L’outil Cutter",
     "L’outil Sélection",
     "L’outil Main",
     "L’outil Texte"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k232",
    "text": "Quelle touche lance ou met en pause la lecture ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "Espace",
     "barre d’espace",
     "la barre d’espace"
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
     "Découper une piste en plusieurs parties",
     "Exporter chaque piste dans un fichier séparé",
     "Superposer plusieurs pistes audio et vidéo",
     "Fusionner toutes les pistes en un seul fichier"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k235",
    "text": "Premiere Pro peut générer automatiquement des sous-titres à partir de la voix.",
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
     "Dialogue",
     "Réverbération",
     "Effets sonores",
     "Musique"
    ],
    "correct": [
     1
    ],
    "explanation": "L’amélioration essentielle de l’audio distingue les dialogues, la musique, les effets sonores et l’ambiance. La réverbération n’est pas un type de son."
   },
   {
    "id": "k237",
    "text": "Quel paramètre ne peut PAS être changé pour un titre ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Couleur du texte",
     "Police de caractères",
     "Langue de traduction",
     "Taille du texte"
    ],
    "correct": [
     2
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
    "text": "Remettez dans l’ordre les étapes d’un montage.",
    "time": 45,
    "points": 1,
    "type": "order",
    "items": [
     "Importer les rushes",
     "Dérusher",
     "Monter",
     "Étalonner et mixer",
     "Exporter"
    ]
   }
  ],
  "createdAt": 1701317658956,
  "updatedAt": 1753067682483,
  "builtin": true,
  "source": "import"
 },
 {
  "id": "reseaux-sociaux-avec-l-ia",
  "category": "webmarketing",
  "title": "Réseaux sociaux : créer avec l’IA",
  "description": "Création de contenu assistée, chatbots, calendrier éditorial, analyse des performances : l’IA au service de vos réseaux sociaux.",
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
    "text": "Remettez dans l’ordre la création d’une publication avec l’IA.",
    "time": 40,
    "points": 1,
    "type": "order",
    "items": [
     "Définir l’objectif et la cible",
     "Générer une première version",
     "Relire et adapter au ton de la marque",
     "Publier puis analyser les résultats"
    ]
   },
   {
    "id": "k253",
    "text": "Une IA peut adapter un même message au ton de chaque réseau (LinkedIn, Instagram, TikTok).",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k254",
    "text": "Quels rôles l’IA peut-elle jouer sur les réseaux sociaux ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Créer du contenu",
     "Analyser les performances",
     "Automatiser des tâches",
     "Stocker vos données"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k255",
    "text": "Certaines plateformes demandent de signaler les contenus réalistes générés par IA.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true,
    "explanation": "Meta, TikTok ou YouTube affichent une mention « IA » sur ces contenus."
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
     "Un programme qui dialogue avec les internautes",
     "Un robot qui indexe les pages d’un site web",
     "Un outil qui crée des sites web automatiquement"
    ],
    "correct": [
     1
    ],
    "explanation": "Un chatbot est un assistant conversationnel automatisé, capable de dialoguer en temps réel."
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
     "Validation juridique des contenus",
     "Création du calendrier éditorial",
     "Prise de photos sur le terrain",
     "Réalisation d’interviews avec des influenceurs"
    ],
    "correct": [
     1
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
  "title": "Canva : les outils d’IA",
  "description": "Écriture magique, Dream Lab, gomme magique, voix de marque : les fonctions d’IA de Canva au service de vos visuels.",
  "level": 2,
  "questions": [
   {
    "id": "k261",
    "text": "Lesquels de ces outils existent dans Canva ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Écriture magique",
     "Édition magique",
     "Dream Lab",
     "Plan magique"
    ],
    "correct": [
     0,
     1,
     2
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
     "créer des visuels exempts de droits d’auteur",
     "se passer de brief et de validation client",
     "trouver de nouvelles sources d’inspiration",
     "choisir à leur place la cible d’une campagne"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k266",
    "text": "Quel outil de Canva efface un objet indésirable d’une photo ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "gomme magique",
     "la gomme magique",
     "magic eraser"
    ]
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
    "text": "Quel outil de Canva crée des mises en page complètes à partir d’une simple description ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Design magique",
     "Gomme magique",
     "Grab magique",
     "Animation magique"
    ],
    "correct": [
     0
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
  "title": "Facebook : bien démarrer",
  "description": "Formats, stratégie de publication, algorithme et Meta Business Suite : lancez la page Facebook de votre structure.",
  "level": 1,
  "questions": [
   {
    "id": "k271",
    "text": "Combien d’utilisateurs Facebook compte la Nouvelle-Calédonie, environ ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 20000,
     "min": 50000,
     "max": 250000,
     "step": 10000,
     "answer": 150000
    },
    "explanation": "Environ 150 000 fin 2025, soit la moitié de la population (Digital 2026, We Are Social et Meltwater). Une marge de 20 000 est acceptée."
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
     "Lien externe",
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
    "text": "Quel outil gratuit de Meta gère une page Facebook et un compte Instagram au même endroit ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "Meta Business Suite",
     "Business Suite",
     "MBS"
    ]
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
  "title": "Microsoft 365",
  "description": "Outlook, OneDrive, OneNote, Planner, Forms, Lists, Power Automate : faites le tour des services de Microsoft 365.",
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
     "mettre en attente un évènement reçu via la messagerie",
     "faire revenir un e-mail dans votre boîte plus tard",
     "répéter une mise en forme sur le contenu sélectionné",
     "mettre en attente une pièce jointe pour archivage"
    ],
    "correct": [
     1
    ],
    "explanation": "Le bouton permet de répéter un e-mail : il revient plus tard dans votre boîte de réception."
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
     "des blocs-notes",
     "des groupes de sections",
     "des diapositives",
     "des pages"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k285",
    "text": "Avec quoi Planner permet-il d’enrichir une tâche ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "La progression",
     "La priorité",
     "La répétition",
     "Le temps passé"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k286",
    "text": "OneDrive conserve un historique des versions de vos fichiers.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
   },
   {
    "id": "k288",
    "text": "Forms offre la possibilité de concevoir :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "des questionnaires",
     "des tableaux de bord",
     "des listes de suivi",
     "des organigrammes"
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
     "des feuilles de calcul partagées",
     "des formulaires de sondage",
     "des présentations enrichies",
     "des schémas de processus"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k292",
    "text": "Quel service de Microsoft 365 permet de créer des applications en low-code ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "Power Apps",
     "PowerApps"
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
  "category": "bureautique",
  "title": "SharePoint",
  "description": "Sites, listes, bibliothèques, métadonnées, composants WebPart et flux : les bases pour créer et gérer un site SharePoint.",
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
    "text": "Que permet de créer SharePoint ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Des listes",
     "Des pages",
     "Des bibliothèques",
     "Des vidéos"
    ],
    "correct": [
     0,
     1,
     2
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
    "text": "Dans SharePoint, comment s’appelle l’espace qui stocke et partage des documents ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "bibliothèque",
     "bibliothèque de documents",
     "une bibliothèque"
    ]
   },
   {
    "id": "k300",
    "text": "Que sont les métadonnées ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "les droits d’accès à un fichier ou dossier",
     "des informations complémentaires sur un fichier ou dossier",
     "des informations sur l’utilisation du site SharePoint",
     "des sauvegardes automatiques du site"
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
  "title": "Microsoft Copilot",
  "description": "Copilot Chat, rédaction des demandes, vérification des réponses et confidentialité : les bases pour démarrer avec l’assistant de Microsoft.",
  "level": 1,
  "questions": [
   {
    "id": "k305",
    "text": "Copilot Chat est inclus sans surcoût pour les comptes professionnels Microsoft 365.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true,
    "explanation": "La licence Microsoft 365 Copilot, payante, ajoute l’accès aux données de l’organisation."
   },
   {
    "id": "k306",
    "text": "Sans licence Microsoft 365 Copilot, sur quoi s’appuie Copilot Chat ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Sur le web et les fichiers que vous lui transmettez",
     "Sur tous les e-mails de votre entreprise",
     "Sur l’ensemble de votre OneDrive",
     "Sur les conversations Teams de vos collègues"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k307",
    "text": "Avec un compte professionnel, vos échanges dans Copilot Chat ne servent pas à entraîner les modèles.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true,
    "explanation": "C’est la protection des données entreprise, signalée par un bouclier."
   },
   {
    "id": "k308",
    "text": "Où trouver Copilot Chat ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Après installation d’un logiciel payant",
     "Sur le web, dans Edge ou l’appli Copilot",
     "Sur un serveur interne à installer",
     "Dans un module réservé aux administrateurs"
    ],
    "correct": [
     1
    ],
    "explanation": "Copilot Chat est accessible dans l’application Microsoft 365 Copilot, sur le web et dans le navigateur Edge."
   },
   {
    "id": "k309",
    "text": "Remettez dans l’ordre le bon usage d’une réponse de Copilot.",
    "time": 40,
    "points": 1,
    "type": "order",
    "items": [
     "Formuler la demande avec son contexte",
     "Lire la réponse",
     "Vérifier les sources citées",
     "Réutiliser le contenu"
    ]
   },
   {
    "id": "k310",
    "text": "Lesquelles de ces tâches Copilot Chat peut-il réaliser ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Résumer un document joint",
     "Rédiger un brouillon d’e-mail",
     "Générer une image",
     "Réparer un poste en panne"
    ],
    "correct": [
     0,
     1,
     2
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
    "text": "Comment s’appelle l’espace où une réponse de Copilot devient un document modifiable et partageable ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "Pages",
     "Copilot Pages",
     "page",
     "une page"
    ]
   },
   {
    "id": "k313",
    "text": "Dans Edge, que peut faire Copilot sur la page web affichée ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La résumer et répondre à des questions",
     "Modifier le site pour tous ses visiteurs",
     "Bloquer les publicités de la page",
     "Effacer l’historique de navigation"
    ],
    "correct": [
     0
    ],
    "explanation": "Dans Edge, Copilot peut résumer la page affichée et répondre à des questions sur son contenu."
   },
   {
    "id": "k314",
    "text": "Quelle licence ajoute Copilot dans Word, Excel, PowerPoint, Outlook et Teams, avec les données de l’organisation ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Copilot Chat gratuit",
     "Windows 11 Pro",
     "Microsoft 365 Copilot",
     "Office 2021 perpétuel"
    ],
    "correct": [
     2
    ],
    "explanation": "Ce niveau est approfondi dans « Microsoft 365 Copilot : l’assistant dans vos applications »."
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
  "title": "Microsoft Teams",
  "description": "Équipes, canaux, réunions, partage de fichiers, rôles et sécurité : prenez en main Microsoft Teams au quotidien.",
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
     "ajouter des onglets à un canal",
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
    "text": "Quelle option de réunion Teams fait patienter les invités avant leur admission ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le mode Ensemble",
     "La salle d’attente",
     "Les salles pour petits groupes",
     "Le mode Focus"
    ],
    "correct": [
     1
    ],
    "explanation": "La salle d’attente retient les invités jusqu’à ce qu’un organisateur les admette ; elle se règle dans les options de la réunion."
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
    "text": "Quels types de canaux existent dans Teams ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Standard",
     "Privé",
     "Partagé",
     "Externe"
    ],
    "correct": [
     0,
     1,
     2
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
    "text": "Dans une équipe Teams, quel rôle gère les membres et les paramètres ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "propriétaire",
     "le propriétaire",
     "owner"
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
  "title": "Power Automate",
  "description": "Déclencheurs, actions, connecteurs, variables, boucles et gestion des erreurs : automatisez vos tâches avec Power Automate.",
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
     "Déclencheur automatisé",
     "Déclencheur programmé",
     "Déclencheur instantané"
    ],
    "correct": [
     1
    ],
    "explanation": "Un flux automatisé démarre sur un événement, ici l’arrivée d’un e-mail."
   },
   {
    "id": "k327",
    "text": "Comment appelle-t-on les étapes qui composent un flux Power Automate ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "actions",
     "action",
     "les actions"
    ]
   },
   {
    "id": "k328",
    "text": "Où trouver des flux prêts à l’emploi pour démarrer rapidement ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Dans les modèles",
     "Dans la corbeille",
     "Dans Power BI",
     "Dans l’historique d’exécution"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k329",
    "text": "Remettez dans l’ordre la création d’un flux automatisé.",
    "time": 40,
    "points": 1,
    "type": "order",
    "items": [
     "Choisir le déclencheur",
     "Ajouter les actions",
     "Tester le flux",
     "Activer le flux"
    ]
   },
   {
    "id": "k330",
    "text": "Quelle est la différence principale entre un flux automatisé et un flux instantané dans Power Automate ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "automatisé : sur événement ; instantané : manuel",
     "automatisé : manuel ; instantané : sur événement",
     "automatisé : à heure fixe ; instantané : manuel",
     "automatisé : sur événement ; instantané : à heure fixe"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k331",
    "text": "Comment pouvez-vous gérer les erreurs dans un flux Power Automate ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "En ajoutant des actions de délai",
     "En créant des boucles supplémentaires",
     "En utilisant des actions Scope",
     "En désactivant les notifications du flux"
    ],
    "correct": [
     2
    ],
    "explanation": "Les actions Scope regroupent des étapes et, avec « Configurer l’exécution après », permettent de gérer les erreurs."
   },
   {
    "id": "k332",
    "text": "Quel est l'avantage principal d'utiliser des variables dans un flux Power Automate ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Accélérer l’exécution du flux",
     "Stocker et réutiliser des données",
     "Réduire le nombre d’actions",
     "Améliorer la sécurité du flux"
    ],
    "correct": [
     1
    ],
    "explanation": "Les variables permettent de stocker et de manipuler des données au fil du flux."
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
  "id": "canva-perfectionnement",
  "category": "graphisme",
  "title": "Canva : aller plus loin",
  "description": "Historique des versions, raccourcis, retouche d’image, transparence et animations : gagnez en efficacité sur Canva.",
  "level": 3,
  "questions": [
   {
    "id": "k355",
    "text": "Quelle fonction adapte un design à d’autres formats en un clic ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Redimensionner",
     "Dupliquer",
     "Exporter",
     "Grille"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k356",
    "text": "Quel format d’export convient le mieux pour envoyer un design à l’imprimeur ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "PNG transparent",
     "PDF impression",
     "JPG optimisé web",
     "GIF animé"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k357",
    "text": "Où regrouper les logos, couleurs et polices de votre organisation ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Dans les favoris",
     "Dans le kit de marque",
     "Dans les modèles",
     "Dans les téléchargements"
    ],
    "correct": [
     1
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
    "text": "Quelle valeur de transparence rend un élément totalement opaque dans Canva ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 0,
     "min": 0,
     "max": 100,
     "step": 1,
     "answer": 100
    }
   },
   {
    "id": "k362",
    "text": "Quels éléments peut-on animer dans Canva ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Une page",
     "Un texte",
     "Une piste audio",
     "Une image"
    ],
    "correct": [
     0,
     1,
     3
    ]
   },
   {
    "id": "k363",
    "text": "Comment permettre à un collègue de modifier votre design ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "L’exporter en PDF et l’envoyer",
     "Lui envoyer une capture d’écran",
     "Le partager avec droit de modification",
     "Le partager avec un lien en consultation"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k364",
    "text": "Comment aligner précisément plusieurs éléments ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "En les groupant puis en les copiant",
     "Avec Position, puis Aligner",
     "En les déplaçant à l’œil",
     "En les verrouillant sur la page"
    ],
    "correct": [
     1
    ],
    "explanation": "La fonction Position, puis l’option Aligner, place plusieurs éléments avec précision les uns par rapport aux autres."
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
  "description": "Typologies, personas, fréquence, mise en page et indicateurs : les bons réflexes pour concevoir et envoyer vos newsletters.",
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
     "comptables"
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
    "text": "Quel principe de lisibilité une newsletter doit-elle respecter ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Une largeur fixe de 1200 pixels",
     "Un design adapté à tous les écrans",
     "Un format pensé pour l’impression",
     "Une version en texte brut uniquement"
    ],
    "correct": [
     1
    ],
    "explanation": "Une newsletter doit rester lisible sur tout support : ordinateur, mobile et tablette."
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
    "text": "Sur 2 000 newsletters envoyées, 500 sont ouvertes. Quel est le taux d’ouverture ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 0,
     "min": 0,
     "max": 100,
     "step": 1,
     "answer": 25,
     "unit": "%"
    }
   },
   {
    "id": "k371",
    "text": "Quels indicateurs mesurent la performance d’une newsletter ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Le taux d’ouverture",
     "Le taux de clics",
     "Le taux de désabonnement",
     "Le taux de rotation des stocks"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k372",
    "text": "Citez un outil d’envoi de newsletters.",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "Mailchimp",
     "Brevo",
     "Sendinblue",
     "Sarbacane",
     "MailerLite",
     "Mailjet",
     "Klaviyo"
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
  "title": "IA générative : créer des images",
  "description": "Outils de génération, retouche par instructions, inpainting, droits d’auteur et deepfakes : créer des images avec l’IA en connaissance de cause.",
  "level": 1,
  "questions": [
   {
    "id": "k375",
    "text": "Quelle technique produit la plupart des images générées par IA aujourd’hui ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Les modèles de diffusion",
     "Les systèmes experts",
     "Les arbres de décision",
     "La compression JPEG"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k376",
    "text": "Comment appelle-t-on une fausse image ou vidéo réaliste créée par IA pour imiter une personne ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "deepfake",
     "deepfakes",
     "deep fake",
     "hypertrucage"
    ]
   },
   {
    "id": "k377",
    "text": "Lesquels de ces outils génèrent des images ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Midjourney",
     "Adobe Firefly",
     "Gemini",
     "DeepL Write"
    ],
    "correct": [
     0,
     1,
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
    "text": "Que permet une recherche d’image inversée (Google Lens, TinEye) ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Retrouver où une image a déjà été publiée",
     "Vérifier automatiquement ses droits d’auteur",
     "Augmenter sa résolution",
     "Supprimer un filigrane"
    ],
    "correct": [
     0
    ]
   },
   {
    "id": "k380",
    "text": "Comment modifier une image existante avec les outils d’IA actuels ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Modifier le code source de l’image",
     "Convertir l’image en PDF avant retouche",
     "Décrire la modification en langage naturel",
     "Relancer l’IA avec une image vide"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k381",
    "text": "Certains outils ajoutent un marquage invisible ou des métadonnées pour signaler qu’une image est générée par IA.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true,
    "explanation": "Par exemple les Content Credentials (C2PA) ou SynthID."
   },
   {
    "id": "k382",
    "text": "Dans Midjourney, quel paramètre modifie le ratio de l’image ? (ex. --?? 16:9)",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "--ar",
     "ar",
     "--aspect",
     "aspect"
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
  "title": "Microsoft Project",
  "description": "Diagramme de Gantt, tâches, ressources, effort, dépendances : planifiez et suivez vos projets avec Microsoft Project.",
  "level": 1,
  "questions": [
   {
    "id": "k385",
    "text": "Quelle est l’extension d’un fichier Microsoft Project ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "mpp",
     ".mpp"
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
     "Créer des organigrammes et des schémas",
     "Gérer les congés et notes de frais des salariés",
     "Suivre la comptabilité d’une entreprise"
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
    "text": "Une tâche dure 4 jours avec une ressource affectée à 50 %. Quel est l’effort (travail), en jours ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 0,
     "min": 0,
     "max": 8,
     "step": 0.5,
     "answer": 2,
     "unit": "j"
    },
    "explanation": "Travail = durée × unités = 4 × 0,5 = 2 jours."
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
     "Matériel"
    ],
    "correct": [
     1
    ],
    "explanation": "Microsoft Project connaît trois types de ressources : Travail, Matériel (les consommables) et Coût."
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
     "Durée fixe : planifiée en automatique ; unités fixes : en manuel",
     "Durée fixe : durée constante ; unités fixes : durée variable",
     "Durée fixe : sans ressource ; unités fixes : avec ressources",
     "Durée fixe : déplaçable ; unités fixes : fixée à une date"
    ],
    "correct": [
     1
    ],
    "explanation": "Avec une durée fixe, la durée ne change pas quand on modifie les ressources ; avec des unités fixes, la durée varie selon les ressources affectées."
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
  "title": "Photoshop : masques, tracés et automatisation",
  "description": "Masques d’écrêtage, plume, détourage, styles de calque, filtres et traitement par lots : approfondissez Photoshop.",
  "level": 2,
  "questions": [
   {
    "id": "k395",
    "text": "Quelle touche maintenir pour se déplacer dans le document avec l’outil main ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "Espace",
     "barre d’espace",
     "la barre d’espace"
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
    "text": "Quelle commande repère automatiquement la personne ou l’objet principal d’une photo ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Tout sélectionner",
     "Sélectionner un sujet",
     "Intervertir la sélection",
     "Plage de couleurs"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k399",
    "text": "La plume permet de :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "dupliquer une zone de l’image",
     "adoucir les couleurs d’une zone de l’image",
     "recadrer l’image selon un ratio",
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
    "text": "Remettez dans l’ordre un traitement par lots.",
    "time": 40,
    "points": 1,
    "type": "order",
    "items": [
     "Enregistrer une action",
     "Fichier, Automatisation, Traitement par lots",
     "Choisir l’action et le dossier source",
     "Lancer le traitement"
    ]
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
  "title": "WordPress",
  "description": "Administration, articles et pages, médias, menus, widgets, thèmes et extensions : créez et animez un site WordPress.",
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
    "text": "Quelle part des sites web dans le monde utilise WordPress, environ ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 5,
     "min": 0,
     "max": 100,
     "step": 1,
     "answer": 43,
     "unit": "%"
    },
    "explanation": "Environ 43 % des sites selon W3Techs : une marge de 5 points est acceptée."
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
    "text": "Que permet WordPress nativement ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Créer un article",
     "Ajouter des images",
     "Gérer des commentaires",
     "Valider des commandes"
    ],
    "correct": [
     0,
     1,
     2
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
    "text": "Pour quel type de contenu les catégories sont-elles disponibles par défaut ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Les articles",
     "Les pages",
     "Les commentaires",
     "Les médias"
    ],
    "correct": [
     0
    ]
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
     "Yoast SEO",
     "Akismet",
     "Contact Form 7",
     "WooCommerce"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k414",
    "text": "Dans quel menu de l’administration installe-t-on une extension ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "Extensions",
     "le menu Extensions",
     "Plugins"
    ]
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
  "title": "Drupal : contribuer au site",
  "description": "Contenus, menus, éditeur, taxonomies, blocs et champs : publiez et mettez à jour les pages d’un site Drupal.",
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
     "un langage de programmation",
     "un système de gestion de contenu",
     "un module pour WordPress"
    ],
    "correct": [
     2
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
     "mettre un mot en gras",
     "écrire le texte à votre place",
     "ajouter un lien vers une page"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k420",
    "text": "Dans Drupal, comment s’appelle le système de classement par catégories et étiquettes ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "taxonomie",
     "la taxonomie",
     "taxonomy"
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
    "text": "Quels types de champs Drupal propose-t-il ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Texte simple",
     "Référence",
     "Fichier",
     "Filtre et tri"
    ],
    "correct": [
     0,
     1,
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
  "title": "Joomla : contribuer au site",
  "description": "Articles, catégories, éditeur, rôles, extensions et corbeille : publiez et gérez les contenus d’un site Joomla.",
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
     "un langage de programmation web",
     "un système de gestion de contenu",
     "un hébergeur de sites internet",
     "une plateforme de vente en ligne"
    ],
    "correct": [
     1
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
    "text": "De quoi Joomla a-t-il besoin pour fonctionner ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "PHP",
     "Une base de données",
     "Un serveur web",
     "Un serveur Java dédié"
    ],
    "correct": [
     0,
     1,
     2
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
     "abonné",
     "enregistré"
    ],
    "correct": [
     2
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
     "insérer un tableau",
     "générer du texte par IA",
     "ajouter un lien hypertexte",
     "insérer une image"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k433",
    "text": "Remettez dans l’ordre la restauration d’un article mis à la corbeille.",
    "time": 40,
    "points": 1,
    "type": "order",
    "items": [
     "Ouvrir Contenus, puis Articles",
     "Filtrer sur le statut « À la corbeille »",
     "Sélectionner l’article",
     "Le publier"
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
  "title": "Figma",
  "description": "Outils vectoriels, composants, variantes, commentaires, historique et interactions : les bases pour maquetter avec Figma.",
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
    "text": "Quels outils existent dans Figma ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "La plume",
     "Le crayon",
     "La pipette",
     "L’aérographe"
    ],
    "correct": [
     0,
     1,
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
    "text": "Comment appelle-t-on un élément réutilisable dont les copies se mettent à jour automatiquement ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "composant",
     "un composant",
     "component"
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
  "title": "PrestaShop",
  "description": "Installation, administration, sécurité, groupes de clients, fiches produits : prenez en main une boutique PrestaShop.",
  "level": 1,
  "questions": [
   {
    "id": "k445",
    "text": "Quelles technologies sont utiles pour PrestaShop ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "DNS",
     "PHP",
     "HTML",
     "Python"
    ],
    "correct": [
     0,
     1,
     2
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
    "text": "Remettez dans l’ordre le parcours d’achat d’un client.",
    "time": 40,
    "points": 1,
    "type": "order",
    "items": [
     "Ajouter au panier",
     "Renseigner ses informations",
     "Choisir la livraison",
     "Payer"
    ]
   },
   {
    "id": "k452",
    "text": "Un module PrestaShop ajoute une fonctionnalité sans modifier le cœur du logiciel.",
    "time": 20,
    "points": 1,
    "type": "truefalse",
    "truth": true
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
    "text": "Comment appelle-t-on un produit proposé en plusieurs tailles ou couleurs ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Un produit groupé en pack",
     "Un produit virtuel téléchargeable",
     "Un produit à déclinaisons",
     "Une catégorie de produits"
    ],
    "correct": [
     2
    ]
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
  "title": "WooCommerce",
  "description": "Nom de domaine, produits, commandes, clients, stock et statistiques : gérez une boutique en ligne avec WooCommerce.",
  "level": 1,
  "questions": [
   {
    "id": "k455",
    "text": "Le DNS permet de…",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "chiffrer les échanges avec le site",
     "sauvegarder les fichiers du site",
     "relier un nom de domaine au serveur",
     "compresser les images du site"
    ],
    "correct": [
     2
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
    "text": "Que permet WooCommerce pour les commandes ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Créer une commande manuellement",
     "Consulter le détail d’une commande",
     "Changer le statut d’une commande",
     "Fusionner deux commandes en une seule"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k460",
    "text": "Quel rôle WooCommerce ajoute-t-il à WordPress ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "client",
     "customer",
     "gestionnaire de boutique",
     "shop manager"
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
  "title": "Canva",
  "description": "Modèles, calques, grilles d’images, blocs de texte et imports : prenez en main Canva pour réaliser vos premiers visuels.",
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
    "text": "Où retrouver un design créé précédemment ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Dans les modèles",
     "Dans la corbeille",
     "Dans Applications",
     "Dans Projets"
    ],
    "correct": [
     3
    ]
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
    "text": "Quel élément de Canva dispose plusieurs images dans des cases ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "grille",
     "une grille",
     "grille d’images",
     "grilles"
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
    "text": "Que peut-on importer dans Canva ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Une image",
     "Un son",
     "Une vidéo",
     "Un programme .exe"
    ],
    "correct": [
     0,
     1,
     2
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
  "title": "Google Workspace",
  "description": "Gmail, Drive, Agenda, Meet, Keep, Slides et Chat : les fonctions clés de Google Workspace pour travailler au quotidien.",
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
    "text": "Dans quel outil Google crée-t-on un planning de prise de rendez-vous ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "Google Agenda",
     "Agenda",
     "Google Calendar",
     "Calendar"
    ]
   },
   {
    "id": "k479",
    "text": "Pour afficher son onglet sur une visioconférence dans Google Meet, on utilise :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "La caméra",
     "Le partage d’écran",
     "Les sous-titres automatiques",
     "Le chat"
    ],
    "correct": [
     1
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
     "ne plus recevoir les messages d’une conversation",
     "retirer un email de la boîte de réception pour de bon",
     "reporter la réception de l’email à plus tard",
     "envoyer un email à une date ultérieure"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k483",
    "text": "Lesquels de ces services font partie de Google Workspace ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Tasks",
     "Keep",
     "Slides",
     "Scribus"
    ],
    "correct": [
     0,
     1,
     2
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
  "title": "Vidéo web",
  "description": "Formats, outils, structure du récit, composition, motion design et transitions : les bases d’une vidéo pour le web.",
  "level": 1,
  "questions": [
   {
    "id": "k485",
    "text": "Lesquels de ces formats sont des formats vidéo ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "MP4",
     "MOV",
     "WEBM",
     "WEBP"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k486",
    "text": "Quel type de vidéo présente l’entreprise, ses valeurs et ses métiers ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Promotionnelle",
     "Institutionnelle",
     "Éducative",
     "Tutoriel"
    ],
    "correct": [
     1
    ],
    "explanation": "La vidéo institutionnelle présente l’entreprise et son image ; la vidéo promotionnelle met en avant une offre ou un produit."
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
    "text": "Quelle règle de composition découpe l’image en neuf zones égales ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "règle des tiers",
     "la règle des tiers",
     "tiers"
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
     "Fondu",
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
    "text": "Quel format d’image privilégier pour une vidéo en story ou en Reels ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Horizontal 16:9",
     "Vertical 9:16",
     "Carré 1:1",
     "Ancien format 4:3"
    ],
    "correct": [
     1
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
  "title": "Traitement de texte",
  "description": "Images, règle, retraits, en-têtes, niveaux de titre, suggestions et export PDF : les bases pour mettre en forme un document.",
  "level": 1,
  "questions": [
   {
    "id": "k495",
    "text": "Comment peut-on positionner une image par rapport au texte ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Derrière le texte",
     "Devant le texte",
     "Alignée sur le texte",
     "Entre deux pages"
    ],
    "correct": [
     0,
     1,
     2
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
     "insérer un saut de page",
     "éviter les erreurs d’orthographe",
     "contrôler l’écart entre les pages"
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
     "sont figées après l’insertion du graphique",
     "peuvent être modifiées dans un tableur",
     "sont lues depuis le sommaire du document",
     "se modifient depuis la règle du document"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k498",
    "text": "Quel raccourci ouvre la recherche dans un document ? (Ctrl + ?)",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "Ctrl + F",
     "Ctrl+F",
     "F"
    ]
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
     "identiques dans tout le document",
     "ajoutés à l’enregistrement",
     "propres à chaque section du document",
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
     "Non, le logiciel l’interdit",
     "Oui, c’est même recommandé",
     "Oui, mais ce n’est pas recommandé",
     "Oui, après désactivation d’un avertissement"
    ],
    "correct": [
     2
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
  "title": "Scrum : pilotage et estimation",
  "description": "Release planning, définition du terminé, story points, sprint 0, burndown chart : pilotez un projet Scrum au-delà des bases.",
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
    "text": "Dans la suite de Fibonacci des story points (1, 2, 3, 5, 8…), quel nombre suit 8 ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 0,
     "min": 0,
     "max": 30,
     "step": 1,
     "answer": 13
    }
   },
   {
    "id": "k507",
    "text": "Quelle affirmation est fausse concernant le release planning meeting ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "Il permet d’identifier les risques du projet",
     "Il permet d’estimer les dates de livraison",
     "Il permet de synchroniser les équipes",
     "Il permet de présenter l’incrément livré"
    ],
    "correct": [
     3
    ],
    "explanation": "Présenter l’incrément livré aux parties prenantes relève de la revue de sprint, pas du release planning."
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
    "text": "Quels adjectifs décrivent un bon Product Backlog ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Priorisé",
     "Estimé",
     "Détaillé",
     "Équilibré"
    ],
    "correct": [
     0,
     1,
     2
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
    "text": "Que mesure la vélocité d’une équipe ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le nombre d’heures travaillées par sprint",
     "Les points terminés à chaque sprint",
     "Le temps passé en réunions par sprint",
     "Le nombre de tâches ajoutées au backlog"
    ],
    "correct": [
     1
    ],
    "explanation": "La vélocité mesure le travail terminé par sprint, exprimé en points."
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
  "title": "Facebook : la publicité",
  "description": "Boost, enchères, objectifs, ciblage, test A/B et pixel Meta : construisez des campagnes publicitaires efficaces.",
  "level": 3,
  "questions": [
   {
    "id": "k515",
    "text": "Le boost de publication est :",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "publier un même contenu sur plusieurs pages",
     "payer pour augmenter la portée d’une publication",
     "programmer une publication à l’avance",
     "acheter des abonnés et des likes"
    ],
    "correct": [
     1
    ]
   },
   {
    "id": "k516",
    "text": "Il est important de vérifier le paramétrage de sa page pour :",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "désactiver les messages privés",
     "masquer le nombre d’abonnés",
     "activer l’identification de la page",
     "désactiver la double authentification"
    ],
    "correct": [
     2
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
    "text": "Quels objectifs de campagne Meta propose-t-il ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Notoriété",
     "Trafic",
     "Ventes",
     "Fidélisation"
    ],
    "correct": [
     0,
     1,
     2
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
    "text": "Une campagne coûte 50 000 XPF et génère 250 clics. Quel est le coût par clic ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 0,
     "min": 0,
     "max": 500,
     "step": 10,
     "answer": 200,
     "unit": "XPF"
    },
    "explanation": "50 000 / 250 = 200 XPF."
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
    "text": "Quel outil de Meta, installé sur votre site, permet le reciblage publicitaire ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "pixel Meta",
     "pixel",
     "le pixel Meta",
     "pixel Facebook"
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
  "title": "Accessibilité : handicaps et usages",
  "description": "Types de handicap, technologies d’assistance, référentiels, lois de l’ergonomie : pour qui et pourquoi rendre un site accessible.",
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
    "text": "Quels types de handicap distingue-t-on ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Moteur",
     "Sensoriel",
     "Cognitif",
     "Visible"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k527",
    "text": "Quel logiciel lit à voix haute le contenu de l’écran pour les personnes aveugles ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "lecteur d’écran",
     "un lecteur d’écran",
     "screen reader"
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
    "text": "Quelle démarche vérifie qu’un site respecte le RGAA ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Un audit de performance",
     "Un audit de conformité",
     "Un audit de référencement",
     "Un test de charge"
    ],
    "correct": [
     1
    ],
    "explanation": "L’audit de conformité contrôle chaque critère du RGAA et calcule un taux de conformité, publié dans la déclaration d’accessibilité."
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
  "title": "After Effects",
  "description": "Interface, images clés, incrustation, suivi de mouvement, rotoscopie, 3D et expressions : les bases de l’animation.",
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
    "text": "Quels outils existent dans After Effects ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "La plume",
     "Le roto-pinceau",
     "La gomme",
     "Le pot de peinture"
    ],
    "correct": [
     0,
     1,
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
    "text": "Les images clés permettent d’animer l’opacité d’un calque.",
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
    "text": "Quel codec, aussi appelé HEVC, compresse mieux que le H.264 ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "H.265",
     "H265",
     "HEVC"
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
  "title": "Microsoft 365 : les applications en ligne",
  "description": "Word, Excel, PowerPoint et Outlook dans le navigateur, enregistrement automatique, historique : ce qui change face aux logiciels installés.",
  "level": 1,
  "questions": [
   {
    "id": "k545",
    "text": "Quel est le principal avantage de Word en ligne ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Il fonctionne sans connexion Internet",
     "Il a plus de fonctions que Word installé",
     "Plusieurs personnes l’éditent ensemble",
     "Il ne demande pas de compte Microsoft"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k546",
    "text": "Dans Word en ligne, sur quel bouton cliquer pour inviter des collègues à modifier un document ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "Partager",
     "partage"
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
    "text": "Lesquelles de ces fonctionnalités appartiennent à Word ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Révision",
     "Saut de page",
     "Plage nommée",
     "Publipostage"
    ],
    "correct": [
     0,
     1,
     3
    ]
   },
   {
    "id": "k549",
    "text": "Dans Excel en ligne, quel outil remplace l’enregistreur de macros VBA ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Les segments dynamiques",
     "Les tableaux croisés",
     "Les scripts Office",
     "Les filtres avancés"
    ],
    "correct": [
     2
    ],
    "explanation": "Les scripts Office, accessibles depuis l’onglet Automatiser, remplacent l’enregistreur de macros VBA dans Excel en ligne."
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
    "text": "Remettez dans l’ordre la restauration d’une version précédente d’un document en ligne.",
    "time": 40,
    "points": 1,
    "type": "order",
    "items": [
     "Ouvrir le document",
     "Menu Fichier, puis Infos",
     "Historique des versions",
     "Choisir et restaurer la version"
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
    "text": "Quel espace OneDrive la plupart des abonnements Microsoft 365 entreprise incluent-ils par utilisateur ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 0,
     "min": 0,
     "max": 5,
     "step": 1,
     "answer": 1,
     "unit": "To"
    }
   },
   {
    "id": "k554",
    "text": "Les applications en ligne de Microsoft 365 fonctionnent dans le navigateur, sans installation.",
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
  "title": "Tableur",
  "description": "Raccourcis, sélection, saisie de dates, recopie, priorité des opérations, CSV : les bases pour gérer vos données dans un tableur.",
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
    "text": "Quelle touche maintenir pour sélectionner des cellules non contiguës ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "Ctrl",
     "Control",
     "Contrôle",
     "Cmd"
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
     "Nombres à gauche et texte à droite par défaut",
     "Nombres centrés et texte à gauche par défaut",
     "Nombres à droite et texte à gauche par défaut",
     "Nombres à droite et texte centré par défaut"
    ],
    "correct": [
     2
    ]
   },
   {
    "id": "k559",
    "text": "Combien de cellules compte la plage A1:C4 ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 0,
     "min": 0,
     "max": 20,
     "step": 1,
     "answer": 12
    },
    "explanation": "3 colonnes (A à C) × 4 lignes = 12 cellules."
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
    "text": "Quelles méthodes permettent de déplacer des données ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Clic droit, Couper puis Coller",
     "Ctrl + X puis Ctrl + V",
     "Glisser-déposer",
     "Menu Données, puis Déplacer"
    ],
    "correct": [
     0,
     1,
     2
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
  "title": "Tableur : mise en forme et analyse",
  "description": "Validation de données, mise en forme conditionnelle, sparklines, segments, références absolues : analysez vos données plus vite.",
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
    "text": "Quel outil met en forme des cellules selon un critère ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "mise en forme conditionnelle",
     "la mise en forme conditionnelle",
     "MFC"
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
    "text": "Comment appelle-t-on les mini-graphiques affichés dans une seule cellule ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "sparkline",
     "sparklines",
     "graphique sparkline"
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
    "text": "Une plage nommée permet d’utiliser un nom (ex. TauxTGC) à la place d’une référence de cellule dans une formule.",
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
    "text": "Quelle formule, à recopier vers le bas, calcule un prix TTC avec la TGC dans la cellule C2 et les prix HT dans la colonne A ?",
    "time": 50,
    "points": 1,
    "type": "single",
    "answers": [
     "= A2 + $C$2 * A2",
     "= A2 * $C$2",
     "= A2 + C2 * A2",
     "= A2 + $C$2"
    ],
    "correct": [
     0
    ],
    "explanation": "Il faut ajouter la taxe au prix HT, et figer C2 avec $C$2 pour pouvoir recopier la formule."
   },
   {
    "id": "k574",
    "text": "Quelle formule de mise en forme conditionnelle colore une ligne dont la valeur en colonne B est égale à 0 ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "=B2=0",
     "=$B2=0",
     "=$B$2=0",
     "=B$2=0"
    ],
    "correct": [
     1
    ],
    "explanation": "Le $ devant B fige la colonne mais pas la ligne : la règle s’applique ainsi à chaque ligne de la plage."
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
  "title": "Facebook : faire vivre sa page",
  "description": "Marronniers, rôles, modération, récence et programmation : les bons réflexes pour animer une page Facebook dans la durée.",
  "level": 2,
  "questions": [
   {
    "id": "k575",
    "text": "Comment appelle-t-on un sujet qui revient chaque année (rentrée, fête des mères…) ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "marronnier",
     "marronniers",
     "un marronnier"
    ]
   },
   {
    "id": "k576",
    "text": "Comment donner la main à un collaborateur sur une page Facebook ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Lui donner votre mot de passe",
     "Lui attribuer un accès à la page",
     "L’ajouter simplement à vos amis",
     "Lui envoyer un lien vers la page"
    ],
    "correct": [
     1
    ],
    "explanation": "On attribue un accès à la page : accès Facebook (contrôle complet) ou accès aux tâches (droits limités)."
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
    "text": "Que faire face à un commentaire négatif mais légitime ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le masquer et ne pas répondre",
     "Le signaler comme spam auprès de Facebook",
     "Y répondre poliment avec une solution",
     "Le supprimer et bloquer son auteur"
    ],
    "correct": [
     2
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
     "La performance du post auprès d’autres utilisateurs",
     "L’intérêt de l’utilisateur envers le créateur de contenu",
     "Les commentaires des utilisateurs sur une publication",
     "Le temps écoulé depuis la publication du post"
    ],
    "correct": [
     3
    ]
   },
   {
    "id": "k582",
    "text": "Remettez dans l’ordre la programmation d’une publication.",
    "time": 40,
    "points": 1,
    "type": "order",
    "items": [
     "Créer une publication",
     "Rédiger le texte et ajouter un visuel",
     "Choisir « Programmer »",
     "Fixer la date et l’heure"
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
  "id": "google-apps-script",
  "category": "dev",
  "title": "Google Apps Script",
  "description": "Scripts autonomes et liés, variables, boucles, déclencheurs, menus et boîtes de dialogue : automatisez Google Workspace.",
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
    "text": "Quels services Google Apps Script peut-il piloter ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Docs",
     "Sheets",
     "Calendar",
     "Power Automate"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k607",
    "text": "Quel mot-clé déclare une constante en JavaScript ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "const"
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
    "text": "Quel déclencheur simple s’exécute à l’ouverture d’un fichier ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "onOpen",
     "onEdit",
     "onInstall",
     "doGet"
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
  "title": "HTML & CSS",
  "description": "Balises, propriétés CSS, marges, unités, media queries et liens : les premiers pas pour structurer et styler une page web.",
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
    "text": "Quelles unités privilégier pour un site adaptatif ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "rem",
     "%",
     "px",
     "pt"
    ],
    "correct": [
     0,
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
     "un sélecteur qui cible les balises vidéo",
     "une requête serveur qui charge des médias",
     "une règle qui supprime le contenu inutile",
     "une règle qui adapte le style à l’écran"
    ],
    "correct": [
     3
    ],
    "explanation": "Une media query applique des règles CSS selon le support (largeur d’écran, impression…) pour adapter l’affichage."
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
    "text": "Quelle propriété CSS gère les marges internes d’un élément ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "padding"
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
     "un paragraphe d’introduction",
     "une zone de navigation",
     "un en-tête de page"
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
  "title": "Illustrator",
  "description": "Formats vectoriels, plume, points d’ancrage, Pathfinder, pipette, mode isolation : les bases du dessin vectoriel.",
  "level": 1,
  "questions": [
   {
    "id": "k625",
    "text": "Quelle est l’extension des fichiers Illustrator ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "AI",
     ".ai"
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
    "text": "De combien de points d’ancrage un cercle vectoriel est-il composé ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 0,
     "min": 0,
     "max": 8,
     "step": 1,
     "answer": 4
    }
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
     "retirer la couleur de fond d’un objet",
     "séparer le fond et le contour en objets",
     "rompre une liaison entre deux calques",
     "créer un calque pour l’élément sélectionné"
    ],
    "correct": [
     1
    ],
    "explanation": "La décomposition donne des sous-objets : un pour le fond et un pour le contour de l’objet."
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
     "La couleur de fond sans le contour",
     "La couleur de contour sans le fond",
     "La couleur de fond et de contour",
     "La couleur du plan de travail"
    ],
    "correct": [
     2
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
     "scinder un tracé en plusieurs morceaux",
     "modifier un groupe sans toucher au reste",
     "supprimer les points isolés d’un tracé",
     "récupérer le fond d’une forme isolée"
    ],
    "correct": [
     1
    ],
    "explanation": "Le mode isolation permet de modifier un groupe ou un objet isolé du reste du dessin."
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
  "title": "Image numérique : les fondamentaux",
  "description": "Vectoriel et bitmap, formats de fichiers, RVB et CMJN, transparence : les notions indispensables avant de retoucher une image.",
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
    "text": "Lesquels de ces formats sont vectoriels ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "SVG",
     "EPS",
     "AI",
     "PNG",
     "TIFF"
    ],
    "correct": [
     0,
     1,
     2
    ]
   },
   {
    "id": "k640",
    "text": "Quelle résolution recommande-t-on pour une image destinée à l’impression ?",
    "time": 30,
    "points": 1,
    "type": "slider",
    "slider": {
     "tolerance": 0,
     "min": 0,
     "max": 600,
     "step": 50,
     "answer": 300,
     "unit": "ppp"
    }
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
    "text": "Comment appelle-t-on le plus petit point coloré qui compose une image bitmap ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "pixel",
     "un pixel",
     "pixels"
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
  "title": "Traitement de texte : styles et mise en page",
  "description": "Styles, sections, marges, interligne, colonnes, collage sans mise en forme : structurez des documents longs et soignés.",
  "level": 3,
  "questions": [
   {
    "id": "k645",
    "text": "Quel raccourci colle un texte sans sa mise en forme ? (Ctrl + Maj + ?)",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "V",
     "Ctrl + Maj + V",
     "Ctrl + Shift + V"
    ]
   },
   {
    "id": "k646",
    "text": "À quoi sert un saut de section ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Passer simplement à la page suivante",
     "Regrouper plusieurs chapitres en un seul",
     "Appliquer une mise en page à une partie",
     "Mettre à jour le sommaire automatiquement"
    ],
    "correct": [
     2
    ],
    "explanation": "Chaque section peut avoir sa propre orientation, ses marges et ses en-têtes."
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
     "Pour uniformiser la mise en forme",
     "Pour compter les mots du document",
     "Pour vérifier l’orthographe du document"
    ],
    "correct": [
     1
    ],
    "explanation": "Modifier un style met à jour d’un coup tous les textes qui l’utilisent."
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
    "text": "Quel élément se génère automatiquement à partir des styles de titre ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "table des matières",
     "la table des matières",
     "sommaire",
     "le sommaire"
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
     "Le texte glisse vers les colonnes suivantes",
     "Il faut créer une nouvelle section"
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
     "styles de paragraphe",
     "modèles de document",
     "formats d’image"
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
  "title": "Photoshop",
  "description": "Format PSD, calques, tampon, correcteur, modes de fusion et animation GIF : les bases pour retoucher vos images.",
  "level": 1,
  "questions": [
   {
    "id": "k655",
    "text": "Quelle est l’extension des fichiers Photoshop ?",
    "time": 30,
    "points": 1,
    "type": "text",
    "accepted": [
     "PSD",
     ".psd"
    ]
   },
   {
    "id": "k656",
    "text": "Quel panneau permet d’animer un GIF dans Photoshop ?",
    "time": 40,
    "points": 1,
    "type": "single",
    "answers": [
     "Le panneau Montage",
     "Le panneau Calques",
     "Le panneau Historique",
     "Le panneau Propriétés"
    ],
    "correct": [
     0
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
    "text": "Quels calques de remplissage peut-on créer ?",
    "time": 50,
    "points": 1,
    "type": "multiple",
    "answers": [
     "Couleur unie",
     "Dégradé",
     "Motif",
     "Texte"
    ],
    "correct": [
     0,
     1,
     2
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
