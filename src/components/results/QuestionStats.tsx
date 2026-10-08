import { AlertTriangle, Check } from 'lucide-react';
import { correctAnswerText, TYPE_INFO } from '../../lib/quizMeta';
import { questionStats } from '../../lib/stats';
import type { Session } from '../../lib/types';
import { formatSeconds, percent } from '../../lib/util';
import { Shape, TF_INDEX } from '../game/Shape';

function Bar({ label, count, total, ok, shape }: { label: string; count: number; total: number; ok: boolean; shape: number }) {
  return (
    <li className="dist-row">
      <span className={`dist-shape tile-${shape}`}><Shape index={shape} size={16} /></span>
      <span className="dist-label">{label}{ok && <Check className="dist-ok" aria-label="Bonne réponse" />}</span>
      <span className="dist-track"><span className={`dist-fill tile-${shape}`} style={{ width: `${percent(count, total)}%` }} /></span>
      <span className="dist-count">{count}</span>
    </li>
  );
}

export function QuestionStats({ session: s }: { session: Session }) {
  const total = s.players.length;
  return (
    <ol className="qlist">
      {questionStats(s).map(({ q, index, rate, counts, tf, avgMs, answered }) => {
        const T = TYPE_INFO[q.type];
        const hard = total > 0 && rate < 35;
        return (
          <li key={q.id} className="panel qstat">
            <div className="qitem-head">
              <span><T.icon aria-hidden="true" />{T.label}</span>
              <span>Temps moyen : {answered ? formatSeconds(avgMs) : '—'}</span>
              {hard && <span className="hard"><AlertTriangle aria-hidden="true" />Question difficile</span>}
            </div>
            <div className="qstat-top">
              <p className="qitem-text">{index + 1}. {q.text}</p>
              <span className={`qstat-rate${hard ? ' low' : ''}`}><strong>{rate} %</strong><span>de réussite</span></span>
            </div>
            {(q.type === 'single' || q.type === 'multiple') && (
              <ul className="dist">{q.answers?.map((a, k) => <Bar key={k} label={a} count={counts[k]} total={total} ok={!!q.correct?.includes(k)} shape={k} />)}</ul>
            )}
            {q.type === 'truefalse' && (
              <ul className="dist">
                <Bar label="Vrai" count={tf[0]} total={total} ok={q.truth === true} shape={TF_INDEX.true} />
                <Bar label="Faux" count={tf[1]} total={total} ok={q.truth === false} shape={TF_INDEX.false} />
              </ul>
            )}
            {!['single', 'multiple', 'truefalse'].includes(q.type) && (
              <p className="small"><span className="muted">Bonne réponse : </span><span className="correction-answer">{correctAnswerText(q)}</span></p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
