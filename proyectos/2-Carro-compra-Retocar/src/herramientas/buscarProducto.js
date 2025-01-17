export  function buscarProducto(nombre, informacion){
    return informacion.find(producto => producto.nombre.toLowerCase()===nombre.toLowerCase()) || null;
  }
export function incrementarCantidad(informacion,nombre){
  console.log("Estoy buscando "+nombre)
  return informacion.map(producto => {
    if(producto.nombre === nombre){
      //producto.cantidad += 1;
      console.log("No encontrado ",{"nombre": producto.nombre,"cantidad":producto.cantidad})
      return {"nombre": producto.nombre,"cantidad":producto.cantidad+=1}
    }
    console.log("No encontrado ",producto)
    return producto
  });
}

export function obtenerCantidadTotal(informacion){
  let total = 0
  informacion.forEach(producto => total +=producto.cantidad);
  return total;
}