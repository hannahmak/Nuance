import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerBackUI from '../../comps/Banner(BackButton)';
import TopicHeaderUI from '../../comps/TopicHeader'; 
import QuestionButton from '../../comps/QuestionButton';
import NavigationUI from '../../comps/Navigation';
import { useEffect, useState } from 'react';
import HelpButtonUI from '../../comps/HelpButton';

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
const Text = styled.p`
font-size:14px;
margin:51px 0px 6px 0px;
text-align:center;
color: #3E3D46;
    
`
const Icon = styled.img`
margin:20px 0px 24px 0px;
    
`
const Line = styled.div`
    width:100%;
    height:1px;
    background:#D6D6D6;
`
var topics = 
{
    econ:null,
    health:null,
    gender:null,
    covid:null,
    crime:null,
    foreign:null,
    guns:null,
    race:null,
    climate:null,
    immig:null,
    abort:null,
    fun:null,
};

var questiontext = 
{
    question1:'',
    question2:'',
    question3:'',
    question4:'',
}

var header = 
{
    text:'',
    src:''
}

var routing = 
{
    path1:'',
    path2:'',
    path3:'',
    path4:'',
}

export default function Topics() {

    const router = useRouter();
    const {topics} = router.query;


    if(topics === 'economy')
    {
        questiontext.question1= 'Electric vehicles are a better option.'
        questiontext.question2= 'Countries should have open borders'
        questiontext.question3= 'COVID lock-downs are necessary and beneficial'
        questiontext.question4= 'Universal Basic Income could solve poverty'
        header.text = 'Economy'
        header.src = '/topic1large.png'
        routing.path1 = '/questionprompt/Electric vehicles are a better option'
        routing.path2 = '/questionprompt/Countries should have open borders'
        routing.path3 = '/questionprompt/COVID lock-downs are necessary and beneficial'
        routing.path4 = '/questionprompt/Universal Basic Income could solve poverty'
    }

    if(topics === 'healthcare')
    {
        questiontext.question1= 'COVID lock-downs are necessary and beneficial'
        questiontext.question2= 'null'
        questiontext.question3= 'null'
        questiontext.question4= 'null'
        header.text = 'Healthcare'
        header.src = '/HealthCareQuestion.png'
        routing.path1 = '/questionprompt/COVID lock-downs are necessary and beneficial'
    }

    if(topics === 'covid-19')
    {
        questiontext.question1= 'COVID lock-downs are necessary and beneficial'
        questiontext.question2= 'null'
        questiontext.question3= 'null'
        questiontext.question4= 'null'
        header.text = 'Covid-19'
        header.src = '/CovidQuestion.png'
        routing.path1 = '/questionprompt/COVID lock-downs are necessary and beneficial'
    }

    if(topics === 'foreign-policy')
    {
        questiontext.question1= 'Countries should have open borders'
        questiontext.question2= 'null'
        questiontext.question3= 'null'
        questiontext.question4= 'null'
        header.text = 'Foreign-Policy'
        header.src = '/ForeignQuestion.png'
        routing.path1 = '/questionprompt/Countries should have open borders'
    }

    if(topics === 'climate-change')
    {
        questiontext.question1= 'Electric vehicles are a better option.'
        questiontext.question2= 'null'
        questiontext.question3= 'null'
        questiontext.question4= 'null'
        header.text = 'Climate Change'
        header.src = '/ClimateChangeQuestion.png'
        routing.path1 = '/questionprompt/Electric vehicles are a better option'
    }

    if(topics === 'immigration')
    {
        questiontext.question1= 'Countries should have open borders.'
        questiontext.question2= 'null'
        questiontext.question3= 'null'
        questiontext.question4= 'null'
        header.text = 'Immigration'
        header.src = '/topic10.png'
        routing.path1 = '/questionprompt/Countries should have open borders'
    }

    if(topics === 'funfriday')
    {
        questiontext.question1= 'Cats are better than dogs.'
        questiontext.question2= 'Coke is better than Pepsi.'
        questiontext.question3= 'Daydreaming is better than Nightdreaming'
        questiontext.question4= 'Road runner is the bad guy'
        header.text = 'Fun Friday'
        header.src = '/fun_friday_big.png'
        routing.path1 = '/questionprompt/Countries should have open borders'
    }


    console.log(questiontext.question2)
    return <Container>
        
        <BannerBackUI></BannerBackUI>
        <TopicHeaderUI bannertext={header.text} src={header.src}></TopicHeaderUI>
        <Text>Pick a Prompt that interests you</Text>
        <Icon src='/ArrowDown.png'></Icon>
        <QuestionButton text={questiontext.question1} routeTo={routing.path1}></QuestionButton>
        {questiontext.question2 !== 'null' && <QuestionButton text={questiontext.question2} routeTo={routing.path2}></QuestionButton>}
        {questiontext.question3 !== 'null' && <QuestionButton text={questiontext.question3} routeTo={routing.path3}></QuestionButton>}
        {questiontext.question4 !== 'null' && <QuestionButton text={questiontext.question4} routeTo={routing.path4}></QuestionButton>}
        <Line></Line>
        <Text>Stay Tuned! We are always adding <br></br> new prompts for you to look at!</Text>
        <NavigationUI></NavigationUI>
  </Container>
}