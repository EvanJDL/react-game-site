import axios from "axios";

const api = axios.create({
  baseURL: "https://www.freetogame.com/api",
  timeout: 15000,
});

export default api;
