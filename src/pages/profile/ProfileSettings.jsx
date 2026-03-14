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
import useThemeStore from "../../store/useThemeStore";
import { useTranslation } from "react-i18next";
import useUpdatePassword from "../../hooks/useUpdatePassword";

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
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontFamily: "poppins",
                    backgroundColor: "#503217",
                  }}
                >
                  {t("profileSettings.updateemail")}
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align={isRTL ? "right" : "left"} colSpan={3}>
                <Box sx={{display:'flex', alignItems:'center', gap:3, flexWrap:'wrap'}}>
                  {showFields && (
                  <>
                    <TextField
                      name="CurrentPassword"
                      label="Current Password"
                      type="password"
                      value={passwords.CurrentPassword}
                      onChange={handleChange}
                    />

                    <TextField
                      name="NewPassword"
                      label="New Password"
                      type="password"
                      value={passwords.NewPassword}
                      onChange={handleChange}
                    />

                    <TextField
                      name="ConfirmNewPassword"
                      label="Confirm Password"
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
                    fontFamily:'poppins',
                    textTransform: "none",
                    backgroundColor: "#503217",
                    color: "#fff",
                  }}
                >
                  {isPending
                    ? "Updating..."
                    :isSuccess
                    ? "Updated ✓"
                    : showFields
                      ? "All done?"
                      : "Change your password?"}
                </Button>
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}
