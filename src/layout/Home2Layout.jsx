import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Home2Hero from '../pages/home2/Home2Hero'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function Home2Layout({MainColor,MainFont}) {
  return (
    <>
    <Navbar/>
    <Home2Hero MainColor={MainColor} MainFont={MainFont}/>
    <Container>
        <Outlet/>
    </Container>
    <Footer/>
    </>
  )
}
