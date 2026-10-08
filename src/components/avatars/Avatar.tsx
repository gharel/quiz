import { useId, type JSX } from 'react';
import * as A1 from './animals1';
import * as A2 from './animals2';
import * as A3 from './animals3';

/** Catalogue des avatars : dessin, nom affiché et couleur de fond (teintes claires du design system). */
export const AVATARS: { id: string; label: string; bg: string; draw: () => JSX.Element }[] = [
  { id: 'licorne', label: 'Licorne', bg: '#ede5f9', draw: A1.licorne },
  { id: 'cerf', label: 'Cerf', bg: '#dcf0ee', draw: A1.cerf },
  { id: 'lapin', label: 'Lapin', bg: '#dcf0ee', draw: A1.lapin },
  { id: 'lion', label: 'Lion', bg: '#fdf6da', draw: A1.lion },
  { id: 'tigre', label: 'Tigre', bg: '#ddeef8', draw: A1.tigre },
  { id: 'panda', label: 'Panda', bg: '#e8f5f0', draw: A1.panda },
  { id: 'renard', label: 'Renard', bg: '#ddeef8', draw: A1.renard },
  { id: 'chat', label: 'Chat', bg: '#fce8ee', draw: A1.chat },
  { id: 'chien', label: 'Chien', bg: '#e8f5f0', draw: A2.chien },
  { id: 'ours', label: 'Ours', bg: '#fdf6da', draw: A2.ours },
  { id: 'koala', label: 'Koala', bg: '#e8f5f0', draw: A2.koala },
  { id: 'singe', label: 'Singe', bg: '#fbe9e0', draw: A2.singe },
  { id: 'cochon', label: 'Cochon', bg: '#ddeef8', draw: A2.cochon },
  { id: 'vache', label: 'Vache', bg: '#dcf0ee', draw: A2.vache },
  { id: 'grenouille', label: 'Grenouille', bg: '#fdf6da', draw: A2.grenouille },
  { id: 'hibou', label: 'Hibou', bg: '#ede5f9', draw: A2.hibou },
  { id: 'pingouin', label: 'Pingouin', bg: '#ddeef8', draw: A3.pingouin },
  { id: 'souris', label: 'Souris', bg: '#fdf6da', draw: A3.souris },
  { id: 'elephant', label: 'Éléphant', bg: '#fce8ee', draw: A3.elephant },
  { id: 'girafe', label: 'Girafe', bg: '#e8f5f0', draw: A3.girafe },
  { id: 'zebre', label: 'Zèbre', bg: '#fbe9e0', draw: A3.zebre },
  { id: 'raton', label: 'Raton laveur', bg: '#dcf0ee', draw: A3.raton },
  { id: 'loup', label: 'Loup', bg: '#ede5f9', draw: A3.loup },
  { id: 'mouton', label: 'Mouton', bg: '#e8f5f0', draw: A3.mouton },
];

const BY_ID = new Map(AVATARS.map((a) => [a.id, a]));

export const avatarLabel = (id?: string) => BY_ID.get(id ?? '')?.label ?? 'Animal';
export const isAvatar = (id: unknown): id is string => typeof id === 'string' && BY_ID.has(id);

export function randomAvatar(exclude?: string): string {
  const pool = AVATARS.filter((a) => a.id !== exclude);
  return pool[Math.floor(Math.random() * pool.length)].id;
}

export function Avatar({ id, size = 48, title }: { id?: string; size?: number; title?: string }) {
  const a = BY_ID.get(id ?? '') ?? AVATARS[0];
  const clip = useId();
  return (
    <svg className="avatar" width={size} height={size} viewBox="0 0 100 100" role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <defs><clipPath id={clip}><circle cx="50" cy="50" r="50" /></clipPath></defs>
      <g clipPath={`url(#${CSS.escape(clip)})`}>
        <circle cx="50" cy="50" r="50" fill={a.bg} />
        <g transform="translate(0 2)">{a.draw()}</g>
      </g>
    </svg>
  );
}
