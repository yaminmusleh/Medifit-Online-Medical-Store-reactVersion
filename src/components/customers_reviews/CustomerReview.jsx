import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import photo1 from "./assets/person1.svg";
import photo2 from "./assets/person2.svg";
import photo3 from "./assets/person3.svg";
import { Avatar } from "@mui/material";
import usePostReview from "../../hooks/usePostReview";

import { useParams } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

export default function CustomerReview({
  MainColor,
  MainFont,
  reviews,
  allowAddReview = false,
  productId,
}) {
  const defaultPersons = [
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

  const persons = reviews?.length ? reviews : defaultPersons;

  const { mutate: AddReview, isPending } = usePostReview();

  const ProdId = productId;

  const [comment, setComment] = useState("");

  const [rating, setRating] = useState(5);

  const handleReview = () => {
    AddReview(
      {
        productId: ProdId,
        rating,
        comment,
      },
      {
        onSuccess: () => {
          setComment("");
          console.log("success");
        },
        onError: (err) => {
          console.log("Error alert:" + err.message);
        },
      },
    );
  };
  const token = useAuthStore((state)=>state.token);
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
        mb={"30px"}
      >
        Customers Review
      </Typography>

      {allowAddReview && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          mb="40px"
          gap={2}
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <TextField
            placeholder="Add your own opinion!"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            sx={{
              width: "60%",
              "& .MuiOutlinedInput-root": {
                height: 40,
              },
            }}
          ></TextField>
          <Button
            onClick={handleReview}
            disabled={isPending || !token}
            variant="contained"
            sx={{
              bgcolor: MainColor,
              textTransform: "none",
              fontFamily: MainFont,
              color: "#fff",
              height: 40,
              ":hover": { bgcolor: "#72451e" },
            }}
          >
            {isPending ? "Submitting..." : "Add review"}
          </Button>
        </Box>
      )}
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
              mt: "auto",
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
                {person.comment || person.review}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={2}
              justifyContent={"start"}
            >
              <Avatar
                src={person.image || person.person}
                alt={person.userName || person.name}
                sx={{ width: 48, height: 48 }}
              >
                {(person.userName || person.name)?.[0]}
              </Avatar>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: MainColor,
                  fontFamily: MainFont,
                }}
              >
                {person.userName || person.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
