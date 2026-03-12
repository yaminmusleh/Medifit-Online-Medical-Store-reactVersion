import { create } from "zustand";

const getInitialMode = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("themeMode") || "light";
  }
  return "light";
};

const useThemeStore = create((set) => ({
  mode: getInitialMode(),
  toggleTheme: () => {
    set((state) => {
      const newMode = state.mode === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("themeMode", newMode);
      }
      return { mode: newMode };
    });
  },
}));

export default useThemeStore;