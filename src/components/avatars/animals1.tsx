import { Cheeks, Eyes, INK, Nose, Pair, Smile } from './parts';

export const licorne = () => (
  <>
    <Pair><ellipse cx="32" cy="25" rx="7.5" ry="14" transform="rotate(-18 32 25)" fill="#fff" stroke="#e3d8f3" strokeWidth="2" /><ellipse cx="32" cy="24" rx="3.6" ry="8.5" transform="rotate(-18 32 24)" fill="#f6c3d2" /></Pair>
    <path d="M50 4 L57 32 H43Z" fill="#eacb60" />
    <path d="M45.5 24 L54 21 M44.5 28 L55.5 25 M47 18 L53 16" stroke="#c99a1d" strokeWidth="1.6" strokeLinecap="round" />
    <ellipse cx="50" cy="58" rx="28" ry="27" fill="#fff" stroke="#e3d8f3" strokeWidth="2" />
    <Cheeks y={63} dx={21} />
    <circle cx="26" cy="36" r="8" fill="#e78da5" /><circle cx="21" cy="48" r="7" fill="#a07bd4" /><circle cx="22" cy="60" r="6" fill="#5daba0" />
    <circle cx="34" cy="31" r="7" fill="#a07bd4" /><circle cx="42" cy="30" r="5" fill="#5daba0" />
    <ellipse cx="50" cy="72" rx="15" ry="10" fill="#fce8ee" />
    <circle cx="45" cy="72" r="1.8" fill="#c4556e" /><circle cx="55" cy="72" r="1.8" fill="#c4556e" />
    <Eyes y={54} dx={11} />
  </>
);

export const cerf = () => (
  <>
    <path d="M36 30 C34 20 30 14 24 10 M33 22 L24 22 M58 30 C66 20 70 14 76 10 M67 22 L76 22 M30 16 L32 8 M70 16 L68 8" stroke="#7a5230" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    <Pair><ellipse cx="22" cy="42" rx="12" ry="6.5" transform="rotate(-25 22 42)" fill="#b07a4f" /><ellipse cx="23" cy="42" rx="7" ry="3.5" transform="rotate(-25 23 42)" fill="#e8cfb3" /></Pair>
    <ellipse cx="50" cy="58" rx="24" ry="28" fill="#b07a4f" />
    <ellipse cx="50" cy="73" rx="14" ry="11" fill="#e8cfb3" />
    <circle cx="42" cy="38" r="2.2" fill="#e8cfb3" /><circle cx="58" cy="38" r="2.2" fill="#e8cfb3" /><circle cx="50" cy="34" r="2.2" fill="#e8cfb3" />
    <Eyes y={54} dx={11} />
    <Nose y={66} w={9} />
    <Smile y={75} w={4} />
  </>
);

export const lapin = () => (
  <>
    <Pair><ellipse cx="38" cy="22" rx="8" ry="20" fill="#e9ecef" /><ellipse cx="38" cy="23" rx="4" ry="14" fill="#f6c3d2" /></Pair>
    <ellipse cx="50" cy="60" rx="27" ry="25" fill="#e9ecef" />
    <ellipse cx="50" cy="70" rx="12" ry="8" fill="#fff" />
    <Eyes y={56} dx={11} />
    <Cheeks y={66} dx={19} />
    <path d="M47 65 H53 L50 68.5Z" fill="#e78da5" />
    <path d="M50 68.5 V71 M50 71 Q47 74 45 72 M50 71 Q53 74 55 72" stroke={INK} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <rect x="47.4" y="73" width="5.2" height="5" rx="1.2" fill="#fff" stroke="#ced4da" strokeWidth="1" />
  </>
);

