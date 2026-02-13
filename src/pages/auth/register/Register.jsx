import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../../validation/RegisterSchema";
export default function Register() {
  //i moved the logic into a js file

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const registerForm = async (value) => {
    try {
      const response = await axios.post(
        `https://knowledgeshop.runasp.net/api/auth/Account/Register`,
        value,
      );
    } catch (error) {
      alert("Oops... and Error got caught, try again later.");
    }
  };

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
          onSubmit={handleSubmit(registerForm)} // i always call registerForm inside handleSubmit
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "30px",
            width: { xs: "90%", sm: "450px", md: "600px" },
          }}
        >
          <TextField
            {...register("email")}
            label="Email"
            variant="outlined"
            error={errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            {...register("password")}
            label="Password"
            variant="outlined"
            error={errors.password}
            helperText={errors.password?.message}
          />

          <TextField
            {...register("userName")}
            label="User Name"
            variant="outlined"
            error={errors.userName}
            helperText={errors.userName?.message}
          />

          <TextField
            {...register("fullName")}
            label="Full Name"
            variant="outlined"
            error={errors.fullName}
            helperText={errors.fullName?.message}
          />

          <TextField
            {...register("phoneNumber")}
            label="Phone number"
            variant="outlined"
            error={errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "40%",
              alignSelf: "center",
              fontFamily: "poppins",
              textTransform: "none",
              marginTop: "20px",
              backgroundColor: "#503217",
              borderRadius: "5px",
              fontSize: "15px",
            }}
          >
            Sign Up!
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
