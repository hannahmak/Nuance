import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import TopicButtonUI from '../comps/TopicButton(survey)';
import ButtonUI from '../comps/Button';
import NextButtonUI from '../comps/NextButton';
import {useState} from 'react';

//Styled Comps
const Container = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
scroll-behavior: smooth;
`
const RowCont = styled.div
`
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

text-align:center;

`
//Variables


//Survey Page
export default function SurveyPage() {

  const router = useRouter()

  return <Container>
    <BannerUI></BannerUI>
    <HeaderCont>Pick&nbsp;<em>Three</em>&nbsp;Categories</HeaderCont>
    <TextCont>that you would like to focus on today.</TextCont>
    <RowCont>
        <TopicButtonUI bannertext="Economy" src="/Topic1.png" onClick={()=>router.push('/foryou/economy')}></TopicButtonUI>
        <TopicButtonUI bannertext="HealthCare" src="/Topic2.png" onClick={()=>router.push('/foryou/economy')}></TopicButtonUI>
        <TopicButtonUI bannertext="GENDER" src="/Topic3.png"></TopicButtonUI>
        <TopicButtonUI bannertext="COVID-19" src="/Topic4.png" onClick={()=>router.push('/foryou/economy')}></TopicButtonUI>
        <TopicButtonUI bannertext="VIOLENT CRIMES" src="/Topic5.png"></TopicButtonUI>
        <TopicButtonUI bannertext="FOREIGN POLICY" src="/Topic6.png" onClick={()=>router.push('/foryou/economy')}></TopicButtonUI>
        <TopicButtonUI bannertext="GUN POLICY" src="/Topic7.png"></TopicButtonUI>
        <TopicButtonUI bannertext="ETHNIC & RACE" src="/Topic8.png"></TopicButtonUI>
        <TopicButtonUI bannertext="CLIMATE CHANGE" src="/Topic9.png" onClick={()=>router.push('/foryou/economy')}></TopicButtonUI>
        <TopicButtonUI bannertext="IMMIGRATION" src="/Topic10.png" onClick={()=>router.push('/foryou/economy')}></TopicButtonUI>
        <TopicButtonUI bannertext="ABORTION" src="/Topic11.png"></TopicButtonUI>
        <TopicButtonUI bannertext="OTHER"></TopicButtonUI>
    </RowCont>
    <ButtonCont>
        <NextButtonUI></NextButtonUI>
    </ButtonCont>
  </Container>
}