import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import Board from './components/Board'

const root = document.getElementById('root')!

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <HashRouter>
      <Board />
    </HashRouter>
  </React.StrictMode>,
)

