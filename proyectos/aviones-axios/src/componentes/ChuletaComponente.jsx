import React, { useEffect, useState } from "react";
import ServicioAviones from "../servicios/servicioAviones.js";
import "../estilos/Informe.css"
import Swal from "sweetalert2";

const Chuleta = () => {
  const [aviones, setAviones] = useState([]);

  useEffect(() => {
    ServicioAviones.getAll()
      .then((response) => {
        setAviones(response.data);
      })
      .catch((error) => {
        //Creamos una alerta en caso de que no responda el fichero
        Swal.fire({
          title: "¿Tienes Internet?",
          text: "No consigo descargar las aficiones :(",
          icon: "question"
        });
      });
  }, []);
  //Devolvemos el html
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

export default Chuleta;



//Esta es la parte de ServicioAviones
import http from "./http-axios.js";

class ServicioAviones {
  getAll() {
    return http.get("/aviones");
  }

  get(id) {
    return http.get(`/aviones/${id}`);
  }

  create(data) {
    return http.post("/aviones", data);
  }

  update(id, data) {
    return http.put(`/aviones/${id}`, data);
  }

  delete(id) {
    return http.delete(`/aviones/${id}`);
  }
}

//export default new ServicioAviones();


//Esta es la conexion a axios
import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

//export default http;