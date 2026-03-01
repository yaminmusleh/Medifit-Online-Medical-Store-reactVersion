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



export default function Navbar() {
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const pages = token
    ? ["Home", "Shop", "About", "Contact", "Logout"]
    : ["Home", "Shop", "About", "Contact", "Login", "Register"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [scrolled, setScrolling] = useState(false);

  const navigate = useNavigate();

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
      sx={{
        bgcolor: scrolled ? "rgba(255, 255, 255, 0.7)" : "#EEEDE7",
        boxShadow: scrolled ? 5 : "none",
        paddingY: "20px",
        paddingX: "120px",
        backdropFilter: scrolled ? "blur(2px)" : "none",
        transition: "all 0.3s ease",
        zIndex: 999,
      }}
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
            >
              {pages.map((page) => {
                if (page === "Logout") {
                  return (
                    <MenuItem
                      key="Logout"
                      onClick={() => {
                        logout();
                        handleCloseNavMenu();
                        navigate('/login');
                      }}
                    >
                      <Typography
                        textAlign="center"
                        sx={{ color: "#FF2400", fontWeight: 600 }}
                      >
                        Logout
                      </Typography>
                    </MenuItem>
                  );
                }

                return (
                  <MenuItem
                    key={page}
                    component={RouterLink}
                    to={`/${page.toLowerCase()}`}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                );
              })}
              {token && (
                <MenuItem
                  component={RouterLink}
                  to="/cart"
                  onClick={handleCloseNavMenu}
                >
                  <ShoppingCartOutlinedIcon sx={{ mr: 1 }} />
                  <Typography>Cart</Typography>
                </MenuItem>
              )}
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
              if (page === "Logout") {
                return (
                  <Link
                    key="Logout"
                    component="button"
                    onClick={() => {
                      logout();
                      navigate('/login');
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
                    Logout
                  </Link>
                );
              }

              return (
                <Link
                  key={page}
                  component={RouterLink}
                  to={`/${page.toLowerCase()}`}
                  underline="none"
                  sx={{
                    my: 2,
                    color: "#8F7D6A",
                  }}
                >
                  {page}
                </Link>
              );
            })}
          </Box>
          <IconButton sx={{ color: "#503217" }}>
            <SearchIcon />
          </IconButton>
          {token && (
            <IconButton
              component={RouterLink}
              sx={{ color: "#503217", display: { xs: "none", sm: "flex" } }}
              to="/cart"
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
