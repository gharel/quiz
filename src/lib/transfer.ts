import { getCategory, saveQuiz } from './store';
import type { Question, Quiz } from './types';
import { downloadFile, slugify, uid } from './util';

const TYPES = ['single', 'multiple', 'truefalse', 'text', 'slider', 'order'];

/** Vérifie et nettoie un quiz venant d'un fichier ou d'un lien. */
export function sanitizeQuiz(raw: unknown): Quiz {
  const r = raw as Partial<Quiz> & { quiz?: Quiz };
  const src = r?.quiz ?? r;
  if (!src || typeof src.title !== 'string' || !Array.isArray(src.questions)) {
    throw new Error('Ce fichier n’est pas un quiz valide.');
  }
  const questions = src.questions.filter((q: Question) => q && TYPES.includes(q.type) && typeof q.text === 'string');
  if (questions.length === 0) throw new Error('Ce quiz ne contient aucune question valide.');
  const now = Date.now();
  return {
    id: uid(),
    title: src.title.slice(0, 120),
    description: typeof src.description === 'string' ? src.description.slice(0, 300) : '',
    category: getCategory(String(src.category ?? '')).id,
    questions: questions.map((q) => ({ ...q, id: uid(8), time: Number(q.time) || 20, points: ([0, 1, 2] as const).includes(q.points) ? q.points : 1 })),
    createdAt: now,
    updatedAt: now,
  };
}

export async function importQuizFile(file: File): Promise<Quiz> {
  let data: unknown;
  try {
    data = JSON.parse(await file.text());
  } catch {
    throw new Error('Impossible de lire ce fichier : il doit s’agir d’un export JSON de quiz.');
  }
  return saveQuiz(sanitizeQuiz(data));
}

export function exportQuiz(quiz: Quiz) {
  const { builtin: _b, ...data } = quiz;
  void _b;
  downloadFile(`${slugify(quiz.title)}.json`, JSON.stringify({ format: 'skazy-quiz', version: 1, quiz: data }, null, 2), 'application/json');
}

/* ---------- Lien de partage (quiz compressé dans l'URL) ---------- */
function toBase64Url(bytes: Uint8Array): string {
  let s = '';
  bytes.forEach((b) => (s += String.fromCharCode(b)));
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(s: string): Uint8Array {
  const b = atob(s.replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from(b, (c) => c.charCodeAt(0));
}

async function pipe(bytes: Uint8Array, stream: CompressionStream | DecompressionStream): Promise<Uint8Array> {
  const out = new Blob([bytes as BlobPart]).stream().pipeThrough(stream);
  return new Uint8Array(await new Response(out).arrayBuffer());
}

/** Encode un quiz pour un lien (les images importées sont retirées). */
export async function encodeShare(quiz: Quiz): Promise<{ data: string; droppedImages: boolean }> {
  let droppedImages = false;
  const questions = quiz.questions.map((q) => {
    if (q.image?.startsWith('data:')) {
      droppedImages = true;
      return { ...q, image: undefined };
    }
    return q;
  });
  const json = JSON.stringify({ title: quiz.title, description: quiz.description, category: quiz.category, questions });
  const data = toBase64Url(await pipe(new TextEncoder().encode(json), new CompressionStream('deflate-raw')));
  return { data, droppedImages };
}

export async function decodeShare(data: string): Promise<Quiz> {
  try {
    const bytes = await pipe(fromBase64Url(data), new DecompressionStream('deflate-raw'));
    return sanitizeQuiz(JSON.parse(new TextDecoder().decode(bytes)));
  } catch {
    throw new Error('Ce lien de partage est incomplet ou abîmé.');
  }
}
