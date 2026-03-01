import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: localStorage.getItem("accessToken") || null,
  setToken: (newToken) => {
    set({
      token: newToken,
    });
    localStorage.setItem("accessToken", newToken);
  },
  logout: () => {
    set({ token: null });
    localStorage.removeItem("accessToken");
  },
}));
export default useAuthStore;
