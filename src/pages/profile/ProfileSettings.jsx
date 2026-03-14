import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Switch,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableFooter,
  Button,
  TextField,
} from "@mui/material";
import link_img from "../../components/newsletter/newsletter-imgs/link-external.svg";
import useThemeStore from "../../store/useThemeStore";
import { useTranslation } from "react-i18next";
import useUpdatePassword from "../../hooks/useUpdatePassword";
import { useNavigate } from "react-router-dom";
import useUpdateEmail from "../../hooks/useUpdateEmail";

export default function ProfileSettings() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const mode = useThemeStore((state) => state.mode);
  const theme = useTheme();
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const isDark = theme.palette.mode === "dark";

  const [showFields, setShowFields] = useState(false);

  const [passwords, setPasswords] = useState({
    CurrentPassword: "",
    NewPassword: "",
    ConfirmNewPassword: "",
  });

  const navigate = useNavigate();

  const { mutate: changePassword, isPending, isSuccess } = useUpdatePassword();

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleButtonClick = () => {
    if (!showFields) {
      setShowFields(true);
      return;
    }

    changePassword(passwords);
  };
  const [email, setEmail] = useState({
    NewEmail: "",
  });

  const {
    mutate: updateEmail,
    isPending: emailPending,
    isSuccess: updateSucceed,
  } = useUpdateEmail();

  const [showEmailField, setShowEmailField] = useState(false);

  const handleEmailChange = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };
  const handleEmailSubmit = () => {
    if (!showEmailField) {
      setShowEmailField(true);
      return;
    }
    updateEmail(email);
  };

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={3}
                align="center"
                sx={{
                  fontSize: {
                    xs: 18,
                    md: 27,
                    lg: 38,
                  },
                  pb: 4,
                  fontFamily: "poppins",
                  fontWeight: 600,
                  color: isDark ? "#fff" : "#503217",
                }}
              >
                {t("profileSettings.title")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                align={isRTL ? "right" : "left"}
                sx={{
                  fontSize: { xs: "14px", md: 23 },
                  fontFamily: "cursive",
                  fontWeight: 600,
                  pb: "30px",
                }}
              >
                {t("profileSettings.mode")}:
              </TableCell>
              <TableCell
                align={isRTL ? "right" : "left"}
                sx={{
                  fontSize: { xs: "14px", md: 23 },
                  fontFamily: "cursive",
                  fontWeight: 600,
                  pb: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: 18 },
                    fontFamily: "cursive",
                  }}
                >
                  {t("profileSettings.light")}
                </Typography>
                <Switch
                  checked={mode == "dark"}
                  onChange={toggleTheme}
                  sx={{ marginLeft: 1 }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: 18 },
                    fontFamily: "cursive",
                  }}
                >
                  {t("profileSettings.dark")}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align={isRTL ? "right" : "left"}
                sx={{
                  fontSize: { xs: "14px", md: 23 },
                  fontFamily: "cursive",
                  fontWeight: 600,
                  pb: "30px",
                }}
              >
                {t("profileSettings.language")}:
              </TableCell>

              <TableCell
                align="left"
                sx={{
                  fontSize: { xs: "14px", md: 23 },
                  fontFamily: "cursive",
                  fontWeight: 600,
                  pb: "30px",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="lang-select-label">Language</InputLabel>

                  <Select
                    labelId="lang-select-label"
                    label="Language"
                    value={i18n.language}
                    onChange={(e) => changeLanguage(e.target.value)}
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="ar">العربية</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell align={isRTL ? "right" : "left"} colSpan={3}>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  {showEmailField && (
                    <TextField
                      name="NewEmail"
                      label={t("profileSettings.newEmail")}
                      value={email.NewEmail}
                      onChange={handleEmailChange}
                    />
                  )}

                  <Button
                    variant="contained"
                    onClick={handleEmailSubmit}
                    disabled={emailPending || updateSucceed}
                    sx={{
                      fontFamily: "poppins",
                      textTransform: "none",
                      backgroundColor: "#503217",
                      color: "#fff",
                    }}
                  >
                    {emailPending
                      ? t("profileSettings.updating")
                      : updateSucceed
                        ? t("profileSettings.updated")
                        : showEmailField
                          ? t("profileSettings.allDone")
                          : t("profileSettings.updateemail")}
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align={isRTL ? "right" : "left"} colSpan={3}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    flexWrap: "wrap",
                  }}
                >
                  {showFields && (
                    <>
                      <TextField
                        name="CurrentPassword"
                        label={t("profileSettings.currentPassword")}
                        type="password"
                        value={passwords.CurrentPassword}
                        onChange={handleChange}
                      />

                      <TextField
                        name="NewPassword"
                        label={t("profileSettings.newPassword")}
                        type="password"
                        value={passwords.NewPassword}
                        onChange={handleChange}
                      />

                      <TextField
                        name="ConfirmNewPassword"
                        label={t("profileSettings.confirmPassword")}
                        type="password"
                        value={passwords.ConfirmNewPassword}
                        onChange={handleChange}
                      />
                    </>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleButtonClick}
                    disabled={isPending || isSuccess}
                    sx={{
                      fontFamily: "poppins",
                      textTransform: "none",
                      backgroundColor: "#503217",
                      color: "#fff",
                    }}
                  >
                    {isPending
                      ? t("profilesettings.updating")
                      : isSuccess
                        ? t("profileSettings.updated")
                        : showFields
                          ? t("profileSettings.allDone")
                          : t("profileSettings.updatepass")}
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ paddingTop: 4 }}
                align={isRTL ? "right" : "left"}
                colSpan={3}
              >
                <Button
                  variant="contained"
                  onClick={() => navigate(`/profile/privacypolicy`)}
                  sx={{
                    cursor: "pointer",
                    textTransform: "none",
                    backgroundColor: isDark ? "#000" : "#37474F",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      color: "#fff",

                      gap: 1,
                    }}
                  >
                    {t("profileSettings.privacyPolicy")}{" "}
                    <img src={link_img} alt="external"></img>
                  </Typography>
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}
