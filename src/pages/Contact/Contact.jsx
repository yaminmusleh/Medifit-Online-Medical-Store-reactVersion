import React from 'react'
import Invitation from '../../components/about_invitation/Invitation'
import FrequentQuestions from '../../components/frequentQuestions/FrequentQuestions'

export default function Contact({MainColor,MainFont}) {
  return (
    <>
    <FrequentQuestions MainColor={MainColor} MainFont = {MainFont}/>
    <Invitation/>
    </>
  )
}
