import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'devicon'
import './styles/global.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/features.css'
import './styles/built.css'
import './styles/imageslanding.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
