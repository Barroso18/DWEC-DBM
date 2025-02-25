let productosDisponibles = [];
        let listaCompra = [];

        function cargarProductos() {
            return fetch('productos.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('No se pudo cargar el archivo JSON');
                    }
                    return response.json();
                })
                .then(data => {
                    productosDisponibles = data;
                    console.log(productosDisponibles);
                    const datalist = document.getElementById("productos");
                    datalist.innerHTML = "";
                    data.forEach(producto => {
                        //console.log(producto);
                        const option = document.createElement("option");
                        option.value = producto.producto;
                        datalist.appendChild(option);
                    });
                })
                .catch(error => console.error('Error:', error));
        }

        function agregarProducto(event) {
            if (event.key !== 'Enter') return;
            
            const input = document.getElementById("productoInput");
            const productoNombre = input.value.trim();
            
            if (!productoNombre) return;
            
            const producto = productosDisponibles.find(p => p.producto.toLowerCase() === productoNombre.toLowerCase());
            console.log("Producto: "+producto)
            if (!producto || listaCompra.some(p => p.producto === producto.nombre)) {
                alert("Producto no disponible o ya agregado.");
                return;
            }
            
            listaCompra.push(producto);
            console.log("listaCompra: "+listaCompra)
            actualizarLista();
            input.value = "";
        }

        function actualizarLista() {
            const lista = document.getElementById("productoList");
            lista.innerHTML = "";
            
            listaCompra.forEach((producto, index) => {
                const item = document.createElement("li");
                item.textContent = `${producto.producto} - ${producto.precio}€`;
                item.dataset.index = index;
                item.addEventListener("dblclick", eliminarProducto);
                
                if (index === listaCompra.length - 1) {
                    item.classList.add("nuevo-producto-rojo");
                }
                
                lista.appendChild(item);
            });
            actualizarResumen();
        }

        function eliminarProducto(event) {
            const index = event.target.dataset.index;
            listaCompra.splice(index, 1);
            actualizarLista();
        }

        function actualizarResumen() {
            document.getElementById("totalProductos").textContent = listaCompra.length;
            const total = listaCompra.reduce((sum, producto) => sum + producto.precio, 0);
            document.getElementById("importeTotal").textContent = total.toFixed(2);
        }

        document.addEventListener("DOMContentLoaded", cargarProductos);
        document.getElementById("productoInput").addEventListener("keypress", agregarProducto);