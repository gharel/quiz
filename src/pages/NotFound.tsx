import { Compass } from 'lucide-react';
import { href } from '../lib/router';

export function NotFound({ text = 'Cette page n’existe pas ou plus.' }: { text?: string }) {
  return (
    <div className="page container">
      <div className="empty">
        <div className="empty-icon"><Compass aria-hidden="true" /></div>
        <h2>Page introuvable</h2>
        <p>{text}</p>
        <a className="btn btn-primary" href={href.library()}>Retour à la bibliothèque</a>
      </div>
    </div>
  );
}
