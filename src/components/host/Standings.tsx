import { ArrowRight, BarChart3, Library, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { sfx } from '../../audio/sfx';
import type { HostEngine } from '../../game/hostEngine';
import { href } from '../../lib/router';
import { formatNumber } from '../../lib/util';
import { Avatar } from '../avatars/Avatar';

export function Scoreboard({ engine, onNext }: { engine: HostEngine; onNext: () => void }) {
  const top = engine.ranking().slice(0, 5);
  return (
    <div className="scoreboard appear">
      <h1 className="page-title">Classement</h1>
      <ol className="score-list">
        {top.map((p, i) => {
          const o = engine.outcomes[p.id];
          return (
            <li key={p.id} className="score-row" style={{ animationDelay: `${i * 80}ms` }}>
              <span className={`rank rank-${i + 1}`}>{i + 1}</span>
              <Avatar id={p.avatar} size={44} />
              <span className="score-name">{p.name}</span>
              {o?.streak >= 2 && <span className="score-streak">Série de {o.streak}</span>}
              <span className="score-pts">{formatNumber(p.score)}</span>
            </li>
          );
        })}
      </ol>
      <div className="stage-actions">
        <button type="button" className="btn btn-primary btn-lg" onClick={onNext} autoFocus>Question suivante<ArrowRight aria-hidden="true" /></button>
      </div>
    </div>
  );
}

/** Podium : 3e, 2e puis 1er révélés avec roulement de tambour. */
export function Podium({ engine, sessionHref }: { engine: HostEngine; sessionHref: string }) {
  const top = engine.ranking().slice(0, 3);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const steps = [3, 2, 1].filter((r) => r <= top.length);
    const timers: number[] = [];
    sfx.drumroll(1.6);
    steps.forEach((rank, k) => {
      timers.push(window.setTimeout(() => {
        setShown((s) => s + 1);
        sfx.reveal(rank as 1 | 2 | 3);
        if (rank === 1) window.setTimeout(() => sfx.fanfare(), 600);
        else if (k < steps.length - 1) sfx.drumroll(1.2);
      }, 1700 + k * 1500));
    });
    return () => timers.forEach(clearTimeout);
  }, [top.length]);

  const order = [1, 0, 2]; // 2e, 1er, 3e
  const visible = (i: number) => shown >= top.length - i;
  return (
    <div className="podium-wrap">
      <h1 className="page-title"><Trophy aria-hidden="true" />Podium</h1>
      <div className="podium">
        {order.map((i) =>
          top[i] ? (
            <div key={top[i].id} className={`podium-step step-${i + 1}${visible(i) ? ' on' : ''}`}>
              <span className={`podium-avatar${visible(i) ? ' on' : ''}`}><Avatar id={top[i].avatar} size={i === 0 ? 96 : 72} /></span>
              <span className="podium-name">{visible(i) ? top[i].name : '…'}</span>
              <span className="podium-score">{visible(i) ? `${formatNumber(top[i].score)} pts` : ''}</span>
              <span className="podium-block"><span>{i + 1}</span></span>
            </div>
          ) : <div key={`empty-${i}`} aria-hidden="true" />,
        )}
      </div>
      <div className="stage-actions">
        <a className="btn btn-primary btn-lg" href={sessionHref}><BarChart3 aria-hidden="true" />Voir les résultats détaillés</a>
        <a className="btn btn-secondary btn-lg" href={href.library()}><Library aria-hidden="true" />Retour à la bibliothèque</a>
      </div>
    </div>
  );
}
