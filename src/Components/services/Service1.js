import axios from "axios";
const data_URL = "http://localhost:8080/api/v1/data";
const country_url = "http://localhost:8080/api/v1/country";

class Service1 {
  getData() {
    return axios.get(data_URL);
  }
  getDataById(id) {
    return axios.get(data_URL + "/" + id);
  }
  updateData(data, dataid) {
    return axios.put(data_URL + "/" + dataid, data);
  }
  getCountryData(searchText) {
    console.log(searchText);
    return axios.get(country_url + "/" + searchText);
  }
}
export default new Service1();
