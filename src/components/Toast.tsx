import { CircleAlert, CircleCheck } from 'lucide-react';
import { useSyncExternalStore } from 'react';

interface ToastItem {
  id: number;
  text: string;
  tone: 'success' | 'error';
}

let items: ToastItem[] = [];
let next = 1;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export function toast(text: string, tone: ToastItem['tone'] = 'success') {
  const id = next++;
  items = [...items, { id, text, tone }];
  emit();
  setTimeout(() => {
    items = items.filter((t) => t.id !== id);
    emit();
  }, 3800);
}

export function Toasts() {
  const list = useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => items,
  );
  return (
    <div className="toasts" role="status" aria-live="polite">
      {list.map((t) => (
        <div key={t.id} className={`toast toast-${t.tone}`}>
          {t.tone === 'success' ? <CircleCheck aria-hidden="true" /> : <CircleAlert aria-hidden="true" />}
          <span>{t.text}</span>
        </div>
      ))}
    </div>
  );
}
