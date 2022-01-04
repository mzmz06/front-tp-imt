import http from "../http-common";

class PersonneDataService {
  getAll() {
    return http.get("/entree");
  }

  get(id) {
    return http.get(`/entree/${id}`);
  }

  create(data) {
    return http.post("/entree", data);
  }

  update(data) {
    return http.put("/entree", data);  //fonction modifier
  }

  delete(id) {
    return http.delete(`/entree/${id}`);  // fonction supprimer
  }
  
}

export default new PersonneDataService();
