import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import photo1 from "./info section/info1.svg";
import photo2 from "./info section/info2.svg";
import photo3 from "./info section/info3.svg";
import photo4 from "./info section/info4.svg";

export default function HighLightsForHome2({MainColor,MainFont}) {
     const data = [
         {
           image: photo1,
           text: "Free shipping",
         },
         {
           image: photo2,
           text: "Easy refund",
         },
         {
           image: photo3,
           text: "Online support",
         },
         {
           image: photo4,
           text: "Fexible payment",
         },
       ];
       return (
         <Box py={"80px"}>
           <Grid
             container
             sx={{
               justifyContent: "center",
               alignItems: "center",
               columnGap: "130px",
               rowGap: "70px",
               textAlign: "center",
             }}
           >
             {data.map((img, index) => (
               <Grid item xs={12} sm={6} md={3} key={index}>
                 <Box component="img" src={img.image} alt={`highlight-${index}`} />
                 <Typography
                   sx={{
                     color: MainColor,
                     fontFamily: MainFont,
                     fontSize: {
                       xs: "15px",
                       md: "22px",
                     },
                   }}
                 >
                   {img.text}
                 </Typography>
               </Grid>
             ))}
           </Grid>
         </Box>
       );
     }