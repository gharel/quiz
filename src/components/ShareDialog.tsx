import { Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { appUrl, href } from '../lib/router';
import { encodeShare } from '../lib/transfer';
import type { Quiz } from '../lib/types';
import { Modal } from './Modal';
import { QrCode } from './QrCode';
import { toast } from './Toast';

/** Partage d'un lien « solo » : direct pour un quiz d'exemple, compressé dans l'URL sinon. */
export function ShareDialog({ quiz, onClose }: { quiz: Quiz; onClose: () => void }) {
  const [url, setUrl] = useState('');
  const [dropped, setDropped] = useState(false);

  useEffect(() => {
    if (quiz.builtin) {
      setUrl(appUrl() + href.solo(quiz.id));
      return;
    }
    void encodeShare(quiz).then(({ data, droppedImages }) => {
      setUrl(`${appUrl()}#/partage?q=${data}`);
      setDropped(droppedImages);
    });
  }, [quiz]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast('Lien copié dans le presse-papiers.');
    } catch {
      toast('Copie impossible : sélectionnez le lien manuellement.', 'error');
    }
  };

  return (
    <Modal title="Partager en solo" onClose={onClose} footer={<button type="button" className="btn btn-primary" onClick={copy} disabled={!url}><Copy aria-hidden="true" />Copier le lien</button>}>
      <p className="muted">
        Vos apprenants ouvrent ce lien pour s’entraîner seuls, à leur rythme. Leurs résultats restent sur leur appareil.
      </p>
      <label className="field">
        <span className="field-label">Lien du quiz</span>
        <input className="input" readOnly value={url} onFocus={(e) => e.target.select()} />
      </label>
      {dropped && <p className="field-hint">Les images importées depuis votre ordinateur ne sont pas incluses dans le lien.</p>}
      {url && url.length < 2400 && (
        <div className="share-qr">
          <QrCode value={url} size={200} />
          <span className="muted small">Scannez pour ouvrir le quiz sur un téléphone.</span>
        </div>
      )}
    </Modal>
  );
}
