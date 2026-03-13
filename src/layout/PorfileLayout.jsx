import React, { useState } from "react";
import ResponsiveDrawer from "../pages/profile/ResponsiveDrawer";
import { Outlet } from "react-router-dom";
import { Box, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

export default function PorfileLayout(MainColor,MainFont) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", textAlign:'center' }}>
      <IconButton
        onClick={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" }, position: "fixed", top: 16, left: 16, zIndex: 1200 }}
      >
        <MenuIcon />
      </IconButton>

      <ResponsiveDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          
        }}
      >
        <Toolbar />
        <Outlet  />
      </Box>
    </Box>
  );
}