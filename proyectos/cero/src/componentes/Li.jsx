import './Li'
//Funcion flecha llamada Li
const Li = ({nombre, posicion, index}) =>{

  return <li key={index}>{nombre} que juega de {posicion}</li>
}




export default Li