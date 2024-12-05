
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

export default new ServicioAviones();
