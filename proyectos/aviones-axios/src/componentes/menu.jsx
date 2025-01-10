import '../estilos/menu.css';

import React, { useState } from "react";


// Componente MenuSuperior
const MenuSuperior = () => {
  const [carritoVisible, setCarritoVisible] = useState(false);

  /*const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };*/

  return (
    <nav className="menu-superior">
      

      
        <ul>
            <li><a>Airbus</a></li>
            <li><a>Boeing</a></li>
        </ul>
    </nav>
  );
};

export default MenuSuperior;
