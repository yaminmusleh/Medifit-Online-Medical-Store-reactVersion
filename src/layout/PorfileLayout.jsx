import React, { useState } from "react";
import ResponsiveDrawer from "../pages/profile/ResponsiveDrawer";
import { Outlet } from "react-router-dom";
import { Box, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

export default function PorfileLayout(MainColor, MainFont) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { i18n } = useTranslation();

  const isRTL = i18n.language === "ar";

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box
      dir={isRTL ? "rtl" : "ltr"}
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          top: 16,
          left: isRTL ? "auto" : 16,
          right: isRTL ? 16 : "auto",
          zIndex: 1200,
        }}
      >
        <MenuIcon />
      </IconButton>

      <ResponsiveDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          textAlign: isRTL ? "right" : "left",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}