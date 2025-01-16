import "../estilos/Pagina404.css";
import { buscarProducto } from "../herramientas/buscarProducto";
import {useParams} from "react-router-dom";


const DetalleProducto = ({informacion}) => {
  const {nombre} = useParams()
  let productoInformacion = buscarProducto(nombre,informacion);


  return (
    <div className="DetalleProducto">
      <ul>
        <li>Nombre {productoInformacion.nombre}</li>
        <li>Precio {productoInformacion.precio}</li>
        <li><img src={productoInformacion.url}/></li>
      </ul>
    </div>
  );
}

export default DetalleProducto;