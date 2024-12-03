import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioBase from './componentes/FormularioBase.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormmularioBase/>
    </>
  )
}

export default App
