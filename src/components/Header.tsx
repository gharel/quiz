import { BarChart3, LibraryBig, LogIn, Monitor, Moon, Sun } from 'lucide-react';
import { href, type Route } from '../lib/router';
import { setPrefs, usePrefs, type ThemePref } from '../lib/prefs';

const NAV = [
  { key: 'join', label: 'Rejoindre', to: href.join(), icon: LogIn, match: ['join'] },
  { key: 'library', label: 'Bibliothèque', to: href.library(), icon: LibraryBig, match: ['library', 'quiz', 'edit'] },
  { key: 'results', label: 'Résultats', to: href.results(), icon: BarChart3, match: ['results', 'result'] },
];

const NEXT_THEME: Record<ThemePref, ThemePref> = { auto: 'light', light: 'dark', dark: 'auto' };
const THEME_LABEL: Record<ThemePref, string> = { auto: 'Thème : automatique', light: 'Thème : clair', dark: 'Thème : sombre' };

/** Logo officiel Skazy Formation (SVG), version claire ou sombre selon le thème. */
export function BrandLogo({ height = 36 }: { height?: number }) {
  const w = Math.round((height * 218) / 72);
  return (
    <>
      <img className="brand-logo brand-logo-light" src={`${import.meta.env.BASE_URL}img/logo-skazy-formation.svg`} width={w} height={height} alt="Skazy Formation" />
      <img className="brand-logo brand-logo-dark" src={`${import.meta.env.BASE_URL}img/logo-skazy-formation-blanc.svg`} width={w} height={height} alt="Skazy Formation" />
    </>
  );
}

/** Signature commune aux outils Skazy Formation : logo, filet, pastille (le favicon), nom de l'outil. */
export function Logo() {
  return (
    <a href={href.join()} className="logo" aria-label="Skazy Formation — Quiz, accueil">
      <BrandLogo />
      <span className="logo-sep" aria-hidden="true" />
      <span className="logo-app">
        <img src={`${import.meta.env.BASE_URL}favicon.svg`} width={28} height={28} alt="" />
        <span className="logo-app-name">Quiz</span>
      </span>
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
