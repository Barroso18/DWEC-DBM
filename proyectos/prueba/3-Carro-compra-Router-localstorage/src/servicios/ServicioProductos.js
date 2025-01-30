
import http from "./http-axios.js";

class ServidioProductos {
  getAll() {
    return http.get("/productosJson");
  }

  get(id) {
    return http.get(`/productosJson/${nombre}`);
  }

  create(data) {
    return http.post("/productosJson", data);
  }

  update(id, data) {
    return http.put(`/productosJson/${nombre}`, data);
  }

  delete(id) {
    return http.delete(`/productosJson/${nombre}`);
  }
}

export default new ServidioProductos();