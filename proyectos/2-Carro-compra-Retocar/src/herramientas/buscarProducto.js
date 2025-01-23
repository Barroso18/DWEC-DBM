export  function buscarProducto(nombre, informacion){
  //console.log(informacion)
    return informacion.find(producto => producto.nombre.toLowerCase()===nombre.toLowerCase()) || null;
  }
export function incrementarCantidad(informacion,nombre){
  //console.log("Estoy buscando "+nombre)
  return informacion.map(producto => {
    if(producto.nombre === nombre){
      //producto.cantidad += 1;
      //console.log("No encontrado ",{"nombre": producto.nombre,"cantidad":producto.cantidad})
      return {"nombre": producto.nombre,"cantidad":producto.cantidad+=1}
    }
    //console.log("No encontrado ",producto)
    return producto
  });
}

export function obtenerCantidadTotal(informacion){
  //console.log(informacion)
  let total = 0
  informacion.forEach(producto => total +=producto.cantidad);
  return total;
}

export function decrementarCantidad(informacion,nombre){
  //console.log("Estoy buscando "+nombre)
  return informacion.map(producto => {
    if(producto.nombre === nombre){
      if(producto.cantidad === 1){
        //let index = informacion.indexOf(producto);
        //informacion.splice(index, 1);
        //informacion = informacion.filter(item => item !== producto);
        //informacion.delete(producto)
        return {"nombre": producto.nombre,"cantidad":producto.cantidad=0}
      }else{
        return {"nombre": producto.nombre,"cantidad":producto.cantidad-=1}
      }
      //producto.cantidad += 1;
      //console.log("No encontrado ",{"nombre": producto.nombre,"cantidad":producto.cantidad})
      
    }
    //console.log("No encontrado ",producto)
    return producto
  });
}