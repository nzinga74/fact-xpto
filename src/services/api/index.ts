import axios from "axios";
//const baseURL = "http://localhost:3333";
const baseURL = "http://192.168.8.147:3333";
const api = axios.create({
  baseURL,
});
export { api, baseURL };
