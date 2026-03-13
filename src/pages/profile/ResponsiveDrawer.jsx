import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import useProfile from "../../hooks/useProfile";
import Loader from "../../ui/Loader";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

export default function ResponsiveDrawer({ mobileOpen, handleDrawerToggle }) {
  const { t } = useTranslation();
  const menuItems = [
    { text: t("profileMenu.overview", "Overview"), path: "/profile" },
    {
      text: t("profileMenu.info", "Profile Info"),
      path: "/profile/profileinfo",
    },
    { text: t("profileMenu.settings", "Settings"), path: "/profile/settings" },
    { text: t("profileMenu.backHome", "Back Home"), path: "/" },
  ];
  const { data, isError, isLoading, error } = useProfile();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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

  const drawerContent = (
    <Box sx={{ textAlign: "center", py: 3 }}>
      <Avatar
        sx={{
          width: 60,
          height: 60,
          margin: "0 auto 10px",
          bgcolor: "#503217",
          color:'#fff'
        }}
      >
        {data?.fullName?.[0] || "U"}
      </Avatar>
      <Typography variant="h6">{data.fullName}</Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        {data.email}
      </Typography>
      <Divider />
      <List>
        {menuItems.map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={path}
              sx={{
                "&.active": {
                  backgroundColor: "transparent",
                  color: isDark ? "#fff" : "#000",
                },
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {!isMobile && (
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </Box>
  );
}
