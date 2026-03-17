import React from 'react'
import Invitation from '../../components/about_invitation/Invitation'
import FrequentQuestions from '../../components/frequentQuestions/FrequentQuestions'
import ContactForm from '../../components/contactForm/ContactForm'

export default function Contact({MainColor,MainFont}) {
  return (
    <>
    <ContactForm MainColor={MainColor} MainFont = {MainFont}/>
    <FrequentQuestions MainColor={MainColor} MainFont = {MainFont}/>
    <Invitation/>
    </>
  )
}
