import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Container,
  useTheme,
} from "@mui/material";
import React from "react";
import image from "./newsletter-imgs/newslatter1.webp";
import email_icon from "./newsletter-imgs/email-icon-for-letter.svg";
import link_image from "./newsletter-imgs/link-external.svg";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import { useTranslation } from "react-i18next";
export default function NewsLetter() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const navigate = useNavigate();
  const {t}=useTranslation();
  const token = useAuthStore((state) => state.token);
  return (
    <Box className="explore-store" sx={{ paddingBottom: "60px" }}>
      <Container>
        <Grid
          container
          columnSpacing={0}
          rowSpacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Image side */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              width: {
                xs: "100%",
                lg: "50%",
              },
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Box
              component="img"
              src={image}
              alt="newsletter"
              sx={{
                width: {
                  xs: "100%",
                  sm: "50%",
                  lg: "90%",
                },
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </Grid>

          {/* Content side */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              borderRadius: "15px",
              backgroundColor: "#F2F2F2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: { xs: 2, md: 4 },
            }}
          >
            <Box
              sx={{
                maxWidth: 420,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                textAlign: "center",
                py: "60px",
              }}
            >
              {/* Top text */}

              {token ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign:'center', width:'100%', height:'100%'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 25,
                        sm: 30,
                        md: 40,
                      },
                      fontWeight: 700,

                      fontFamily: "poppins",
                      color: "#503217",
                    }}
                  >
                    {t("newsletter.thankYou")}
                  </Typography>
                </Box>
              ) : (
                <Box>
                  <Typography
                    sx={{
                      mb: 1,
                      fontFamily: "poppins",
                      color: "#6C543E",
                      fontWeight: 500,
                    }}
                  >
                    {t("newsletter.join")}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 25,
                        sm: 30,
                        md: 40,
                      },
                      fontWeight: 700,
                      mb: 4,
                      fontFamily: "poppins",
                      color: "#503217",
                    }}
                  >
                    {t("newsletter.discount")}
                  </Typography>
                </Box>
              )}

              {/* Bottom form */}
              {!token && (
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "center",
                  }}
                >
                  <TextField
                    placeholder={t("newsletter.emailPlaceholder")}
                    size="small"
                    sx={{
                      width: "70%",
                      fontSize: "16px",
                      "& input": {
                        color: isDark ? "#000" : "inherit",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#503217",
                      },

                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#EBE9E0",
                      },

                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#784d27",
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img
                            src={email_icon}
                            alt="email icon"
                            style={{ width: 20, height: 20 }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      bgcolor: "#503217",
                      fontFamily: "poppins",
                      color: isDark ? "#fff!important" : "#fff!important",
                      fontSize: "13px",
                    }}
                    onClick={() => navigate("/register")}
                  >
                    <img
                      src={link_image}
                      alt="linkimage"
                      width={"25%"}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    {t("newsletter.signup")}
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
