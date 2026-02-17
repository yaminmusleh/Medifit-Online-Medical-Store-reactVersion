import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Hero from "../hero/Hero";

export default function MainHomeLayout() {
  return (
    <>
          <Navbar />
          
          <Container sx={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center',textAlign:{xs:'center',md:'start'}}}>
            
            <Outlet/>
          </Container>
          <Footer />
        </>
  )
}
