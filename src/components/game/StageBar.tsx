import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { BrandLogo, ThemeToggle } from '../Header';
import { SoundToggle } from './SoundToggle';

interface Props {
  info?: ReactNode;
  onQuit?: () => void;
  quitLabel?: string;
  sound?: boolean;
  extra?: ReactNode;
}

export function StageBar({ info, onQuit, quitLabel = 'Quitter', sound = true, extra }: Props) {
  return (
    <header className="stage-bar">
      <div className="stage-bar-info">
        <span className="stage-logo"><BrandLogo height={30} /></span>
        {info && <span className="stage-bar-sep" aria-hidden="true" />}
        {info}
      </div>
      <div className="stage-bar-tools">
        {extra}
        {sound && <SoundToggle />}
        <ThemeToggle />
        {onQuit && (
          <button type="button" className="btn btn-icon" onClick={onQuit} title={quitLabel} aria-label={quitLabel}>
            <X />
          </button>
        )}
      </div>
    </header>
  );
}
