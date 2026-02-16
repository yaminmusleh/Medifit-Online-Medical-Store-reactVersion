import { Box, CircularProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import useCategs from "../hooks/useCategs";
import image1 from "./shop-by-categ-imgs/frame1.svg";
import image2 from "./shop-by-categ-imgs/frame2.svg";
import image3 from "./shop-by-categ-imgs/frame3.svg";
import image4 from "./shop-by-categ-imgs/frame4.svg";
import image5 from "./shop-by-categ-imgs/frame5.svg";
import image6 from "./shop-by-categ-imgs/frame6.svg";

export default function Categories() {
  const number = [32, 20, 30, 35, 25, 35, 30];
  const images = [image1, image2, image3, image4, image5, image6];

  const { data, isLoading, isError, error } = useCategs();
  //data, isLoading, isError, error takes the values from the query that we returned in useCategs

  if (isLoading)
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  if (isError)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
        }}
      >
        <Typography component={"h1"} variant="h1">
          {error.message}
        </Typography>
      </Box>
    );

  return (
    <Box
      component={"shop-by-category-section"}
      sx={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          color: "#503217",
          fontSize: "48px",
          fontFamily: "poppins",
          mb: "60px",
          mt: "130px",
        }}
      >
        Shop By Category
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          width: "100%",
        }}
      >
        {data.map((categs, index) => (
          <Card
            key={categs.id}
            sx={{
              flex: {
                xs: "1 1 40%",
                sm: "1 1 30%",
                md: "1 1 20%",
                lg: "1 1 15%",
              },
              borderRadius: "20px",
              height: "200px",
              boxShadow: "inherit",
              border: "1px solid #503217",
              backgroundColor: "#EEEDE7",
            }}
          >
            <CardActionArea
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      width: "80%",
                    }}
                    src={images[index % images.length]}
                    alt="image"
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: "poppins",
                    color: "#503217",
                    mt: "auto",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {categs.name}
                </Typography>
                <Typography
                  sx={{
                    color: "#8F7D6A",
                    fontFamily: "poppins",
                    fontSize: "13.5px",
                  }}
                >
                  {number[index % number.length]} Items
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
