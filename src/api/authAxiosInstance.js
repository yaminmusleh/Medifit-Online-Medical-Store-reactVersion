import axios from "axios";
import i18n from "../../i18next";
import useAuthStore from "../store/useAuthStore";

const authinstance = axios.create({
  baseURL: "https://knowledgeshop.runasp.net/api",
  withCredentials: true,
});
authinstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  config.headers["Accept-Language"] = i18n.language;
  if (token) {
  config.headers["Authorization"] = `Bearer ${token}`;
}
  return config;
});

authinstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshResponse = await axios.post(
          "https://knowledgeshop.runasp.net/api/auth/Account/RefreshToken",
          {},
          {
            withCredentials: true,
          },
        );
        const newAccessToken = refreshResponse.data.accessToken;
        useAuthStore.getState().setToken(newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return authinstance(originalRequest);
      } catch (err) {
        console.error("Refresh token failed", err);
      }
    }

    return Promise.reject(error);
  },
);
export default authinstance;
