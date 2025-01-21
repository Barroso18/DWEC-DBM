import "../estilos/detalleCarrito.css";
import { buscarProducto } from "../herramientas/buscarProducto";
import {Link} from "react-router-dom";


const DetalleCarrito = ({productos,productosJson, informacion}) => {
  //Aqui se mete el codigo JS, en el return solo lo que va a renderizar
  console.log(productosJson)

  /*
  function buscarProducto(nombre){
    return informacion.find(producto => producto.nombre===nombre)
  }*/


  return (
    <div className="DetalleCarrito">
      <ul>
        {
          productosJson.map((producto,indice)=>{

            let productoInformacion = buscarProducto(producto.nombre,informacion)

            return <li key={indice}>Nombre:{productoInformacion.nombre}<br/>Precio: {productoInformacion.precio}<br/>
                  Cantidad: {producto.cantidad}<br/>
            <Link to={`/detalle-producto/${productoInformacion.nombre}`}>
              <img src={productoInformacion.url} alt={`imagen ${productoInformacion.nombre}`} />
            </Link>
            </li>
          }
          
          )
        }
      </ul>
    </div>
  );
}

export default DetalleCarrito;
