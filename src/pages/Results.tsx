import { BarChart3, ChevronRight, Download, Radio, Search, Upload, User, Users } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { CategoryBadge, catVars } from '../components/CategoryBadge';
import { CategoryFilter } from '../components/CategoryFilter';
import { toast } from '../components/Toast';
import { decodeCsv, sameSession, sessionFromCsv } from '../lib/csvImport';
import { href, navigate } from '../lib/router';
import { normalize } from '../lib/scoring';
import { sessionCsv, sessionsCsv, sessionStats } from '../lib/stats';
import type { Session } from '../lib/types';
import { allCategories, allQuizzes, getCategory, importSessions, useStore } from '../lib/store';
import { downloadFile, formatDateTime, plural, slugify } from '../lib/util';

type Mode = '' | 'live' | 'solo';

export default function Results() {
  const state = useStore();
  const [cat, setCat] = useState('');
  const [mode, setMode] = useState<Mode>('');
  const [query, setQuery] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    state.sessions.forEach((s) => {
      const id = getCategory(s.quiz.category, state).id;
      counts.set(id, (counts.get(id) ?? 0) + 1);
    });
    return [...counts.entries()].map(([id, count]) => ({ category: getCategory(id, state), count }));
  }, [state]);

  const list = useMemo(() => {
    const q = normalize(query);
    return state.sessions.filter(
      (s) => (!cat || getCategory(s.quiz.category, state).id === cat) && (!mode || s.mode === mode) && (!q || normalize(s.quiz.title).includes(q)),
    );
  }, [state, cat, mode, query]);

  const exportAll = () =>
    downloadFile(`resultats-quiz-${new Date().toLocaleDateString('fr-CA')}.csv`, sessionsCsv(list, (id) => getCategory(id, state).label), 'text/csv;charset=utf-8');
  const exportOne = (s: Session) =>
    downloadFile(`bilan-${slugify(s.quiz.title)}-${new Date(s.startedAt).toLocaleDateString('fr-CA')}.csv`, sessionCsv(s, getCategory(s.quiz.category, state).label), 'text/csv;charset=utf-8');

  /** Reconstruit des parties à partir de bilans CSV exportés (un fichier par partie). */
  async function onImport(files: File[]) {
    const added: Session[] = [];
    const errors: string[] = [];
    let duplicates = 0;
    for (const f of files) {
      try {
        const s = sessionFromCsv(decodeCsv(await f.arrayBuffer()), { quizzes: allQuizzes(state), categories: allCategories(state) });
        if ([...state.sessions, ...added].some((x) => sameSession(x, s))) duplicates++;
        else added.push(s);
      } catch (e) {
        errors.push(files.length > 1 ? `${f.name} : ${(e as Error).message}` : (e as Error).message);
      }
    }
    if (added.length) {
      importSessions(added);
      toast(added.length === 1 ? `Résultats de « ${added[0].quiz.title} » importés.` : `${plural(added.length, 'partie importée', 'parties importées')}.`);
      if (added.length === 1 && !errors.length) navigate(href.result(added[0].id));
    }
    if (duplicates) toast(duplicates === 1 ? 'Cette partie figure déjà dans vos résultats.' : `${duplicates} parties figurent déjà dans vos résultats.`, added.length ? 'success' : 'error');
    if (errors.length) toast(errors.join(' '), 'error');
  }

  const importButton = (
    <>
      <button type="button" className="btn btn-secondary" onClick={() => fileRef.current?.click()}>
        <Upload aria-hidden="true" />Importer un bilan (CSV)
      </button>
      <input ref={fileRef} type="file" accept=".csv,text/csv" multiple hidden onChange={(e) => { void onImport([...(e.target.files ?? [])]); e.target.value = ''; }} />
    </>
  );

  return (
    <div className="page container">
      <div className="page-head">
        <div>
          <h1 className="page-title">Résultats</h1>
          <p className="page-sub">Retrouvez chaque partie jouée sur cet appareil : classement, réussite par question et réponses de chaque participant.</p>
        </div>
        <div className="row">
          {importButton}
          {list.length > 0 && (
            <button type="button" className="btn btn-secondary" onClick={exportAll}>
              <Download aria-hidden="true" />Exporter {list.length > 1 ? `les ${list.length} parties` : 'la partie'} (CSV)
            </button>
          )}
        </div>
      </div>

      {state.sessions.length === 0 ? (
        <div className="empty">
          <div className="empty-icon"><BarChart3 aria-hidden="true" /></div>
          <h2>Aucun résultat pour l’instant</h2>
          <p>Lancez un quiz en direct ou jouez en solo : les résultats apparaîtront ici à la fin de la partie. Vous avez un bilan CSV exporté ? Importez-le pour retrouver la partie.</p>
          <a className="btn btn-primary" href={href.library()}>Choisir un quiz</a>
        </div>
      ) : (
        <>
          <div className="toolbar">
            <label className="input-icon toolbar-search">
              <Search aria-hidden="true" />
              <span className="sr-only">Rechercher un quiz</span>
              <input className="input" type="search" placeholder="Rechercher un quiz…" value={query} onChange={(e) => setQuery(e.target.value)} />
            </label>
            <div className="segmented" role="group" aria-label="Mode de jeu">
              {([['', 'Tous'], ['live', 'En direct'], ['solo', 'En solo']] as [Mode, string][]).map(([v, l]) => (
                <button key={v} type="button" aria-pressed={mode === v} onClick={() => setMode(v)}>{l}</button>
              ))}
            </div>
          </div>
          <CategoryFilter categories={categories} total={state.sessions.length} value={cat} onChange={setCat} />
          <p className="result-count muted small" aria-live="polite">{plural(list.length, 'partie', 'parties')}</p>
          <ul className="session-list">
            {list.map((s) => {
              const c = getCategory(s.quiz.category, state);
              const st = sessionStats(s);
              return (
                <li key={s.id} className="session-item cat" style={catVars(c.color)}>
                  <a className="session-row" href={href.result(s.id)}>
                    <span className="session-bar" aria-hidden="true" />
                    <span className="session-main">
                      <CategoryBadge category={c} size="sm" />
                      <strong className="session-title">{s.quiz.title}</strong>
                      <span className="session-meta">
                        <span>{s.mode === 'live' ? <Radio aria-hidden="true" /> : <User aria-hidden="true" />}{s.mode === 'live' ? 'En direct' : 'En solo'}</span>
                        <span><Users aria-hidden="true" />{plural(s.players.length, 'participant', 'participants')}</span>
                        <span>{formatDateTime(s.startedAt)}</span>
                      </span>
                    </span>
                    <span className="session-rate">
                      <strong>{st.successRate} %</strong>
                      <span>de réussite</span>
                    </span>
                    <ChevronRight className="session-chevron" aria-hidden="true" />
                  </a>
                  <button type="button" className="btn btn-icon session-export" onClick={() => exportOne(s)} title="Exporter cette partie (CSV)" aria-label={`Exporter les résultats de « ${s.quiz.title} » (CSV)`}>
                    <Download />
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
