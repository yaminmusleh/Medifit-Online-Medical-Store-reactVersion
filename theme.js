import { createTheme } from "@mui/material";

const getThemes = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor:
              mode === "dark" ? "#212529!important" : "#EEEDE7!important",
          },
          ".cta-grid": {
            backgroundColor:
              mode === "dark" ? "#2d3135!important" : "#f2f2f2!important",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          },
          ".explore-store": {
            backgroundColor:
              mode === "dark" ? "#2d3135!important" : "#E8E6DE!important",
          },
          
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#212529" : "#EEEDE7",
            color: mode === "dark" ? "#f2f2f2" : "#503217",
          },
        },
      },
    },
  });
};

export default getThemes;
