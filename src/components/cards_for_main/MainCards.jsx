import { Box, Button, Grid } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import img1 from "./medical-cards/realistic-hand-sanitizer-bottle-3d-style 1.svg";
import img2 from "./medical-cards/realistic-medical-mask-with-shadows 1.svg";
import img3 from "./medical-cards/aloevera1.svg";
import { Link } from "react-router-dom";
import icon1 from "./medical-cards/eye.svg";
import icon2 from "./medical-cards/bag-shopping.svg";

export default function MainCards() {
  const cards = [
    {
      title: "Hand sanitizer collection",
      subtitle: "Shop now",
      image: img1,
      icon: icon2,
    },
    {
      title: "Face wash sale collection",
      subtitle: "Discover now",
      image: img3,
      icon: icon1,
    },
    {
      title: "Facial mask deals save up to 50%",
      subtitle: "Discover now",
      image: img2,
      icon: icon1,
    },
  ];
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <>
      <Box py="80px">
        <Grid container spacing={2} justifyContent="center">
          {cards.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: { xs: "100%", sm: "60%", md: "40%", lg: "32%" },
              }}
            >
              <Card
                sx={{
                  boxShadow: "none",
                  borderRadius: "12px",
                  height: "100%",
                  width: "100%",
                  margin: "0 auto",
                  backgroundColor: "#F2F2F2",
                }}
              >
                <CardActionArea
                  onClick={() => setSelectedCard(index)}
                  data-active={selectedCard === index ? "" : undefined}
                  sx={{
                    height: "100%",
                    "&[data-active]": {
                      backgroundColor: "action.selected",
                      "&:hover": {
                        backgroundColor: "action.selectedHover",
                      },
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: {
                        xs: "column",
                        md: "row",
                      },
                      rowGap: 0.5,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        alignItems: {
                          xs: "center",
                          md: "flex-start",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "18px",
                            lg: "24px",
                          },
                          fontFamily: "poppins",
                          color: "#503217",
                          fontWeight: 600,
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Link
                        to="/shop"
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          width: "fit-content",
                          borderBottom: "2px solid #8F7D6A",
                          columnGap: "3px",
                        }}
                      >
                        <img src={card.icon} />
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "14px",
                              lg: "18px",
                            },
                            fontFamily: "poppins",
                            color: "#8F7D6A",
                            fontWeight: 500,

                            transition: "color 0.3s",
                            "&:hover": {
                              color: "#503217",
                            },
                          }}
                        >
                          {card.subtitle}
                        </Typography>
                      </Link>
                    </Box>
                    <Box
                      component="img"
                      src={card.image}
                      sx={{
                        width: {
                          xs: "50%",
                          sm: "fit-content",
                        },
                      }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
