import { Check, RotateCcw, Trophy, X } from 'lucide-react';
import { answerText, correctAnswerText } from '../../lib/quizMeta';
import type { AnswerRecord, Quiz } from '../../lib/types';
import { formatNumber, formatSeconds, percent } from '../../lib/util';

function verdict(p: number): string {
  if (p === 100) return 'Sans faute, bravo !';
  if (p >= 75) return 'Très bon résultat !';
  if (p >= 50) return 'Bon début, continuez !';
  return 'Révisez et retentez votre chance.';
}

export function SoloSummary({ quiz, answers, score, onRestart, onQuit }: { quiz: Quiz; answers: AnswerRecord[]; score: number; onRestart: () => void; onQuit: () => void }) {
  const ok = answers.filter((a) => a.correct).length;
  const p = percent(ok, quiz.questions.length);
  return (
    <div className="stack appear">
      <section className="q-card summary-head">
        <div className="summary-icon"><Trophy aria-hidden="true" /></div>
        <h1 className="q-text">{verdict(p)}</h1>
        <div className="summary-stats">
          <div><strong>{formatNumber(score)}</strong><span>points</span></div>
          <div><strong>{ok} / {quiz.questions.length}</strong><span>bonnes réponses</span></div>
          <div><strong>{p} %</strong><span>de réussite</span></div>
        </div>
        <div className="stage-actions">
          <button type="button" className="btn btn-primary btn-lg" onClick={onRestart}><RotateCcw aria-hidden="true" />Rejouer</button>
          <button type="button" className="btn btn-secondary btn-lg" onClick={onQuit}>Terminer</button>
        </div>
      </section>

      <h2 className="section-title">Revoir mes réponses</h2>
      <ol className="qlist">
        {quiz.questions.map((q, i) => {
          const a = answers.find((x) => x.q === i);
          return (
            <li key={q.id} className="panel review-item">
              <div className={`review-mark ${a?.correct ? 'ok' : 'ko'}`} aria-label={a?.correct ? 'Bonne réponse' : 'Mauvaise réponse'}>
                {a?.correct ? <Check /> : <X />}
              </div>
              <div className="review-body">
                <p className="qitem-text">{i + 1}. {q.text}</p>
                <p className="small"><span className="muted">Votre réponse : </span>{answerText(q, a?.value ?? null)}{a && a.value !== null ? ` · ${formatSeconds(a.ms)}` : ''}</p>
                {!a?.correct && <p className="small correction-answer">Bonne réponse : {correctAnswerText(q)}</p>}
                {q.explanation && <p className="qitem-expl">{q.explanation}</p>}
              </div>
              <span className="review-points">{a?.points ? `+${formatNumber(a.points)}` : '0'}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
