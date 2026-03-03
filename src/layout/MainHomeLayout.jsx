import Navbar from "../components/navbar/Navbar";

import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import { Container } from "@mui/material";
import Hero from "../hero/Hero";
import FollowUs from "../components/FollowUs/FollowUs.jsx";
import NewsLetter from "../components/newsletter/NewsLetter.jsx";
import ExplpreOurStore from "../components/explorestore/ExploreOurStore.jsx";

export default function MainHomeLayout() {
  const color1 = "#503217";
  const font = "poppins";
  return (
    <>
      <Navbar />
      <Hero />

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
      <ExplpreOurStore MainColor={color1} MainFont={font} />
      <NewsLetter />
      <Container>
        <FollowUs />
      </Container>
      <Footer />
    </>
  );
}
