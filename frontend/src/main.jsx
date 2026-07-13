import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DashboardVegetacao from './pages/DashboardIndicadoresAmbientais/index'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashboardVegetacao />
  </StrictMode>,
)