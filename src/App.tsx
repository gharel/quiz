import { Lock } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { AccessGate } from './components/AccessGate';
import { Header } from './components/Header';
import { Toasts } from './components/Toast';
import { lock, useUnlocked } from './lib/access';
import { useRoute, type Route } from './lib/router';
import { isValidPin } from './live/transport';
import { Library } from './pages/Library';
import { NotFound } from './pages/NotFound';
import { QuizDetail } from './pages/QuizDetail';

const Editor = lazy(() => import('./pages/Editor'));
const Solo = lazy(() => import('./pages/Solo'));
const Shared = lazy(() => import('./pages/Shared'));
const Host = lazy(() => import('./pages/Host'));
const Join = lazy(() => import('./pages/Join'));
const Results = lazy(() => import('./pages/Results'));
const ResultDetail = lazy(() => import('./pages/ResultDetail'));

/** Pages réservées au formateur (mot de passe). */
const PROTECTED: Route['name'][] = ['library', 'quiz', 'edit', 'host', 'results', 'result'];

function isImmersive(route: Route) {
  return ['host', 'solo', 'shared'].includes(route.name) || (route.name === 'join' && !!route.code && isValidPin(route.code));
}

function Footer({ unlocked }: { unlocked: boolean }) {
  const year = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <div className="container footer-inner">
        <div className="footer-legal">
          <p>© {year} Skazy Formation — Tous droits réservés.</p>
          <p>Les quiz, contenus et résultats de cette application sont protégés : toute reproduction ou réutilisation, même partielle, est interdite sans l’accord écrit préalable de Skazy Formation.</p>
        </div>
        {unlocked && (
          <button type="button" className="btn btn-ghost btn-sm" onClick={lock}>
            <Lock aria-hidden="true" />Verrouiller l’accès sur cet appareil
          </button>
        )}
      </div>
    </footer>
  );
}

export function App() {
  const route = useRoute();
  const unlocked = useUnlocked();
  const gated = PROTECTED.includes(route.name) && !unlocked;
  const immersive = !gated && isImmersive(route);

  let page;
  if (gated) page = <AccessGate />;
  else switch (route.name) {
    case 'library': page = <Library />; break;
    case 'quiz': page = <QuizDetail id={route.id} />; break;
    case 'edit': page = <Editor key={route.id ?? 'new'} id={route.id} />; break;
    case 'solo': page = <Solo key={route.id} id={route.id} />; break;
    case 'shared': page = <Shared data={route.data} />; break;
    case 'host': page = <Host key={route.id} id={route.id} />; break;
    case 'join': page = <Join code={route.code} />; break;
    case 'results': page = <Results />; break;
    case 'result': page = <ResultDetail id={route.id} />; break;
    default: page = <NotFound />;
  }

  return (
    <div className={`app${immersive ? ' app-immersive' : ''}`}>
      {!immersive && <Header route={route} />}
      <main className="app-main">
        <Suspense fallback={<div className="page container muted">Chargement…</div>}>{page}</Suspense>
      </main>
      {!immersive && <Footer unlocked={unlocked} />}
      <Toasts />
    </div>
  );
}
