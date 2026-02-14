import axios from "axios";
const instance = axios.create({
  baseURL: "https://knowledgeshop.runasp.net/api",
  headers: {
    "Accept-Language": "en",
  },
});
export default instance;
