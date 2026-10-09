import { ArrowRight, Lock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { blockedUntil, blockMessage, currentFailures, MAX_DELAY, unlock } from '../lib/access';
import { href } from '../lib/router';

/** Écran de mot de passe affiché à la place des pages réservées au formateur. */
export function AccessGate() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  // Heure de référence du blocage, relue après chaque essai et à la fin du blocage
  const [now, setNow] = useState(() => Date.now());
  const input = useRef<HTMLInputElement>(null);

  const failures = currentFailures();
  const blocked = blockMessage(failures, now);
  const end = blockedUntil(failures);
  const message = error || blocked;

  // Rouvre la saisie à la fin du blocage (par étapes au-delà de la limite de setTimeout)
  useEffect(() => {
    if (end <= now || end === Infinity) return;
    const timer = setTimeout(() => setNow(Date.now()), Math.min(end - now, MAX_DELAY));
    return () => clearTimeout(timer);
  }, [end, now]);

  useEffect(() => {
    if (!blocked) input.current?.focus();
  }, [blocked]);

  async function submit() {
    setBusy(true);
    setError('');
    try {
      if (!(await unlock(value))) setValue('');
    } catch {
      setError('Vérification impossible ici : ouvrez le site en https:// (ou sur localhost).');
    }
    setNow(Date.now());
    setBusy(false);
  }

  return (
    <div className="page container">
      <form className="join-card gate appear" onSubmit={(e) => { e.preventDefault(); void submit(); }}>
        <span className="join-icon"><Lock aria-hidden="true" /></span>
        <h1 className="q-text q-text-sm">Accès réservé</h1>
        <p className="muted">Saisissez le mot de passe de l’animateur pour ouvrir la bibliothèque et les résultats.</p>
        <label className="field join-field">
          <span className="field-label">Mot de passe</span>
          <input
            ref={input}
            className="input"
            type="password"
            autoComplete="current-password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!!blocked}
            aria-invalid={!!message}
            aria-describedby={message ? 'gate-error' : undefined}
            autoFocus
          />
          {message && <span id="gate-error" className="field-error" role="alert">{message}</span>}
        </label>
        <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={busy || !value || !!blocked}>
          {busy ? 'Vérification…' : 'Entrer'}
          {!busy && <ArrowRight aria-hidden="true" />}
        </button>
        <a className="btn btn-ghost btn-sm" href={href.join()}>Vous êtes apprenant ? Rejoindre une partie</a>
      </form>
    </div>
  );
}
