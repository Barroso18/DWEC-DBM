import React from 'react';

const AvionConsultar = ({ avion }) => {
  
  return (
    <div>
      <h2>{avion.nombre}</h2>
      <img src={avion.url} alt={avion.url}/>
      <p><strong>Fabricante:</strong> {avion.fabricante}</p>
      
      <p><strong>Descripción:</strong> {avion.descripcion}</p>
    </div>
  );
};

export default AvionConsultar;