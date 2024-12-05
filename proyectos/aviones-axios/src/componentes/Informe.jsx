import React, { useEffect, useState } from "react";
import ServicioAficiones from "../servicios/servicioAviones";
import "../estilos/Informe.css"
import Swal from "sweetalert2";

const Informe = () => {
  const [aviones, setAviones] = useState([]);

  useEffect(() => {
    ServicioAficiones.getAll()
      .then((response) => {
        setAviones(response.data);
      })
      .catch((error) => {
        
        Swal.fire({
          title: "¿Tienes Internet?",
          text: "No consigo descargar las aficiones :(",
          icon: "question"
        });
      });
  }, []);

  return (
    <div>
      <h1>Lista de Aviones</h1>
      <ul>
        {aviones.map((avion) => (
          <li key={avion.id}>{avion.nombre} -Fabricante: {avion.fabricante}- {avion.descripcion}<br/><img src={avion.url} alt={avion.url}/></li>
          
        ))}
      </ul>
    </div>
  );
};

export default Informe;
