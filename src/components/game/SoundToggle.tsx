import { Volume2, VolumeX } from 'lucide-react';
import { applyMute, unlockAudio } from '../../audio/engine';
import { setPrefs, usePrefs } from '../../lib/prefs';

export function SoundToggle() {
  const { sound } = usePrefs();
  const label = sound ? 'Couper le son' : 'Activer le son';
  return (
    <button
      type="button"
      className="btn btn-icon"
      title={label}
      aria-label={label}
      aria-pressed={sound}
      onClick={() => {
        setPrefs({ sound: !sound });
        unlockAudio();
        applyMute();
      }}
    >
      {sound ? <Volume2 /> : <VolumeX />}
    </button>
  );
}
