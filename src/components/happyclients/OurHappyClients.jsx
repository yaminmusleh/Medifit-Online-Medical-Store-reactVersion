import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import person1 from "./our-happy-clients/adam.svg";
import person2 from "./our-happy-clients/ethan.svg";
import person3 from "./our-happy-clients/james.svg";
import person4 from "./our-happy-clients/lily.svg";
import quote from "./our-happy-clients/quote.svg";

export default function OurHappyClients({ MainColor, MainFont }) {
  const persons_and_reviews = [
    {
      personImg: person3,
      person: "James Wilson",
      occupation: "Manager",
      review:
        "I’m so impressed with this online medical store. The product selection is extensive and the prices are great. I found everything i needed in one place. The ordering process was easy, delivery was prompt, and the items arrived in perfect condition. Plus, the customer service team was incredibly helpful.",
    },
    {
      personImg: person1,
      person: "Henry Adams",
      occupation: "CEO",
      review:
        "This online medical store exceeded my expectations. The website is user-friendly, the product range is outstanding, and the delivery was extremely fast. I appreciated the attention to detail in packaging, and the support team answered all my queries promptly. I’ll definitely be returning for future purchases.",
    },
    {
      personImg: person2,
      person: "Ethan Harris",
      occupation: "Business Manager",
      review:
        "I’ve tried several online medical stores, and this one stands out. The selection of products is impressive, prices are fair, and checkout was simple. My order arrived quickly and in perfect condition, and the customer service team went above and beyond to ensure everything was right. Highly recommend!",
    },
    {
      personImg: person4,
      person: "Lily Baker",
      occupation: "Product Manager",
      review:
        "I had a fantastic experience shopping here. The product variety is extensive, the website is easy to navigate, and my order arrived sooner than expected. Every item was well-packaged, and the support team was friendly and knowledgeable. I’m extremely satisfied and will shop here again.",
    },
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
          Our happy clients
        </Typography>
        <Typography sx={{marginTop:'20px', fontFamily:'cursive'}}>
          Click on them to see their opinions!
        </Typography>
      </Box>

      <Box
        className="review-box"
        sx={{
          backgroundColor: "#F2F2F2",
          borderRadius: "15px",
          p: 4,
          minHeight: "200px",
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
           position: "relative"
          

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
        <Typography sx={{ fontFamily: MainFont, fontSize: 17, color:'#8F7D6A' }}>{selectedRev}</Typography>
      </Box>

      <Grid
        container
        spacing={4}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        {persons_and_reviews.map((person, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card
            onClick={()=>setSelectedRev(person.review)}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                backgroundColor: "transparent",
                boxShadow: "none",
                cursor:"pointer"
                , "&:hover":{
                  outline:`2px solid ${MainColor}`
                }
               
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
