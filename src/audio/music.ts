import { audio, kick, musicBus, noise, tone } from './engine';

export type Track = 'lobby' | 'question';

interface Pattern {
  bpm: number;
  chords: number[][]; // une mesure par accord (notes MIDI)
  step: (s: number, bar: number, chord: number[], t: number, bus: GainNode, len: number) => void;
}

const patterns: Record<Track, Pattern> = {
  // Salon : groove léger et lumineux (Do – La m – Fa – Sol)
  lobby: {
    bpm: 112,
    chords: [[60, 64, 67, 71], [57, 60, 64, 67], [53, 57, 60, 64], [55, 59, 62, 65]],
    step(s, _bar, chord, t, bus, len) {
      const root = chord[0] - 24;
      if (s === 0 || s === 8 || s === 11) kick(t, 0.32, bus);
      if (s === 4 || s === 12) noise(t, 0.12, { type: 'bandpass', freq: 1900, q: 0.8, gain: 0.07, bus });
      if (s % 2 === 0) noise(t, 0.035, { freq: 8000, gain: s % 4 === 2 ? 0.035 : 0.02, bus });
      if ([0, 3, 8, 10, 14].includes(s)) tone(s === 10 ? root + 12 : root, t, len * 1.6, { type: 'triangle', gain: 0.2, cutoff: 900, bus });
      if (s === 0) chord.forEach((n) => tone(n, t, len * 14, { type: 'sine', gain: 0.035, attack: 0.08, release: 0.4, bus }));
      if (s % 2 === 0) {
        const arp = [0, 1, 2, 3, 2, 1, 3, 2][s / 2];
        tone(chord[arp] + 12, t, len * 0.9, { type: 'triangle', gain: 0.055, cutoff: 3200, bus });
      }
    },
  },
  // Question : ostinato en mineur, plus tendu (La m – Fa – Do – Mi)
  question: {
    bpm: 126,
    chords: [[57, 60, 64], [53, 57, 60], [48, 52, 55], [52, 56, 59]],
    step(s, bar, chord, t, bus, len) {
      const root = chord[0] - 24;
      if (s % 4 === 0) kick(t, 0.28, bus);
      noise(t, 0.03, { freq: 9000, gain: s % 2 ? 0.018 : 0.03, bus });
      if (s % 2 === 0) tone(root, t, len * 0.8, { type: 'sawtooth', gain: 0.09, cutoff: 500, bus });
      const order = [0, 1, 2, 1];
      tone(chord[order[s % 4]] + 12 + (s >= 8 && bar % 2 ? 12 : 0), t, len * 0.7, { type: 'square', gain: 0.03, cutoff: 2200, bus });
      if (s === 12) noise(t, 0.1, { type: 'bandpass', freq: 2200, q: 0.7, gain: 0.05, bus });
    },
  },
};

let current: Track | null = null;
let gain: GainNode | null = null;
let timer = 0;
let step = 0;
let nextTime = 0;

export function playMusic(track: Track) {
  const c = audio();
  if (!c || current === track) return;
  stopMusic(0.25);
  current = track;
  const p = patterns[track];
  const g = c.createGain();
  g.gain.setValueAtTime(0.0001, c.currentTime);
  g.gain.exponentialRampToValueAtTime(1, c.currentTime + 0.6);
  g.connect(musicBus);
  gain = g;
  step = 0;
  nextTime = c.currentTime + 0.08;
  const len = 60 / p.bpm / 4;
  timer = window.setInterval(() => {
    while (nextTime < c.currentTime + 0.15) {
      const bar = Math.floor(step / 16);
      p.step(step % 16, bar, p.chords[bar % p.chords.length], nextTime, g, len);
      nextTime += len;
      step++;
    }
  }, 25);
}

export function stopMusic(fade = 0.5) {
  const c = audio();
  window.clearInterval(timer);
  timer = 0;
  current = null;
  if (c && gain) {
    const g = gain;
    g.gain.cancelScheduledValues(c.currentTime);
    g.gain.setTargetAtTime(0.0001, c.currentTime, fade / 4);
    setTimeout(() => g.disconnect(), fade * 1000 + 300);
  }
  gain = null;
}
