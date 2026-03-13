import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import person1 from "./our-happy-clients/adam.svg";
import person2 from "./our-happy-clients/ethan.svg";
import person3 from "./our-happy-clients/james.svg";
import person4 from "./our-happy-clients/lily.svg";
import quote from "./our-happy-clients/quote.svg";
import { useTranslation } from "react-i18next";

export default function OurHappyClients({ MainColor, MainFont }) {
  const {t}=useTranslation();
  const persons_and_reviews = [
  { personImg: person3, ...t('ourHappyClients.reviewers.0', { returnObjects: true }) },
  { personImg: person1, ...t('ourHappyClients.reviewers.1', { returnObjects: true }) },
  { personImg: person2, ...t('ourHappyClients.reviewers.2', { returnObjects: true }) },
  { personImg: person4, ...t('ourHappyClients.reviewers.3', { returnObjects: true }) },
];

  const [selectedRev, setSelectedRev] = useState(persons_and_reviews[0].review);
  return (
    <Box
      py={"120px"}
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Box className="title">
        <Typography
          sx={{ color: MainColor, fontFamily: MainFont, fontSize: 48 }}
        >
          {t("ourHappyClients.title")}
        </Typography>
        <Typography sx={{ marginTop: "20px", fontFamily: "cursive" }}>
          {t("ourHappyClients.subtitle")}
        </Typography>
      </Box>

      <Box
        className="review-box"
        sx={{
          backgroundColor: "#F2F2F2",
          borderRadius: "17px",
          p: 4,
          minHeight: "200px",
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={quote}
          alt="quote"
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            width: 80,
            height: 80,
          }}
        />
        <Typography
          sx={{ fontFamily: MainFont, fontSize: {
            xs:14, md:17
          }, color: "#8F7D6A" }}
        >
          {selectedRev}
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        {persons_and_reviews.map((person, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card
              onClick={() => setSelectedRev(person.review)}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                backgroundColor: "transparent",
                boxShadow: "none",
                cursor: "pointer",
                borderRadius:"12px",
                "&:hover": {
                  outline: `2px solid ${MainColor}`,
                },
              }}
            >
              <Avatar
                src={person.personImg}
                alt={person.person}
                sx={{ width: 60, height: 60, mr: 2 }}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "start",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "18px",
                    },
                    fontFamily: MainFont,
                    color: MainColor,
                  }}
                >
                  {person.person}
                </Typography>
                <Typography
                  sx={{
                    color: "#8F7D6A",
                    fontSize: {
                      xs: "15px",
                      sm: "17px",
                    },
                    fontFamily: MainFont,
                  }}
                >
                  {person.occupation}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
