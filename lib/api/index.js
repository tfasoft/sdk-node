import axios from "axios";

const API = axios.create({
  baseURL: "https://api.tfasoft.com/api",
});

export default API;
