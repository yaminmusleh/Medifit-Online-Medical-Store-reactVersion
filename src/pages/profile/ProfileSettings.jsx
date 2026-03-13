import React from "react";
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
} from "@mui/material";
import useThemeStore from "../../store/useThemeStore";
import { useTranslation } from "react-i18next";

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
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontFamily: "poppins",
                    backgroundColor: "#503217",
                  }}
                >
                  {t("profileSettings.updatepass")}
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}
