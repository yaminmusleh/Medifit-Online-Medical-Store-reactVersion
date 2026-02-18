import { Box, Container, List, MenuItem, Typography } from "@mui/material";
import image1 from "./footer-imgs/Group 189.svg";
import pin_image from "./footer-imgs/pin-for-address.svg";
import email_icon from "./footer-imgs/email-icon.svg";

import Grid from "@mui/material/Grid";

import { Link, Link as RouterLink } from "react-router-dom";

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
      <Container maxWidth="xl" sx={{ flexWrap: "nowrap" }}>
        <Grid
          container
          columnSpacing={12}
          rowSpacing={6}
          sx={{ justifyContent: { xs: "center" } }}
        >
          {/* first column */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
                gap: "40px",
              }}
            >
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
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
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
                        fontSize: {
                          xs: "14px",
                          md: "18px",
                        },
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
                      fontSize: {
                        xs: "14px",
                        md: "18px",
                      },
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
                      fontSize: {
                        xs: "14px",
                        md: "18px",
                      },
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
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
                gap: "40px",
              }}
            >
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
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
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
                        fontSize: {
                          xs: "14px",
                          md: "18px",
                        },
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
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center", // simplified, same for all breakpoints
              width: {
                md: "25%",
                xs: "100%",
              },
              py: 6,
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              textAlign="center"
              alignItems="center"
              gap={4}
            >
              <Box
                component="img"
                src={image1}
                alt="logo-image"
                sx={{
                  width: "100%",
                  maxWidth: "300px",
                }}
              />
              <Typography
                sx={{
                  fontSize: { md: "18px", xs: "15px" },
                  fontFamily: "poppins",
                  color: "#8F7D6A",
                }}
              >
                We provide the ultimate solution for your online store and all
                the healthcare needs.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {/* Address section */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", sm: "flex-start" }}
              gap={2}
              sx={{
                width: {
                  md: "70%",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "24px", xs: "18px" },
                  fontFamily: "poppins",
                  color: "#503217",
                }}
              >
                Address
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "#8F7D6A",
                  fontSize: { md: "18px", xs: "15px" },
                }}
              >
                <img src={pin_image} alt="" /> 1640 Parker Rd. Allentown, New
                Mexico 31134
              </Typography>
            </Box>

            {/* Contact section */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", sm: "flex-start" }}
              gap={2}
              sx={{
                width: {
                  md: "70%",
                  marginTop: "100px",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "24px", xs: "18px" },
                  fontFamily: "poppins",
                  color: "#503217",
                }}
              >
                Contact
              </Typography>
              <Typography
                component="a"
                href="mailto:medifit_support@gmail.com"
                sx={{
                  fontFamily: "poppins",
                  fontSize: { md: "18px", xs: "15px" },
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#8F7D6A",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#503217",
                  },
                }}
              >
                <img src={email_icon} alt="" />
                medifit_support@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
