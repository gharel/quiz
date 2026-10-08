import { BarChart3, ChevronRight, Radio, Search, User, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CategoryBadge, catVars } from '../components/CategoryBadge';
import { CategoryFilter } from '../components/CategoryFilter';
import { href } from '../lib/router';
import { normalize } from '../lib/scoring';
import { sessionStats } from '../lib/stats';
import { getCategory, useStore } from '../lib/store';
import { formatDateTime, plural } from '../lib/util';

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

  return (
    <div className="page container">
      <div className="page-head">
        <div>
          <h1 className="page-title">Résultats</h1>
          <p className="page-sub">Retrouvez chaque partie jouée sur cet appareil : classement, réussite par question et réponses de chaque participant.</p>
        </div>
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
            <label className="toolbar-sort">
              <span className="sr-only">Mode de jeu</span>
              <select className="select" value={mode} onChange={(e) => setMode(e.target.value as Mode)}>
                <option value="">Tous les modes</option>
                <option value="live">En direct</option>
                <option value="solo">En solo</option>
              </select>
            </label>
          </div>
          <CategoryFilter categories={categories} total={state.sessions.length} value={cat} onChange={setCat} />
          <p className="result-count muted small" aria-live="polite">{plural(list.length, 'partie', 'parties')}</p>
          <ul className="session-list">
            {list.map((s) => {
              const c = getCategory(s.quiz.category, state);
              const st = sessionStats(s);
              return (
                <li key={s.id}>
                  <a className="session-row cat" style={catVars(c.color)} href={href.result(s.id)}>
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
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
