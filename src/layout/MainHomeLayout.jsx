
import Navbar from "../components/navbar/Navbar";

import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import { Container } from "@mui/material";
import Hero from "../hero/Hero";

export default function MainHomeLayout() {
  return (
    <>
      <Navbar />
      <Hero/>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: { xs: "center", md: "start" },
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
