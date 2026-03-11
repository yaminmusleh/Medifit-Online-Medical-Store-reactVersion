import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Medifit_image from "../navbar/assets/Group 189.svg";
import Medifit_image_2 from "../navbar/assets/company-logo.svg";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import useCard from "../../hooks/useCard";
import {
  Avatar,
  Badge,
  FormControl,
  InputLabel,
  Select,
  Switch,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
import { toast, ToastContainer } from "react-toastify";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import useThemeStore from "../../store/useThemeStore";

export default function Navbar() {
  const { t } = useTranslation();
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const pages = token
    ? [
        { label: t("Home"), path: "/home" },
        { label: t("Shop"), path: "/shop" },
        { label: t("About"), path: "/about" },
        { label: t("Contact"), path: "/contact" },
        { label: t("Logout"), path: "logout" },
      ]
    : [
        { label: t("Home"), path: "/home" },
        { label: t("Shop"), path: "/shop" },
        { label: t("About"), path: "/about" },
        { label: t("Contact"), path: "/contact" },
        { label: t("Login"), path: "/login" },
        { label: t("Register"), path: "/register" },
      ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);

  const handleOpenProfileMenu = (event) =>
    setAnchorElProfile(event.currentTarget);
  const handleCloseProfileMenu = () => setAnchorElProfile(null);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [scrolled, setScrolling] = useState(false);

  const navigate = useNavigate();

  const { data } = useCard();
  const cartCountNumber = data?.items?.length || 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        bgcolor: scrolled
          ? theme.palette.mode === "dark"
            ? "rgba(33, 37, 41, 0.7)"
            : "rgba(238, 237, 231, 0.7)"
          : theme.palette.mode === "dark"
            ? "#212529"
            : "#EEEDE7",
        color: theme.palette.mode === "dark" ? "#f2f2f2" : "#503217",
        boxShadow: scrolled ? 5 : "none",
        paddingY: "20px",
        paddingX: "120px",
        backdropFilter: scrolled ? "blur(2px)" : "none",
        transition: "all 0.3s ease",
        zIndex: 999,
      })}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnHover
            draggable
            theme="light"
          />

          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: { xs: "none", md: "block" },
              mr: 2,
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={Medifit_image}
              alt="Logo"
              sx={{ height: "auto", maxWidth: "100%" }}
            />
          </Box>

          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: { xs: "block", md: "none" },
              mr: 2,
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={Medifit_image_2}
              alt="Logo"
              sx={{ height: "44px", width: "auto" }}
            />
          </Box>

          {/* Mobile Menu */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              color: "black",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon
                sx={{
                  fontSize: "50px",
                  border: "2px solid #a09184",
                  borderRadius: "8px",
                  paddingX: "5px",
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                sx: {
                  minWidth: 180,
                  maxWidth: 250,
                  paddingX: 1,
                },
              }}
            >
              {pages.map((page) => {
                if (page.path === "logout") {
                  return (
                    <MenuItem
                      key="Logout"
                      component="button"
                      onClick={() => {
                        logout();
                        navigate("/login");
                      }}
                      underline="none"
                      sx={{
                        my: 2,
                        color: "#FF2400",
                        cursor: "pointer",
                        background: "none",
                        border: "none",
                        font: "inherit",
                        fontWeight: 600,
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      {page.label}
                    </MenuItem>
                  );
                }

                return (
                  <MenuItem
                    key={page.path}
                    component={RouterLink}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                    sx={{
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                );
              })}
              {token && (
                <MenuItem
                  component={RouterLink}
                  to="/cart"
                  onClick={handleCloseNavMenu}
                  sx={{
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Badge
                    badgeContent={cartCountNumber}
                    sx={{
                      "& .MuiBadge-badge": {
                        minWidth: "14px",
                        height: "17px",
                        fontSize: "0.7rem",
                        backgroundColor: "#503217",
                        color: "white",
                      },
                    }}
                    overlap="circular"
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  >
                    <ShoppingCartOutlinedIcon sx={{ mr: 1 }} />
                  </Badge>

                  <Typography>Cart</Typography>
                </MenuItem>
              )}
              <Box
                sx={{
                  px: 2,
                  py: 1,
                  width: "100%",
                  display: { xs: "block", md: "none" },
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
              </Box>
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {pages.map((page) => {
              if (page.path === "logout") {
                return (
                  <Link
                    key="logout"
                    component="button"
                    onClick={() => {
                      logout();
                      navigate("/login");
                    }}
                    underline="none"
                    sx={{
                      my: 2,
                      color: "#FF2400",
                      cursor: "pointer",
                      background: "none",
                      border: "none",
                      font: "inherit",
                      fontWeight: 600,
                    }}
                  >
                    {page.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={page.path}
                  component={RouterLink}
                  to={page.path}
                  underline="none"
                  sx={{
                    my: 2,
                    color: "#8F7D6A",
                  }}
                >
                  {page.label}
                </Link>
              );
            })}
          </Box>
          <IconButton sx={{ color: "#503217" }}>
            <SearchIcon />
          </IconButton>
          {token && (
            <>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <Badge
                  badgeContent={cartCountNumber}
                  sx={{
                    "& .MuiBadge-badge": {
                      minWidth: "14px",
                      height: "17px",
                      fontSize: "0.7rem",
                      backgroundColor: "#503217",
                      color: "white",
                    },
                  }}
                  overlap="circular"
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <IconButton
                    component={RouterLink}
                    sx={{ color: "#503217" }}
                    to="/cart"
                  >
                    <ShoppingCartOutlinedIcon />
                  </IconButton>
                </Badge>
              </Box>

              <Box>
                <IconButton
                  onClick={handleOpenProfileMenu}
                  sx={{ p: 0, marginRight: "7px" }}
                >
                  <Avatar
                    sx={{ width: 30, height: 30, bgcolor: "#503217" }}
                  ></Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorElProfile}
                  open={Boolean(anchorElProfile)}
                  onClose={handleCloseProfileMenu}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <MenuItem
                    onClick={() => {
                      navigate("/profile");
                      handleCloseProfileMenu();
                    }}
                  >
                    Profile
                  </MenuItem>

                  <MenuItem>
                    Dark Mode
                    <Switch
                      checked={mode == "dark"}
                      onChange={toggleTheme}
                      sx={{ marginLeft: 1 }}
                    />
                  </MenuItem>
                </Menu>
              </Box>
            </>
          )}
          <FormControl
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              width: "120px",
            }}
          >
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              sx={{ width: "120px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Language"
              value={i18n.language}
              onChange={(e) => {
                const lang = e.target.value;

                if (lang === "en") {
                  toast.success("Refresh for a better experience!");
                } else {
                  toast.success("حدث الصفحة لتجربة أمتع!");
                }

                i18n.changeLanguage(lang);
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="ar">العربية</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
