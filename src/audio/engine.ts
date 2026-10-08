import { getPrefs } from '../lib/prefs';

/** Contexte audio partagé, créé au premier geste de l'utilisateur. */
let ctx: AudioContext | null = null;
let master: GainNode;
export let musicBus: GainNode;
export let sfxBus: GainNode;
let noiseBuf: AudioBuffer;

export function audio(): AudioContext | null {
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 4;
    master.connect(comp).connect(ctx.destination);
    musicBus = ctx.createGain();
    musicBus.gain.value = 0.55;
    sfxBus = ctx.createGain();
    sfxBus.gain.value = 0.8;
    musicBus.connect(master);
    sfxBus.connect(master);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    applyMute();
  }
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

/** À appeler lors d'un clic : débloque l'audio sur mobile. */
export function unlockAudio() {
  audio();
}

export function applyMute() {
  if (!ctx) return;
  master.gain.setTargetAtTime(getPrefs().sound ? 0.9 : 0, ctx.currentTime, 0.03);
}

export const soundOn = () => getPrefs().sound;

const mtof = (m: number) => 440 * Math.pow(2, (m - 69) / 12);

interface ToneOpts {
  type?: OscillatorType;
  gain?: number;
  attack?: number;
  release?: number;
  bus?: AudioNode;
  cutoff?: number;
  slideTo?: number; // note MIDI finale (glissando)
  detune?: number;
}

/** Note synthétisée (enveloppe ADSR simplifiée). `note` en MIDI. */
export function tone(note: number, at: number, dur: number, o: ToneOpts = {}) {
  const c = audio();
  if (!c) return;
  const osc = c.createOscillator();
  const g = c.createGain();
  const f = c.createBiquadFilter();
  osc.type = o.type ?? 'triangle';
  osc.frequency.setValueAtTime(mtof(note), at);
  if (o.slideTo !== undefined) osc.frequency.exponentialRampToValueAtTime(mtof(o.slideTo), at + dur);
  if (o.detune) osc.detune.value = o.detune;
  f.type = 'lowpass';
  f.frequency.value = o.cutoff ?? 6000;
  const peak = o.gain ?? 0.2;
  const atk = o.attack ?? 0.008;
  const rel = o.release ?? 0.12;
  g.gain.setValueAtTime(0.0001, at);
  g.gain.exponentialRampToValueAtTime(peak, at + atk);
  g.gain.exponentialRampToValueAtTime(0.0001, at + dur + rel);
  osc.connect(f).connect(g).connect(o.bus ?? sfxBus);
  osc.start(at);
  osc.stop(at + dur + rel + 0.05);
}

/** Bruit filtré (charleston, caisse claire, souffle). */
export function noise(at: number, dur: number, o: { gain?: number; freq?: number; type?: BiquadFilterType; q?: number; bus?: AudioNode; sweepTo?: number } = {}) {
  const c = audio();
  if (!c) return;
  const src = c.createBufferSource();
  src.buffer = noiseBuf;
  const f = c.createBiquadFilter();
  f.type = o.type ?? 'highpass';
  f.frequency.setValueAtTime(o.freq ?? 7000, at);
  if (o.sweepTo) f.frequency.exponentialRampToValueAtTime(o.sweepTo, at + dur);
  f.Q.value = o.q ?? 0.7;
  const g = c.createGain();
  g.gain.setValueAtTime(o.gain ?? 0.15, at);
  g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  src.connect(f).connect(g).connect(o.bus ?? sfxBus);
  src.start(at, Math.random() * 0.5);
  src.stop(at + dur + 0.05);
}

/** Grosse caisse : sinus à hauteur descendante. */
export function kick(at: number, gain = 0.5, bus?: AudioNode) {
  const c = audio();
  if (!c) return;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.frequency.setValueAtTime(140, at);
  osc.frequency.exponentialRampToValueAtTime(42, at + 0.14);
  g.gain.setValueAtTime(gain, at);
  g.gain.exponentialRampToValueAtTime(0.0001, at + 0.28);
  osc.connect(g).connect(bus ?? musicBus);
  osc.start(at);
  osc.stop(at + 0.3);
}
