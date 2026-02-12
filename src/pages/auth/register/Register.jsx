import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
export default function Register() {
  return (
    <Box
      component={"section"}
      className="register-form"
      sx={{ paddingY: "70px" }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          rowGap: 5,
        }}
      >
        <Typography
          component={"h1"}
          variant="h3"
          sx={{
            fontFamily: "poppins",
            color: "#503217",
            fontSize: { xs: "25px", sm: "35px", md: "40px" },
            fontWeight: 600,
          }}
        >
          Welcome to Medifit — Your Partner in Smarter Health
        </Typography>

        <Box
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "30px",
            width: { xs: "90%", sm: "450px", md: "600px" },
          }}
        >
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <TextField id="outlined-basic" label="User Name" variant="outlined" />
          <TextField id="outlined-basic" label="Full Name" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Phone number"
            variant="outlined"
          />
          <Button
            variant="contained"
            sx={{
              width: "40%",
              alignSelf: "center",
              fontFamily: "poppins",
              textTransform: "none",
              marginTop: "20px",
              backgroundColor: "#503217",
              borderRadius: "5px",
              fontSize:"15px"
            }}
          >
            Sign Up!
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
