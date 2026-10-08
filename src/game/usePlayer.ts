import { useCallback, useEffect, useRef, useState } from 'react';
import type { AnswerValue } from '../lib/types';
import { uid } from '../lib/util';
import { topics, type PublicState } from '../live/protocol';
import { brokerFromPin, openLink, type Link } from '../live/transport';

export type PlayerStatus = 'connecting' | 'online' | 'offline' | 'notfound' | 'error';

function playerId(): string {
  try {
    let id = localStorage.getItem('skq.pid');
    if (!id) {
      id = uid(12);
      localStorage.setItem('skq.pid', id);
    }
    return id;
  } catch {
    return uid(12);
  }
}

export function usePlayer(pin: string) {
  const pid = useRef(playerId()).current;
  const [status, setStatus] = useState<PlayerStatus>('connecting');
  const [state, setState] = useState<PublicState | null>(null);
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});
  const [deadline, setDeadline] = useState<number | null>(null);
  const link = useRef<Link | null>(null);
  const qSeen = useRef<{ qi: number; at: number } | null>(null);
  const gid = useRef('');
  const nameRef = useRef('');

  useEffect(() => {
    let alive = true;
    let notFoundTimer = 0;
    openLink(brokerFromPin(pin), (s) => alive && setStatus((prev) => (prev === 'notfound' ? prev : s === 'online' ? 'online' : s === 'offline' ? 'offline' : 'connecting')))
      .then((l) => {
        if (!alive) return l.close();
        link.current = l;
        setStatus('online');
        notFoundTimer = window.setTimeout(() => alive && setStatus((s) => (s === 'online' && !gid.current ? 'notfound' : s)), 7000);
        l.subscribe(topics(pin).state, (_t, data) => {
          const st = data as PublicState;
          if (!st || st.v !== 1) return;
          if (st.gid !== gid.current) {
            gid.current = st.gid;
            setAnswers({});
          }
          setStatus((s) => (s === 'notfound' ? 'online' : s));
          if (st.phase === 'question') {
            if (!qSeen.current || qSeen.current.qi !== st.qi) qSeen.current = { qi: st.qi, at: Date.now() };
            setDeadline(Date.now() + (st.endsIn ?? 0));
          } else setDeadline(null);
          setState(st);
        });
      })
      .catch(() => alive && setStatus('error'));
    return () => {
      alive = false;
      window.clearTimeout(notFoundTimer);
      link.current?.close();
      link.current = null;
    };
  }, [pin]);

  const joined = !!state && !!state.roster[pid];
  const kicked = !!state?.kicked?.includes(pid);

  // Renvoie l'inscription tant que l'animateur ne l'a pas prise en compte
  useEffect(() => {
    if (!nameRef.current || joined || kicked || !link.current || status !== 'online') return;
    const send = () => link.current?.publish(topics(pin).inbox, { t: 'join', pid, name: nameRef.current });
    send();
    const id = window.setInterval(send, 2500);
    return () => window.clearInterval(id);
  }, [name, joined, kicked, status, pin, pid]);

  const join = useCallback((n: string) => {
    nameRef.current = n.trim().slice(0, 20);
    setName(nameRef.current);
  }, []);

  const answer = useCallback((value: AnswerValue) => {
    if (!state || state.phase !== 'question' || answers[state.qi] !== undefined) return;
    const ms = qSeen.current?.qi === state.qi ? Date.now() - qSeen.current.at : 0;
    setAnswers((a) => ({ ...a, [state.qi]: value }));
    link.current?.publish(topics(pin).inbox, { t: 'answer', pid, qi: state.qi, value, ms });
  }, [state, answers, pin, pid]);

  const leave = useCallback(() => {
    link.current?.publish(topics(pin).inbox, { t: 'leave', pid });
  }, [pin, pid]);

  return { pid, status, state, name, joined, kicked, answers, deadline, join, answer, leave };
}
