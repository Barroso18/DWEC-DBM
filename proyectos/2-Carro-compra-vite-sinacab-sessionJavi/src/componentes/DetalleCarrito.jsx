import { restarProductoDetalle, buscarProducto } from "../herramientas/buscarProducto"
import '../estilos/DetalleCarrito.css'
import { Link } from "react-router-dom"

const DetalleCarrito = ({productos, informacion, productosJson, setTotal, setProductosJson}) => {

    return (

        <div className="container-detalle-carrito">
            <h4>Productos seleccionados</h4>

            <ul>
              {
              productosJson.map((producto, index) => {

                let productoInformacion = buscarProducto(producto.nombre, informacion)

                return <li key={index}>{productoInformacion.nombre}  : {productoInformacion.precio} € x {producto.cantidad}
                            <Link to={`/detalle-producto/${productoInformacion.nombre}`} >
                            <img src={productoInformacion.url}/> </Link>
                            <button onClick={() => restarProductoDetalle(productosJson, setProductosJson, setTotal, producto.nombre, informacion)}>-</button>
                        </li>
                })
              }
            </ul>
         
        </div>

    )

}

export default DetalleCarrito;
