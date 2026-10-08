import { ArrowRight, LogIn } from 'lucide-react';
import { useState } from 'react';
import { PlayerGame } from '../components/player/PlayerGame';
import { StageBar } from '../components/game/StageBar';
import { getPrefs, setPrefs } from '../lib/prefs';
import { href, navigate } from '../lib/router';
import { isValidPin } from '../live/transport';

/** Entrée des apprenants : code de la partie, puis pseudo. */
export default function Join({ code }: { code?: string }) {
  const pin = code && isValidPin(code) ? code : '';
  return pin ? <PlayerGame key={pin} pin={pin} /> : <CodeForm initial={code ?? ''} />;
}

function CodeForm({ initial }: { initial: string }) {
  const [value, setValue] = useState(initial.replace(/\D/g, '').slice(0, 6));
  const [error, setError] = useState(initial && !isValidPin(initial) ? 'Ce code n’est pas valide : il comporte 6 chiffres.' : '');

  const submit = () => {
    const v = value.replace(/\D/g, '');
    if (!isValidPin(v)) {
      setError('Ce code n’est pas valide : il comporte 6 chiffres, affichés sur l’écran de l’animateur.');
      return;
    }
    navigate(href.join(v));
  };

  return (
    <div className="stage">
      <StageBar sound={false} onQuit={() => navigate(href.library())} quitLabel="Retour à l’accueil" />
      <div className="stage-body">
        <form className="join-card appear" onSubmit={(e) => { e.preventDefault(); submit(); }} noValidate>
          <span className="join-icon"><LogIn aria-hidden="true" /></span>
          <h1 className="q-text">Rejoindre une partie</h1>
          <p className="muted">Saisissez le code affiché sur l’écran de votre formateur.</p>
          <label className="field join-field">
            <span className="field-label">Code de la partie</span>
            <input
              className="input input-xl join-pin"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={7}
              placeholder="000 000"
              value={value.length > 3 ? `${value.slice(0, 3)} ${value.slice(3)}` : value}
              onChange={(e) => { setValue(e.target.value.replace(/\D/g, '').slice(0, 6)); setError(''); }}
              aria-invalid={!!error}
              aria-describedby={error ? 'pin-error' : undefined}
              autoFocus
            />
            {error && <span id="pin-error" className="field-error">{error}</span>}
          </label>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Valider<ArrowRight aria-hidden="true" /></button>
        </form>
      </div>
    </div>
  );
}

export function NameForm({ pinLabel, onJoin }: { pinLabel: string; onJoin: (name: string) => void }) {
  const [name, setName] = useState(() => getPrefs().playerName);
  return (
    <form
      className="join-card appear"
      onSubmit={(e) => {
        e.preventDefault();
        if (!name.trim()) return;
        setPrefs({ playerName: name.trim() });
        onJoin(name);
      }}
    >
      <p className="join-code">Partie {pinLabel}</p>
      <h1 className="q-text">Votre pseudo</h1>
      <p className="muted">Il s’affichera sur l’écran de la salle et dans le classement.</p>
      <label className="field join-field">
        <span className="field-label">Pseudo</span>
        <input className="input input-xl" maxLength={20} value={name} onChange={(e) => setName(e.target.value)} autoComplete="nickname" placeholder="Ex. : Marie" autoFocus />
      </label>
      <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={!name.trim()}>C’est parti !</button>
    </form>
  );
}
