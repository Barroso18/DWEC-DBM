import { buscarProducto } from "../herramientas/buscarProducto"
import { useParams } from "react-router-dom"
import '../estilos/DetalleProducto.css'

const DetalleProducto = ({informacion}) => {

    console.log(informacion)
    
    //Es lo mismo
    //const producto = useParams().nombre
    const {nombre} = useParams()

    let productoInformacion = buscarProducto(nombre, informacion)

    return (

        <div className="container-detalle-producto">
            <h4>Productos seleccionados</h4>

            <ul>
              <li> Nombre : {productoInformacion.nombre} </li>
              <li> Precio : {productoInformacion.precio} €</li>
              <li><img src={`.${productoInformacion.url}`} /></li>
            </ul>
         
        </div>

    )

}

export default DetalleProducto;
