import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";


export default function OldCategories() {


  const [categories, setCategories] = useState([]);
  const [isLoader, setLoader] = useState(true);
  const [isError, setError] = useState("");
  const getCats = async () => {
    try {
      const response = await axios.get(
        `https://knowledgeshop.runasp.net/api/Categories`,
      );

      setCategories(response.data.response);
    } catch (error) {
      setError("...Error 404...");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    // runs after the first render (calls the api after executing return)
    getCats();
  }, []);

  if (isLoader) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
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
          {isError}
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {categories.map((categs) => (
        <Card
          key={categs.id}
          sx={{
            flex: {
              xs: "1 1 100%",
              sm: "1 1 45%",
              md: "1 1 30%",
              lg: "1 1 20%",
            },
            borderRadius: "20px",
            boxShadow: "inherit",
            border: "1px solid #503217",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "poppins",
                  color: "#503217",
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {categs.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
