import type { PlayQuestion } from '../../lib/play';
import { TYPE_INFO } from '../../lib/quizMeta';

export function QuestionType({ q }: { q: PlayQuestion }) {
  const T = TYPE_INFO[q.type];
  return (
    <span className="q-type">
      <T.icon aria-hidden="true" />
      {q.multi ? 'Plusieurs réponses' : T.label}
      {q.points === 2 && ' · Points doublés'}
      {q.points === 0 && ' · Sans points'}
    </span>
  );
}

export function QuestionCard({ q, small }: { q: PlayQuestion; small?: boolean }) {
  return (
    <div className="q-card">
      <h1 className={`q-text${small || q.text.length > 120 ? ' q-text-sm' : ''}`}>{q.text}</h1>
      {q.image && <img className="q-image" src={q.image} alt="" />}
    </div>
  );
}
