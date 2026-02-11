import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Medifit_image from "../navbar/assets/Group 189.svg";
import Medifit_image_2 from "../navbar/assets/company-logo.svg"
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const pages = ["Home", "Shop", "About", "Contact", "Login", "Register"];



const settings = ["Profile", "Account", "Dashboard", "Logout"];
export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [scrolled, setScrolling]= useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
      setScrolling(window.scrollY>10)
    }
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll)

  },[])

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
        boxShadow: scrolled? 5: "none",
        paddingY: "20px",
        paddingX: "120px",
        backdropFilter: scrolled ? "blur(2px)" : "none",
        transition: "all 0.3s ease",
        zIndex: 999,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: {xs:'flex'},justifyContent:'center'}}>
          {/* Logo */}
          <Box
            component="img"
            src={Medifit_image}
            alt="Logo"
            sx={{
              height: "auto",
              mr: 2,
              maxWidth: "100%",
              display: { xs: "none", md: "block" },
            }}
          />
          <Box
            component="img"
            src={Medifit_image_2}
            alt="Logo"
            sx={{
              height: "auto",
              mr: 2,
              maxWidth: "100%",
              display: { xs: "block", md: "none" },
            }}
          />

          {/* Mobile Menu */}
          <Box
            sx={{
              
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              color:'black',
   
             
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
              <MenuIcon sx={{ fontSize: "50px",border: "2px solid #a09184", borderRadius:'8px', paddingX:'5px' }} />
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
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
            {pages.map((page) => (
              <Link
                key={page}
                component={RouterLink}
                to={`/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                underline="none"
                sx={{
                  my: 2,
                  color: "#503217",
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  textTransform: "none",
                  p: 0,
                  cursor: "pointer",
                  display: "flex",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
