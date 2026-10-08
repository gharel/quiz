import type { Quiz } from '../../lib/types';
import accessibilite from './accessibilite';
import cyber from './cyber';
import htmlCss from './html-css';
import ia from './ia';
import nocode from './nocode';
import scrum from './scrum';
import tableur from './tableur';
import webmarketing from './webmarketing';

export const BUILTIN_QUIZZES: Quiz[] = [cyber, ia, htmlCss, tableur, scrum, accessibilite, webmarketing, nocode];
