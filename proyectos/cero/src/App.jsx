import Li from './componentes/Li'
import './App.css'



const App=() => {
  //javascript
  const jugadores = [
    {nombre:"Llull",posicion:"escolta"},
    {nombre:"Campazzo",posicion:"base"},
    {nombre:"Tavares",posicion:"pivot"}
  ];
  const totalJugadores = jugadores.length;


  return (
    //Renderizamos html
    //dentro de {} podemos meter codigo JS
    <>
   <h1>Ivan Turro</h1>
   
   <h2>Jugadores Real Madrid Baloncesto : {totalJugadores}</h2>

    <ul>
      
      {
      //utilizar un map de JS 
      //Si usamos el {} despes del map tendriamos que poner return 
      //El forEach no devuelve nada
      jugadores.map((jugador,index)=>{
        //return <li key={index}>{jugador.nombre} que juega de {jugador.posicion}</li>

        return <Li nombre={jugador.nombre} posicion={jugador.posicion} key={index}/>
      })


        
      }
    </ul>
   </>
  )
}

export default App
