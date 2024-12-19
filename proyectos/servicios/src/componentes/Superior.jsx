import React, { useEffect, useState } from "react";
import "../estilos/superior.css"


const Superior = ({servicios}) => {
  
  let total = 0
  servicios.forEach(servicio => {
    total += servicio.importe
  });
  

  return (
    <>
    <div id="idSuperior">
      Nº Elementos: {servicios.length} 
      Importe total: {total}
     </div>      
   
    </>
  );
};

export default Superior;
