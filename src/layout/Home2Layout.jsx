import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Home2Hero from '../pages/home2/Home2Hero'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Save from '../components/idk_what_to_name_it/Save'
import CustomerReview from '../components/customers_reviews/CustomerReview'
import Slider from '../components/slider/Slider'
import Home2Category from '../components/home2category/Home2Category'
import HealthInsights from '../components/healthInsights/HealthInsights'
import HomeProductsUi from '../components/HomeProductUi.jsx/HomeProductsUi'


export default function Home2Layout({MainColor,MainFont}) {
  const color1 = "#503217";
  const font = 'poppins';
  const hover_color = "#794c24";
  return (
    <>
    <Navbar/>
    <Home2Hero MainColor={MainColor} MainFont={MainFont}/>
    <Slider/>
    <Container>
        <Outlet/>
        <HomeProductsUi MainColor={color1} MainFont={font}/>
    </Container>
    <Home2Category/>
    <Save />
      <Container>
        <CustomerReview MainColor={color1} MainFont={font}/>
        <HealthInsights MainColor={color1} MainFont={font} hover={hover_color} />
      </Container>
    <Footer/>
    </>
  )
}
