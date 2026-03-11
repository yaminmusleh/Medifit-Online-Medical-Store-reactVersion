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