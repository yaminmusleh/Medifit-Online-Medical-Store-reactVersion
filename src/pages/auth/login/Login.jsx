import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Login() {
  let LoginSchema = yup.object({
    email: yup
      .string()
      .email("Email must be a valid email.")
      .required("Email is required.")
      .matches(
        /^[A-Za-z0-9._%+-]+@(gmail\.com|yahoo\.com|icloud\.com)$/,
        "Please enter a valid Gmail, Yahoo, or iCloud email address.",
      ),
    password: yup
      .string()
      .required("Password is required.")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^[A-Z][A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/,
        "Password must begin with a capital letter and may include letters, numbers, and special characters.",
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const LoginForm = async (value) => {
    try {
      const response = await axios.post(
        `https://knowledgeshop.runasp.net/api/auth/Account/Login`,
        value,
      );
    } catch (error) {
      alert("Oops... and Error got caught, try again later.");
    }
  };
  return (
    <Box
      component={"section"}
      className="Login-form"
      sx={{ paddingY: "140px" }}
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
          Welcome back!
        </Typography>
        <Typography
          component={"h1"}
          variant="h3"
          sx={{
            fontFamily: "poppins",
            color: "#8F7D6A",
            fontSize: { xs: "10px", sm: "14px", md: "17px" },
            marginBottom: "12px",
          }}
        >
          Enter your Credentials to access your account
        </Typography>

        <Box
          component={"form"}
          onSubmit={handleSubmit(LoginForm)} // i always call registerForm inside handleSubmit
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "30px",
            width: { xs: "90%", sm: "450px", md: "500px" },
          }}
        >
          <TextField
            {...register("email")}
            label="Email"
            variant="outlined"
            error={errors.email}
            helperText = {errors.email?.message}
          />

          <TextField
            {...register("password")}
            label="Password"
            variant="outlined"
            error={errors.password}
            helperText = {errors.password?.message}
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
            Log in!
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
