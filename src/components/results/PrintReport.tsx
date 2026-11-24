import { correctAnswerText, levelLabel } from '../../lib/quizMeta';
import { levelOf, levels, questionStats, ranking, sessionStats } from '../../lib/stats';
import type { Category, Session } from '../../lib/types';
import { formatDateTime, formatDuration, formatNumber, formatSeconds } from '../../lib/util';
import { splitQuestions } from './Summary';

/** Bilan imprimable (Imprimer → Enregistrer au format PDF). Masqué à l'écran. */
export function PrintReport({ session: s, category }: { session: Session; category: Category }) {
  const st = sessionStats(s);
  const n = s.quiz.questions.length;
  const { weak } = splitQuestions(s);
  const info: [string, string | number][] = [
    ...(s.report?.training ? [['Formation', s.report.training] as [string, string]] : []),
    ...(s.report?.trainer ? [['Formateur', s.report.trainer] as [string, string]] : []),
    ['Date', formatDateTime(s.startedAt)],
    ['Mode', s.mode === 'live' ? 'Partie en direct' : 'Partie en solo'],
    ['Durée', formatDuration(st.durationMs / 1000)],
    ['Catégorie', category.label],
    ...(s.quiz.level ? [['Niveau', levelLabel(s.quiz.level)] as [string, string]] : []),
  ];

  return (
    <article className="print-report" aria-hidden="true">
      <header className="pr-head">
        <div>
          <p className="pr-kicker">Bilan de quiz</p>
          <h1>{s.quiz.title}</h1>
        </div>
        <img src={`${import.meta.env.BASE_URL}img/logo-skazy-formation.svg`} alt="" />
      </header>

      <dl className="pr-info">
        {info.map(([k, v]) => (
          <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
        ))}
      </dl>

      <div className="pr-kpis">
        <div><strong>{st.successRate} %</strong><span>réussite moyenne</span></div>
        <div><strong>{s.players.length}</strong><span>participants</span></div>
        <div><strong>{n}</strong><span>questions</span></div>
        <div><strong>{st.answerRate} %</strong><span>taux de réponse</span></div>
        {levels(s).map((l) => (
          <div key={l.id}><strong>{l.players.length}</strong><span>{l.label.toLowerCase()} ({l.range})</span></div>
        ))}
      </div>

      {s.report?.note && (
        <section className="pr-section">
          <h2>Observations</h2>
          <p className="pr-note">{s.report.note}</p>
        </section>
      )}

      <section className="pr-section">
        <h2>Participants</h2>
        <table>
          <thead><tr><th>Rang</th><th>Participant</th><th>Bonnes réponses</th><th>Réussite</th><th>Niveau</th><th>Temps moyen</th><th>Score</th></tr></thead>
          <tbody>
            {ranking(s).map((p) => (
              <tr key={p.id}>
                <td>{p.rank}</td><td>{p.name}</td><td>{p.correct}/{n}{p.missed ? ` (${p.missed} sans réponse)` : ''}</td>
                <td>{p.rate} %</td><td>{levelOf(p.rate).label}</td><td>{p.avgMs ? formatSeconds(p.avgMs) : '—'}</td><td>{formatNumber(p.score)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {weak.length > 0 && (
        <section className="pr-section">
          <h2>À retravailler</h2>
          <ul className="pr-list">
            {weak.map(({ q, index, rate }) => (
              <li key={q.id}><strong>{index + 1}. {q.text}</strong> — {rate} % de réussite. Bonne réponse : {correctAnswerText(q)}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="pr-section">
        <h2>Réussite par question</h2>
        <table>
          <thead><tr><th>N°</th><th>Question</th><th>Bonne réponse</th><th>Réussite</th></tr></thead>
          <tbody>
            {questionStats(s).map(({ q, index, rate }) => (
              <tr key={q.id}><td>{index + 1}</td><td>{q.text}</td><td>{correctAnswerText(q)}</td><td>{rate} %</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="pr-foot">Document généré le {formatDateTime(Date.now())} avec Quiz · Skazy Formation.</footer>
    </article>
  );
}
