import "../estilos/Pagina404.css";
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

            let productoInformacion = buscarProducto(producto,informacion)

            return <li key={indice}>{productoInformacion.nombre} - {productoInformacion.precio}
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
