import { useState } from 'react'
import MenuSuperior from './componentes/menu'
import ListaImagenes from './componentes/cuerpo'
import { Routes, Route } from 'react-router-dom';
import Pagina404 from "./componentes/Pagina404";
import DetalleCarrito from "./componentes/DetalleCarrito";
import DetalleProducto from './componentes/DetalleProducto';

import useStateStorage from './servicios/UseStateStorage';
function App() {

  // Datos de imágenes
const informacion = [ 
  { url: "../imagenes/manzana.jpg", nombre: "Manzana", precio: 5 }, 
  { url: "../imagenes/pera.jpg", nombre: "Pera", precio: 7 }, 
  { url: "../imagenes/platano.jpg", nombre: "Platano", precio: 4 } 
];
  const [total, setTotal] = useStateStorage(0); // Estado para el importe total
  const [productos, setProductos] = useStateStorage([]); // Lista de productos del carrrito
  const [productosJson, setProductosJson] = useStateStorage([]);
  return (


    <div className="App">


      <header className="App-header">
        {/* Pasar el total al menú superior */}
        {/*<MenuSuperior
          total={total}
          productos={productos}
        />*/}
        <MenuSuperior
          total={total}
          productos={productos}
          productosJson={productosJson}
        />
      </header>
      <main>
        <Routes>
          <Route path="*" element={<Pagina404 />} />
          <Route path="/"
            element={<ListaImagenes total={total} setTotal={setTotal} productos={productos} setProductos={setProductos}  productosJson={productosJson} setProductosJson={setProductosJson} informacion={informacion}/>} />

          <Route path="/detalle-carrito" 
                  element={<DetalleCarrito total={total} setTotal={setTotal} productos={productos} setProductos={setProductos}  productosJson={productosJson} setProductosJson={setProductosJson} informacion={informacion}/>} />
          <Route path='/detalle-producto/:nombre' 
                  element={<DetalleProducto informacion={informacion}/>} />
        </Routes>

      </main>
    </div>

  );
}

export default App
