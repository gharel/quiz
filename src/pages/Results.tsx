import { BarChart3, ChevronRight, Download, Radio, Search, User, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CategoryBadge, catVars } from '../components/CategoryBadge';
import { CategoryFilter } from '../components/CategoryFilter';
import { href } from '../lib/router';
import { normalize } from '../lib/scoring';
import { sessionCsv, sessionsCsv, sessionStats } from '../lib/stats';
import type { Session } from '../lib/types';
import { getCategory, useStore } from '../lib/store';
import { downloadFile, formatDateTime, plural, slugify } from '../lib/util';

type Mode = '' | 'live' | 'solo';

export default function Results() {
  const state = useStore();
  const [cat, setCat] = useState('');
  const [mode, setMode] = useState<Mode>('');
  const [query, setQuery] = useState('');

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
    downloadFile(`resultats-quiz-${new Date().toISOString().slice(0, 10)}.csv`, sessionsCsv(list, (id) => getCategory(id, state).label), 'text/csv;charset=utf-8');
  const exportOne = (s: Session) =>
    downloadFile(`resultats-${slugify(s.quiz.title)}-${new Date(s.startedAt).toISOString().slice(0, 10)}.csv`, sessionCsv(s), 'text/csv;charset=utf-8');

  return (
    <div className="page container">
      <div className="page-head">
        <div>
          <h1 className="page-title">Résultats</h1>
          <p className="page-sub">Retrouvez chaque partie jouée sur cet appareil : classement, réussite par question et réponses de chaque participant.</p>
        </div>
        {list.length > 0 && (
          <button type="button" className="btn btn-secondary" onClick={exportAll}>
            <Download aria-hidden="true" />Exporter {list.length > 1 ? `les ${list.length} parties` : 'la partie'} (CSV)
          </button>
        )}
      </div>

      {state.sessions.length === 0 ? (
        <div className="empty">
          <div className="empty-icon"><BarChart3 aria-hidden="true" /></div>
          <h2>Aucun résultat pour l’instant</h2>
          <p>Lancez un quiz en direct ou jouez en solo : les résultats apparaîtront ici à la fin de la partie.</p>
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
