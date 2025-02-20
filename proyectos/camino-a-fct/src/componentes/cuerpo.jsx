import '../estilos/cuerpo.css';
import { ToastContainer, toast } from 'react-toastify';
// Datos de imágenes


// Componente ListaImagenes
const ListaImagenes = ({ total, setTotal , productos, setProductos , informacion}) => {
  
  const AnadirProducto = (nombre, precio) => {    
    
    setTotal(total + parseInt(precio));    
    toast("Uso de Storage: se ha añadido "+nombre+" al carrito");
    toast("Uso de Storage: se ha cambiado el importe total a "+total+" Euros");
    setProductos([...productos, nombre]);   
   
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
          <ToastContainer />
        </div>
      ))}
    </div>
  );
};

export default ListaImagenes;
