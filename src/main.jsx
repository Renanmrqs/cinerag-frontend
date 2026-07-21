import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AuthProvider} from './context/AuthProvider.jsx'
import 'devicon'
import './styles/global.css'
import './styles/landing.css'
import './styles/auth.css'
import './styles/searchfilm.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  <AuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>

)
