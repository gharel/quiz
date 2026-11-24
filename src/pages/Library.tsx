import { Download, ListChecks, Plus, Search, SearchX, Upload, X } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { CategoryFilter } from '../components/CategoryFilter';
import { QuizCard } from '../components/QuizCard';
import { Select } from '../components/Select';
import { toast } from '../components/Toast';
import { href, navigate } from '../lib/router';
import { LEVELS } from '../lib/quizMeta';
import { allQuizzes, getCategory, restoreHiddenQuizzes, useStore } from '../lib/store';
import { exportQuizzes, importQuizFile } from '../lib/transfer';
import { normalize } from '../lib/scoring';
import type { Quiz } from '../lib/types';
import { plural } from '../lib/util';

type Sort = 'recent' | 'title' | 'questions';
type Origin = 'all' | 'mine' | 'import' | 'example';

const originOf = (q: Quiz): Origin => (q.source === 'import' ? 'import' : q.builtin ? 'example' : 'mine');

export function Library() {
  const state = useStore();
  const [cat, setCat] = useState('');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<Sort>('recent');
  const [origin, setOrigin] = useState<Origin>('all');
  const [level, setLevel] = useState(0); // 0 : tous les niveaux
  const [selected, setSelected] = useState<Set<string> | null>(null); // null : pas en mode sélection
  const fileRef = useRef<HTMLInputElement>(null);

  const quizzes = useMemo(
    () => allQuizzes(state).filter((q) => (origin === 'all' || originOf(q) === origin) && (!level || q.level === level)),
    [state, origin, level],
  );

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    quizzes.forEach((q) => counts.set(getCategory(q.category, state).id, (counts.get(getCategory(q.category, state).id) ?? 0) + 1));
    return [...counts.entries()]
      .map(([id, count]) => ({ category: getCategory(id, state), count }))
      .sort((a, b) => a.category.label.localeCompare(b.category.label, 'fr'));
  }, [quizzes, state]);

  const visible = useMemo(() => {
    const q = normalize(query);
    const list = quizzes.filter(
      (z) => (!cat || getCategory(z.category, state).id === cat) && (!q || normalize(`${z.title} ${z.description}`).includes(q)),
    );
    return list.sort((a, b) =>
      sort === 'title' ? a.title.localeCompare(b.title, 'fr') : sort === 'questions' ? b.questions.length - a.questions.length : b.updatedAt - a.updatedAt,
    );
  }, [quizzes, cat, query, sort, state]);

  const allVisibleSelected = !!selected && visible.length > 0 && visible.every((q) => selected.has(q.id));

  function toggle(id: string) {
    setSelected((s) => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleAll() {
    setSelected((s) => {
      const next = new Set(s);
      visible.forEach((q) => (allVisibleSelected ? next.delete(q.id) : next.add(q.id)));
      return next;
    });
  }

  function onExport() {
    const list = allQuizzes(state).filter((q) => selected?.has(q.id));
    if (list.length === 0) return;
    exportQuizzes(list);
    toast(`${plural(list.length, 'quiz exporté', 'quiz exportés')}.`);
    setSelected(null);
  }

  async function onImport(file?: File) {
    if (!file) return;
    try {
      const added = await importQuizFile(file);
      if (added.length === 1) {
        toast(`« ${added[0].title} » a été ajouté à votre bibliothèque.`);
        navigate(href.quiz(added[0].id));
      } else {
        toast(`${plural(added.length, 'quiz ajouté', 'quiz ajoutés')} à votre bibliothèque.`);
        setOrigin('mine');
      }
    } catch (e) {
      toast((e as Error).message, 'error');
    }
  }

  return (
    <div className="page container">
      <div className="page-head">
        <div>
          <h1 className="page-title">Bibliothèque</h1>
          <p className="page-sub">Choisissez un quiz, lancez-le en direct avec vos apprenants ou entraînez-vous en solo.</p>
        </div>
        <div className="row">
          <button type="button" className="btn btn-secondary" onClick={() => setSelected(selected ? null : new Set())} aria-pressed={!!selected}>
            <ListChecks aria-hidden="true" />{selected ? 'Terminer la sélection' : 'Sélectionner'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => fileRef.current?.click()}>
            <Upload aria-hidden="true" />Importer
          </button>
          <a className="btn btn-primary" href={href.edit()}>
            <Plus aria-hidden="true" />Créer un quiz
          </a>
          <input ref={fileRef} type="file" accept=".json,application/json" hidden onChange={(e) => { void onImport(e.target.files?.[0]); e.target.value = ''; }} />
        </div>
      </div>

      <div className="toolbar">
        <label className="input-icon toolbar-search">
          <Search aria-hidden="true" />
          <span className="sr-only">Rechercher un quiz</span>
          <input className="input" type="search" placeholder="Rechercher un quiz…" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <div className="toolbar-sort">
          <Select<Origin>
            label="Origine des quiz"
            value={origin}
            onChange={(v) => { setOrigin(v); setCat(''); }}
            options={[
              { value: 'all', label: 'Toutes les origines' },
              { value: 'mine', label: 'Mes quiz' },
              { value: 'import', label: 'Importés' },
              { value: 'example', label: 'Exemples' },
            ]}
          />
        </div>
        <div className="toolbar-sort">
          <Select<number>
            label="Niveau des quiz"
            value={level}
            onChange={(v) => { setLevel(v); setCat(''); }}
            options={[{ value: 0, label: 'Tous les niveaux' }, ...LEVELS.map((l) => ({ value: l.value, label: l.label }))]}
          />
        </div>
        <div className="toolbar-sort">
          <Select<Sort>
            label="Trier les quiz"
            value={sort}
            onChange={setSort}
            options={[
              { value: 'recent', label: 'Plus récents' },
              { value: 'title', label: 'Titre (A à Z)' },
              { value: 'questions', label: 'Nombre de questions' },
            ]}
          />
        </div>
      </div>

      <CategoryFilter categories={categories} total={quizzes.length} value={cat} onChange={setCat} />

      <p className="result-count muted small" aria-live="polite">
        {plural(visible.length, 'quiz', 'quiz')}
        {state.hidden.length > 0 && (
          <>
            {' · '}{plural(state.hidden.length, 'quiz supprimé', 'quiz supprimés')} de la bibliothèque{' '}
            <button type="button" className="link-btn" onClick={() => { const n = state.hidden.length; restoreHiddenQuizzes(); toast(`${plural(n, 'quiz restauré', 'quiz restaurés')}.`); }}>Restaurer</button>
          </>
        )}
      </p>

      {visible.length > 0 ? (
        <div className="grid-cards">
          {visible.map((q) => (
            <QuizCard key={q.id} quiz={q} state={state} selected={!!selected?.has(q.id)} onSelect={selected ? () => toggle(q.id) : undefined} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <div className="empty-icon"><SearchX aria-hidden="true" /></div>
          <h2>Aucun quiz ne correspond</h2>
          <p>Modifiez votre recherche ou choisissez une autre catégorie.</p>
          <button type="button" className="btn btn-secondary" onClick={() => { setQuery(''); setCat(''); setOrigin('all'); setLevel(0); }}>Réinitialiser les filtres</button>
        </div>
      )}

      {selected && (
        <div className="select-bar" role="region" aria-label="Sélection de quiz">
          <strong aria-live="polite">{plural(selected.size, 'quiz sélectionné', 'quiz sélectionnés')}</strong>
          <button type="button" className="btn btn-ghost btn-sm" onClick={toggleAll} disabled={visible.length === 0}>
            {allVisibleSelected ? 'Tout désélectionner' : `Tout sélectionner (${visible.length})`}
          </button>
          <span className="select-bar-actions">
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => setSelected(null)}><X aria-hidden="true" />Annuler</button>
            <button type="button" className="btn btn-primary btn-sm" onClick={onExport} disabled={selected.size === 0}>
              <Download aria-hidden="true" />Exporter
            </button>
          </span>
        </div>
      )}
    </div>
  );
}
