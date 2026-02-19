import { Box, Button, Grid } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import img1 from "./medical-cards/realistic-hand-sanitizer-bottle-3d-style 1.svg";
import img2 from "./medical-cards/realistic-medical-mask-with-shadows 1.svg";
import img3 from "./medical-cards/aloevera1.svg";

export default function MainCards() {
  const cards = [
    {
      title: "Hand sanitizer collection",
      subtitle: "Shop now",
      image: img1,
    },
    {
      title: "Face wash sale collection",
      subtitle: "Discover now",
      image: img3,
    },
    {
      title: "Facial mask deals save up to 50%",
      subtitle: "Discover now",
      image: img2,
    },
  ];
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <>
     <Box py="80px">
  <Grid container spacing={2} justifyContent="center" >
    {cards.map((card, index) => (
      <Grid item xs={12} sm={6} lg={4} key={index} sx={{display:'flex', flexDirection:'row', width: { xs: "100%", sm:'60%', md: "40%", lg: "32%" }}}>
        <Card sx={{ boxShadow: "none", borderRadius: "12px", height: "100%", width: "100%", margin: "0 auto" }}>
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
                 
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography sx={{fontSize:{
                  xs:"18px",
                  lg:'24px'
                }}}>{card.title}</Typography>
                <Typography sx={{fontSize:{
                  xs:'14px',
                  lg:'18px'
                }}}>
                  {card.subtitle}
                </Typography>
              </Box>
              <Box component="img" src={card.image} />
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
