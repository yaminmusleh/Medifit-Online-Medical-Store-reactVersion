import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import WhatToExpect from "../components/about_what_to_expect/WhatToExpect";
import AboutTop from '../components/about_top/AboutTop'
import AboutUs from '../components/about_us/AboutUs'
import HighlightsRow from "../components/highlights_row/HighlightsRow";

export default function AboutLayout() {
    const color1 = "#503217";
  const font = 'poppins';
  return (
    <>
      <Navbar />
      <Container>
        <AboutTop MainColor={color1} />
        <AboutUs MainColor={color1} MainFont={font} />
        <HighlightsRow MainColor={color1} MainFont={font} />
      </Container>

      
        <WhatToExpect MainColor={color1} MainFont={font}/>
     

      <Container>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
}
