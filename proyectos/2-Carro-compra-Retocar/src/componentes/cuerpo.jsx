import '../estilos/cuerpo.css';
import { buscarProducto,incrementarCantidad } from '../herramientas/buscarProducto';



// Componente ListaImagenes
const ListaImagenes = ({ total, setTotal, informacion , productos, setProductos,productosJson, setProductosJson }) => {
  
  const AnadirProducto = (nombre, precio) => {
    //alert(`${nombre} añadido al carrito, con precio ${precio}`);
    
    setTotal(total + precio); // Actualiza el total

    // setProductos((prevArray) => {    

    //   return [...prevArray, nombre]
    // }) 
    
    setProductos([...productos, nombre]);
    if(buscarProducto(nombre,productosJson) === null){
      setProductosJson([...productosJson,{"nombre":nombre,"cantidad":1}])
      //console.log("Se añade uno nuevo",{"nombre":nombre,"cantidad":1})
    }else{
      //console.log(nombre,incrementarCantidad(productosJson,nombre));
      setProductosJson(incrementarCantidad(productosJson,nombre));
    }
    
        
    //console.log(productos)
   
  };

  return (
    <div className="container">
      {informacion.map((item, index) => (
        <div key={index}>
          <img src={item.url} alt="imagen" />
          <h3>{item.nombre}</h3>
          <p>Precio: {item.precio} Euros</p>
          <button onClick={() => AnadirProducto(item.nombre, item.precio)}>
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaImagenes;
