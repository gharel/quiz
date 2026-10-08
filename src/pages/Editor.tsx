import { ArrowLeft, Plus, Save } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { CategoryPicker } from '../components/editor/CategoryPicker';
import { QuestionEditor } from '../components/editor/QuestionEditor';
import { toast } from '../components/Toast';
import { blankQuestion, blankQuiz, cleanQuiz, validateQuiz } from '../lib/editorModel';
import { href, navigate } from '../lib/router';
import { getQuiz, lastSaveFailed, saveQuiz } from '../lib/store';
import type { Quiz } from '../lib/types';
import { uid } from '../lib/util';
import { NotFound } from './NotFound';

export default function Editor({ id }: { id?: string }) {
  const existing = id ? getQuiz(id) : undefined;
  if (id && (!existing || existing.builtin)) return <NotFound text="Ce quiz ne peut pas être modifié. Dupliquez-le depuis sa page pour l’adapter." />;
  return <EditorForm initial={existing ? structuredClone(existing) : blankQuiz()} isNew={!existing} />;
}

function EditorForm({ initial, isNew }: { initial: Quiz; isNew: boolean }) {
  const [quiz, setQuiz] = useState<Quiz>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [dirty, setDirty] = useState(false);
  const errors = useMemo(() => validateQuiz(quiz), [quiz]);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const update = (patch: Partial<Quiz>) => {
    setQuiz((q) => ({ ...q, ...patch }));
    setDirty(true);
  };
  const setQuestions = (fn: (qs: Quiz['questions']) => Quiz['questions']) => update({ questions: fn(quiz.questions) });

  function onSave() {
    setSubmitted(true);
    if (errors.size) {
      const first = [...errors.keys()].sort((a, b) => a - b)[0];
      document.getElementById(first === -1 ? 'quiz-title' : `qe-${first}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      toast(errors.size === 1 ? 'Une information manque avant d’enregistrer.' : `${errors.size} informations manquent avant d’enregistrer.`, 'error');
      return;
    }
    const saved = saveQuiz(cleanQuiz(quiz));
    if (lastSaveFailed()) {
      toast('Espace de stockage plein : retirez des images ou supprimez d’anciens résultats.', 'error');
      return;
    }
    setDirty(false);
    toast(isNew ? 'Quiz créé.' : 'Modifications enregistrées.');
    navigate(href.quiz(saved.id));
  }

  const cancel = () => {
    if (dirty && !confirm('Quitter sans enregistrer vos modifications ?')) return;
    setDirty(false);
    navigate(isNew ? href.library() : href.quiz(quiz.id));
  };

  return (
    <div className="page container ed-page">
      <button type="button" className="back-link" onClick={cancel}><ArrowLeft aria-hidden="true" />{isNew ? 'Bibliothèque' : 'Retour au quiz'}</button>
      <h1 className="page-title">{isNew ? 'Créer un quiz' : 'Modifier le quiz'}</h1>

      <section className="panel ed-meta" aria-label="Informations du quiz">
        <label className="field">
          <span className="field-label">Titre</span>
          <input id="quiz-title" className="input" value={quiz.title} maxLength={120} placeholder="Ex. : Les bases de WordPress" onChange={(e) => update({ title: e.target.value })} aria-invalid={submitted && errors.has(-1)} />
          {submitted && errors.has(-1) && <span className="field-error">{errors.get(-1)}</span>}
        </label>
        <label className="field">
          <span className="field-label">Description (facultative)</span>
          <textarea className="textarea" rows={2} maxLength={300} value={quiz.description} placeholder="En une phrase : ce que ce quiz permet de vérifier." onChange={(e) => update({ description: e.target.value })} />
        </label>
        <CategoryPicker value={quiz.category} onChange={(category) => update({ category })} />
      </section>

      <h2 className="section-title ed-section">Questions <span className="muted">({quiz.questions.length})</span></h2>
      <div className="stack">
        {quiz.questions.map((q, i) => (
          <div key={q.id} id={`qe-${i}`}>
            <QuestionEditor
              q={q}
              index={i}
              count={quiz.questions.length}
              error={errors.get(i)}
              showError={submitted}
              onChange={(nq) => setQuestions((qs) => qs.map((x) => (x.id === q.id ? nq : x)))}
              onMove={(d) => setQuestions((qs) => { const c = [...qs]; [c[i], c[i + d]] = [c[i + d], c[i]]; return c; })}
              onDuplicate={() => setQuestions((qs) => [...qs.slice(0, i + 1), { ...structuredClone(q), id: uid(8) }, ...qs.slice(i + 1)])}
              onDelete={() => setQuestions((qs) => qs.filter((x) => x.id !== q.id))}
            />
          </div>
        ))}
      </div>
      <button type="button" className="btn btn-secondary btn-block ed-addq" onClick={() => setQuestions((qs) => [...qs, blankQuestion(qs[qs.length - 1]?.type ?? 'single')])} disabled={quiz.questions.length >= 50}>
        <Plus aria-hidden="true" />Ajouter une question
      </button>

      <div className="ed-savebar">
        <div className="container ed-savebar-inner">
          <span className="muted small ed-savebar-info">{dirty ? 'Modifications non enregistrées' : 'Aucune modification'}</span>
          <div className="row">
            <button type="button" className="btn btn-ghost" onClick={cancel}>Annuler</button>
            <button type="button" className="btn btn-primary" onClick={onSave}><Save aria-hidden="true" />Enregistrer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
