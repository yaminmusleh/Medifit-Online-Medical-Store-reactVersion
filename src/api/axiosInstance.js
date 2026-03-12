import axios from "axios";
import i18next from "i18next";
const instance = axios.create({
  baseURL: "https://knowledgeshop.runasp.net/api",
  withCredentials: true,
  
});
instance.interceptors.request.use((config) => {
  config.headers["Accept-Language"] = i18next.language;
  return config;
});
export default instance;
