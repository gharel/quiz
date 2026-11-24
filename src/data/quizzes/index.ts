import type { Quiz } from '../../lib/types';
import accessibilite from './accessibilite';
import claude from './claude';
import copilot from './copilot';
import cyber from './cyber';
import htmlCss from './html-css';
import ia from './ia';
import imported from './importes';
import nocode from './nocode';
import scrum from './scrum';
import tableur from './tableur';
import webmarketing from './webmarketing';

export const BUILTIN_QUIZZES: Quiz[] = [cyber, ia, claude, copilot, htmlCss, tableur, scrum, accessibilite, webmarketing, nocode, ...imported];
