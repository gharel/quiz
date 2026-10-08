import { useEffect, useRef, useState } from 'react';

/** Compte à rebours basé sur une échéance (horloge locale). */
export function useCountdown(deadline: number | null, onTick?: (secondsLeft: number) => void) {
  const [now, setNow] = useState(() => Date.now());
  const last = useRef<number | null>(null);
  const tickRef = useRef(onTick);
  tickRef.current = onTick;
  useEffect(() => {
    if (!deadline) return;
    last.current = null;
    let raf = 0;
    const loop = () => {
      const t = Date.now();
      setNow(t);
      const left = Math.ceil((deadline - t) / 1000);
      if (left !== last.current) {
        last.current = left;
        tickRef.current?.(left);
      }
      if (t < deadline) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [deadline]);
  return deadline ? Math.max(0, deadline - now) : 0;
}

export function TimerRing({ msLeft, total, size = 72 }: { msLeft: number; total: number; size?: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const ratio = total > 0 ? msLeft / total : 0;
  const secs = Math.ceil(msLeft / 1000);
  const urgent = secs <= 5;
  return (
    <div className={`timer${urgent ? ' timer-urgent' : ''}`} style={{ width: size, height: size }} role="timer" aria-label={`${secs} secondes restantes`}>
      <svg viewBox="0 0 60 60" aria-hidden="true">
        <circle cx="30" cy="30" r={r} className="timer-track" />
        <circle cx="30" cy="30" r={r} className="timer-fill" strokeDasharray={c} strokeDashoffset={c * (1 - ratio)} />
      </svg>
      <span>{secs}</span>
    </div>
  );
}
