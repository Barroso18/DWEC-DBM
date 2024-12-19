import { useState } from 'react'
import './App.css'
import Superior from './componentes/Superior'
import Central from './componentes/Central'
import Inferior from './componentes/Inferior'

function App() {
  
  const [servicios, setServicios] = useState([]);

  return (
    <>
   <Superior servicios={servicios}/>
   <Central servicios={servicios} setServicios={setServicios}/>
   <Inferior/>

   </>

  )
}

export default App
