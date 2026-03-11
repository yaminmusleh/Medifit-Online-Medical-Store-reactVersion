import { Box, CircularProgress, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import image1 from "./shop-by-category/pills1.svg";
import image2 from "./shop-by-category/pills2.svg";
import image3 from "./shop-by-category/pills3.svg";
import image4 from "./shop-by-category/pills4.svg";

import shape1 from "./shop-by-category/shape1.svg";
import shape2 from "./shop-by-category/shape2.svg";
import shape3 from "./shop-by-category/shape3.svg";
import shape4 from "./shop-by-category/shape4.svg";

import useCategs from "../../hooks/useCategs";
import Loader from "../../ui/Loader";

export default function Home2Category() {
  const images = [image1, image2, image3, image4];
  const shapes = [shape1, shape2, shape3, shape4];

  const { data, isLoading, isError, error } = useCategs(4);
  //data, isLoading, isError, error takes the values from the query that we returned in useCategs

  if (isLoading) return <Loader />;
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
    className="explore-store"
      component={"shop-by-category-section"}
      sx={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        paddingBottom: "110px",
        flexDirection: "column",
        
      }}
    >
      <Container>
        <Typography
          sx={{
            color: "#503217",
            fontSize: {
              xs: "25px",
              md: "35px",
              lg: "48px",
            },
            fontFamily: "poppins",
            mb: "60px",
            mt: "130px",
            fontWeight: 700,
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
                  xs: "0 1 90%",
                  sm: "0 1 40%",
                  md: "0 1 30%",
                  lg: "1 1 20%",
                },
                borderRadius: "20px",
                height: "150px",
                boxShadow: "inherit",
                border: "1px solid #503217",
                backgroundColor: "#F2F2F2",
              }}
            >
              <CardActionArea
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 0,
                  }}
                >
                  <Box className = "typo_and_img" sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center',marginLeft: "20px",}}>
                    <Box component={"img"} src={shapes[index]} sx={{
                        width:40
                    }} />
                    <Typography
                    sx={{
                      fontSize: {
                        md: "16px",
                        xs: "14px",
                      },
                      fontFamily: "poppins",
                      color: "#503217",
                      
                    }}
                    variant="h5"
                    component="div"
                  >
                    {categs.name}
                  </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: 120,
                      height: 200,
                    }}
                  >
                    <img
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={images[index]}
                      alt="image"
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
