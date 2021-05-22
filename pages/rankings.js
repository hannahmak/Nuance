import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import ButtonUI from '../comps/Button'
import NavigationUI from '../comps/Navigation'
import ResultScaleUI from '../comps/ResultScale'
import BannerBackUI from '../comps/Banner(BackButton)'
import ProgressBarUI from '../comps/ProgressBar'
import ButtonNextRandomUI from '../comps/ButtonNextRandom'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";

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
const HeadCont = styled.div`
display:flex;
flex-direction:column;
`

const HeaderText = styled.p`
  font-family: Arimo;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 41px;
  color: #3D3E46;
`

const BodyTextCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 240px;
  width: 421px;
  background-image: url("/ranking_header.svg");
  background-position: center;
  background-size: cover;
`
const BodyHeader =  styled.h2`
  margin: 0;
  padding-left: 33px;
  padding-right: 15px;
  position: relative;
  bottom: 25px;
  font-family: Arimo;
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
`
const  BodyText = styled.p`
  margin: 0;
  padding-left: 33px;
  padding-right: 15px;
  position: relative;
  bottom: 25px;
  font-family: Arimo;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 25px;
  color: #FFFFFF;
`

const PercentCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
height: 770px;
width: 500px;
background-image: url(${props=>props.bgimg});
background-position: center;
background-size: cover;
`
const NumberCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-image: url(${props=>props.bg});
  background-repeat: no-repeat;
  height: 95px;
  width: 330px;
`

const NumberText = styled.p`
  position: relative;
  top: -100px;
  right: 30px;
  font-family: Arimo;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 83px;
  color: #3D3E46;
`

const NumberCaption = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: Arimo;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 41px;
  color: #3D3E46;
`

const ButtonCont = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-evenly;
  margin-top:100px;
`

const GraphCont = styled.div`
  width:280px;
`


export default function Rankings() {

  if(process.browser){
    var CS= sessionStorage.getItem('CheckState');
    var CheckState = JSON.parse(CS);
    var QP= sessionStorage.getItem('questionprompts');
    var questionprompts = JSON.parse(QP);
 }

  const router = useRouter();
  return <Container>
    <BannerBackUI></BannerBackUI>
    <ProgressBarUI></ProgressBarUI>
    <HeadCont>
        <HeaderText>The Results Are In</HeaderText>
    </HeadCont>
    <BodyTextCont>
      <BodyHeader>Where do you stand?</BodyHeader>
      <BodyText>Everyone has different opinions that are equally important. Find out where you stand compared to others </BodyText>
    </BodyTextCont>
    <PercentCont bgimg={"/ranking_percentbg1.svg"}>
      <GraphCont>
      <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 70 : 0;
              return (
        <CircularProgressbar value={percentage} text={`${percentage}%`}  styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `#8BB09C`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
              // Rotate the path
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: '#C7E0D2',
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Rotate the trail
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the text
            text: {
              // Text color
              fill: '#3E3D46',
              // Text size
              fontSize: '24px',
              // Font
              fontFamily: 'Arimo',
              // Font weight
              fontWeight:'bold',
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: 'none',
            },
          }}/>
          );
        }}
      </VisibilitySensor>
      </GraphCont>
    </PercentCont>
    <NumberCont bg={"/ranking_blob1.svg"}>
      <NumberText>70%</NumberText>
    </NumberCont>
    <NumberCaption>CHANGED THEIR OPINION</NumberCaption>
    <PercentCont bgimg={"/ranking_percentbg2.svg"}>
    <GraphCont>
      <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 60 : 0;
              return (
        <CircularProgressbar value={percentage} text={`${percentage}%`}  styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `#E1E1E1`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
              // Rotate the path
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: '#9597a1',
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Rotate the trail
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the text
            text: {
              // Text color
              fill: '#fff',
              // Text size
              fontSize: '24px',
              // Font
              fontFamily: 'Arimo',
              // Font weight
              fontWeight:'bold',
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: 'none',
            },
          }}/>
          );
        }}
      </VisibilitySensor>
      </GraphCont>
    </PercentCont>
    <NumberCont bg={"/ranking_blob2.svg"}>
      <NumberText>60%</NumberText>
    </NumberCont>
    <NumberCaption>AGREED</NumberCaption>
    <PercentCont bgimg={"/ranking_percentbg3.svg"}>
    <GraphCont>
      <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 40 : 0;
              return (
        <CircularProgressbar value={percentage} text={`${percentage}%`}  styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `#e1e1e1`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
              // Rotate the path
              transform: 'rotate(0.25turn)',
              
              transformOrigin: 'center center',
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: '#AFB7C1',
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Rotate the trail
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the text
            text: {
              // Text color
              fill: '#fff',
              // Text size
              fontSize: '24px',
              // Font
              fontFamily: 'Arimo',
              // Font weight
              fontWeight:'bold',
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: 'none',
            },
          }}/>
          );
        }}
      </VisibilitySensor>
      </GraphCont>
    </PercentCont>
    <NumberCont bg={"/ranking_blob2.svg"}>
      <NumberText>40%</NumberText>
    </NumberCont>
    <NumberCaption>DISAGREED</NumberCaption>
    <ButtonCont>
        <ButtonUI text="Other Opinion" routeTo='/disagree/Electric vehicles are a better option'></ButtonUI>
        <ButtonNextRandomUI text="Next Question"></ButtonNextRandomUI>
    </ButtonCont>
    <NavigationUI></NavigationUI>
  </Container>
}