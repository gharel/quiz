import { audio, kick, noise, sfxBus, tone } from './engine';

const now = () => audio()?.currentTime ?? 0;

export const sfx = {
  /** Un participant rejoint le salon. */
  join() {
    const t = now();
    tone(76, t, 0.06, { type: 'sine', gain: 0.18, slideTo: 83 });
    tone(88, t + 0.07, 0.08, { type: 'sine', gain: 0.12 });
  },
  /** Réponse enregistrée. */
  lock() {
    const t = now();
    tone(84, t, 0.04, { type: 'square', gain: 0.06, cutoff: 3000 });
    tone(91, t + 0.05, 0.05, { type: 'sine', gain: 0.1 });
  },
  /** Clic discret. */
  tap() {
    tone(96, now(), 0.02, { type: 'sine', gain: 0.06 });
  },
  /** Bonne réponse : arpège montant lumineux. */
  correct() {
    const t = now();
    [72, 76, 79, 84].forEach((n, i) => tone(n, t + i * 0.07, 0.12, { type: 'triangle', gain: 0.2 }));
    tone(88, t + 0.3, 0.35, { type: 'sine', gain: 0.12, release: 0.4 });
  },
  /** Mauvaise réponse : deux notes descendantes, douces. */
  wrong() {
    const t = now();
    tone(62, t, 0.16, { type: 'sawtooth', gain: 0.08, cutoff: 900 });
    tone(57, t + 0.18, 0.3, { type: 'sawtooth', gain: 0.08, cutoff: 700, release: 0.25 });
  },
  /** Tic de compte à rebours (dernières secondes). */
  tick(last = false) {
    const t = now();
    tone(last ? 89 : 84, t, 0.03, { type: 'square', gain: 0.07, cutoff: 2500 });
    noise(t, 0.03, { freq: 3000, type: 'bandpass', q: 4, gain: 0.08 });
  },
  /** Gong de fin de temps. */
  gong() {
    const t = now();
    [41, 48, 53, 57.3, 61.7].forEach((n, i) =>
      tone(n, t, 1.8 - i * 0.2, { type: 'sine', gain: 0.22 / (i + 1), attack: 0.005, release: 1.2, bus: sfxBus }),
    );
    noise(t, 0.6, { freq: 1200, type: 'bandpass', q: 0.8, gain: 0.06 });
  },
  /** Transition vers une nouvelle question. */
  whoosh() {
    noise(now(), 0.45, { type: 'bandpass', freq: 400, sweepTo: 5000, q: 1.2, gain: 0.12 });
  },
  /** Tous les participants ont répondu. */
  allAnswered() {
    const t = now();
    tone(79, t, 0.08, { type: 'triangle', gain: 0.15 });
    tone(86, t + 0.09, 0.2, { type: 'triangle', gain: 0.15 });
  },
  /** Roulement de tambour (podium). */
  drumroll(duration = 2) {
    const t = now();
    const hits = Math.floor(duration / 0.045);
    for (let i = 0; i < hits; i++) {
      const g = 0.03 + (i / hits) * 0.1;
      noise(t + i * 0.045, 0.06, { type: 'bandpass', freq: 1800, q: 0.9, gain: g });
    }
  },
  /** Révélation d'une marche du podium. */
  reveal(rank: 1 | 2 | 3) {
    const t = now();
    kick(t, 0.5, sfxBus);
    noise(t, rank === 1 ? 1.4 : 0.5, { freq: 5000, gain: rank === 1 ? 0.14 : 0.08 });
    const chord = rank === 1 ? [60, 64, 67, 72, 76] : rank === 2 ? [57, 60, 64, 69] : [55, 59, 62, 67];
    chord.forEach((n) => tone(n, t, rank === 1 ? 1.2 : 0.5, { type: 'sawtooth', gain: 0.06, cutoff: 2400, release: 0.5 }));
  },
  /** Fanfare finale. */
  fanfare() {
    const t = now();
    const seq: [number, number, number][] = [[67, 0, 0.12], [67, 0.14, 0.12], [67, 0.28, 0.12], [72, 0.42, 0.6]];
    seq.forEach(([n, d, l]) => {
      tone(n, t + d, l, { type: 'sawtooth', gain: 0.09, cutoff: 2600 });
      tone(n - 12, t + d, l, { type: 'square', gain: 0.04, cutoff: 1400 });
    });
    [60, 64, 67, 72].forEach((n) => tone(n, t + 0.42, 0.9, { type: 'triangle', gain: 0.08, release: 0.6 }));
  },
};
