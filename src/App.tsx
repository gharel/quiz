import { lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Toasts } from './components/Toast';
import { useRoute } from './lib/router';
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

/** Écrans de jeu en plein écran : sans navigation. */
const IMMERSIVE = ['host', 'solo', 'join', 'shared'];

export function App() {
  const route = useRoute();
  const immersive = IMMERSIVE.includes(route.name);

  let page;
  switch (route.name) {
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
    <>
      {!immersive && <Header route={route} />}
      <main className={`app-main${immersive ? ' no-nav' : ''}`}>
        <Suspense fallback={<div className="page container muted">Chargement…</div>}>{page}</Suspense>
      </main>
      {!immersive && (
        <footer className="app-footer">
          <div className="container">
            <span>Skazy Formation — Quiz</span>
            <span>Vos quiz et résultats sont enregistrés sur cet appareil.</span>
          </div>
        </footer>
      )}
      <Toasts />
    </>
  );
}
