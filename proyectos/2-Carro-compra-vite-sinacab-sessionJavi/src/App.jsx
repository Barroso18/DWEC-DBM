import { useState } from 'react'
import MenuSuperior from './componentes/menu'
import ListaImagenes from './componentes/cuerpo'
import Pagina404 from './componentes/Pagina404';
import DetalleCarrito from './componentes/DetalleCarrito';
import DetalleProducto from './componentes/DetalleProducto';

import { Routes, Route } from "react-router-dom";
import useStateStorage from './servicios/UseStateStorage';


function App() {

  // Datos de imágenes
  const informacion = [ 
    { url: "./imagenes/manzana.jpg", nombre: "Manzana", precio: 5 }, 
    { url: "./imagenes/pera.jpg", nombre: "Pera", precio: 7 }, 
    { url: "./imagenes/platano.jpg", nombre: "Platano", precio: 4 } 
  ];

  //const [total, setTotal] = useState(0); // Estado para el importe total
  const [total, setTotal] = useStateStorage("total", 0)
  const [productos, setProductos] = useStateStorage("productos", []); // Lista de productos del carrrito
  const [productosJson, setProductosJson] = useStateStorage("productosJson", []); // Lista de cada producto en json
  


  return (
    <div className="App">

      <header className="App-header">
        {/* Pasar el total al menú superior */}
        <MenuSuperior 
            total={total} 
            productosJson={productosJson}
        />
      </header>
      <main>
        {/* Pasar total y setTotal a ListaImagenes */}
        <Routes>

          <Route path='/' 
          element={<ListaImagenes total={total} setTotal={setTotal} productos={productos} 
          setProductos={setProductos} informacion={informacion} productosJson={productosJson} setProductosJson={setProductosJson} />} />

          <Route path='/detalle-carrito' element={<DetalleCarrito productos={productos} setTotal={setTotal} informacion={informacion} productosJson={productosJson} setProductosJson={setProductosJson} />} />

          <Route path='/detalle-producto/:nombre' element={<DetalleProducto informacion={informacion} />}/>

          <Route path='*' element={<Pagina404/>}/>


        </Routes>
      </main>
    </div>
  );
}

export default App
