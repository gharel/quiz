import { ArrowRight, Lock } from 'lucide-react';
import { useRef, useState } from 'react';
import { unlock } from '../lib/access';
import { href } from '../lib/router';

/** Écran de mot de passe affiché à la place des pages réservées au formateur. */
export function AccessGate() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  async function submit() {
    setBusy(true);
    setError('');
    try {
      if (!(await unlock(value))) {
        setError('Mot de passe incorrect.');
        setValue('');
        input.current?.focus();
      }
    } catch {
      setError('Vérification impossible ici : ouvrez le site en https:// (ou sur localhost).');
    }
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
            aria-invalid={!!error}
            aria-describedby={error ? 'gate-error' : undefined}
            autoFocus
          />
          {error && <span id="gate-error" className="field-error" role="alert">{error}</span>}
        </label>
        <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={busy || !value}>
          {busy ? 'Vérification…' : 'Entrer'}
          {!busy && <ArrowRight aria-hidden="true" />}
        </button>
        <a className="btn btn-ghost btn-sm" href={href.join()}>Vous êtes apprenant ? Rejoindre une partie</a>
      </form>
    </div>
  );
}
