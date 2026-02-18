import { Typography } from "@mui/material";
import React from "react";
import Categories from "../../categories/Categories";
import Hero from "../../hero/Hero";
import NewsLetter from "../../components/newsletter/NewsLetter";
import FollowUs from "../../components/FollowUs/FollowUs";

export default function Home() {
  return (
    <>
      <Categories />
      <NewsLetter />
      <FollowUs />
    </>
  );
}
