import { Link } from 'react-router-dom';
import '../estilos/DetalleCarrito.css';
import { incrementarCantidad,imcrementarCantidadPers } from '../herramientas/buscarProducto';
import React, { useState } from "react";


const DetalleCarrito = ({ productos, setProductos , total, setTotal}) => {

  const [errores, setErrores] = useState({});
  function incrementar(producto){
    // Actualizamos lista de productos
    setProductos(incrementarCantidad(productos, producto.nombre))
    //Actualiamos el total
    setTotal(total + producto.precio);    
  
  }
  const compruebaCantidadPers=(cantidad,producto)=>{
      const nuevosErrores ={}
      const cantidadMaximaIncrementar = 10-producto.cantidad;
      if(cantidad > cantidadMaximaIncrementar){
          nuevosErrores.cantidad = 'No se ha podido realizar la operación.Solo se puede añadir un máximo de '
          +cantidadMaximaIncrementar+' '+producto.nombre;
      }else if(isNaN(cantidad)){
        //console.log(cantidad)
          nuevosErrores.NaN = 'Debe introducir un numero entero';
      }
      console.log(nuevosErrores);
      setErrores(nuevosErrores);

    // Retorna true si no hay errores, de lo contrario retorna false
    return Object.keys(nuevosErrores).length === 0;
  }
  function incrementarPers(cantidad,producto,productos){
    console.log("ENtra aqui2")
    //const cantidad = prompt("¿Cuantos productos quieres añadir?"); 
    if(compruebaCantidadPers(cantidad,producto)){
      console.log("ENtra aqui3")
      setProductos(imcrementarCantidadPers(productos,producto.nombre,cantidad));
    }
  }
  function gestionarCambio (e,producto,productos) {
    
    //console.log("ENtra aqui")
    const cantidad = prompt("¿Cuantos productos quieres añadir?");
    incrementarPers(parseInt(cantidad),producto,productos)
  }
  return (
    <div className="container-detalle">
      <ul>
        <h2>Productos Seleccionados</h2>
        {productos.map((producto, index) => {
          return (
            <li key={index} className="producto-item">
              <div className="producto-detalle">
                <span>
                  {producto.cantidad} x {producto.nombre} : {producto.precio}Є
                </span>
                <Link to={`/producto/${producto.nombre}`}>
                  <img src={producto.url} alt={producto.nombre} />
                </Link>
              </div>

              {/* Botones para incrementar/reducir cantidad */}
              <div className="producto-acciones">                
                <button
                  className="btn-incrementar"
                  onClick={() =>
                    incrementar(producto)
                  }
                >
                  +
                </button>
                <button
                  className="btn-incrementar"
                  onClick={(e)=> 
                      gestionarCambio(e,producto,productos)
                  
                  }
                >
                  *
                </button>
              </div>
            </li>
          );
        })}
        <li className="total">Número de Elementos: {productos.length}</li>
      </ul>
    </div>
  );
};

export default DetalleCarrito;
