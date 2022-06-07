import http from "../../api/axios";
class PokemonsDataService {
  getAll(page:number) {
    return http.get(`/pokemon?limit=20&offset=${page}`);
  }
  get(name:string) {
    return http.get(`/pokemon/${name}`);
  }
}
export default new PokemonsDataService();