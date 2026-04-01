import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import hero_image from "./hero/Mask group.webp";
import photo from "./hero/photo1.svg";
import { useNavigate } from "react-router-dom";
import button_image from "../../hero/hero-index-html/bag.svg";
import { useTranslation } from "react-i18next";

export default function Hom2Hero({ MainColor, MainFont }) {
  const { t, i18n } = useTranslation(); // ✅ cleaner
  const isRTL = i18n.language === "ar";

  const navigate = useNavigate();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      dir={isRTL ? "rtl" : "ltr"}
      sx={{
        paddingTop: { xs: "100px", lg: 0 },
      }}
    >
      <Grid
        container
        rowSpacing={6}
        sx={{
          minHeight: "100vh",
          justifyContent: {
            xs: "center",
            lg: "space-between",
          },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            width: {
              xs: "100%",
              md: "70%",
              lg: "55%",
            },
            padding: {
              xs: 0,
              lg: "70px",
            },
            marginInlineStart: { xs: "20px", lg: "50px" },
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: {
                xs: "center",
                lg: "flex-start",
              },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 28, sm: "34px", md: "48px" },
                fontWeight: 700,
                fontFamily: MainFont,
                color: MainColor,
                mb: "80px",
                textAlign: {
                  xs: "center",
                  lg: "start",
                },
              }}
            >
              {t("hero.title")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "center", md: "flex-end" },
                gap: "31px",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              <Box
                component="img"
                src={photo}
                sx={{
                  width: {
                    xs: "80%",
                    sm: "50%",
                    md: "100%",
                  },
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "50px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: isDark ? "#E2DFCF" : MainColor,
                    fontFamily: "sans-serif",
                  }}
                >
                  {t("hero.description")}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Button
                    onClick={() => navigate("/shop")}
                    variant="contained"
                    sx={{
                      fontFamily: "sans-serif",
                      textTransform: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px", // ✅ fixes spacing in both RTL & LTR
                      color: "#fff",
                      bgcolor: "#503217",
                      ":hover": { bgcolor: "#72451e" },
                    }}
                  >
                    <Box
                      component="img"
                      src={button_image}
                      alt="shop"
                      sx={{ width: 18, flexShrink: 0 }}
                    />
                    {t("hero.cta")}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: {
              xs: "100%",
              lg: "40%",
            },
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={hero_image}
            alt="hero"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
