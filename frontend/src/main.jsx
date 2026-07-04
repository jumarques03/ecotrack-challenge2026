import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePrincipal from './pages/DashboardPrincipal/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePrincipal/>
  </StrictMode>,
)
