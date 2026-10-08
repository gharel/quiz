import { ArrowRight, LogIn, Shuffle } from 'lucide-react';
import { Avatar, avatarLabel } from '../components/avatars/Avatar';
import { useState } from 'react';
import { PlayerGame } from '../components/player/PlayerGame';
import { getPrefs, setPrefs } from '../lib/prefs';
import { href, navigate } from '../lib/router';
import { isValidPin } from '../live/transport';

/** Entrée des apprenants : code de la partie, puis pseudo. */
export default function Join({ code }: { code?: string }) {
  const pin = code && isValidPin(code) ? code : '';
  return pin ? <PlayerGame key={pin} pin={pin} /> : <CodeForm initial={code ?? ''} />;
}

function CodeForm({ initial }: { initial: string }) {
  const [value, setValue] = useState(initial.replace(/\D/g, '').slice(0, 4));
  const [error, setError] = useState(initial && !isValidPin(initial) ? 'Ce code n’est pas valide : il comporte 4 chiffres.' : '');

  const submit = () => {
    const v = value.replace(/\D/g, '');
    if (!isValidPin(v)) {
      setError('Saisissez les 4 chiffres affichés sur l’écran de l’animateur.');
      return;
    }
    navigate(href.join(v));
  };

  return (
    <div className="page container join-home">
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
              maxLength={4}
              placeholder="0000"
              value={value}
              onChange={(e) => { setValue(e.target.value.replace(/\D/g, '').slice(0, 4)); setError(''); }}
              aria-invalid={!!error}
              aria-describedby={error ? 'pin-error' : undefined}
              autoFocus
            />
            {error && <span id="pin-error" className="field-error">{error}</span>}
          </label>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Valider<ArrowRight aria-hidden="true" /></button>
        </form>
    </div>
  );
}

export function NameForm({ pinLabel, onJoin, avatar, onPickAvatar }: { pinLabel: string; onJoin: (name: string) => void; avatar: string; onPickAvatar: () => void }) {
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
      <div className="avatar-pick">
        <Avatar id={avatar} size={112} title={avatarLabel(avatar)} />
        <button type="button" className="btn btn-ghost btn-sm" onClick={onPickAvatar}><Shuffle aria-hidden="true" />Changer d’animal</button>
      </div>
      <h1 className="q-text q-text-sm">Votre pseudo</h1>
      <p className="muted">Votre animal et votre pseudo s’afficheront sur l’écran de la salle et dans le classement.</p>
      <label className="field join-field">
        <span className="field-label">Pseudo</span>
        <input className="input input-xl" maxLength={20} value={name} onChange={(e) => setName(e.target.value)} autoComplete="nickname" placeholder="Ex. : Marie" autoFocus />
      </label>
      <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={!name.trim()}>C’est parti !</button>
    </form>
  );
}
