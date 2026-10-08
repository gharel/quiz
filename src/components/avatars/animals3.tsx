import { Cheeks, Eyes, INK, Nose, Pair, Smile } from './parts';

export const pingouin = () => (
  <>
    <ellipse cx="50" cy="56" rx="28" ry="29" fill="#343a40" />
    <path d="M50 40 Q32 34 30 56 Q32 78 50 80 Q68 78 70 56 Q68 34 50 40Z" fill="#fff" />
    <Eyes y={52} dx={10} />
    <path d="M43 60 H57 L50 67Z" fill="#e6a817" />
    <Cheeks y={64} dx={16} />
  </>
);

export const souris = () => (
  <>
    <Pair><circle cx="26" cy="36" r="15" fill="#adb5bd" /><circle cx="26" cy="36" r="9" fill="#f6c3d2" /></Pair>
    <ellipse cx="50" cy="60" rx="25" ry="23" fill="#adb5bd" />
    <Eyes y={56} dx={10} />
    <circle cx="50" cy="66" r="3.6" fill="#e78da5" />
    <path d="M22 64 L38 66 M23 71 L38 69 M78 64 L62 66 M77 71 L62 69" stroke="#868e96" strokeWidth="1.6" strokeLinecap="round" />
    <Smile y={72} w={4} />
  </>
);

export const elephant = () => (
  <>
    <Pair><ellipse cx="20" cy="54" rx="16" ry="21" fill="#9fb3c8" /><ellipse cx="22" cy="54" rx="10" ry="14" fill="#f1d4dc" /></Pair>
    <circle cx="50" cy="52" r="25" fill="#9fb3c8" />
    <path d="M44 62 Q44 80 52 86 Q58 88 60 83 Q53 80 56 62Z" fill="#9fb3c8" />
    <Eyes y={50} dx={10} />
    <Cheeks y={58} dx={16} />
  </>
);

export const girafe = () => (
  <>
    <path d="M38 30 V16 M62 30 V16" stroke="#c99a1d" strokeWidth="4" strokeLinecap="round" />
    <circle cx="38" cy="14" r="4.5" fill="#8a5a33" /><circle cx="62" cy="14" r="4.5" fill="#8a5a33" />
    <Pair><ellipse cx="25" cy="40" rx="10" ry="5" transform="rotate(-20 25 40)" fill="#eacb60" /></Pair>
    <ellipse cx="50" cy="54" rx="24" ry="28" fill="#eacb60" />
    <circle cx="36" cy="38" r="4" fill="#c98a2b" /><circle cx="63" cy="36" r="3" fill="#c98a2b" /><circle cx="30" cy="54" r="3.5" fill="#c98a2b" /><circle cx="70" cy="56" r="4" fill="#c98a2b" />
    <ellipse cx="50" cy="71" rx="16" ry="11" fill="#f3d7b4" />
    <circle cx="45" cy="70" r="1.8" fill="#8a5a33" /><circle cx="55" cy="70" r="1.8" fill="#8a5a33" />
    <Eyes y={50} dx={11} />
  </>
);

export const zebre = () => (
  <>
    <path d="M38 30 Q42 8 50 6 Q58 8 62 30Z" fill={INK} />
    <Pair><ellipse cx="28" cy="30" rx="6" ry="13" transform="rotate(-20 28 30)" fill="#fff" stroke={INK} strokeWidth="2" /></Pair>
    <ellipse cx="50" cy="56" rx="23" ry="29" fill="#fff" stroke={INK} strokeWidth="2" />
    <path d="M30 42 Q38 44 40 38 M70 42 Q62 44 60 38 M28 54 Q35 56 38 51 M72 54 Q65 56 62 51 M46 32 Q50 40 54 32" stroke={INK} strokeWidth="3.2" fill="none" strokeLinecap="round" />
    <ellipse cx="50" cy="74" rx="15" ry="10" fill="#495057" />
    <circle cx="45" cy="74" r="2" fill="#adb5bd" /><circle cx="55" cy="74" r="2" fill="#adb5bd" />
    <Eyes y={55} dx={10} />
  </>
);

export const raton = () => (
  <>
    <Pair><path d="M25 47 L26 18 L47 37Z" fill="#868e96" /><path d="M29 38 L29.5 25 L39 33Z" fill="#f1f3f5" /></Pair>
    <ellipse cx="50" cy="58" rx="29" ry="25" fill="#868e96" />
    <path d="M20 54 Q34 44 46 52 Q50 56 54 52 Q66 44 80 54 Q70 64 56 60 Q50 58 44 60 Q30 64 20 54Z" fill={INK} />
    <ellipse cx="50" cy="70" rx="14" ry="9" fill="#f1f3f5" />
    <Eyes y={54} dx={13} r={4} color="#fff" />
    <circle cx="37" cy="54" r="2.4" fill={INK} /><circle cx="63" cy="54" r="2.4" fill={INK} />
    <Nose y={65} w={7} />
  </>
);

export const loup = () => (
  <>
    <Pair><path d="M24 42 L24 12 L44 30Z" fill="#6c7883" /><path d="M28 36 L28 22 L38 30Z" fill="#dee2e6" /></Pair>
    <path d="M22 46 Q22 30 50 30 Q78 30 78 46 Q74 72 50 82 Q26 72 22 46Z" fill="#6c7883" />
    <path d="M36 58 Q50 54 64 58 Q60 78 50 82 Q40 78 36 58Z" fill="#dee2e6" />
    <Eyes y={50} dx={12} color="#1a1a1a" />
    <Nose y={62} w={9} />
    <Smile y={72} w={4} />
  </>
);

export const mouton = () => (
  <>
    {[[30, 36], [42, 28], [58, 28], [70, 36], [76, 50], [24, 50], [28, 66], [72, 66], [50, 26]].map(([x, y]) => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r="12" fill="#fff" stroke="#e9ecef" strokeWidth="1.5" />
    ))}
    <Pair><ellipse cx="24" cy="54" rx="10" ry="5" transform="rotate(20 24 54)" fill="#495057" /></Pair>
    <ellipse cx="50" cy="58" rx="20" ry="23" fill="#495057" />
    <circle cx="50" cy="34" r="10" fill="#fff" />
    <Eyes y={56} dx={9} color="#fff" r={4} />
    <circle cx="41" cy="56" r="2.2" fill={INK} /><circle cx="59" cy="56" r="2.2" fill={INK} />
    <Smile y={70} w={4} color="#fff" />
  </>
);
