import { NotebookPen } from 'lucide-react';
import { useState } from 'react';
import { saveSession } from '../../lib/store';
import type { Session, SessionReport } from '../../lib/types';

const FIELDS: { key: keyof SessionReport; label: string; placeholder: string }[] = [
  { key: 'training', label: 'Formation ou groupe', placeholder: 'Ex. : IA générative, CCI, groupe du 24 novembre' },
  { key: 'trainer', label: 'Formateur ou formatrice', placeholder: 'Nom de l’animateur' },
];

/** Champs du bilan, enregistrés avec la partie et repris dans les exports CSV et PDF. */
export function ReportInfo({ session: s }: { session: Session }) {
  const [report, setReport] = useState<SessionReport>(s.report ?? {});
  // Ouvert tant que rien n'est saisi ; reste ouvert pendant la saisie (l'enregistrement ne le referme pas).
  const [open, setOpen] = useState(!s.report);
  const set = (key: keyof SessionReport, value: string) => setReport((r) => ({ ...r, [key]: value }));
  const commit = () => {
    const clean: SessionReport = {};
    (Object.keys(report) as (keyof SessionReport)[]).forEach((k) => {
      const v = report[k]?.trim();
      if (v) clean[k] = v;
    });
    if (JSON.stringify(clean) !== JSON.stringify(s.report ?? {})) saveSession({ ...s, report: clean });
  };

  return (
    <details className="panel report-info" open={open} onToggle={(e) => setOpen(e.currentTarget.open)}>
      <summary><NotebookPen aria-hidden="true" />Informations pour le bilan de formation</summary>
      <p className="muted small">Facultatif : ces informations apparaissent en tête des exports CSV et PDF.</p>
      <div className="report-grid">
        {FIELDS.map((f) => (
          <label key={f.key} className="field">
            <span className="field-label">{f.label}</span>
            <input className="input" value={report[f.key] ?? ''} placeholder={f.placeholder} maxLength={120}
              onChange={(e) => set(f.key, e.target.value)} onBlur={commit} />
          </label>
        ))}
        <label className="field report-note">
          <span className="field-label">Observations</span>
          <textarea className="textarea" value={report.note ?? ''} maxLength={1200} placeholder="Points à retenir, suites à donner…"
            onChange={(e) => set('note', e.target.value)} onBlur={commit} />
        </label>
      </div>
    </details>
  );
}
