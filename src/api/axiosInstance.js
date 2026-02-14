import axios from "axios";
const instance = axios.create({
  baseURL: "https://knowledgeshop.runasp.net/api",
});
export default instance;
