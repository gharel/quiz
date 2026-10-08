/** Formes associées aux réponses : la couleur n'est jamais le seul repère. */
export const SHAPES = ['triangle', 'diamond', 'circle', 'square'] as const;
export const SHAPE_NAMES = ['Triangle', 'Losange', 'Cercle', 'Carré'];

export function Shape({ index, size = 28 }: { index: number; size?: number }) {
  const s = SHAPES[index % 4];
  return (
    <svg className="shape" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      {s === 'triangle' && <path d="M16 4 30 28H2Z" fill="currentColor" />}
      {s === 'diamond' && <path d="M16 2 30 16 16 30 2 16Z" fill="currentColor" />}
      {s === 'circle' && <circle cx="16" cy="16" r="13" fill="currentColor" />}
      {s === 'square' && <rect x="4" y="4" width="24" height="24" rx="2" fill="currentColor" />}
    </svg>
  );
}

/** Index de couleur : Vrai = bleu/losange, Faux = orange/triangle (comme le jeu d'origine). */
export const TF_INDEX = { true: 1, false: 0 } as const;
