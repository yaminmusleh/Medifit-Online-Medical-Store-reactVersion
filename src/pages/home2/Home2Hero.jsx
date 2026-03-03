import { Box, Button, Container, Grid, Typography } from "@mui/material";
import hero_image from "./hero/Mask group.webp";
import photo from "./hero/photo1.svg";
import { useNavigate } from "react-router-dom";
import button_image from "../../hero/hero-index-html/bag.svg";

export default function Hom2Hero({ MainColor, MainFont }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "#E8E6DE",
        paddingTop: {
          xs: "100px",
          lg: 0,
        },
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
        {/* LEFT SIDE */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#E8E6DE",
            width: {
              xs: "100%",
              md: "70%",
              lg: "55%",
            },
            padding: {
              xs: 0,
              lg: "70px",
            },
            marginLeft: {
              xs: "20px",
              lg: "50px",
            },
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: {
                xs: "center",
                lg: "start",
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
              From wellness to care all in one place
            </Typography>

            <Box
              className="Second_image"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row", lg: "row" },
                alignItems: { xs: "center", md: "flex-end" },
                gap: "31px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box component={"img"} src={photo} />
              <Box
                className="typo_button_box"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "50px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: MainColor,
                    fontFamily: "sans-serif",
                  }}
                >
                  Your health is in good hands with Medifit. We’re here to
                  provide you with a wide range of healthcare essentials,
                  carefully selected.
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
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "#503217",
                      ":hover": { bgcolor: "#72451e" },
                    }}
                    startIcon={<img src={button_image} alt="shop" />}
                  >
                    Shop now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>

        {/* RIGHT SIDE */}
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
