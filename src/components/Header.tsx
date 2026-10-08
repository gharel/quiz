import { BarChart3, LibraryBig, LogIn, Monitor, Moon, Sun } from 'lucide-react';
import { href, type Route } from '../lib/router';
import { setPrefs, usePrefs, type ThemePref } from '../lib/prefs';

const NAV = [
  { key: 'library', label: 'Bibliothèque', to: href.library(), icon: LibraryBig, match: ['library', 'quiz', 'edit'] },
  { key: 'results', label: 'Résultats', to: href.results(), icon: BarChart3, match: ['results', 'result'] },
  { key: 'join', label: 'Rejoindre', to: href.join(), icon: LogIn, match: ['join'] },
];

const NEXT_THEME: Record<ThemePref, ThemePref> = { auto: 'light', light: 'dark', dark: 'auto' };
const THEME_LABEL: Record<ThemePref, string> = { auto: 'Thème : automatique', light: 'Thème : clair', dark: 'Thème : sombre' };

export function Logo() {
  return (
    <a href={href.library()} className="logo" aria-label="Skazy Formation — Quiz, accueil">
      <span className="logo-word">
        skazy <span className="logo-accent">formation</span>
      </span>
      <span className="logo-app">Quiz</span>
    </a>
  );
}

export function ThemeToggle() {
  const { theme } = usePrefs();
  const Icon = theme === 'auto' ? Monitor : theme === 'light' ? Sun : Moon;
  return (
    <button type="button" className="btn btn-icon" onClick={() => setPrefs({ theme: NEXT_THEME[theme] })} title={THEME_LABEL[theme]} aria-label={THEME_LABEL[theme]}>
      <Icon />
    </button>
  );
}

export function Header({ route }: { route: Route }) {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Logo />
          <nav className="nav-desktop" aria-label="Navigation principale">
            {NAV.map((n) => (
              <a key={n.key} href={n.to} className="nav-link" aria-current={n.match.includes(route.name) ? 'page' : undefined}>
                {n.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <nav className="nav-mobile" aria-label="Navigation principale">
        {NAV.map((n) => (
          <a key={n.key} href={n.to} className="nav-tab" aria-current={n.match.includes(route.name) ? 'page' : undefined}>
            <n.icon aria-hidden="true" />
            <span>{n.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
