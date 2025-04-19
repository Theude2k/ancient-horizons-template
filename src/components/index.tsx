import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Board from './components/Board';

const root = document.getElementById('root');

if (root) {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(
    <React.StrictMode>
      <HashRouter>
        <Board />
      </HashRouter>
    </React.StrictMode>
  );
}
