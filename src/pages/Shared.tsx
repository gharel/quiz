import { useEffect, useState } from 'react';
import { toast } from '../components/Toast';
import { href, navigate } from '../lib/router';
import { saveQuiz } from '../lib/store';
import { decodeShare } from '../lib/transfer';
import type { Quiz } from '../lib/types';
import { NotFound } from './NotFound';
import { SoloGame } from './Solo';

/** Quiz reçu par lien : jouable directement, et ajoutable à la bibliothèque. */
export default function Shared({ data }: { data: string }) {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    decodeShare(data).then(setQuiz).catch((e: Error) => setError(e.message));
  }, [data]);

  if (error) return <NotFound text={error} />;
  if (!quiz) return <div className="page container muted">Ouverture du quiz…</div>;

  return (
    <SoloGame
      quiz={quiz}
      onQuit={() => {
        const saved = saveQuiz(quiz);
        toast('Quiz ajouté à votre bibliothèque.');
        navigate(href.quiz(saved.id));
      }}
    />
  );
}
