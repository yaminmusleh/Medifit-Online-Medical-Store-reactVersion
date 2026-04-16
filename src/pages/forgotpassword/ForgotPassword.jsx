import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

import { useTranslation } from "react-i18next";
import { ForgotPasswordSchema } from "../../validation/ForgotPasswordSchema";
import useSendCode from "../../hooks/useSendCode";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword({ MainColor, MainFont }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    mode: "onBlur",
  });

  const { mutate: sendCode, isPending } = useSendCode();
  const onSubmit = (data) => {
    sendCode(data, {
      onSuccess: () => {
        navigate("/reset-password");
      },
      onError: (error) => {
        console.error("Send code failed:", error);
      },
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 12,
        flexDirection: "column",
        gap: 7,
      }}
    >
      <Box className="Title">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {
              xs: 20,
              md: 30,
              lg: 34,
            },
            fontFamily: MainFont,
            color: MainColor,
          }}
        >
          Enter your email to reset password
        </Typography>
      </Box>

      <Box
        className="Text-fd"
        sx={{ width: {xs:"70%",sm:"50%", md:'30%'}, textAlign: "center" }}
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          sx={{ width: "100%" }}
          {...register("email")}
          label={t("login.email")}
          error={!!errors.email}
          helperText={errors.email?.message}
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
            disabled={isPending || isSubmitting}
            type="submit"
            sx={{
              width: "50%",
              alignSelf: "center",
              fontFamily: "poppins",
              textTransform: "none",
              marginTop: "20px",
              backgroundColor: "#503217",
              borderRadius: "5px",
              fontSize: "13px",
              color: "#fff",
            }}
          >
            {isPending ? "Sending..." : "Send Code"}
          </Button>
        )}
      </Box>
    </Box>
  );
}
