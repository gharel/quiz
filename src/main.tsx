import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/tokens.css';
import './styles/base.css';
import './styles/controls.css';
import './styles/layout.css';
import './styles/cards.css';
import './styles/overlay.css';
import './styles/pages.css';
import './styles/game.css';
import './styles/game2.css';
import './styles/editor.css';
import './styles/results.css';
import './styles/host.css';
import './styles/host2.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
