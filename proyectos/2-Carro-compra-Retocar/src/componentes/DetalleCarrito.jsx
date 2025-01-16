import "../estilos/Pagina404.css";
import { buscarProducto } from "../herramientas/buscarProducto";


const DetalleCarrito = ({productos, informacion}) => {
  //Aqui se mete el codigo JS, en el return solo lo que va a renderizar
  console.log(productos)

  /*
  function buscarProducto(nombre){
    return informacion.find(producto => producto.nombre===nombre)
  }*/


  return (
    <div className="DetalleCarrito">
      <ul>
        {
          productos.map((producto,indice)=>{

            let productoInformacion = buscarProducto(producto,informacion)

            return <li key={indice}>{productoInformacion.nombre} - {productoInformacion.precio}
            <img src={productoInformacion.url} alt={`imagen ${productoInformacion.nombre}`} />
            </li>
          }
          
          )
        }
      </ul>
    </div>
  );
}

export default DetalleCarrito;
