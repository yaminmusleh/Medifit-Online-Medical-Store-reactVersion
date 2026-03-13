import React from "react";
import useProfile from "../../hooks/useProfile";
import Loader from "../../ui/Loader";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ProfileInfo() {
  const {t,i18n}= useTranslation();
  const isRTL = i18n.language === "ar";
  const theme=useTheme();
  const isDark = theme.palette.mode==="dark";
  const { data, isError, isLoading, error } = useProfile();
  if (isLoading) return <Loader />;
  if (isError)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
        }}
      >
        <Typography component={"h1"} variant="h1">
          {error.message}
        </Typography>
      </Box>
    );
  console.log(data);

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead >
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
                  pb:4
                , fontFamily:'poppins', fontWeight:600, color:isDark?"#fff":'#503217'
                }}
              >
                {t("profile.personalInfo")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow >
              <TableCell align={isRTL ? "right" : "left"} sx={{fontSize:{xs:'14px', md:23},fontFamily:'cursive',fontWeight:600,pb:"30px"}}> {t("profile.fullName")}:</TableCell>
              <TableCell align={isRTL ? "right" : "left"} sx={{fontSize:{xs:'14px', md:23}, fontFamily:'cursive',fontWeight:600,}}>{data.fullName}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell align={isRTL ? "right" : "left"} sx={{fontSize:{xs:'14px', md:23},fontFamily:'cursive',fontWeight:600,pb:"30px"}}>{t("profile.email")}:</TableCell>
              <TableCell align={isRTL ? "right" : "left"} sx={{fontSize:{xs:'14px', md:23}, fontFamily:'cursive',fontWeight:600,pb:"30px"}}>{data.email}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell align={isRTL ? "right" : "left"} sx={{fontSize:{xs:'14px', md:23},fontFamily:'cursive',fontWeight:600,pb:"30px"}}>{t("profile.phoneNumber")}:</TableCell>
              <TableCell align={isRTL ? "right" : "left"} sx={{fontSize:{xs:'14px', md:23}, fontFamily:'cursive',fontWeight:600,pb:"30px"}}>+970{data.phoneNumber}</TableCell>
            </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
