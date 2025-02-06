import React from 'react';

const ProductoConsultar = ({ producto }) => {
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p><strong>Precio:</strong> {producto.precio}</p>
    </div>
  );
};

export default ProductoConsultar;
