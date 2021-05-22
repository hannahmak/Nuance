import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerBackUI from '../comps/Banner(BackButton)';
import HeaderBannerUI from '../comps/HeaderBanner';
import ProfilePictureUI from '../comps/ProfilePicture';
import NextButtonUI from '../comps/NextButton';
import ButtonUI from '../comps/Button';

const Container = styled.div`
    width:100%;
    height:100%;
    padding-bottom: 40px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    scroll-behavior: smooth;
`

const Text = styled.p`
    margin: 0;
    margin-bottom: 30px;
    margin-left: 30px;
    margin-right: 30px;
    font-family: Arimo;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
`

const CreditPicturesCont = styled.div`
    display: flex;
    margin-top: 15px;
    margin-bottom: 40px;
`
export default function AboutPage() {

  const router = useRouter();

  return <Container>
      <BannerBackUI></BannerBackUI>
      <HeaderBannerUI text="our goal"></HeaderBannerUI>
      <Text>Offer multiple perspectives to difficult topics and encourage others to think differently.</Text>
      <HeaderBannerUI text="about nuance" bgcolor="#3E3D46"></HeaderBannerUI>
      <Text>Nuance was developed as part of an educational project based on creating an application that promoted awareness surrounding select topics. </Text>
      <Text>The developers of Nuance chose to focus on Social Awareness, hoping to educate others on important topics and challenge the way we think about social issues.</Text>
      <Text>Most apps are designed to feed us content that they we expect to engage with, resulting in showing us more of what we already believe or like. This can lead to get stuck in our own opinions. Nuance is here to challenge that.</Text>
      <HeaderBannerUI text="credits" bgcolor="#3E3D46"></HeaderBannerUI>
      <CreditPicturesCont>
        <ProfilePictureUI name='Kevin Adlparvar' img='/kevin.png'></ProfilePictureUI>
        <ProfilePictureUI name='Ashley Cant' img='/ashley.png'></ProfilePictureUI>
        <ProfilePictureUI name='Dawson Gosse' img='/dawson.png'></ProfilePictureUI>
        <ProfilePictureUI name='Hannah MacPherson' img='/hannah.png'></ProfilePictureUI>
      </CreditPicturesCont>
      <ButtonUI text="BACK" routeTo='/'></ButtonUI>
  </Container>
}