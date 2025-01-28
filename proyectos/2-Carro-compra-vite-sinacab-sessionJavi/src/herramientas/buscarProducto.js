
export function buscarProducto(nombre, informacion) {
    return informacion.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase()) || null
}

export function incrementarCantidad(informacion, nombre) {

    console.log("Estoy buscando "+nombre)
    return informacion.map(producto => {
        if (producto.nombre === nombre) {
            console.log("Encontrado ",producto)
            return {"nombre": producto.nombre, "cantidad": producto.cantidad +=1}
        }
        console.log("No encontró "+nombre)
        return producto
    })
}

// Función que muestra el número de productos totales
export function obtenerCantidad(informacion) {

    let total = 0
    informacion.forEach(producto => {
        total += producto.cantidad
    });
    return total
}

export function restarProductoDetalle(productos, setProductosJson, setTotal, nombre, informacion) {

    let nuevoTotal = 0

    // Actualizo las cantidades de productos
    const nuevosProductosJson = productos.map(producto => {
        if (producto.nombre === nombre && producto.cantidad > 0) {
            producto.cantidad -= 1
            // if (producto.cantidad === 0) {
            //     producto.nombre = ""
            // }
        }

        const productoInfo = buscarProducto(producto.nombre, informacion)

        if (productoInfo) {
            nuevoTotal += productoInfo.precio * producto.cantidad
        }

        console.log(producto)
        return producto
    
    })

    setProductosJson(nuevosProductosJson)
    setTotal(nuevoTotal)

}

