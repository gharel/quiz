import { Clock, HelpCircle, Play, Radio } from 'lucide-react';
import { unlockAudio } from '../audio/engine';
import { getCategory, type State } from '../lib/store';
import { href } from '../lib/router';
import { estimatedSeconds } from '../lib/quizMeta';
import type { Quiz } from '../lib/types';
import { formatDuration, plural } from '../lib/util';
import { CategoryBadge, catVars } from './CategoryBadge';

export function QuizCard({ quiz, state }: { quiz: Quiz; state: State }) {
  const cat = getCategory(quiz.category, state);
  return (
    <article className="card card-hover cat" style={catVars(cat.color)}>
      <div className="card-bar" />
      <a href={href.quiz(quiz.id)} className="card-body card-link">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <CategoryBadge category={cat} size="sm" />
          {quiz.builtin && <span className="tag-example">Exemple</span>}
        </div>
        <h3 className="card-title">{quiz.title}</h3>
        {quiz.description && <p className="card-desc">{quiz.description}</p>}
        <div className="card-meta">
          <span><HelpCircle aria-hidden="true" />{plural(quiz.questions.length, 'question', 'questions')}</span>
          <span><Clock aria-hidden="true" />{formatDuration(estimatedSeconds(quiz))} environ</span>
        </div>
      </a>
      <div className="card-actions">
        <a className="btn btn-primary btn-sm" href={href.host(quiz.id)} onClick={unlockAudio}>
          <Radio aria-hidden="true" />En direct
        </a>
        <a className="btn btn-secondary btn-sm" href={href.solo(quiz.id)}>
          <Play aria-hidden="true" />En solo
        </a>
      </div>
    </article>
  );
}
