import image1 from "./follow-us/man-taking-a-pill.svg";
import image2 from "./follow-us/capsule.svg";
import image3 from "./follow-us/fingers-taking-a-pill.svg";
import image4 from "./follow-us/medicine.svg";
import image_insta from "./follow-us/insta.svg";
import { Box, Grid, Typography } from "@mui/material";

export default function FollowUs() {
  const images = [image1, image2, image3, image4];
  return (
    <Box sx={{ py: "60px" }} textAlign={"center"}>
      <Typography
        sx={{
          marginBottom: "60px",
          fontFamily: "poppins",
          fontSize: {
            xs: "34px",
            sm: "42px",
            md: "58px",
          },
          color: "#503217",
          fontWeight: 500,
        }}
      >
        Follow us @medifit
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="start">
        {images.map((img, index) => (
          <Grid
            item
            xs={6}
            sm={3}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 200,
                borderRadius: img === image2 ? "13px" : 0,
                cursor: "pointer",
                "&:hover .overlay": {
                  opacity: 1,
                },
                "&:hover .image_Box": {
                  filter: "brightness(80%) blur(2px)",
                  transition: "filter 0.3s ease-in-out",
                },
              }}
              onClick={() =>
                window.open("https://www.instagram.com/yamin_musleh/", "_blank")
              }
            >
              <Box
                component="img"
                className="image_Box"
                src={img}
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: img === image2 ? "13px" : 0,
                }}
              />

              <Box
                component="img"
                src={image_insta}
                alt="instaimg"
                className="overlay"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 60,
                  height: 60,
                  transform: "translate(-50%, -50%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease-in-out",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
