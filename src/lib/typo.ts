/**
 * Typographie française : espaces insécables pour qu'une ponctuation, un guillemet, un tiret,
 * une unité ou un groupe de chiffres ne se retrouve jamais seul en début de ligne.
 * Appliquée à tout le texte affiché (interface, quiz d'exemple, importés et personnels).
 */

/** Espace insécable U+00A0 (l'espace fine U+202F ne se voit pas dans Georama). */
const NBSP = String.fromCharCode(0xa0);

const RULES: [RegExp, string][] = [
  // « Bonne réponse : », « Vrai ? », « 50 % », « 10 € », « Quiz · Skazy », « texte »
  [/[ \t]+([:;!?»%€$·])/g, `${NBSP}$1`],
  [/«[ \t]+/g, `«${NBSP}`],
  // Tiret d'incise : il reste en fin de ligne (« a - b »)
  [/[ \t]+-(?=[ \t])/g, `${NBSP}-`],
  // Groupes de milliers : 150 000, 1 000 000
  [/(\d) (?=\d{3}(?!\d))/g, `$1${NBSP}`],
  // Nombre et mot qui le suit : 30 s, 500 points, 10 questions
  [/(\d) (?=\p{L})/gu, `$1${NBSP}`],
];

const NEEDS_FIX = /[ \t][:;!?»%€$·-]|«[ \t]|\d /;

/** Remplace les espaces sécables mal placés par des espaces insécables. */
export function frenchSpaces(text: string): string {
  if (!NEEDS_FIX.test(text)) return text;
  return RULES.reduce((s, [re, by]) => s.replace(re, by), text);
}

/** Éléments dont le texte n'est pas de la prose (code) ou appartient à un champ de saisie. */
const SKIP = 'code, pre, kbd, samp, script, style, textarea, [contenteditable]';

function fixText(node: Text) {
  const value = node.nodeValue;
  if (!value || !NEEDS_FIX.test(value)) return;
  if (node.parentElement?.closest(SKIP)) return;
  const fixed = frenchSpaces(value);
  if (fixed !== value) node.nodeValue = fixed;
}

function fixTree(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) return fixText(root as Text);
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) fixText(n as Text);
}

/**
 * Corrige le texte déjà affiché puis chaque texte ajouté ou modifié par React.
 * Les corrections ont lieu avant l'affichage (micro-tâche), sans scintillement.
 */
export function watchFrenchSpaces(root: HTMLElement = document.body) {
  fixTree(root);
  const observer = new MutationObserver((records) => {
    for (const r of records) {
      if (r.type === 'characterData') fixText(r.target as Text);
      else r.addedNodes.forEach(fixTree);
    }
  });
  observer.observe(root, { subtree: true, childList: true, characterData: true });
  return () => observer.disconnect();
}
