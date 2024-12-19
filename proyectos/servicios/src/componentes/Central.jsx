import React, { useEffect, useState } from "react";
import "../estilos/central.css"
import ServiciosAxios from "../servicios/ServiciosAxios";
import Swal from "sweetalert2";
import Modal from "./Modal";
import ServicioDetalle from "./ServicioDetalle";


const Central = ({servicios , setServicios}) => {
  
  const [isModalConsultaOpen, setIsModalConsultaOpen] = useState(false);
  const openModalConsulta = () => setIsModalConsultaOpen(true);
  const closeModalConsulta = () => setIsModalConsultaOpen(false);

  // Dibujar las aficiones una sola vez
  useEffect(() => {
    ServiciosAxios.getAll()
      .then((response) => {
        console.log(response.data)
        setServicios(response.data);
      })
      .catch((error) => {

        console.log(error)

        Swal.fire({
          title: "¿Tienes Internet?",
          text: "No consigo descargar las aficiones :(",
          icon: "question"
        });
      });
  }, []);



   return (
    <>  
      <div id="idCentral">
        <ul className="aficiones-list">
          {
            servicios.map((servicio)=>(
              <li key={servicio.map} className="aficion-item">
                  <div>
                      <strong>{servicio.nombre}</strong>:{servicio.importe}
                      <button onClick={()=>ConsultarDetalleServicio(servicio)}>Consulta</button>
                  </div>
              </li>
              )
            )
          }
        
      </ul>
      {/*<Modal isOpen={}>

      </Modal>*/}
      </div>    
    </>
  );
};

export default Central;
