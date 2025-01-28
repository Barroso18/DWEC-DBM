import '../estilos/cuerpo.css';
import { buscarProducto, incrementarCantidad } from '../herramientas/buscarProducto';


// Componente ListaImagenes
const ListaImagenes = ({ total, setTotal , productos, setProductos , informacion, productosJson, setProductosJson }) => {
  
  const AnadirProducto = (nombre, precio) => {
    
    setTotal(total + precio); // Actualiza el total
    
    setProductos([...productos, nombre]);

    // Buscamos producto
      // No existe el producto
      if (buscarProducto(nombre, productosJson) === null) {
        setProductosJson([...productosJson, {"nombre" : nombre, "cantidad" : 1}])
      } else {
        setProductosJson(incrementarCantidad(productosJson, nombre))
      }
      // Si existe el producto
      // incrementar cantidad
   

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
