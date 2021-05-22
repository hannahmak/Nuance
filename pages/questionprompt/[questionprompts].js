import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerBackUI from '../../comps/Banner(BackButton)';
import ButtonAUI from '../../comps/Button(Absolute)';
import NavigationUI from '../../comps/Navigation';

const Container = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
scroll-behavior: smooth;
overflow: hidden;
position:absolute;
`
const ImgCont = styled.div
`
    width:100vw;
    height:100vh;
    object-fit:cover;
    overflow:hidden;
    position:relative;
`
const Img = styled.img
`
  width:100%;
  height:100%;
`
const Text = styled.h3
`
display: flex;
left: 5%;
right: 5%;
justify-content: center;
align-items: center;
padding:20px;
font-size:30px;
font-weight:bold;
color:white;
text-transform:uppercase;
text-align:center;
top:80px;
position:absolute
`

const ButtonCont = styled.div`
    display: flex;
    position: absolute;
    top: 300px;
    left: 5%;
    right: 5%;
    justify-content: center;
    align-items: center;
`

var questionpromptdata = 
{
    questiontext:'',
    questionimg:'',
    agreesrc:'',
    disagreesrc:''
}

var CheckState = 
{
    agree:false,
    disagree:false
}

export default function QuestionPrompts() {

    const router = useRouter();
    const {questionprompts} = router.query;

    function HandleAgree()
    {
        CheckState.agree = true
        CheckState.disagree = false
        router.push(questionpromptdata.disagreesrc)
        sessionStorage.setItem('CheckState', JSON.stringify(CheckState))
        sessionStorage.setItem('questionprompts', JSON.stringify(questionprompts))
    }

    function HandleDisagree()
    {
        CheckState.agree = false
        CheckState.disagree = true
        router.push(questionpromptdata.agreesrc)
        sessionStorage.setItem('CheckState', JSON.stringify(CheckState))
        sessionStorage.setItem('questionprompts', JSON.stringify(questionprompts))
    }

    if(questionprompts === 'Electric vehicles are a better option')
    {
        questionpromptdata.questiontext ='Electric vehicles are a better option'
        questionpromptdata.questionimg = '/CarImage1.png'
        questionpromptdata.agreesrc = '/disagree/Electric vehicles are a better option'
        questionpromptdata.disagreesrc = '/agree/Electric vehicles are a better option'
    }

    if(questionprompts === 'Countries should have open borders')
    {
        questionpromptdata.questiontext ='Countries should have open borders'
        questionpromptdata.questionimg = '/BorderImage.png'
        questionpromptdata.agreesrc = '/disagree/Countries should have open borders'
        questionpromptdata.disagreesrc = '/agree/Countries should have open borders'
    }

    if(questionprompts === 'COVID lock-downs are necessary and beneficial')
    {
        questionpromptdata.questiontext ='COVID lock-downs are necessary and beneficial'
        questionpromptdata.questionimg = '/CovidImage.png'
        questionpromptdata.agreesrc = '/disagree/COVID lock-downs are necessary and beneficial'
        questionpromptdata.disagreesrc = '/agree/COVID lock-downs are necessary and beneficial'
    }

    if(questionprompts === 'Universal Basic Income could solve poverty')
    {
        questionpromptdata.questiontext ='Universal Basic Income could solve poverty'
        questionpromptdata.questionimg = '/ui_income_image.png'
        questionpromptdata.agreesrc = '/disagree/Universal Basic Income could solve poverty'
        questionpromptdata.disagreesrc = '/agree/Universal Basic Income could solve poverty'
    }

  return <Container>
    <BannerBackUI></BannerBackUI>
    
    <ImgCont>
        <Text>{questionpromptdata.questiontext}</Text>
        <ButtonCont>
            <ButtonAUI text="AGREE" onClick={HandleAgree}></ButtonAUI>
            <ButtonAUI text="DISAGREE" onClick={HandleDisagree}></ButtonAUI>
        </ButtonCont>
        <Img src={questionpromptdata.questionimg}></Img>
    </ImgCont>
    
    <NavigationUI></NavigationUI>
  </Container>
}