import { useEffect, useMemo, useRef, useState } from 'react';
import { formatNumber } from '../../lib/util';

export const reducedMotion = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** Valeur qui défile de `from` à `to` (compteur de points), après un délai éventuel. */
export function useCountUp(to: number, { from = 0, duration = 1200, delay = 0 } = {}) {
  const [value, setValue] = useState(() => (reducedMotion() ? to : from));
  const fromRef = useRef(from);
  fromRef.current = from;
  useEffect(() => {
    if (reducedMotion() || duration <= 0) {
      setValue(to);
      return;
    }
    const start = fromRef.current;
    setValue(start);
    let raf = 0;
    const t0 = performance.now() + delay;
    const loop = (now: number) => {
      const k = Math.min(1, Math.max(0, (now - t0) / duration));
      setValue(Math.round(start + (to - start) * easeOut(k)));
      if (k < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, delay]);
  return value;
}

export function CountUp({ value, from = 0, duration, delay, suffix = '' }: { value: number; from?: number; duration?: number; delay?: number; suffix?: string }) {
  const v = useCountUp(value, { from, duration, delay });
  return (
    <span className="count-up">
      <span aria-hidden="true">{formatNumber(v)}{suffix}</span>
      <span className="sr-only">{formatNumber(value)}{suffix}</span>
    </span>
  );
}

const CONFETTI_COLORS = ['var(--answer-a)', 'var(--answer-b)', 'var(--answer-c)', 'var(--answer-d)', 'var(--cat-yellow)', 'var(--color-primary-light)'];

/** Pluie de confettis décorative (désactivée si l'utilisateur limite les animations). */
export function Confetti({ count = 60, duration = 3200 }: { count?: number; duration?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 900,
        dur: duration * (0.7 + Math.random() * 0.5),
        drift: (Math.random() - 0.5) * 160,
        spin: (Math.random() < 0.5 ? -1 : 1) * (360 + Math.random() * 540),
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        w: 6 + Math.random() * 8,
        round: Math.random() < 0.3,
      })),
    [count, duration],
  );
  if (reducedMotion()) return null;
  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p, i) => (
        <span
          key={i}
          style={{
            left: `${p.left}%`,
            width: p.w,
            height: p.round ? p.w : p.w * 0.45,
            borderRadius: p.round ? '50%' : 2,
            background: p.color,
            animationDelay: `${p.delay}ms`,
            animationDuration: `${p.dur}ms`,
            ['--drift' as string]: `${p.drift}px`,
            ['--spin' as string]: `${p.spin}deg`,
          }}
        />
      ))}
    </div>
  );
}
