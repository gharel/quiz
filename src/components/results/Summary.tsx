import { AlertTriangle, CircleCheck } from 'lucide-react';
import { correctAnswerText } from '../../lib/quizMeta';
import { levels, questionStats } from '../../lib/stats';
import type { Session } from '../../lib/types';
import { percent, plural } from '../../lib/util';

/** Questions classées pour le bilan : notions acquises et notions à retravailler. */
export function splitQuestions(s: Session) {
  const stats = questionStats(s);
  return {
    strong: stats.filter((x) => x.rate >= 75).sort((a, b) => b.rate - a.rate),
    weak: stats.filter((x) => x.rate < 50).sort((a, b) => a.rate - b.rate),
  };
}

export function Summary({ session: s }: { session: Session }) {
  const total = s.players.length;
  const { strong, weak } = splitQuestions(s);
  return (
    <div className="summary">
      <section aria-labelledby="sum-levels">
        <h2 id="sum-levels" className="summary-title">Niveau des participants</h2>
        <div className="levels">
          {levels(s).map((l) => (
            <div key={l.id} className={`panel level level-${l.id}`}>
              <div className="level-head">
                <strong>{l.players.length}</strong>
                <span>
                  <span className="level-label">{l.label}</span>
                  <span className="muted small">{l.range} de bonnes réponses</span>
                </span>
                <span className="level-share">{percent(l.players.length, total)} %</span>
              </div>
              <div className="level-track" aria-hidden="true"><span style={{ width: `${percent(l.players.length, total)}%` }} /></div>
              {l.players.length > 0 ? (
                <p className="level-names">{l.players.map((p) => `${p.name} (${p.rate} %)`).join(', ')}</p>
              ) : (
                <p className="level-names muted">Aucun participant</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="summary-cols">
        <section className="panel" aria-labelledby="sum-weak">
          <h2 id="sum-weak" className="summary-title"><AlertTriangle className="tone-ko" aria-hidden="true" />À retravailler</h2>
          <p className="muted small">Questions réussies par moins de la moitié du groupe.</p>
          {weak.length > 0 ? (
            <ol className="notions">
              {weak.map(({ q, index, rate }) => (
                <li key={q.id}>
                  <span className="notion-rate low">{rate} %</span>
                  <span>
                    <span className="notion-q">{index + 1}. {q.text}</span>
                    <span className="notion-a">Bonne réponse : {correctAnswerText(q)}</span>
                  </span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="notions-empty">Aucune : toutes les questions ont été réussies par au moins la moitié du groupe.</p>
          )}
        </section>
        <section className="panel" aria-labelledby="sum-strong">
          <h2 id="sum-strong" className="summary-title"><CircleCheck className="tone-ok" aria-hidden="true" />Notions acquises</h2>
          <p className="muted small">Questions réussies par au moins 75 % du groupe ({plural(strong.length, 'question', 'questions')}).</p>
          {strong.length > 0 ? (
            <ol className="notions">
              {strong.map(({ q, index, rate }) => (
                <li key={q.id}>
                  <span className="notion-rate">{rate} %</span>
                  <span className="notion-q">{index + 1}. {q.text}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="notions-empty">Aucune question n’atteint 75 % de réussite.</p>
          )}
        </section>
      </div>
    </div>
  );
}
