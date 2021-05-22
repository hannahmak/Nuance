import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import BannerUI from '../comps/Banner'
import QuestionCardUI from '../comps/QuestionCard'
import NavigationUI from '../comps/Navigation'
import HelpButtonUI from '../comps/HelpButton'
import RandomButtonUI from '../comps/RandomizeButton'
import { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Container = styled.div`
  width:100%;
  height:100%;
  padding-bottom: 90px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  flex-direction:column;
  scroll-behavior: smooth;
`
const RowCont = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
`
const ButtonCont = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  margin:34px;
`
const HeaderCont = styled.h4`
  display:flex;
  text-transform: uppercase;
  flex-direction:row;
  margin-bottom:0px
`
const TextCont = styled.p`
  display:flex;
`

const RandomContainer = styled.div`
width:100%;
height:138px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-top:-20px;
`

const Line = styled.div`
width:100%;
height:1px;
background-color:#D9D9D9;
`

const TextContainer = styled.p`
font-size:13px;
`

const CarouselCont = styled.div`
display:flex;
`

export default function HomePage() {
  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <QuestionCardUI headertext="Daliy Topic" bodytext="General Motors has joined a list of growing companies to mandate that all their vehicles be electric by a certain date. Governments too, motivated 
by..." subheadertext="Electric Vehicle debate" src="/CarImage.jpg" bgcolor="#8BB09C" linecolor='#8BB09C' lineleft='0px' headingalign='right' headercolor='#8BB09C' routeTo="/questionprompt/Electric vehicles are a better option"></QuestionCardUI>
    <Carousel width='390px' showStatus="" showArrows="true">
      <CarouselCont>
        <QuestionCardUI headertext="Featured" bodytext="The discourse on whether borders should be open and free is often misunderstood. The arguments from either side seldom..." subheadertext="borders Debate" src="/BorderImageLAST.png" linewidth="188px" bgcolor="#3E3D46" linecolor='#ECCD97' lineleft='0px' headingalign='right' headercolor='#ECCD97' routeTo="/questionprompt/Countries should have open borders"></QuestionCardUI>
      </CarouselCont>
      <CarouselCont>
        <QuestionCardUI headertext="Featured" bodytext="COVID-19 has rocked the world. In some cases, countries and communities spent over a year in quarantine..." subheadertext="COVID-19 Debate" src="/COVIDImageLAST.png" linewidth="188px" bgcolor="#3E3D46" linecolor='#ECCD97' lineleft='0px' headingalign='right' headercolor='#ECCD97' routeTo="/questionprompt/COVID lock-downs are necessary and beneficial"></QuestionCardUI>
      </CarouselCont>
      <CarouselCont>
        <QuestionCardUI headertext="Featured" bodytext="Global poverty is an issue most people would like to have solved. The concept of universal basic income aims to do this..." subheadertext="Income Debate" src="/coinImageLAST.png" linewidth="199px" bgcolor="#3E3D46" linecolor='#ECCD97' lineleft='0px' headingalign='right' headercolor='#ECCD97' routeTo="/questionprompt/Universal Basic Income could solve poverty"></QuestionCardUI>
      </CarouselCont>
    </Carousel>
    <RandomContainer>
      <Line></Line>
      <TextContainer>Can't Decide? Get a Random Prompt!</TextContainer>
      <RandomButtonUI></RandomButtonUI>
    </RandomContainer>
    <NavigationUI Iconcolor1="#8BB09C"></NavigationUI>
  </Container>
}