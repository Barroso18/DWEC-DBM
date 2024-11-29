import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Menu from './componentes/menu';
import Cuerpo from './componentes/cuerpo';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
    <App />
    <Cuerpo />
  </StrictMode>,
)
