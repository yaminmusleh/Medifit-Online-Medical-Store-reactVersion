import React, { useState } from "react";
import useResetPassword from "../../hooks/useResetPassword";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ResetPassword({ MainColor, MainFont }) {
 
    const { t } = useTranslation();
  const { mutate: reset, isPending, isSubmitting } = useResetPassword();
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    code: "",
  });
 const isFormValid = formData.code && formData.email && formData.newPassword;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    reset(formData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 12,
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Box className="Verify">
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
          The code has been sent. Kindly check your email.
        </Typography>
      </Box>

      <Box
        className="Text-fd"
        sx={{
          width: {
            xs: "100%",
            sm: "50%",
            md: "30%",
          },
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        component={"form"}
        onSubmit={handleSubmit}
      >
        <TextField
        name="email"
          sx={{ width: "100%" }}
          label={t("login.email")}
          onChange={handleChange}
        />
        <TextField
        name="newPassword"
          sx={{ width: "100%" }}
          label="New password"
          value={formData.newPassword}
          onChange={handleChange}
        />
        <TextField
        name="code"
          sx={{ width: "100%" }}
          label="Verification code"
          value={formData.code}
          onChange={handleChange}
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
            disabled={!isFormValid|| isPending || isSubmitting}
            type="submit"
            sx={{
              width: "fit-content",
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
            {isPending ? "Updating..." : "Update Password"}
          </Button>
        )}
      </Box>
    </Box>
  );
}
