import React from 'react';
import ReactDOM from 'react-dom/client'; // Note o '/client'
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration.js';

// No React 18/19, usamos o createRoot em vez do .render direto
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.register();