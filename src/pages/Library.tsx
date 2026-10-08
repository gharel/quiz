import { Plus, Search, SearchX, Upload } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { CategoryFilter } from '../components/CategoryFilter';
import { QuizCard } from '../components/QuizCard';
import { toast } from '../components/Toast';
import { href, navigate } from '../lib/router';
import { allQuizzes, getCategory, useStore } from '../lib/store';
import { importQuizFile } from '../lib/transfer';
import { normalize } from '../lib/scoring';
import { plural } from '../lib/util';

type Sort = 'recent' | 'title' | 'questions';

export function Library() {
  const state = useStore();
  const [cat, setCat] = useState('');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<Sort>('recent');
  const fileRef = useRef<HTMLInputElement>(null);

  const quizzes = useMemo(() => allQuizzes(state), [state]);

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

  async function onImport(file?: File) {
    if (!file) return;
    try {
      const quiz = await importQuizFile(file);
      toast(`« ${quiz.title} » a été ajouté à votre bibliothèque.`);
      navigate(href.quiz(quiz.id));
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
        <label className="toolbar-sort">
          <span className="sr-only">Trier</span>
          <select className="select" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="recent">Plus récents</option>
            <option value="title">Titre (A à Z)</option>
            <option value="questions">Nombre de questions</option>
          </select>
        </label>
      </div>

      <CategoryFilter categories={categories} total={quizzes.length} value={cat} onChange={setCat} />

      <p className="result-count muted small" aria-live="polite">{plural(visible.length, 'quiz', 'quiz')}</p>

      {visible.length > 0 ? (
        <div className="grid-cards">
          {visible.map((q) => <QuizCard key={q.id} quiz={q} state={state} />)}
        </div>
      ) : (
        <div className="empty">
          <div className="empty-icon"><SearchX aria-hidden="true" /></div>
          <h2>Aucun quiz ne correspond</h2>
          <p>Modifiez votre recherche ou choisissez une autre catégorie.</p>
          <button type="button" className="btn btn-secondary" onClick={() => { setQuery(''); setCat(''); }}>Réinitialiser les filtres</button>
        </div>
      )}
    </div>
  );
}
