import { Typography } from "@mui/material";
import React from "react";
import Categories from "../../categories/Categories";
import Hero from "../../hero/Hero";
import NewsLetter from "../../components/newsletter/NewsLetter";
import FollowUs from "../../components/FollowUs/FollowUs";
import CTA from "../../components/cta_section/CTA";
import MainCards from "../../components/cards_for_main/MainCards";
import Products from "../../components/products/Products";


export default function Home() {
  const color1 = "#503217";
  const font = 'poppins';
  return (
    <>
      <Categories />
      <MainCards />
      <Products MainColor={color1} MainFont={font}/>
      <CTA />
      
      
    </>
  );
}
