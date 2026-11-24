import { LEVELS, levelLabel } from '../lib/quizMeta';
import type { QuizLevel } from '../lib/types';

function Dots({ level }: { level: QuizLevel }) {
  return (
    <span className="lvl-dots-marks" aria-hidden="true">
      {LEVELS.map((l) => <i key={l.value} className={l.value <= level ? 'on' : ''} />)}
    </span>
  );
}

/** Niveau symbolisé par 3 points, remplis selon le niveau, dans la couleur de la catégorie (--cat). */
export function LevelDots({ level, showLabel = true }: { level?: QuizLevel; showLabel?: boolean }) {
  if (!level) return null;
  const label = levelLabel(level);
  return (
    <span className="lvl-dots" role="img" aria-label={`Niveau : ${label} (${level} sur 3)`} title={showLabel ? undefined : `Niveau : ${label}`}>
      <Dots level={level} />
      {showLabel && <span aria-hidden="true">{label}</span>}
    </span>
  );
}

/** Choix du niveau dans l'éditeur. */
export function LevelPicker({ value, onChange }: { value?: QuizLevel; onChange: (level: QuizLevel) => void }) {
  return (
    <div className="field">
      <span className="field-label" id="quiz-level-label">Niveau</span>
      <div className="segmented lvl-picker" role="group" aria-labelledby="quiz-level-label">
        {LEVELS.map((l) => (
          <button key={l.value} type="button" aria-pressed={value === l.value} onClick={() => onChange(l.value)}>
            <Dots level={l.value} />{l.label}
          </button>
        ))}
      </div>
    </div>
  );
}
