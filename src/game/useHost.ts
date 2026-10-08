import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { playMusic, stopMusic } from '../audio/music';
import { sfx } from '../audio/sfx';
import { unlockAudio } from '../audio/engine';
import { saveSession } from '../lib/store';
import type { Quiz } from '../lib/types';
import { topics, type PlayerMessage } from '../live/protocol';
import { BROKERS, makePin, openLink, type Link } from '../live/transport';
import { HostEngine, type HostOptions } from './hostEngine';

export type HostStatus = 'connecting' | 'online' | 'offline' | 'error';

export function useHost(quiz: Quiz, opts: HostOptions) {
  const engine = useRef<HostEngine>(null as unknown as HostEngine);
  if (!engine.current) engine.current = new HostEngine(quiz, opts);
  const [, render] = useReducer((x: number) => x + 1, 0);
  const [status, setStatus] = useState<HostStatus>('connecting');
  const [pin, setPin] = useState('');
  const [broker, setBroker] = useState(0);
  const link = useRef<Link | null>(null);
  const pinRef = useRef('');
  const pending = useRef(0);

  /** Diffuse l'état (regroupe les envois rapprochés). */
  const publish = useCallback((immediate = false) => {
    const send = () => {
      pending.current = 0;
      if (link.current && pinRef.current) link.current.publish(topics(pinRef.current).state, engine.current.snapshot(), true);
    };
    if (immediate) {
      window.clearTimeout(pending.current);
      send();
    } else if (!pending.current) pending.current = window.setTimeout(send, 150);
  }, []);

  const connect = useCallback(async (from: number) => {
    setStatus('connecting');
    link.current?.close();
    link.current = null;
    for (let k = 0; k < BROKERS.length; k++) {
      const i = (from + k) % BROKERS.length;
      try {
        const l = await openLink(i, (s) => setStatus(s === 'online' ? 'online' : s === 'offline' ? 'offline' : 'connecting'));
        const p = makePin(i);
        pinRef.current = p;
        link.current = l;
        l.subscribe(topics(p).inbox, (_t, data) => {
          const ev = engine.current.receive(data as PlayerMessage);
          if (ev === 'joined') sfx.join();
          if (ev) {
            publish();
            render();
          }
        });
        setBroker(i);
        setPin(p);
        setStatus('online');
        publish(true);
        if (engine.current.phase === 'lobby') playMusic('lobby');
        return;
      } catch {
        /* relais suivant */
      }
    }
    setStatus('error');
  }, [publish]);

  useEffect(() => {
    void connect(0);
    return () => {
      stopMusic(0.2);
      const l = link.current;
      if (l && pinRef.current) {
        const t = topics(pinRef.current);
        engine.current.phase = 'closed';
        l.publish(t.state, engine.current.snapshot(), false);
        l.clearRetained(t.state);
        setTimeout(() => l.close(), 500);
      }
    };
  }, [connect]);

  // Horloge de la partie : fin de l'introduction, fin du temps, tout le monde a répondu
  useEffect(() => {
    const id = window.setInterval(() => {
      const e = engine.current;
      const now = Date.now();
      if (e.phase === 'intro' && now >= e.introEndsAt) {
        e.startQuestion(now);
        playMusic('question');
        publish(true);
        render();
      } else if (e.phase === 'question' && (now >= e.deadline || e.allAnswered())) {
        const timeUp = now >= e.deadline;
        e.reveal();
        stopMusic(0.15);
        if (timeUp) sfx.gong();
        else sfx.allAnswered();
        saveSession(e.toSession());
        publish(true);
        render();
      }
    }, 200);
    return () => window.clearInterval(id);
  }, [publish]);

  const start = useCallback(() => {
    unlockAudio();
    stopMusic(0.3);
    sfx.whoosh();
    engine.current.startIntro(0);
    publish(true);
    render();
  }, [publish]);

  const next = useCallback(() => {
    const e = engine.current;
    if (e.phase === 'reveal' && !e.isLast) e.phase = 'scoreboard';
    else if (e.phase === 'reveal' && e.isLast) {
      e.phase = 'podium';
      saveSession(e.toSession());
    } else if (e.phase === 'scoreboard') {
      sfx.whoosh();
      e.startIntro(e.qi + 1);
    } else return;
    publish(true);
    render();
  }, [publish]);

  const skip = useCallback(() => {
    if (engine.current.phase === 'question') engine.current.deadline = Date.now();
  }, []);

  const kick = useCallback((pid: string) => {
    engine.current.kick(pid);
    publish();
    render();
  }, [publish]);

  const lobbyMusic = useCallback(() => {
    unlockAudio();
    if (engine.current.phase === 'lobby') playMusic('lobby');
  }, []);

  return { engine: engine.current, status, pin, broker, start, next, skip, kick, lobbyMusic, changeRelay: () => void connect(broker + 1), retry: () => void connect(0) };
}
