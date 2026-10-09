import { BarChart3, Contrast, LibraryBig, LogIn, Moon, Sun } from 'lucide-react';
import { href, type Route } from '../lib/router';
import { setPrefs, usePrefs } from '../lib/prefs';
import { NEXT_THEME, themeLabel } from '../lib/theme';

const NAV = [
  { key: 'join', label: 'Rejoindre', to: href.join(), icon: LogIn, match: ['join'] },
  { key: 'library', label: 'Bibliothèque', to: href.library(), icon: LibraryBig, match: ['library', 'quiz', 'edit'] },
  { key: 'results', label: 'Résultats', to: href.results(), icon: BarChart3, match: ['results', 'result'] },
];

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

/** Site institutionnel, ouvert dans un nouvel onglet depuis le logo. */
export const SITE_SKAZY = 'https://formation.skazy.nc';
/** Page d'accueil commune des outils Skazy Formation (lien « Les outils »). */
export const PAGE_OUTILS = 'https://gharel.github.io/home/';

/** Identité de l'outil : pastille (le favicon) et nom, en un seul lien vers l'accueil du Quiz. */
export function Logo({ current = false }: { current?: boolean }) {
  return (
    <a href={href.join()} className="logo" aria-label="Quiz, accueil" aria-current={current ? 'page' : undefined}>
      <img src={`${import.meta.env.BASE_URL}favicon.svg`} width={28} height={28} alt="" />
      <span className="logo-app-name">Quiz</span>
    </a>
  );
}

/** Lien « Les outils » (la roue) vers la page d'accueil de tous les outils, dans le même onglet. */
export function ToolsLink() {
  return (
    <a href={PAGE_OUTILS} className="tools-link" title="Tous les outils Skazy Formation">
      <img src={`${import.meta.env.BASE_URL}img/les-outils.svg`} width={26} height={26} alt="" />
      <span className="tools-link-text">Les outils</span>
    </a>
  );
}

/** Logo Skazy Formation, dernier élément du bandeau : mène au site, dans un nouvel onglet. */
export function BrandLink() {
  return (
    <a href={SITE_SKAZY} className="brand-link" target="_blank" rel="noopener" aria-label="Site de Skazy Formation (nouvel onglet)">
      <BrandLogo />
    </a>
  );
}

/**
 * Bouton de thème commun aux outils : système, clair, sombre, puis de nouveau système.
 * L'icône montre le thème en cours : demi-cercle (celui du système), soleil (clair), lune (sombre).
 */
export function ThemeToggle() {
  const { theme } = usePrefs();
  const Icon = theme === 'auto' ? Contrast : theme === 'light' ? Sun : Moon;
  const label = themeLabel(theme);
  return (
    <button type="button" className="btn btn-icon" onClick={() => setPrefs({ theme: NEXT_THEME[theme] })} title={label} aria-label={label}>
      <Icon />
    </button>
  );
}

/**
 * Bandeau commun aux outils Skazy Formation : identité de l'outil à gauche, navigation au milieu,
 * puis thème, « Les outils », filet et logo Skazy Formation à droite.
 * L'en-tête sert aussi de cible au bouton « Remonter en haut » (tabindex -1).
 */
export function Header({ route }: { route: Route }) {
  return (
    <>
      <header className="header" id="haut-de-page" tabIndex={-1}>
        <div className="container header-inner">
          <Logo current={route.name === 'join' && !route.code} />
          <nav className="nav-desktop" aria-label="Navigation principale">
            {NAV.map((n) => (
              <a key={n.key} href={n.to} className="nav-link" aria-current={n.match.includes(route.name) ? 'page' : undefined}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="header-end">
            <ThemeToggle />
            <ToolsLink />
            <span className="header-sep" aria-hidden="true" />
            <BrandLink />
          </div>
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
