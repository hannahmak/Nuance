import React from 'react';
import styled from 'styled-components';
import BannerBackUI from '../comps/Banner(BackButton)';
import ButtonAUI from '../comps/Button(Absolute)';
import NavigationUI from '../comps/Navigation';

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
const ImgCont = styled.div`
    width:100vw;
    height:100vh;
    object-fit:cover;
    overflow:hidden;
    position:relative;
`
const Img = styled.img`
    width:100%;
    height:100%;
    src: ${props=>props.src};
`
const Text = styled.h3`
    padding:20px;
    font-size:30px;
    font-weight:bold;
    color:white;
    text-transform:uppercase;
    text-align:center;
    top:80px;
    position:absolute
`

export default function HomePage() {
  const router = useRouter();
  return <Container>
    <BannerBackUI></BannerBackUI>
    <ImgCont>
        <Text>{text}</Text>
        <ButtonAUI left="20px" text="AGREE" routeTo='/disagree' ></ButtonAUI>
        <ButtonAUI left="218px" text="DISAGREE" routeTo='/agree'></ButtonAUI>
        <Img src={src}></Img>
    </ImgCont>
    <NavigationUI></NavigationUI>
  </Container>
}