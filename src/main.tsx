import React from 'react';
import ReactDOM from 'react-dom/client';

import {TikTakTok} from './TikTakTok.tsx';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TikTakTok />
  </React.StrictMode>,
)
