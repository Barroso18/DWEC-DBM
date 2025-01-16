import { buscarProducto } from "../herramientas/buscarProducto";
const DetalleCarrito = ({productos,informacion})=>{
    /*function buscarProducto(nombre){
        return informacion.find(producto => producto.nombre === nombre)
    }*/
   return(
        <div className="container- detalle-carrito">
            <ul>
                {
                    productos.map((producto,index)=>{
                        let productoInformacion = buscarProducto(producto,informacion)
                    })
                }
            </ul>
        </div>
    );
}