import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import './css/main.css'
import './css/buttons.css'
import './css/media-query.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
