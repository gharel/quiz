/** Éléments communs des avatars (repère 100 × 100, visage centré vers 50, 56). */
export const INK = '#2e2e2e';

export function Eyes({ y = 54, dx = 12, r = 4.6, color = INK }: { y?: number; dx?: number; r?: number; color?: string }) {
  return (
    <g>
      {[50 - dx, 50 + dx].map((x) => (
        <g key={x}>
          <circle cx={x} cy={y} r={r} fill={color} />
          <circle cx={x + r * 0.35} cy={y - r * 0.35} r={r * 0.36} fill="#fff" />
        </g>
      ))}
    </g>
  );
}

export function Cheeks({ y = 64, dx = 20, color = '#f4a3b5' }: { y?: number; dx?: number; color?: string }) {
  return (
    <g opacity="0.55">
      <ellipse cx={50 - dx} cy={y} rx="5" ry="3.2" fill={color} />
      <ellipse cx={50 + dx} cy={y} rx="5" ry="3.2" fill={color} />
    </g>
  );
}

export function Smile({ y = 68, w = 6, color = INK }: { y?: number; w?: number; color?: string }) {
  return <path d={`M${50 - w} ${y} Q${50 - w / 2} ${y + 4} 50 ${y} Q${50 + w / 2} ${y + 4} ${50 + w} ${y}`} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" />;
}

export function Nose({ y = 63, w = 7, color = INK }: { y?: number; w?: number; color?: string }) {
  return <path d={`M${50 - w / 2} ${y} H${50 + w / 2} Q${50 + w / 2} ${y + w * 0.7} 50 ${y + w * 0.75} Q${50 - w / 2} ${y + w * 0.7} ${50 - w / 2} ${y}Z`} fill={color} />;
}

/** Oreilles symétriques à partir d'un tracé de l'oreille gauche. */
export function Pair({ children }: { children: React.ReactNode }) {
  return (
    <g>
      {children}
      <g transform="translate(100 0) scale(-1 1)">{children}</g>
    </g>
  );
}
