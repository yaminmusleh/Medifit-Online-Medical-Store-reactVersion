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
import useThemeStore from "../../store/useThemeStore";

export default function Navbar() {
  const { t } = useTranslation();
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const pages = [
    { label: t("Home"), path: "/home" },
    { label: t("Shop"), path: "/shop" },
    { label: t("About"), path: "/about" },
    { label: t("Contact"), path: "/contact" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scrolled, setScrolling] = useState(false);

  const handleOpenProfileMenu = (event) =>
    setAnchorElProfile(event.currentTarget);
  const handleCloseProfileMenu = () => setAnchorElProfile(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

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
            pauseOnHover
            draggable
            theme="light"
          />

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
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{
                sx: {
                  minWidth: 180,
                  maxWidth: 250,
                  paddingX: 1,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{ justifyContent: "center", textAlign: "center" }}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}

              <Box
                sx={{
                  px: 2,
                  py: 1,
                  width: "100%",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel>Language</InputLabel>
                  <Select
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

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {pages.map((page) => (
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
            ))}
          </Box>

          <IconButton sx={{ color: "#503217" }}>
            <SearchIcon />
          </IconButton>

          {token && (
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
          )}

          <Box>
            <IconButton
              onClick={handleOpenProfileMenu}
              sx={{ p: 0, marginRight: "7px" }}
            >
              <Avatar sx={{ width: 30, height: 30, bgcolor: "#503217" }} />
            </IconButton>

            <Menu
              anchorEl={anchorElProfile}
              open={Boolean(anchorElProfile)}
              onClose={handleCloseProfileMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {token ? (
                <>
                  <MenuItem
                    onClick={() => {
                      navigate("/profile");
                      handleCloseProfileMenu();
                    }}
                  >
                    {t("profileMenu.profile")}
                  </MenuItem>

                  <MenuItem>
                    {t("profileMenu.darkMode")}
                    <Switch
                      checked={mode === "dark"}
                      onChange={toggleTheme}
                      sx={{ marginLeft: 1 }}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={{ color: "#FF2400", fontWeight: 600 }}
                    onClick={() => {
                      logout();
                      navigate("/login");
                      handleCloseProfileMenu();
                    }}
                  >
                    Logout
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem
                    onClick={() => {
                      navigate("/login");
                      handleCloseProfileMenu();
                    }}
                  >
                    Login
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      navigate("/register");
                      handleCloseProfileMenu();
                    }}
                  >
                    Register
                  </MenuItem>

                  <MenuItem>
                    {t("profileMenu.darkMode")}
                    <Switch
                      checked={mode === "dark"}
                      onChange={toggleTheme}
                      sx={{ marginLeft: 1 }}
                    />
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>

          <FormControl
            sx={{
              display: { xs: "none", md: "block" },
              width: "120px",
            }}
          >
            <InputLabel>Language</InputLabel>
            <Select
              sx={{ width: "120px" }}
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