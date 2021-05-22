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
let Counter = 0
let Selection = {
  Economy:false,
  Healthcare:false,
  Gender:false,
  Covid:false,
  Violentcrimes:false,
  Foreignpolicy:false,
  Gunpolicy:false,
  Ethicrace:false,
  Climatechange:false,
  Immigration:false,
  Abortion:false,
  Other:false,
}

//Survey Page
export default function SurveyPage() {
  
    const [NextButton, SetNextButton] = useState(false);
    const [buttonstate1, setButtonState1] = useState(false);  
    const HandleClickButtonColor1 = () =>{
        setButtonState1(!buttonstate1);
        if(buttonstate1 === false)
        {
          Counter++
          Selection.Economy= true
        }
        else{
          Counter--
          Selection.Economy= false
        }
        if(Counter === 3)
        {
          SetNextButton(true)
        }
        else{
          SetNextButton(false)
        }
      }

    const [buttonstate2, setButtonState2] = useState(false);   
    const HandleClickButtonColor2= () =>{
        setButtonState2(!buttonstate2);
        if(buttonstate2 === false)
        {
          Counter++
          Selection.Healthcare= true
        }
        else{
          Counter--
          Selection.Healthcare= false
        }
        if(Counter === 3)
        {
          SetNextButton(true)
        }
        else{
          SetNextButton(false)
        }
      }

    const [buttonstate3, setButtonState3] = useState(false);  
    const HandleClickButtonColor3= () =>{
        setButtonState3(!buttonstate3);
        if(buttonstate3 === false)
        {
          Counter++
          Selection.Covid= true

        }
        else{
          Counter--
          Selection.Covid= false

        }
        if(Counter === 3)
        {
          SetNextButton(true)
        }
        else{
          SetNextButton(false)
        }
      }

      const [buttonstate4, setButtonState4] = useState(false);  
      const HandleClickButtonColor4 = () =>{
          setButtonState4(!buttonstate4);
          if(buttonstate4 === false)
          {
            Counter++
            Selection.Foreignpolicy= true
          }
          else{
            Counter--
            Selection.Foreignpolicy= false
          }
          if(Counter === 3)
          {
            SetNextButton(true)
          }
          else{
            SetNextButton(false)
          }
        }

        const [buttonstate5, setButtonState5] = useState(false);  
        const HandleClickButtonColor5 = () =>{
            setButtonState5(!buttonstate5);
            if(buttonstate5 === false)
            {
              Counter++
              Selection.Climatechange= true
            }
            else{
              Counter--
              Selection.Climatechange= false
            }
            if(Counter === 3)
            {
              SetNextButton(true)
            }
            else{
              SetNextButton(false)
            }
          }

          const [buttonstate6, setButtonState6] = useState(false);  
          const HandleClickButtonColor6 = () =>{
              setButtonState6(!buttonstate6);
              if(buttonstate6 === false)
              {
                Counter++
                Selection.Immigration= true
              }
              else{
                Counter--
                Selection.Immigration= false
              }
              if(Counter === 3)
              {
                SetNextButton(true)
              }
              else{
                SetNextButton(false)
              }
            }
  

    const HandleNext= () =>{
      sessionStorage.setItem('Selection', JSON.stringify(Selection))
      router.push('/foryou')
    }

  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <HeaderCont>Pick&nbsp;<em>Three</em>&nbsp;Categories</HeaderCont>
    <TextCont>that you would like to focus on today.</TextCont>
    <RowCont>
        <TopicButtonUI bannertext="Economy" src="/Topic1.png" onClick={HandleClickButtonColor1} bgcolor={buttonstate1 ? '#8BB09C' : '#3E3D46'}></TopicButtonUI>
        <TopicButtonUI bannertext="HealthCare" src="/Topic2.png" onClick={HandleClickButtonColor2} bgcolor={buttonstate2 ? '#8BB09C' : '#3E3D46'}></TopicButtonUI>
        <TopicButtonUI bannertext="GENDER" src="/Topic3.png" inactive='grayscale(100%)' text='#999999' inactivetext="block"></TopicButtonUI>
        <TopicButtonUI bannertext="COVID-19" src="/Topic4.png" onClick={HandleClickButtonColor3} bgcolor={buttonstate3 ? '#8BB09C' : '#3E3D46'}></TopicButtonUI>
        <TopicButtonUI bannertext="VIOLENT CRIMES" src="/Topic5.png" inactive='grayscale(100%)' text='#999999' inactivetext="block"></TopicButtonUI>
        <TopicButtonUI bannertext="FOREIGN POLICY" src="/Topic6.png" onClick={HandleClickButtonColor4} bgcolor={buttonstate4 ? '#8BB09C' : '#3E3D46'}></TopicButtonUI>
        <TopicButtonUI bannertext="GUN POLICY" src="/Topic7.png" inactive='grayscale(100%)' text='#999999' inactivetext="block"></TopicButtonUI>
        <TopicButtonUI bannertext="ETHNIC & RACE" src="/Topic8.png" inactive='grayscale(100%)' text='#999999' inactivetext="block"></TopicButtonUI>
        <TopicButtonUI bannertext="CLIMATE CHANGE" src="/Topic9.png" onClick={HandleClickButtonColor5} bgcolor={buttonstate5 ? '#8BB09C' : '#3E3D46'}></TopicButtonUI>
        <TopicButtonUI bannertext="IMMIGRATION" src="/Topic10.png" onClick={HandleClickButtonColor6} bgcolor={buttonstate6 ? '#8BB09C' : '#3E3D46'}></TopicButtonUI>
        <TopicButtonUI bannertext="ABORTION" src="/Topic11.png" inactive='grayscale(100%)' text='#999999' inactivetext="block"></TopicButtonUI>
        <TopicButtonUI bannertext="OTHER" inactive='grayscale(100%)' text='#999999' inactivetext="block"></TopicButtonUI>
    </RowCont>
    <ButtonCont>
        {NextButton === true && <NextButtonUI onClick={HandleNext}></NextButtonUI>}
        {NextButton === false && <TextCont>Please Pick Three Categories Before Continuing</TextCont>}
        {NextButton === false && <ButtonUI hoverColorBG="#3E3D46" opacity="30%" routeTo=""></ButtonUI>}
    </ButtonCont>
  </Container>
}