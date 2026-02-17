import { Box, Container, List, MenuItem, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";

import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  const Pages = ["Home", "Shop", "About", "Contact"];
  const Utilities = [
    "Style guide",
    "Instruction",
    "Changelog",
    "Licenses",
    "Link in bio",
    "Password protection",
  ];
  return (
    <Box py={"80px"} bgcolor={"#E8E6DE"}>
      <Container>
        <Grid container spacing={12} sx={{ justifyContent:{xs:'center',md:'flex-start'}}}>
          {/* first column */}
          <Grid  item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "flex-start" }, gap: "40px" }}>
              <Typography
                sx={{
                  color: "#503217",
                  fontSize: "24px",
                  fontFamily: "poppins",
                  fontWeight: 600,
                }}
              >
                Pages
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px",  alignItems: { xs: "center", sm: "flex-start" } }}
              >
                {Pages.map((page) => (
                  <MenuItem
                    key={page}
                    component={RouterLink}
                    to={`/${page.toLowerCase()}`}
                    sx={{
                      p: 0,
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: "poppins",
                        fontSize: "18px",
                        color: "#8F7D6A",
                        "&:hover": { color: "#503217" },
                        transition: "all 0.3s ease",
                        fontWeight: 600,
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem
                  component={RouterLink}
                  to="#"
                  sx={{
                    p: 0,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      fontSize: "18px",
                      color: "#8F7D6A",
                      "&:hover": { color: "#503217" },
                      transition: "all 0.3s ease",
                      fontWeight: 600,
                    }}
                  >
                    Blog
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="#"
                  sx={{
                    p: 0,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      fontSize: "18px",
                      color: "#8F7D6A",
                      "&:hover": { color: "#503217" },
                      transition: "all 0.3s ease",
                      fontWeight: 600,
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
          </Grid>

          {/* second column */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "flex-start" }, gap: "40px" }}>
              <Typography
                sx={{
                  color: "#503217",
                  fontSize: "24px",
                  fontFamily: "poppins",
                  fontWeight: 600,
                }}
              >
                Utility
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px",  alignItems: { xs: "center", sm: "flex-start" } }}
              >
                {Utilities.map((util) => (
                  <MenuItem
                    key={util}
                    component={RouterLink}
                    to={`#`}
                    sx={{
                      p: 0,
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: "poppins",
                        fontSize: "18px",
                        color: "#8F7D6A",
                        "&:hover": { color: "#503217" },
                        transition: "all 0.3s ease",
                        fontWeight: 600,
                      }}
                    >
                      {util}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>testtesttesttesttest</Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
