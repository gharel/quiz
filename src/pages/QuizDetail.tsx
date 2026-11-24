import { ArrowLeft, Check, Clock, Copy, Download, Eye, EyeOff, HelpCircle, Pencil, Play, Radio, RotateCcw, Share2, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import { unlockAudio } from '../audio/engine';
import { CategoryBadge, catVars } from '../components/CategoryBadge';
import { LevelDots } from '../components/LevelDots';
import { SourceTag } from '../components/QuizCard';
import { Confirm } from '../components/Modal';
import { ShareDialog } from '../components/ShareDialog';
import { toast } from '../components/Toast';
import { NotFound } from './NotFound';
import { correctAnswerText, estimatedSeconds, TYPE_INFO } from '../lib/quizMeta';
import { href, navigate } from '../lib/router';
import { deleteQuiz, duplicateQuiz, getCategory, getQuiz, isModifiedOriginal, originalQuiz, revertQuiz, useStore } from '../lib/store';
import { exportQuiz } from '../lib/transfer';
import type { Question } from '../lib/types';
import { formatDate, formatDuration, plural } from '../lib/util';

function Answers({ q }: { q: Question }) {
  const Item = ({ ok, text }: { ok: boolean; text: string }) => (
    <li className={ok ? 'ok' : ''}>
      {ok ? <Check aria-label="Bonne réponse" /> : <X aria-hidden="true" />}
      <span>{text}</span>
    </li>
  );
  if (q.type === 'single' || q.type === 'multiple') {
    return <ul className="qitem-answers">{q.answers?.map((a, i) => <Item key={i} ok={!!q.correct?.includes(i)} text={a} />)}</ul>;
  }
  return (
    <ul className="qitem-answers">
      <Item ok text={q.type === 'slider' && q.slider?.tolerance ? `${correctAnswerText(q)} (± ${q.slider.tolerance})` : correctAnswerText(q)} />
    </ul>
  );
}

export function QuizDetail({ id }: { id: string }) {
  const state = useStore();
  const [showAnswers, setShowAnswers] = useState(false);
  const [confirm, setConfirm] = useState<'delete' | 'revert' | null>(null);
  const [sharing, setSharing] = useState(false);
  const quiz = getQuiz(id);
  if (!quiz) return <NotFound text="Ce quiz n’existe pas ou a été supprimé." />;
  const cat = getCategory(quiz.category, state);
  const fromLibrary = !!originalQuiz(quiz.id);
  const modified = isModifiedOriginal(quiz.id, state);

  const duplicate = () => {
    const copy = duplicateQuiz(quiz);
    toast('Copie créée : vous pouvez maintenant la modifier.');
    navigate(href.edit(copy.id));
  };

  return (
    <div className="page container">
      <a href={href.library()} className="back-link"><ArrowLeft aria-hidden="true" />Bibliothèque</a>

      <section className="detail-hero cat" style={catVars(cat.color)}>
        <div className="card-bar" />
        <div className="detail-hero-body">
          <div className="row">
            <CategoryBadge category={cat} />
            <LevelDots level={quiz.level} />
            <SourceTag quiz={quiz} />
            {modified && <span className="tag-example">Modifié</span>}
          </div>
          <h1>{quiz.title}</h1>
          {quiz.description && <p className="muted">{quiz.description}</p>}
          <div className="detail-meta">
            <span><HelpCircle aria-hidden="true" />{plural(quiz.questions.length, 'question', 'questions')}</span>
            <span><Clock aria-hidden="true" />{formatDuration(estimatedSeconds(quiz))} environ</span>
            {!quiz.builtin && <span>Modifié le {formatDate(quiz.updatedAt)}</span>}
          </div>
          <div className="detail-actions">
            <a className="btn btn-primary btn-lg" href={href.host(quiz.id)} onClick={unlockAudio}><Radio aria-hidden="true" />Lancer en direct</a>
            <a className="btn btn-secondary btn-lg" href={href.solo(quiz.id)}><Play aria-hidden="true" />Jouer en solo</a>
          </div>
          <div className="row detail-tools">
            <a className="btn btn-ghost btn-sm" href={href.edit(quiz.id)}><Pencil aria-hidden="true" />Modifier</a>
            <button type="button" className="btn btn-ghost btn-sm" onClick={duplicate}><Copy aria-hidden="true" />Dupliquer</button>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => setSharing(true)}><Share2 aria-hidden="true" />Partager</button>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => exportQuiz(quiz)}><Download aria-hidden="true" />Exporter</button>
            {modified && (
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => setConfirm('revert')}><RotateCcw aria-hidden="true" />Version d’origine</button>
            )}
            <button type="button" className="btn btn-ghost btn-sm danger-text" onClick={() => setConfirm('delete')}><Trash2 aria-hidden="true" />Supprimer</button>
          </div>
        </div>
      </section>

      <div className="section-head">
        <h2 className="section-title">Questions</h2>
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => setShowAnswers((v) => !v)} aria-pressed={showAnswers}>
          {showAnswers ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
          {showAnswers ? 'Masquer les réponses' : 'Afficher les réponses'}
        </button>
      </div>
      <ol className="qlist">
        {quiz.questions.map((q, i) => {
          const T = TYPE_INFO[q.type];
          return (
            <li key={q.id} className="panel qitem">
              <span className="qnum" aria-hidden="true">{i + 1}</span>
              <div>
                <div className="qitem-head">
                  <span><T.icon aria-hidden="true" />{T.label}</span>
                  <span><Clock aria-hidden="true" />{q.time} s</span>
                  {q.points !== 1 && <span>{q.points === 2 ? 'Points doublés' : 'Sans points'}</span>}
                </div>
                <p className="qitem-text">{q.text}</p>
                {showAnswers && <Answers q={q} />}
                {showAnswers && q.explanation && <p className="qitem-expl">{q.explanation}</p>}
              </div>
            </li>
          );
        })}
      </ol>

      {confirm === 'delete' && (
        <Confirm
          title="Supprimer ce quiz ?"
          message={fromLibrary
            ? `« ${quiz.title} » sera retiré de la bibliothèque de cet appareil. Vous pourrez le restaurer depuis la bibliothèque. Les résultats déjà enregistrés sont conservés.`
            : `« ${quiz.title} » sera définitivement supprimé de cet appareil. Les résultats déjà enregistrés sont conservés.`}
          confirmLabel="Supprimer"
          danger
          onConfirm={() => { deleteQuiz(quiz.id); toast('Quiz supprimé.'); navigate(href.library()); }}
          onClose={() => setConfirm(null)}
        />
      )}
      {confirm === 'revert' && (
        <Confirm
          title="Revenir à la version d’origine ?"
          message={`Vos modifications de « ${quiz.title} » seront perdues sur cet appareil.`}
          confirmLabel="Revenir à l’origine"
          danger
          onConfirm={() => { revertQuiz(quiz.id); toast('Version d’origine rétablie.'); setConfirm(null); }}
          onClose={() => setConfirm(null)}
        />
      )}
      {sharing && <ShareDialog quiz={quiz} onClose={() => setSharing(false)} />}
    </div>
  );
}
