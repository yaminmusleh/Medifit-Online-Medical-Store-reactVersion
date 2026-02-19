import { Typography } from "@mui/material";
import React from "react";
import Categories from "../../categories/Categories";
import Hero from "../../hero/Hero";
import NewsLetter from "../../components/newsletter/NewsLetter";
import FollowUs from "../../components/FollowUs/FollowUs";
import CTA from "../../components/cta_section/CTA";
import MainCards from "../../components/cards_for_main/MainCards";

export default function Home() {
  return (
    <>
      <Categories />
      <MainCards />
      <CTA />
      <NewsLetter />
      <FollowUs />
    </>
  );
}
