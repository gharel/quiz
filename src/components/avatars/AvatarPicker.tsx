import { Check } from 'lucide-react';
import { Modal } from '../Modal';
import { AVATARS, Avatar } from './Avatar';

/** Grille de choix de l'animal. */
export function AvatarPicker({ value, onChange, onClose }: { value: string; onChange: (id: string) => void; onClose: () => void }) {
  return (
    <Modal title="Choisissez votre animal" onClose={onClose}>
      <div className="avatar-grid" role="radiogroup" aria-label="Animaux">
        {AVATARS.map((a) => (
          <button
            key={a.id}
            type="button"
            role="radio"
            aria-checked={value === a.id}
            className="avatar-option"
            onClick={() => {
              onChange(a.id);
              onClose();
            }}
          >
            <Avatar id={a.id} size={64} />
            <span>{a.label}</span>
            {value === a.id && <span className="avatar-check" aria-hidden="true"><Check /></span>}
          </button>
        ))}
      </div>
    </Modal>
  );
}
