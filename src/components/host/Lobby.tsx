import { Music, Play, RefreshCw, Users, X } from 'lucide-react';
import { appUrl, href } from '../../lib/router';
import type { HostPlayer } from '../../game/hostEngine';
import type { HostStatus } from '../../game/useHost';
import { BROKERS } from '../../live/transport';
import { plural } from '../../lib/util';
import { QrCode } from '../QrCode';

interface Props {
  title: string;
  pin: string;
  status: HostStatus;
  broker: number;
  players: HostPlayer[];
  options: { shuffleQuestions: boolean; shuffleAnswers: boolean };
  onOptions: (o: Props['options']) => void;
  onStart: () => void;
  onKick: (id: string) => void;
  onMusic: () => void;
  onChangeRelay: () => void;
  onRetry: () => void;
}

export function Lobby(p: Props) {
  const joinShort = `${location.host}${location.pathname.replace(/\/$/, '')}/rejoindre`;
  const joinFull = `${appUrl()}${href.join(p.pin)}`;
  const pinLabel = p.pin ? `${p.pin.slice(0, 3)} ${p.pin.slice(3)}` : '— — —';

  return (
    <div className="lobby">
      <section className="lobby-hero">
        <div className="lobby-join">
          <p className="lobby-step">Rejoignez la partie sur <strong>{joinShort}</strong></p>
          <p className="lobby-pin-label">Code de la partie</p>
          <p className="lobby-pin" aria-live="polite">{p.status === 'error' ? '—' : pinLabel}</p>
          <p className="lobby-title">{p.title}</p>
        </div>
        {p.pin && p.status !== 'error' && (
          <div className="lobby-qr">
            <QrCode value={joinFull} size={168} label="QR code pour rejoindre la partie" />
            <span>Scannez pour rejoindre</span>
          </div>
        )}
      </section>

      {p.status === 'error' && (
        <div className="notice notice-error" role="alert">
          <p>Impossible de joindre un relais de jeu en direct. Vérifiez la connexion internet de cet appareil.</p>
          <button type="button" className="btn btn-primary btn-sm" onClick={p.onRetry}><RefreshCw aria-hidden="true" />Réessayer</button>
        </div>
      )}

      <div className="lobby-main">
        <section className="panel lobby-players" aria-labelledby="players-title">
          <div className="section-head">
            <h2 id="players-title" className="section-title"><Users aria-hidden="true" />{p.players.length ? plural(p.players.length, 'participant', 'participants') : 'En attente des participants…'}</h2>
            <button type="button" className="btn btn-primary btn-lg" onClick={p.onStart} disabled={!p.players.length || p.status !== 'online'}>
              <Play aria-hidden="true" />Démarrer
            </button>
          </div>
          {p.players.length === 0 ? (
            <p className="muted">Les pseudos s’afficheront ici dès que vos apprenants auront saisi le code.</p>
          ) : (
            <ul className="player-chips">
              {p.players.map((pl) => (
                <li key={pl.id} className="player-chip appear">
                  <span>{pl.name}</span>
                  <button type="button" onClick={() => p.onKick(pl.id)} aria-label={`Exclure ${pl.name}`} title="Exclure"><X /></button>
                </li>
              ))}
            </ul>
          )}
        </section>

        <aside className="panel lobby-options" aria-label="Options de la partie">
          <h2 className="section-title">Options</h2>
          <label className="switch">
            <span>Mélanger les questions</span>
            <input type="checkbox" checked={p.options.shuffleQuestions} onChange={(e) => p.onOptions({ ...p.options, shuffleQuestions: e.target.checked })} />
          </label>
          <label className="switch">
            <span>Mélanger les réponses</span>
            <input type="checkbox" checked={p.options.shuffleAnswers} onChange={(e) => p.onOptions({ ...p.options, shuffleAnswers: e.target.checked })} />
          </label>
          <button type="button" className="btn btn-secondary btn-sm" onClick={p.onMusic}><Music aria-hidden="true" />Lancer la musique d’attente</button>
          <p className="field-hint lobby-relay">
            <span className={`dot-status dot-${p.status}`} aria-hidden="true" />
            {p.status === 'online' ? `Connecté au relais ${BROKERS[p.broker].name}` : p.status === 'error' ? 'Relais indisponible' : 'Connexion au relais…'}
          </p>
          {p.players.length === 0 && p.status !== 'connecting' && (
            <div className="lobby-relay-help">
              <p className="field-hint">Les participants n’arrivent pas à se connecter ?</p>
              <button type="button" className="btn btn-ghost btn-sm" onClick={p.onChangeRelay}><RefreshCw aria-hidden="true" />Changer de relais</button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
