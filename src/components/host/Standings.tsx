import { ArrowRight, BarChart3, ChevronUp, Crown, Flame, Library, Trophy } from 'lucide-react';
import { useEffect, useState, type CSSProperties } from 'react';
import { sfx } from '../../audio/sfx';
import type { HostEngine } from '../../game/hostEngine';
import { href } from '../../lib/router';
import { formatNumber, ordinal } from '../../lib/util';
import { Avatar } from '../avatars/Avatar';
import { Confetti, CountUp, reducedMotion } from '../game/fx';

const SHOWN = 5;
const vars = (v: Record<string, number>) => v as CSSProperties;

/**
 * Classement : les lignes apparaissent à l'ancien rang avec l'ancien score,
 * les points gagnés défilent, puis chacun glisse vers sa nouvelle place.
 */
export function Scoreboard({ engine, onNext }: { engine: HostEngine; onNext: () => void }) {
  const top = engine.ranking().slice(0, SHOWN);
  const [settled, setSettled] = useState(reducedMotion());

  useEffect(() => {
    const moved = top.some((p, i) => (engine.outcomes[p.id]?.prev ?? i + 1) !== i + 1);
    const t1 = window.setTimeout(() => sfx.tally(1), 350);
    const t2 = window.setTimeout(() => {
      setSettled(true);
      if (moved) sfx.swap();
    }, 1500);
    return () => [t1, t2].forEach(clearTimeout);
  }, [engine.qi]);

  return (
    <div className={`scoreboard${settled ? ' is-settled' : ''}`}>
      <h1 className="page-title">Classement</h1>
      <ol className="score-list">
        {top.map((p, i) => {
          const rank = i + 1;
          const o = engine.outcomes[p.id];
          const prev = o?.prev ?? rank;
          const shift = Math.min(prev, SHOWN + 1) - rank;
          const gain = o?.pts ?? 0;
          const shown = settled || prev > SHOWN ? rank : prev; // rang affiché : l'ancien, puis le nouveau
          return (
            <li
              key={p.id}
              className={`score-row rank-row-${shown}${shift > 0 ? ' is-up' : ''}${prev > SHOWN ? ' is-new' : ''}`}
              style={vars({ '--shift': settled ? 0 : shift, '--i': i })}
            >
              <span key={shown} className={`rank rank-${shown}${settled && shift ? ' fx-pop' : ''}`}>{shown}</span>
              <Avatar id={p.avatar} size={48} />
              <span className="score-name">{p.name}</span>
              {settled && prev > rank && <span className="score-move" aria-label={`Gagne ${prev - rank} place${prev - rank > 1 ? 's' : ''}`}><ChevronUp aria-hidden="true" />{prev - rank}</span>}
              {o?.streak >= 2 && <span className="score-streak"><Flame aria-hidden="true" />Série de {o.streak}</span>}
              {gain > 0 && <span className="score-gain">+{formatNumber(gain)}</span>}
              <span className="score-pts"><CountUp value={p.score} from={p.score - gain} duration={1000} delay={400 + i * 70} /></span>
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

const CAPTIONS: Record<number, string> = { 3: 'À la 3e place…', 2: 'À la 2e place…', 1: 'Et la victoire revient à…' };

/** Podium : 3e, 2e puis 1er révélés avec roulement de tambour, confettis pour le gagnant. */
export function Podium({ engine, sessionHref }: { engine: HostEngine; sessionHref: string }) {
  const ranking = engine.ranking();
  const top = ranking.slice(0, 3);
  const others = ranking.slice(3, 10);
  const steps = [3, 2, 1].filter((r) => r <= top.length);
  const [shown, setShown] = useState(0); // nombre de marches révélées
  const [caption, setCaption] = useState(CAPTIONS[steps[0]]);

  useEffect(() => {
    const timers: number[] = [];
    const at = (ms: number, f: () => void) => timers.push(window.setTimeout(f, ms));
    let t = 0;
    steps.forEach((rank, k) => {
      const roll = k === 0 ? 1.6 : rank === 1 ? 2.2 : 1.2; // roulement plus long avant le gagnant
      const cap = k === 0 ? 0 : t + 1300;
      at(cap, () => {
        setCaption(CAPTIONS[rank]);
        sfx.drumroll(roll);
      });
      const rev = cap + roll * 1000 + 100;
      at(rev, () => {
        setShown(k + 1);
        sfx.reveal(rank as 1 | 2 | 3);
        if (rank === 1) {
          at(600, () => sfx.fanfare());
          at(1300, () => setCaption(`Bravo ${top[0].name} !`));
        }
      });
      t = rev;
    });
    return () => timers.forEach(clearTimeout);
  }, [top.length]);

  const done = shown >= steps.length;
  const visible = (i: number) => shown >= top.length - i;
  const order = [1, 0, 2]; // 2e, 1er, 3e
  return (
    <div className="podium-wrap">
      {done && visible(0) && <Confetti count={90} />}
      <h1 className="page-title"><Trophy aria-hidden="true" />Podium</h1>
      <p className="podium-caption" aria-live="polite"><span key={caption}>{caption}</span></p>
      <div className="podium">
        {order.map((i) =>
          top[i] ? (
            <div key={top[i].id} className={`podium-step step-${i + 1}${visible(i) ? ' on' : ''}`}>
              <div className="podium-who" aria-hidden={!visible(i)}>
                <span className="podium-avatar">
                  {i === 0 && <Crown className="podium-crown" aria-hidden="true" />}
                  <Avatar id={top[i].avatar} size={i === 0 ? 104 : 80} />
                </span>
                <span className="podium-name">{top[i].name}</span>
                <span className="podium-score">{visible(i) ? <CountUp value={top[i].score} duration={1300} delay={700} suffix=" pts" /> : ' '}</span>
              </div>
              <div className="podium-base"><div className="podium-block"><span>{i + 1}</span></div></div>
            </div>
          ) : <div key={`empty-${i}`} aria-hidden="true" />,
        )}
      </div>
      <div className="podium-floor" aria-hidden="true" />
      {done && others.length > 0 && (
        <ul className="podium-others stagger" aria-label="Suite du classement">
          {others.map((p, k) => (
            <li key={p.id} style={vars({ '--i': k + 8 })}>
              <Avatar id={p.avatar} size={32} />
              <b>{ordinal(k + 4)}</b>{p.name}<span>{formatNumber(p.score)} pts</span>
            </li>
          ))}
        </ul>
      )}
      <div className="stage-actions">
        <a className="btn btn-primary btn-lg" href={sessionHref}><BarChart3 aria-hidden="true" />Voir les résultats détaillés</a>
        <a className="btn btn-secondary btn-lg" href={href.library()}><Library aria-hidden="true" />Retour à la bibliothèque</a>
      </div>
    </div>
  );
}
