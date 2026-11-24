import { ArrowRight, Check, Zap } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { HostEngine } from '../../game/hostEngine';
import { answerText, correctAnswerText } from '../../lib/quizMeta';
import { normalize } from '../../lib/scoring';
import { formatSeconds, percent } from '../../lib/util';
import { Avatar } from '../avatars/Avatar';
import { CountUp } from '../game/fx';
import { Shape, TF_INDEX } from '../game/Shape';

const delay = (i: number): CSSProperties => ({ ['--i' as string]: i });

/** Correction : bonne réponse, répartition des réponses, plus rapide et explication. */
export function HostReveal({ engine, onNext }: { engine: HostEngine; onNext: () => void }) {
  const q = engine.question;
  const players = [...engine.players.values()];
  const mine = (p: (typeof players)[number]) => p.answers.find((a) => a.q === engine.qi);
  const answers = players.map(mine).filter((a) => a && a.value !== null);
  const okCount = players.filter((p) => mine(p)?.correct).length;
  const total = engine.players.size;
  const fastest = players
    .filter((p) => mine(p)?.correct)
    .sort((a, b) => mine(a)!.ms - mine(b)!.ms)[0];

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
    for (const p of players) {
      const a = mine(p);
      if (!a || a.value === null) continue;
      const text = answerText(q, a.value);
      const key = q.type === 'text' ? normalize(text) : text;
      const e = freq.get(key) ?? { text, n: 0, ok: a.correct };
      e.n++;
      freq.set(key, e);
    }
  }
  const top = [...freq.values()].sort((a, b) => b.n - a.n).slice(0, 6);
  const rate = percent(okCount, total);

  return (
    <div className="host-reveal">
      <div className="reveal-head fx-in">
        <h1 className="q-text q-text-sm">{q.text}</h1>
        <p className="reveal-rate">
          <strong><CountUp value={rate} duration={900} delay={300} suffix=" %" /></strong> de bonnes réponses
          <span className="reveal-rate-detail"> · {okCount} sur {total}</span>
        </p>
      </div>

      {bars.length > 0 ? (
        <div className={`chart chart-${bars.length}`} role="img" aria-label={`Répartition des réponses : ${bars.map((b) => `${b.label} ${b.count}`).join(', ')}`}>
          {bars.map((b, i) => (
            <div key={i} className={`chart-col${b.ok ? ' is-ok' : ''}`} style={delay(i)}>
              <span className="chart-count"><CountUp value={b.count} duration={700} delay={200 + i * 90} /></span>
              <span className="chart-track">
                <span className={`chart-bar tile-${b.shape}`} style={{ height: `${b.count ? Math.max(6, (b.count / max) * 100) : 0}%` }} />
              </span>
              <span className={`chart-label tile-${b.shape}`}>
                <Shape index={b.shape} size={20} />
                {b.ok && <Check className="chart-ok" aria-label="Bonne réponse" />}
              </span>
              <span className="chart-text">{b.label}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="reveal-list fx-in">
          <p className="correction-label">Réponses données</p>
          {top.length === 0 ? <p className="muted">Aucune réponse.</p> : (
            <ul className="stagger">{top.map((t, i) => <li key={t.text} className={t.ok ? 'ok' : ''} style={delay(i)}>{t.ok && <Check aria-hidden="true" />}<span>{t.text}</span><strong>{t.n}</strong></li>)}</ul>
          )}
        </div>
      )}

      <div className="reveal-answer">
        <span className="correction-label">Bonne réponse</span>
        <p className="correction-answer">{correctAnswerText(q)}</p>
        {q.explanation && <p className="correction-expl">{q.explanation}</p>}
      </div>

      {fastest && (
        <p className="reveal-fastest">
          <Zap aria-hidden="true" />
          <span>Le plus rapide</span>
          <Avatar id={fastest.avatar} size={36} />
          <strong>{fastest.name}</strong>
          <span className="muted">en {formatSeconds(mine(fastest)!.ms)}</span>
        </p>
      )}

      <div className="stage-actions reveal-next">
        <button type="button" className="btn btn-primary btn-lg" onClick={onNext} autoFocus>
          {engine.isLast ? 'Voir le podium' : 'Classement'}<ArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
