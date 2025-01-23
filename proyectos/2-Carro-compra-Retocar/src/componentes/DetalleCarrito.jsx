import "../estilos/detalleCarrito.css";
import { useState } from 'react';
import { buscarProducto,incrementarCantidad,decrementarCantidad } from "../herramientas/buscarProducto";
import {Link} from "react-router-dom";


const DetalleCarrito = ({total, setTotal , productos, setProductos,productosJson, setProductosJson, informacion}) => {
  //Aqui se mete el codigo JS, en el return solo lo que va a renderizar
  console.log(productosJson)

  /*
  function buscarProducto(nombre){
    return informacion.find(producto => producto.nombre===nombre)
  }*/
    const AnadirProducto = (nombre, precio) => {
      //alert(`${nombre} añadido al carrito, con precio ${precio}`);
      
      setTotal(total + precio); // Actualiza el total
  
      // setProductos((prevArray) => {    
  
      //   return [...prevArray, nombre]
      // }) 
      
      //setProductos([...productos, nombre]);
      if(buscarProducto(nombre,productosJson) === null){

        setProductosJson([...productosJson,{"nombre":nombre,"cantidad":1}])
        console.log("Se añade uno nuevo",{"nombre":nombre,"cantidad":1})
      }else{
        //console.log(nombre,incrementarCantidad(productosJson,nombre));
        setProductosJson(incrementarCantidad(productosJson,nombre));
      }
      
          
      //console.log(productos)
     
    };
    const RestarUnoProducto = (nombre, precio) => {
      
      let producto = buscarProducto(nombre,productosJson);
      if( producto.cantidad === 1){
        decrementarCantidad(productosJson,nombre)
        //let arr = [1, 2, 3, 4, 5];
        //arr = arr.filter(item => item !== 3);
        //console.log(arr);  // Resultado: [1, 2, 4, 5]
        //productosJson = productosJson.delete(producto)
        let index = productosJson.indexOf(producto);
        productosJson.splice(index, 1);
        //productosJson = productosJson.filter(item => item !== producto);
        setTotal(total - precio);
        console.log(productosJson);
      }else{
        decrementarCantidad(productosJson,nombre)
        setTotal(total - precio);
        console.log(productosJson);
      }
    }
  return (
    <div className="DetalleCarrito">
      <ul>
        {
          productosJson.map((producto,indice)=>{

            let productoInformacion = buscarProducto(producto.nombre,informacion)

            return <li key={indice}>Nombre: {productoInformacion.nombre} Precio: {productoInformacion.precio} 
                  Cantidad: {producto.cantidad} 
                  <button onClick={() => AnadirProducto(producto.nombre, productoInformacion.precio)}>+</button> 
                  <button onClick={() => RestarUnoProducto(producto.nombre, productoInformacion.precio)}>-</button>
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
