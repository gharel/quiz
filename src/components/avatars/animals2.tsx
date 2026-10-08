import { Cheeks, Eyes, INK, Nose, Pair, Smile } from './parts';

export const chien = () => (
  <>
    <ellipse cx="50" cy="56" rx="26" ry="27" fill="#d9a066" />
    <Pair><ellipse cx="25" cy="50" rx="9" ry="19" transform="rotate(18 25 50)" fill="#8a5a33" /></Pair>
    <ellipse cx="60" cy="48" rx="9" ry="8" fill="#f3d7b4" />
    <ellipse cx="50" cy="70" rx="14" ry="10" fill="#f3d7b4" />
    <Eyes y={52} dx={11} />
    <Nose y={63} w={10} />
    <path d="M50 70 V73 M44 74 Q50 79 56 74" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M48 76 Q50 84 53 76Z" fill="#e78da5" />
  </>
);

export const ours = () => (
  <>
    <Pair><circle cx="28" cy="34" r="10" fill="#8a5a33" /><circle cx="28" cy="34" r="5" fill="#d9a066" /></Pair>
    <circle cx="50" cy="57" r="28" fill="#8a5a33" />
    <ellipse cx="50" cy="69" rx="13" ry="10" fill="#d9a066" />
    <Eyes y={53} dx={11} />
    <Nose y={64} w={9} />
    <Smile y={72} w={4} />
  </>
);

export const koala = () => (
  <>
    <Pair><circle cx="24" cy="40" r="14" fill="#9aa5b1" /><circle cx="25" cy="41" r="8" fill="#f1d4dc" /></Pair>
    <ellipse cx="50" cy="58" rx="27" ry="25" fill="#9aa5b1" />
    <ellipse cx="50" cy="62" rx="8" ry="11" fill="#495057" />
    <Eyes y={53} dx={13} />
    <Smile y={76} w={4} />
    <Cheeks y={66} dx={20} />
  </>
);

export const singe = () => (
  <>
    <Pair><circle cx="22" cy="54" r="9" fill="#8a5a33" /><circle cx="22" cy="54" r="5" fill="#f3d7b4" /></Pair>
    <circle cx="50" cy="55" r="27" fill="#8a5a33" />
    <path d="M30 54 Q30 38 42 40 Q50 44 58 40 Q70 38 70 54 Q72 74 50 78 Q28 74 30 54Z" fill="#f3d7b4" />
    <Eyes y={52} dx={9} />
    <circle cx="47" cy="61" r="1.6" fill={INK} /><circle cx="53" cy="61" r="1.6" fill={INK} />
    <path d="M42 67 Q50 74 58 67" stroke={INK} strokeWidth="2.2" fill="none" strokeLinecap="round" />
  </>
);

export const cochon = () => (
  <>
    <Pair><path d="M26 40 L24 22 L40 32Z" fill="#f4a7b9" /></Pair>
    <ellipse cx="50" cy="58" rx="28" ry="25" fill="#f8c6d2" />
    <ellipse cx="50" cy="66" rx="12" ry="9" fill="#f4a7b9" />
    <ellipse cx="46" cy="66" rx="2" ry="3" fill="#c4556e" /><ellipse cx="54" cy="66" rx="2" ry="3" fill="#c4556e" />
    <Eyes y={52} dx={12} />
    <Smile y={77} w={4} />
  </>
);

export const vache = () => (
  <>
    <path d="M30 32 Q24 20 30 14 M70 32 Q76 20 70 14" stroke="#eacb60" strokeWidth="5" strokeLinecap="round" fill="none" />
    <Pair><ellipse cx="20" cy="44" rx="11" ry="6" transform="rotate(-15 20 44)" fill="#fff" stroke="#dee2e6" strokeWidth="1.5" /></Pair>
    <ellipse cx="50" cy="54" rx="26" ry="26" fill="#fff" stroke="#dee2e6" strokeWidth="1.5" />
    <path d="M30 40 Q36 30 46 36 Q44 48 32 48Z" fill={INK} />
    <circle cx="66" cy="42" r="6" fill={INK} />
    <ellipse cx="50" cy="71" rx="17" ry="11" fill="#f8c6d2" />
    <ellipse cx="44" cy="71" rx="2.2" ry="3" fill="#c4556e" /><ellipse cx="56" cy="71" rx="2.2" ry="3" fill="#c4556e" />
    <Eyes y={52} dx={11} />
  </>
);

export const grenouille = () => (
  <>
    <Pair><circle cx="34" cy="38" r="12" fill="#6cc36a" /><circle cx="34" cy="38" r="7.5" fill="#fff" /><circle cx="35" cy="38" r="4.2" fill={INK} /><circle cx="36.5" cy="36.5" r="1.4" fill="#fff" /></Pair>
    <ellipse cx="50" cy="62" rx="30" ry="22" fill="#6cc36a" />
    <path d="M30 64 Q50 80 70 64" stroke="#2f7d32" strokeWidth="2.6" fill="none" strokeLinecap="round" />
    <Cheeks y={66} dx={23} />
    <circle cx="46" cy="56" r="1.4" fill="#2f7d32" /><circle cx="54" cy="56" r="1.4" fill="#2f7d32" />
  </>
);

export const hibou = () => (
  <>
    <Pair><path d="M24 36 L22 16 L38 28Z" fill="#8a6a4f" /></Pair>
    <ellipse cx="50" cy="56" rx="29" ry="28" fill="#8a6a4f" />
    <ellipse cx="50" cy="66" rx="18" ry="16" fill="#d9c2a5" />
    <Pair><circle cx="38" cy="48" r="11" fill="#fff" /><circle cx="38" cy="48" r="11" fill="none" stroke="#eacb60" strokeWidth="3" /></Pair>
    <Eyes y={48} dx={12} r={5} />
    <path d="M45 56 L55 56 L50 64Z" fill="#e6a817" />
    <path d="M42 70 Q44 73 46 70 M48 72 Q50 75 52 72 M54 70 Q56 73 58 70" stroke="#8a6a4f" strokeWidth="1.6" fill="none" strokeLinecap="round" />
  </>
);
