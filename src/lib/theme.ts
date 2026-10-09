/**
 * Thème commun aux outils Skazy Formation (logique pure, sans accès au navigateur).
 * Tous les outils sont publiés sur la même origine (gharel.github.io) : le choix fait dans l'un
 * vaut pour tous, via la même clé du localStorage.
 */

/** Préférence de thème : « auto » suit le thème du système. */
export type ThemePref = 'auto' | 'light' | 'dark';

/** Clé partagée par tous les outils. Valeur JSON 'light' ou 'dark' ; clé absente = thème du système. */
export const THEME_KEY = 'skazy-outils:theme';

/** Lit la valeur enregistrée : tout ce qui n'est pas 'light' ou 'dark' vaut thème du système. */
export function parseTheme(raw: string | null): ThemePref {
  if (raw === null) return 'auto';
  try {
    const value: unknown = JSON.parse(raw);
    return value === 'light' || value === 'dark' ? value : 'auto';
  } catch {
    return 'auto';
  }
}

/** Valeur à enregistrer ; null : supprimer la clé (thème du système). */
export function serializeTheme(theme: ThemePref): string | null {
  return theme === 'auto' ? null : JSON.stringify(theme);
}

/** Cycle du bouton : système, clair, sombre, puis de nouveau système. */
export const NEXT_THEME: Record<ThemePref, ThemePref> = { auto: 'light', light: 'dark', dark: 'auto' };

/** Nom du thème en cours (espace insécable avant les deux-points). */
const THEME_NAME: Record<ThemePref, string> = {
  auto: 'Thème : celui du système',
  light: 'Thème : clair',
  dark: 'Thème : sombre',
};

/** Nom accessible et infobulle du bouton : le thème en cours, puis l'action. */
export const themeLabel = (theme: ThemePref) => `${THEME_NAME[theme]}. Changer de thème`;

/** Événement « storage » concernant le thème (clé null : stockage entièrement vidé). */
export const isThemeStorageKey = (key: string | null) => key === null || key === THEME_KEY;
