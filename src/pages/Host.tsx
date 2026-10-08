import { Maximize, Minimize } from 'lucide-react';
import { useEffect, useState } from 'react';
import { HostQuestion } from '../components/host/HostQuestion';
import { HostReveal } from '../components/host/HostReveal';
import { Lobby } from '../components/host/Lobby';
import { Podium, Scoreboard } from '../components/host/Standings';
import { Confirm } from '../components/Modal';
import { StageBar } from '../components/game/StageBar';
import { useHost } from '../game/useHost';
import type { HostOptions } from '../game/hostEngine';
import { href, navigate } from '../lib/router';
import { getQuiz } from '../lib/store';
import type { Quiz } from '../lib/types';
import { NotFound } from './NotFound';

export default function Host({ id }: { id: string }) {
  const quiz = getQuiz(id);
  if (!quiz) return <NotFound text="Ce quiz n’existe pas ou a été supprimé." />;
  return <HostGame quiz={quiz} />;
}

function FullscreenButton() {
  const [on, setOn] = useState(!!document.fullscreenElement);
  useEffect(() => {
    const f = () => setOn(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', f);
    return () => document.removeEventListener('fullscreenchange', f);
  }, []);
  if (!document.documentElement.requestFullscreen) return null;
  const label = on ? 'Quitter le plein écran' : 'Plein écran';
  return (
    <button type="button" className="btn btn-icon hide-mobile" title={label} aria-label={label} onClick={() => (on ? document.exitFullscreen() : document.documentElement.requestFullscreen())}>
      {on ? <Minimize /> : <Maximize />}
    </button>
  );
}

function HostGame({ quiz }: { quiz: Quiz }) {
  const [options, setOptions] = useState<HostOptions>({ shuffleQuestions: false, shuffleAnswers: false });
  const h = useHost(quiz, options);
  const e = h.engine;
  const [quitting, setQuitting] = useState(false);

  useEffect(() => e.configure(options), [e, options]);

  // Espace ou Entrée : passer à l'écran suivant
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if ((ev.key === ' ' || ev.key === 'Enter') && (e.phase === 'reveal' || e.phase === 'scoreboard') && !(ev.target as HTMLElement).closest('button, input, select, textarea')) {
        ev.preventDefault();
        h.next();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [e, h]);

  const info = e.phase === 'lobby' ? <span className="stage-title">{quiz.title}</span> : <span>Code {h.pin} · {e.players.size} joueurs</span>;
  const leave = () => navigate(href.quiz(quiz.id));

  return (
    <div className="stage stage-host">
      <StageBar info={info} extra={<FullscreenButton />} onQuit={() => (e.phase === 'lobby' || e.phase === 'podium' ? leave() : setQuitting(true))} quitLabel="Quitter la partie" />
      <div className="stage-body">
        {e.phase === 'lobby' && (
          <Lobby
            title={quiz.title}
            pin={h.pin}
            status={h.status}
            broker={h.broker}
            players={[...e.players.values()]}
            options={options}
            onOptions={setOptions}
            onStart={h.start}
            onKick={h.kick}
            onMusic={h.lobbyMusic}
            onChangeRelay={h.changeRelay}
            onRetry={h.retry}
          />
        )}
        {(e.phase === 'intro' || e.phase === 'question') && (
          <HostQuestion
            phase={e.phase}
            q={e.play[e.qi]}
            question={e.question}
            qi={e.qi}
            qn={e.questions.length}
            introEndsAt={e.introEndsAt}
            deadline={e.deadline}
            answered={e.answeredIds().length}
            total={e.active.length}
            onSkip={h.skip}
          />
        )}
        {e.phase === 'reveal' && <HostReveal engine={e} onNext={h.next} />}
        {e.phase === 'scoreboard' && <Scoreboard engine={e} onNext={h.next} />}
        {e.phase === 'podium' && <Podium engine={e} sessionHref={href.result(e.sessionId)} />}
        {h.status === 'offline' && e.phase !== 'lobby' && <p className="notice notice-error" role="status">Connexion perdue : reconnexion en cours…</p>}
      </div>
      {quitting && (
        <Confirm
          title="Quitter la partie ?"
          message="La partie sera interrompue pour tous les participants. Les résultats des questions déjà jouées sont conservés dans Résultats."
          confirmLabel="Quitter la partie"
          danger
          onConfirm={leave}
          onClose={() => setQuitting(false)}
        />
      )}
    </div>
  );
}
