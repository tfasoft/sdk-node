import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:25000/api",
});

export default API;
