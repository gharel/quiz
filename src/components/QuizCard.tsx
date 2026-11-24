import { Clock, HelpCircle, Play, Radio } from 'lucide-react';
import { unlockAudio } from '../audio/engine';
import { getCategory, type State } from '../lib/store';
import { href } from '../lib/router';
import { estimatedSeconds } from '../lib/quizMeta';
import type { Quiz } from '../lib/types';
import { formatDuration, plural } from '../lib/util';
import { CategoryBadge, catVars } from './CategoryBadge';
import { LevelDots } from './LevelDots';

interface Props {
  quiz: Quiz;
  state: State;
  /** Mode sélection : la carte devient une case à cocher. */
  selected?: boolean;
  onSelect?: () => void;
}

/** Origine d'un quiz de la bibliothèque : importé ou exemple (rien pour un quiz créé sur l'appareil). */
export function SourceTag({ quiz, className = '' }: { quiz: Quiz; className?: string }) {
  const label = quiz.source === 'import' ? 'Importé' : quiz.builtin ? 'Exemple' : '';
  return label ? <span className={`tag-example ${className}`.trim()}>{label}</span> : null;
}

export function QuizCard({ quiz, state, selected = false, onSelect }: Props) {
  const cat = getCategory(quiz.category, state);
  const selecting = !!onSelect;
  const content = (
    <>
      <div className="card-tags">
        {selecting && <input type="checkbox" className="card-check" checked={selected} onChange={onSelect} />}
        <CategoryBadge category={cat} size="sm" />
        <LevelDots level={quiz.level} />
      </div>
      <h3 className="card-title">{quiz.title}</h3>
      {quiz.description && <p className="card-desc">{quiz.description}</p>}
      <div className="card-meta">
        <span><HelpCircle aria-hidden="true" />{plural(quiz.questions.length, 'question', 'questions')}</span>
        <span><Clock aria-hidden="true" />{formatDuration(estimatedSeconds(quiz))} environ</span>
        <SourceTag quiz={quiz} className="card-source" />
      </div>
    </>
  );

  return (
    <article className={`card cat${selecting ? ' card-selectable' : ' card-hover'}${selected ? ' is-selected' : ''}`} style={catVars(cat.color)}>
      <div className="card-bar" />
      {selecting ? (
        <label className="card-body card-link">{content}</label>
      ) : (
        <a href={href.quiz(quiz.id)} className="card-body card-link">{content}</a>
      )}
      {!selecting && (
        <div className="card-actions">
          <a className="btn btn-primary btn-sm" href={href.host(quiz.id)} onClick={unlockAudio}>
            <Radio aria-hidden="true" />En direct
          </a>
          <a className="btn btn-secondary btn-sm" href={href.solo(quiz.id)}>
            <Play aria-hidden="true" />En solo
          </a>
        </div>
      )}
    </article>
  );
}