export const lion = () => (
  <>
    {Array.from({ length: 12 }, (_, i) => {
      const a = (i / 12) * Math.PI * 2;
      return <circle key={i} cx={50 + Math.cos(a) * 31} cy={56 + Math.sin(a) * 31} r="12" fill={i % 2 ? '#c46a1d' : '#d9822b'} />;
    })}
    <circle cx="50" cy="56" r="33" fill="#d9822b" />
    <Pair><circle cx="30" cy="36" r="7" fill="#f2c46d" /><circle cx="30" cy="36" r="3.5" fill="#e3a24f" /></Pair>
    <circle cx="50" cy="58" r="24" fill="#f2c46d" />
    <ellipse cx="50" cy="69" rx="12" ry="8.5" fill="#fbe3b0" />
    <Eyes y={54} dx={10} />
    <Nose y={63} w={8} color="#7a4a1f" />
    <Smile y={71} w={5} />
  </>
);

export const tigre = () => (
  <>
    <Pair><circle cx="30" cy="37" r="9" fill="#f08a3e" /><circle cx="30" cy="37" r="4.5" fill="#fff" /></Pair>
    <ellipse cx="50" cy="58" rx="28" ry="26" fill="#f08a3e" />
    <path d="M44 33 L50 41 L56 33 M38 36 L43 42 M62 36 L57 42 M22 52 L31 54 M23 60 L31 59 M78 52 L69 54 M77 60 L69 59" stroke={INK} strokeWidth="3" strokeLinecap="round" fill="none" />
    <ellipse cx="40" cy="70" rx="11" ry="9" fill="#fff" /><ellipse cx="60" cy="70" rx="11" ry="9" fill="#fff" />
    <Eyes y={53} dx={11} />
    <Nose y={63} w={8} color="#c4562e" />
    <Smile y={71} w={5} />
  </>
);

export const panda = () => (
  <>
    <Pair><circle cx="30" cy="37" r="10" fill={INK} /></Pair>
    <ellipse cx="50" cy="58" rx="28" ry="26" fill="#fff" stroke="#e9ecef" strokeWidth="2" />
    <ellipse cx="38" cy="54" rx="8" ry="10" transform="rotate(25 38 54)" fill={INK} />
    <ellipse cx="62" cy="54" rx="8" ry="10" transform="rotate(-25 62 54)" fill={INK} />
    <Eyes y={54} dx={11} r={3.4} color="#fff" />
    <circle cx="39" cy="54" r="2" fill={INK} /><circle cx="61" cy="54" r="2" fill={INK} />
    <Nose y={64} w={8} />
    <Smile y={72} w={5} />
    <Cheeks y={66} dx={21} />
  </>
);

export const renard = () => (
  <>
    <Pair><path d="M24 44 L22 14 L44 32Z" fill="#e8743b" /><path d="M24 22 L22 14 L30 20Z" fill={INK} /><path d="M26.7 33.1 L26 23 L35.5 29.4Z" fill="#fbe9e0" /></Pair>
    <path d="M22 44 Q22 30 50 30 Q78 30 78 44 L66 76 Q50 86 34 76Z" fill="#e8743b" />
    <path d="M22 44 Q34 62 50 66 Q66 62 78 44 L66 76 Q50 86 34 76Z" fill="#fff" />
    <Eyes y={52} dx={12} />
    <Nose y={70} w={8} />
  </>
);

export const chat = () => (
  <>
    <Pair><path d="M24 46 L26 16 L46 32Z" fill="#8e9aa6" /><path d="M27.8 39.5 L29 22.7 L40.2 31.7Z" fill="#f6c3d2" /></Pair>
    <ellipse cx="50" cy="58" rx="28" ry="25" fill="#8e9aa6" />
    <path d="M45 36 L47 42 M50 34 V41 M55 36 L53 42" stroke="#6c7883" strokeWidth="2.4" strokeLinecap="round" />
    <Eyes y={55} dx={11} />
    <path d="M47 64 H53 L50 67.5Z" fill="#e78da5" />
    <path d="M50 67.5 Q47 71 44.5 69 M50 67.5 Q53 71 55.5 69" stroke={INK} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <path d="M20 62 L35 64 M21 69 L35 67 M80 62 L65 64 M79 69 L65 67" stroke="#dee2e6" strokeWidth="1.6" strokeLinecap="round" />
  </>
);
