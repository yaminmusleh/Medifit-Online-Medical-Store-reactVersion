import { Box, Button, Grid, Typography } from "@mui/material";
import hero_image from "./hero-index-html/Hero.webp";
import button_image from "./hero-index-html/bag.svg";

export default function Hero() {
  return (
    <Box sx={{ paddingBottom: "60px" }}>
      <Grid
        container
        spacing={4}
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
              fontFamily: "poppins",
              color: "#503217",
              fontWeight: 700,
            }}
            gutterBottom
          >
            Your trusted care now and always
          </Typography>
          <Typography
            variant="span"
            fontSize={"18px"}
            fontFamily={"sans-serif"}
            color="#8F7D6A"
            marginBottom={"60px"}
          >
            For the best results, align your health needs with your medication
            plan.
          </Typography>
          <Box>
            <Button
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
        </Grid>
        {/* right side */}
        <Grid item xs={12} md={6} sx={{ width: { xs: "100%", md: "50%" } }}>
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
  );
}
