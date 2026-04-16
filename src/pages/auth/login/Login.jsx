import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, CircularProgress, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../../validation/LoginSchema";
import useAuthStore from "../../../store/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import authinstance from "../../../api/authAxiosInstance";

export default function Login() {
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();
  const [serverError, setServerError] = useState([]);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur",
  });

  const LoginForm = async (value) => {
    try {
      const response = await authinstance.post(`auth/Account/Login`, value);
      if (response.status == 200) {
        toast.success(t("login.success"));
        setToken(response.data.accessToken);
        navigate("/");
      }
    } catch (error) {
      toast.error(t("login.serverError"));
      setServerError(error.response?.data?.errors || ["something went wrong"]);
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
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
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
          {t("login.title")}
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
          {t("login.subtitle")}
        </Typography>

        {serverError.length > 0 && (
          <Box>
            {serverError.map((err, index) => (
              <Typography key={index}>{err}</Typography>
            ))}
          </Box>
        )}
        <Box
          component={"form"}
          onSubmit={handleSubmit(LoginForm)} // i always call LoginForm inside handleSubmit
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "30px",
            width: { xs: "90%", sm: "450px", md: "500px" },
          }}
        >
          <TextField
            {...register("email")}
            label={t("login.email")}
            variant="outlined"
            error={errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            {...register("password")}
            type="password"
            label={t("login.password")}
            variant="outlined"
            error={errors.password}
            helperText={errors.password?.message}
          />
          <Typography
          onClick={()=>navigate('/forgot-password')}
            sx={{
              textAlign: "start",
              fontSize: "13px",
              fontFamily: "poppins",
              cursor: "pointer",
              borderBottom: "2px solid",
              width: "fit-content",
              color: "violet",
            }}
          >
            {t("login.typo")}
          </Typography>

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
                color: "#fff",
              }}
            >
              {t("login.button")}
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}
