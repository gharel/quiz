import { ArrowRight, Check } from 'lucide-react';
import type { HostEngine } from '../../game/hostEngine';
import { answerText, correctAnswerText } from '../../lib/quizMeta';
import { normalize } from '../../lib/scoring';
import { percent } from '../../lib/util';
import { Shape, TF_INDEX } from '../game/Shape';

/** Correction : bonne réponse, répartition des réponses et explication. */
export function HostReveal({ engine, onNext }: { engine: HostEngine; onNext: () => void }) {
  const q = engine.question;
  const answers = [...engine.players.values()].map((p) => p.answers.find((a) => a.q === engine.qi)).filter((a) => a && a.value !== null);
  const okCount = [...engine.players.values()].filter((p) => p.answers.find((a) => a.q === engine.qi)?.correct).length;
  const total = engine.players.size;

  const bars: { label: string; count: number; ok: boolean; shape: number }[] = [];
  if (q.type === 'single' || q.type === 'multiple') {
    q.answers?.forEach((label, k) =>
      bars.push({ label, ok: !!q.correct?.includes(k), shape: k, count: answers.filter((a) => (Array.isArray(a!.value) ? (a!.value as number[]).includes(k) : a!.value === k)).length }),
    );
  } else if (q.type === 'truefalse') {
    [true, false].forEach((v) => bars.push({ label: v ? 'Vrai' : 'Faux', ok: q.truth === v, shape: TF_INDEX[String(v) as 'true' | 'false'], count: answers.filter((a) => a!.value === v).length }));
  }
  const max = Math.max(1, ...bars.map((b) => b.count));

  // Réponses saisies les plus fréquentes (réponse libre, curseur, ordre)
  const freq = new Map<string, { text: string; n: number; ok: boolean }>();
  if (!bars.length) {
    for (const p of engine.players.values()) {
      const a = p.answers.find((x) => x.q === engine.qi);
      if (!a || a.value === null) continue;
      const text = answerText(q, a.value);
      const key = q.type === 'text' ? normalize(text) : text;
      const e = freq.get(key) ?? { text, n: 0, ok: a.correct };
      e.n++;
      freq.set(key, e);
    }
  }
  const top = [...freq.values()].sort((a, b) => b.n - a.n).slice(0, 6);

  return (
    <div className="host-reveal appear">
      <div className="reveal-head">
        <h1 className="q-text q-text-sm">{q.text}</h1>
        <p className="reveal-rate"><strong>{percent(okCount, total)} %</strong> de bonnes réponses</p>
      </div>

      {bars.length > 0 ? (
        <div className="chart" role="img" aria-label="Répartition des réponses">
          {bars.map((b, i) => (
            <div key={i} className={`chart-col${b.ok ? ' is-ok' : ''}`}>
              <span className="chart-count">{b.count}</span>
              <span className={`chart-bar tile-${b.shape}`} style={{ height: `${Math.max(4, (b.count / max) * 100)}%` }} />
              <span className={`chart-label tile-${b.shape}`}>
                <Shape index={b.shape} size={18} />
                {b.ok && <Check className="chart-ok" aria-label="Bonne réponse" />}
              </span>
              <span className="chart-text">{b.label}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="reveal-list">
          <p className="correction-label">Réponses données</p>
          {top.length === 0 ? <p className="muted">Aucune réponse.</p> : (
            <ul>{top.map((t) => <li key={t.text} className={t.ok ? 'ok' : ''}>{t.ok && <Check aria-hidden="true" />}<span>{t.text}</span><strong>{t.n}</strong></li>)}</ul>
          )}
        </div>
      )}

      <div className="reveal-answer">
        <span className="correction-label">Bonne réponse</span>
        <p className="correction-answer">{correctAnswerText(q)}</p>
        {q.explanation && <p className="correction-expl">{q.explanation}</p>}
      </div>

      <div className="stage-actions">
        <button type="button" className="btn btn-primary btn-lg" onClick={onNext} autoFocus>
          {engine.isLast ? 'Voir le podium' : 'Classement'}<ArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
