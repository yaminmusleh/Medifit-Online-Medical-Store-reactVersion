import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import hero_image from "./hero-index-html/Hero.webp";
import button_image from "./hero-index-html/bag.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <Box className="explore-store" dir={isRTL ? "rtl" : "ltr"}>
      <Container sx={{ paddingTop: "40px" }}>
        <Box sx={{ paddingBottom: "60px" }}>
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {/*left side*/}

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                width: { xs: "100%", md: "40%" },
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                component={"h1"}
                sx={{
                  fontSize: {
                    xs: "28px",
                    sm: "36px",
                    md: "48px",
                    lg: "56px",
                  },
                  textAlign:isRTL?"right":'left',
                  fontFamily: "poppins",
                  color: "#503217",
                  fontWeight: 700,
                }}
                gutterBottom
              >
                {t("hero.title")}
              </Typography>
              <Typography
                variant="span"
                fontSize={"18px"}
                fontFamily={"sans-serif"}
                color="#8F7D6A"
                marginBottom={"60px"}
              >
                {t("hero.subtitle")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "start" },
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={() => navigate("/shop")}
                  variant="contained"
                  sx={{
                    fontFamily: "sans-serif",
                    textTransform: "none",
                    color: isDark ? "#fff" : "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap:"5px",
                    bgcolor: "#503217",
                    ":hover": { bgcolor: "#72451e" },
                  }}
                  
                >
                 <img src={button_image} alt="shop" /> {t("hero.shopNow")}
                </Button>
              </Box>
            </Grid>

            {/* right side */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                width: { xs: "100%", md: "50%" },
                alignItems: { xs: "center", md: "flex-end" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box
                component="img"
                src={hero_image}
                alt="hero_img"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
