import { Hourglass, LogOut, Shuffle, Trophy, WifiOff } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { AvatarPicker } from '../avatars/AvatarPicker';
import { Avatar, avatarLabel } from '../avatars/Avatar';
import { sfx } from '../../audio/sfx';
import { usePlayer } from '../../game/usePlayer';
import { href, navigate } from '../../lib/router';
import { formatNumber, ordinal } from '../../lib/util';
import { NameForm } from '../../pages/Join';
import { AnswerPad } from '../game/AnswerPad';
import { Feedback } from '../game/Feedback';
import { CountUp } from '../game/fx';
import { QuestionType } from '../game/QuestionCard';
import { StageBar } from '../game/StageBar';
import { TimerRing, useCountdown } from '../game/Timer';

function Center({ icon, title, text, children }: { icon?: React.ReactNode; title: string; text?: string; children?: React.ReactNode }) {
  return (
    <div className="stage-center appear">
      {icon && <span className="join-icon">{icon}</span>}
      <h1 className="q-text q-text-sm">{title}</h1>
      {text && <p className="muted">{text}</p>}
      {children}
    </div>
  );
}

export function PlayerGame({ pin }: { pin: string }) {
  const p = usePlayer(pin);
  const s = p.state;
  const pinLabel = pin;
  const me = s?.results?.[p.pid];
  const myName = s?.roster[p.pid]?.name ?? p.name;
  const myAvatar = s?.roster[p.pid]?.avatar ?? p.avatar;
  const [picking, setPicking] = useState(false);
  const paused = s?.phase === 'question' && !!s.paused;
  const running = useCountdown(s?.phase === 'question' ? p.deadline : null);
  const msLeft = paused ? (s?.endsIn ?? 0) : running;
  const lastSound = useRef('');

  // Petit son discret à la correction (si le son est activé sur l'appareil)
  useEffect(() => {
    if (s?.phase !== 'reveal' || !me) return;
    const key = `${s.gid}-${s.qi}`;
    if (lastSound.current === key) return;
    lastSound.current = key;
    if (me.ok) sfx.correct();
    else sfx.wrong();
  }, [s, me]);

  const quit = () => {
    p.leave();
    navigate(href.join());
  };

  let body: React.ReactNode;
  if (p.status === 'error') body = <Center icon={<WifiOff />} title="Connexion impossible" text="Le relais de jeu ne répond pas depuis ce réseau. Vérifiez votre connexion, ou demandez à l’animateur de changer de relais." />;
  else if (p.kicked) body = <Center title="Vous avez été retiré de la partie" text="L’animateur vous a retiré de cette partie." />;
  else if (!s && p.status === 'notfound') body = <Center title="Partie introuvable" text={`Aucune partie en cours avec le code ${pinLabel}. Vérifiez le code affiché à l’écran.`}><a className="btn btn-primary" href={href.join()}>Saisir un autre code</a></Center>;
  else if (!s) body = <Center icon={<span className="spinner" />} title="Connexion à la partie…" />;
  else if (s.phase === 'closed') body = <Center title="La partie est terminée" text="Merci pour votre participation !"><a className="btn btn-primary" href={href.join()}>Rejoindre une autre partie</a></Center>;
  else if (!p.joined) {
    body = s.phase === 'podium'
      ? <Center title="Cette partie est terminée" />
      : p.name
        ? <Center icon={<span className="spinner" />} title="Inscription en cours…" />
        : <NameForm pinLabel={pinLabel} onJoin={p.join} avatar={p.avatar} onPickAvatar={() => setPicking(true)} />;
  } else if (s.phase === 'lobby') {
    body = (
      <Center title="Vous êtes dans la partie !" text="Retrouvez votre animal sur l’écran de la salle. La partie va bientôt commencer…">
        <div className="avatar-pick">
          <Avatar id={myAvatar} size={128} title={avatarLabel(myAvatar)} />
          <p className="player-name-tag">{myName}</p>
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setPicking(true)}><Shuffle aria-hidden="true" />Changer d’animal</button>
        </div>
      </Center>
    );
  } else if (s.phase === 'intro' && s.q) {
    body = (
      <Center title={`Question ${s.qi + 1} sur ${s.qn}`}>
        {s.skipped?.includes(s.qi - 1) && <p className="skip-note" role="status">Question précédente passée : elle ne compte pas.</p>}
        <QuestionType q={s.q} />
        <p className="player-qtext fx-in">{s.q.text}</p>
        <div className="progress intro-bar intro-fill" aria-hidden="true"><span /></div>
        <p className="muted">Lisez bien la question, les réponses arrivent…</p>
      </Center>
    );
  } else if (s.phase === 'question' && s.q) {
    const done = p.answers[s.qi] !== undefined;
    body = done ? (
      <Center icon={<Hourglass className="fx-float" />} title="Réponse envoyée !" text="En attente des autres participants…" />
    ) : (
      <div className="player-q">
        <div className="q-head">
          <QuestionType q={s.q} />
          <div className="timer-wrap">
            <TimerRing msLeft={msLeft} total={s.q.time * 1000} size={60} />
            {paused && <span className="pause-badge" role="status">En pause</span>}
          </div>
        </div>
        <p className="player-qtext">{s.q.text}</p>
        <AnswerPad key={`${s.gid}-${s.qi}`} q={s.q} onSubmit={(v) => { sfx.lock(); p.answer(v); }} disabled={paused || msLeft <= 0} />
      </div>
    );
  } else if (s.phase === 'reveal') {
    body = me ? (
      <Feedback correct={me.ok} answered={me.answered} points={me.pts} streak={me.streak} correctText={s.correct} explanation={s.explanation} rank={me.rank} prevRank={me.prev} score={me.score} />
    ) : <Center title="Correction en cours…" />;
  } else if (s.phase === 'scoreboard') {
    body = (
      <Center icon={<Trophy />} title={me ? `Vous êtes ${ordinal(me.rank)}` : 'Classement'} text="Regardez l’écran pour le classement.">
        {me && <p className="player-score"><CountUp value={me.score} from={me.score - me.pts} duration={1000} delay={300} /> <span>points</span></p>}
      </Center>
    );
  } else if (s.phase === 'podium') {
    body = (
      <Center icon={<Trophy />} title={me ? (me.rank <= 3 ? `Bravo, vous terminez ${ordinal(me.rank)} !` : `Vous terminez ${ordinal(me.rank)}`) : 'Partie terminée'} text={me ? `${formatNumber(me.score)} points au total.` : undefined}>
        <a className="btn btn-primary" href={href.join()}>Rejoindre une autre partie</a>
      </Center>
    );
  }

  const info = p.joined && s ? <span className="me-tag"><Avatar id={myAvatar} size={30} />{myName}{me ? ` · ${formatNumber(me.score)} pts` : ''}</span> : <span>Partie {pinLabel}</span>;
  return (
    <div className="stage stage-player">
      <StageBar info={info} extra={p.joined ? <button type="button" className="btn btn-icon" onClick={quit} title="Quitter la partie" aria-label="Quitter la partie"><LogOut /></button> : undefined} onQuit={p.joined ? undefined : () => navigate(href.join())} quitLabel="Changer de code" />
      {p.status === 'offline' && <p className="notice notice-error player-offline" role="status">Connexion perdue : reconnexion en cours…</p>}
      <div className="stage-body">{body}</div>
      {picking && <AvatarPicker value={myAvatar} onChange={p.setAvatar} onClose={() => setPicking(false)} />}
    </div>
  );
}
