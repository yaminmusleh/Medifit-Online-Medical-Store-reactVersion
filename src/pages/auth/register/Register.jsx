import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, CircularProgress, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../../validation/RegisterSchema";
import { useTranslation } from "react-i18next";

export default function Register() {
  const [serverErrors, setServerErrors] = useState([]);
  const { t } = useTranslation();

  //i moved the logic into a js file

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
    mode: "onBlur",
  });

  const registerForm = async (value) => {
    try {
      const response = await axios.post(
        `https://knowledgeshop.runasp.net/api/auth/Account/Register`,
        value,
      );
    } catch (error) {
      setServerErrors(
        error.response?.data?.errors || [t("register.serverError")],
      );
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
          {t("register.title")}
        </Typography>

        {serverErrors.length > 0 && (
          <Box>
            {serverErrors.map((error, index) => (
              <Typography key={index}>{error}</Typography>
            ))}
          </Box>
        )}
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
            label={t("register.email")}
            variant="outlined"
            error={errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            {...register("password")}
            label={t("register.password")}
            variant="outlined"
            error={errors.password}
            helperText={errors.password?.message}
          />

          <TextField
            {...register("userName")}
            label={t("register.userName")}
            variant="outlined"
            error={errors.userName}
            helperText={errors.userName?.message}
          />

          <TextField
            {...register("fullName")}
            label={t("register.fullName")}
            variant="outlined"
            error={errors.fullName}
            helperText={errors.fullName?.message}
          />

          <TextField
            {...register("phoneNumber")}
            label={t("register.phoneNumber")}
            variant="outlined"
            error={errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
          {isSubmitting ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
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
              {t("register.button")}
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}
