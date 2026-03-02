import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import photo1 from "./assets/person1.svg";
import photo2 from "./assets/person2.svg";
import photo3 from "./assets/person3.svg";

export default function CustomerReview({ MainColor, MainFont }) {
  const persons = [
    {
      review:
        "B12 Medicine keeps me energized and focused all day. A true lifesaver for vitality and wellness!",
      person: photo1,
      name: "Olivia Garcia",
    },
    {
      review:
        "I’ve regained my energy and feel amazing thanks to B12 Medicine. Highly recommend for health and stamina!",
      person: photo2,
      name: "Sophia Brown",
    },
    {
      review:
        "As a vegetarian, B12 Medicine keeps my energy up and my health on track. Perfect for natural support!",
      person: photo3,
      name: "Ethan Harris",
    },
  ];
  return (
    <Box py={"60px"}>
      <Typography
        sx={{
          fontSize: {
            xs: "22px",
            md: "48px",
          },
          fontFamily: MainFont,
          color: MainColor,
          fontWeight: 600,
        }}
        align="center"
        mb={"81px"}
      >
        Customers Review
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {persons.map((person, index) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            key={index}
            sx={{
              width: {
                xs: "90%",
                md: "70%",
                lg: "31%",
              },
            }}
          >
            <Box
              mb={"20px"}
              p={"20px"}
              sx={{
                backgroundColor: "#F2F2F2",
                borderRadius: "19px 19px 19px 0",
              }}
            >
              <Typography
                sx={{
                  color: "#8F7D6A",
                  fontSize: "17px",
                  fontFamily: "sans-serif",
                }}
              >
                {person.review}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={2}
              justifyContent={"start"}
            >
              <img src={person.person} alt={person.name} />
              <Typography
                sx={{
                  fontSize: "18px",
                  color: MainColor,
                  fontFamily: MainFont,
                }}
              >
                {person.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
