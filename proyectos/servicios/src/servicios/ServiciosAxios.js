
import http from "./http-axios.js";

class ServiciosAxios {
  getAll() {
    return http.get("/servicios");
  }

  // get(id) {
  //   return http.get(`/servicios/${id}`);
  // }

  // create(data) {
  //   return http.post("/aficiones", data);
  // }

  // update(id, data) {
  //   console.log(id,data)
  //   return http.put(`/aficiones/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/aficiones/${id}`);
  // }
}

export default new ServiciosAxios();
