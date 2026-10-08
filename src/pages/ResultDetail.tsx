import { ArrowLeft, Calendar, Download, Radio, Trash2, User, Users } from 'lucide-react';
import { useState } from 'react';
import { CategoryBadge, catVars } from '../components/CategoryBadge';
import { Confirm } from '../components/Modal';
import { PlayerTable } from '../components/results/PlayerTable';
import { QuestionStats } from '../components/results/QuestionStats';
import { toast } from '../components/Toast';
import { href, navigate } from '../lib/router';
import { sessionCsv, sessionStats } from '../lib/stats';
import { deleteSession, getCategory, getSession, useStore } from '../lib/store';
import { downloadFile, formatDateTime, formatDuration, plural, slugify } from '../lib/util';
import { NotFound } from './NotFound';

export default function ResultDetail({ id }: { id: string }) {
  const state = useStore();
  const [tab, setTab] = useState<'players' | 'questions'>('players');
  const [confirm, setConfirm] = useState(false);
  const s = getSession(id);
  if (!s) return <NotFound text="Ce résultat n’existe pas ou a été supprimé." />;
  const cat = getCategory(s.quiz.category, state);
  const st = sessionStats(s);

  return (
    <div className="page container">
      <a href={href.results()} className="back-link"><ArrowLeft aria-hidden="true" />Résultats</a>
      <section className="detail-hero cat" style={catVars(cat.color)}>
        <div className="card-bar" />
        <div className="detail-hero-body">
          <CategoryBadge category={cat} />
          <h1>{s.quiz.title}</h1>
          <div className="detail-meta">
            <span>{s.mode === 'live' ? <Radio aria-hidden="true" /> : <User aria-hidden="true" />}{s.mode === 'live' ? 'Partie en direct' : 'Partie en solo'}</span>
            <span><Calendar aria-hidden="true" />{formatDateTime(s.startedAt)}</span>
            <span><Users aria-hidden="true" />{plural(s.players.length, 'participant', 'participants')}</span>
          </div>
          <div className="kpis">
            <div><strong>{st.successRate} %</strong><span>réussite moyenne</span></div>
            <div><strong>{s.quiz.questions.length}</strong><span>questions</span></div>
            <div><strong>{formatDuration(st.durationMs / 1000)}</strong><span>durée</span></div>
          </div>
          <div className="row">
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => downloadFile(`resultats-${slugify(s.quiz.title)}.csv`, sessionCsv(s), 'text/csv;charset=utf-8')}>
              <Download aria-hidden="true" />Exporter (CSV)
            </button>
            <button type="button" className="btn btn-ghost btn-sm danger-text" onClick={() => setConfirm(true)}><Trash2 aria-hidden="true" />Supprimer</button>
          </div>
        </div>
      </section>

      <div className="tabs" role="tablist" aria-label="Détail des résultats">
        <button type="button" role="tab" aria-selected={tab === 'players'} className="tab" onClick={() => setTab('players')}>Participants</button>
        <button type="button" role="tab" aria-selected={tab === 'questions'} className="tab" onClick={() => setTab('questions')}>Questions</button>
      </div>
      {tab === 'players' ? <PlayerTable session={s} /> : <QuestionStats session={s} />}

      {confirm && (
        <Confirm
          title="Supprimer ce résultat ?"
          message="Le classement et les réponses de cette partie seront définitivement effacés de cet appareil."
          confirmLabel="Supprimer"
          danger
          onConfirm={() => { deleteSession(s.id); toast('Résultat supprimé.'); navigate(href.results()); }}
          onClose={() => setConfirm(false)}
        />
      )}
    </div>
  );
}
