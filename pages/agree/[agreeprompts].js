import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../../comps/Banner';
import ProgressBarUI from '../../comps/ProgressBar';
import NavigationUI from '../../comps/Navigation';
import ButtonUI from '../../comps/Button';
import BannerBackUI from '../../comps/Banner(BackButton)';

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

const AgreeImg = styled.img`
    width: 100vw;
`
const Text = styled.p`
    display: flex;
    text-align: center;
    justify-content:center;
    align-items:center;
    padding: 20px;
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap'); 
    font-family: 'Arimo', sans-serif;
    font-size: 18px;
    line-height: 20.7px;
    font-style: normal;
    font-weight: bold;
    color: #3E3D46;
`

var agreedata =
{
    imgsrc:'',
}

var routing = 
{
    path:'',

}

export default function AgreePage() {
  
    const router = useRouter();
    const {agreeprompts} = router.query;

    if(agreeprompts === 'Electric vehicles are a better option')
    {
        agreedata.imgsrc ='/disagree.png'
        routing.path = '/secondquestionprompt/Electric vehicles are a better option'
    }

    if(agreeprompts === 'Countries should have open borders')
    {
        agreedata.imgsrc ='/disagree_boarders.png'
        routing.path = '/secondquestionprompt/Countries should have open borders'
    }

    if(agreeprompts === 'COVID lock-downs are necessary and beneficial')
    {
        agreedata.imgsrc ='/disagree_lockdown.png'
        routing.path = '/secondquestionprompt/COVID lock-downs are necessary and beneficial'
    }

    if(agreeprompts === 'Universal Basic Income could solve poverty')
    {
        agreedata.imgsrc ='/disagree_poverty.png'
        routing.path = '/secondquestionprompt/Universal Basic Income could solve poverty'
    }

  return <Container>
    <BannerBackUI></BannerBackUI>
    <ProgressBarUI id='bar'></ProgressBarUI>
    <AgreeImg src={agreedata.imgsrc}></AgreeImg>
    <Text>Not sure if you noticed, but you <br></br> just read the opposing article</Text>
    <ButtonUI text='FINISH!' routeTo={routing.path}></ButtonUI>
    <NavigationUI></NavigationUI>
  </Container>
}