import { ArrowLeft, Calendar, FileSpreadsheet, FileText, Radio, Trash2, User, Users } from 'lucide-react';
import { useState } from 'react';
import { CategoryBadge, catVars } from '../components/CategoryBadge';
import { Confirm } from '../components/Modal';
import { PlayerTable } from '../components/results/PlayerTable';
import { PrintReport } from '../components/results/PrintReport';
import { QuestionStats } from '../components/results/QuestionStats';
import { ReportInfo } from '../components/results/ReportInfo';
import { Summary } from '../components/results/Summary';
import { toast } from '../components/Toast';
import { href, navigate } from '../lib/router';
import { sessionCsv, sessionStats } from '../lib/stats';
import { deleteSession, getCategory, getSession, useStore } from '../lib/store';
import type { Session } from '../lib/types';
import { downloadFile, formatDateTime, formatDuration, plural, slugify } from '../lib/util';
import { NotFound } from './NotFound';

type Tab = 'summary' | 'players' | 'questions';
const TABS: [Tab, string][] = [['summary', 'Synthèse'], ['players', 'Participants'], ['questions', 'Questions']];

const fileBase = (s: Session) => `bilan-${slugify(s.quiz.title)}-${new Date(s.startedAt).toLocaleDateString('fr-CA')}`;

/** Ouvre l'impression : le nom du document sert de nom de fichier PDF. */
function printReport(s: Session) {
  const title = document.title;
  document.title = fileBase(s);
  setTimeout(() => {
    window.print();
    document.title = title;
  }, 50);
}

export default function ResultDetail({ id }: { id: string }) {
  const state = useStore();
  const [tab, setTab] = useState<Tab>('summary');
  const [confirm, setConfirm] = useState(false);
  const s = getSession(id);
  if (!s) return <NotFound text="Ce résultat n’existe pas ou a été supprimé." />;
  const cat = getCategory(s.quiz.category, state);
  const st = sessionStats(s);
  // Relit la partie au clic : les champs du bilan viennent peut-être d'être enregistrés.
  const exportCsv = () => {
    const fresh = getSession(id) ?? s;
    downloadFile(`${fileBase(fresh)}.csv`, sessionCsv(fresh, cat.label), 'text/csv;charset=utf-8');
  };

  return (
    <div className="page container">
      <a href={href.results()} className="back-link"><ArrowLeft aria-hidden="true" />Résultats</a>
      <section className="detail-hero cat" style={catVars(cat.color)}>
        <div className="card-bar" />
        <div className="detail-hero-body">
          <div className="row"><CategoryBadge category={cat} /></div>
          <h1>{s.quiz.title}</h1>
          <div className="detail-meta">
            <span>{s.mode === 'live' ? <Radio aria-hidden="true" /> : <User aria-hidden="true" />}{s.mode === 'live' ? 'Partie en direct' : 'Partie en solo'}</span>
            <span><Calendar aria-hidden="true" />{formatDateTime(s.startedAt)}</span>
            <span><Users aria-hidden="true" />{plural(s.players.length, 'participant', 'participants')}</span>
          </div>
          <div className="kpis">
            <div><strong>{st.successRate} %</strong><span>réussite moyenne</span></div>
            <div><strong>{s.players.length}</strong><span>{s.players.length > 1 ? 'participants' : 'participant'}</span></div>
            <div><strong>{s.quiz.questions.length}</strong><span>questions</span></div>
            <div><strong>{st.answerRate} %</strong><span>taux de réponse</span></div>
            <div><strong>{formatDuration(st.durationMs / 1000)}</strong><span>durée</span></div>
          </div>
          <div className="row">
            <button type="button" className="btn btn-primary btn-sm" onClick={() => printReport(s)}>
              <FileText aria-hidden="true" />Bilan PDF
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={exportCsv}>
              <FileSpreadsheet aria-hidden="true" />Export CSV
            </button>
            <button type="button" className="btn btn-ghost btn-sm danger-text" onClick={() => setConfirm(true)}><Trash2 aria-hidden="true" />Supprimer</button>
          </div>
        </div>
      </section>

      <ReportInfo key={s.id} session={s} />

      <div className="tabs" role="tablist" aria-label="Détail des résultats">
        {TABS.map(([v, label]) => (
          <button key={v} type="button" role="tab" aria-selected={tab === v} className="tab" onClick={() => setTab(v)}>{label}</button>
        ))}
      </div>
      {tab === 'summary' && <Summary session={s} />}
      {tab === 'players' && <PlayerTable session={s} />}
      {tab === 'questions' && <QuestionStats session={s} />}

      <PrintReport session={s} category={cat} />

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
