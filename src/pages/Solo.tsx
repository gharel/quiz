import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { stopMusic } from '../audio/music';
import { sfx } from '../audio/sfx';
import { CategoryBadge } from '../components/CategoryBadge';
import { AnswerPad } from '../components/game/AnswerPad';
import { Feedback } from '../components/game/Feedback';
import { QuestionCard, QuestionType } from '../components/game/QuestionCard';
import { SoloSummary } from '../components/game/SoloSummary';
import { StageBar } from '../components/game/StageBar';
import { TimerRing, useCountdown } from '../components/game/Timer';
import { useSolo } from '../game/useSolo';
import { getPrefs, setPrefs } from '../lib/prefs';
import { correctAnswerText } from '../lib/quizMeta';
import { href, navigate } from '../lib/router';
import { getCategory, getQuiz } from '../lib/store';
import type { Quiz } from '../lib/types';
import { formatNumber, plural } from '../lib/util';
import { NotFound } from './NotFound';

export default function Solo({ id }: { id: string }) {
  const quiz = getQuiz(id);
  if (!quiz) return <NotFound text="Ce quiz n’existe pas ou a été supprimé." />;
  return <SoloGame quiz={quiz} onQuit={() => navigate(quiz.builtin || getQuiz(quiz.id) ? href.quiz(quiz.id) : href.library())} />;
}

export function SoloGame({ quiz, onQuit }: { quiz: Quiz; onQuit: () => void }) {
  const g = useSolo(quiz);
  const [name, setName] = useState(() => getPrefs().playerName);
  const q = g.questions[g.index];
  const total = quiz.questions[g.index]?.time * 1000;
  const msLeft = useCountdown(g.phase === 'question' ? g.deadline : null, (s) => {
    if (s <= 5 && s > 0) sfx.tick(s === 1);
  });

  useEffect(() => {
    if (g.phase === 'question' && g.deadline && msLeft <= 0) g.answer(null);
  }, [msLeft, g]);

  useEffect(() => () => stopMusic(0.2), []);

  const info = g.phase === 'question' || g.phase === 'feedback'
    ? <span>Question {g.index + 1} / {quiz.questions.length} · {formatNumber(g.score)} pts</span>
    : null;

  return (
    <div className="stage">
      <StageBar info={info} onQuit={() => { stopMusic(0.2); onQuit(); }} />
      {(g.phase === 'question' || g.phase === 'feedback') && (
        <div className="progress" aria-hidden="true" style={{ borderRadius: 0 }}>
          <span style={{ width: `${((g.index + (g.phase === 'feedback' ? 1 : 0)) / quiz.questions.length) * 100}%` }} />
        </div>
      )}
      <div className="stage-body">
        {g.phase === 'intro' && (
          <form
            className="stage-center solo-intro"
            onSubmit={(e) => { e.preventDefault(); setPrefs({ playerName: name.trim() }); g.start(name); }}
          >
            <CategoryBadge category={getCategory(quiz.category)} />
            <h1 className="q-text">{quiz.title}</h1>
            <p className="muted">{plural(quiz.questions.length, 'question', 'questions')} · Répondez vite : plus vous êtes rapide, plus vous gagnez de points.</p>
            <label className="field solo-name">
              <span className="field-label">Votre prénom ou pseudo (facultatif)</span>
              <input className="input" value={name} maxLength={24} onChange={(e) => setName(e.target.value)} autoComplete="nickname" placeholder="Ex. : Marie" />
            </label>
            <button type="submit" className="btn btn-primary btn-lg"><Play aria-hidden="true" />Commencer</button>
          </form>
        )}

        {g.phase === 'question' && q && (
          <>
            <div className="q-head">
              <QuestionType q={q} />
              <TimerRing msLeft={msLeft} total={total} />
            </div>
            <QuestionCard q={q} />
            <AnswerPad key={g.index} q={q} onSubmit={(v) => { sfx.lock(); g.answer(v); }} />
          </>
        )}

        {g.phase === 'feedback' && g.last && (
          <>
            <Feedback
              {...g.last}
              correctText={correctAnswerText(quiz.questions[g.index])}
              explanation={quiz.questions[g.index].explanation}
            />
            <div className="stage-actions">
              <button type="button" className="btn btn-primary btn-lg" onClick={g.next} autoFocus>
                {g.index + 1 < quiz.questions.length ? 'Question suivante' : 'Voir mon résultat'}
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </>
        )}

        {g.phase === 'end' && <SoloSummary quiz={quiz} answers={g.answers} score={g.score} onRestart={g.restart} onQuit={onQuit} />}
      </div>
    </div>
  );
}
