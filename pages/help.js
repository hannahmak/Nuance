import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerNoBackUI from '../comps/Banner(NoBackButton)';
import HeaderBannerUI from '../comps/HeaderBanner';
import NextButtonUI from '../comps/NextButton';
import NumberBulletUI from '../comps/NumberBullet';

const Container = styled.div`
    width:100%;
    height:100%;
    padding-bottom: 90px;
    display:flex;
    flex-direction:column;
    scroll-behavior: smooth;
`

const ContContainer = styled.div`
    margin: 23px;
    padding-bottom: 90px;
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    scroll-behavior: smooth;
`

const CenterCont = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-bottom: -150px;
`

const HelpImages = styled.img`
    display: flex;
    margin-bottom: 55px;
    margin-top: 66px;
`

const Text = styled.p`
    width: 291px;
    margin-top: -10px;
    margin-left: 88px;
`
export default function HelpPage() {

  const router = useRouter();

  return <Container>
      <BannerNoBackUI></BannerNoBackUI>
      <ContContainer>
        <HeaderBannerUI text="instructions" bgcolor="#3E3D46"></HeaderBannerUI>
        <NumberBulletUI header='Complete the intro form:'></NumberBulletUI>
        <Text>So we know what you would like to learn about.</Text>
        <NumberBulletUI number='2' header='Select a prompt' ></NumberBulletUI>
        <Text>
            At any point, view prompts from the:
            <ul>
                <li>The Categories page</li>
                <li>The For You page</li>
                <li>Homepage</li>
            </ul>
            Select a prompt that would like to learn more about
        </Text>
        <NumberBulletUI number='3' header='Answer the prompt'></NumberBulletUI>
        <Text>Once you answer the prompt, you’ll be given the article of the opposing perspective in order to challenge your thinking.</Text>
        <NumberBulletUI number='4' header='Read / Review the article'></NumberBulletUI>
        <Text>Read through the opposing article. When finished, users will answer the same question/prompt as earlier to see if there a change of opinion.</Text>
        <NumberBulletUI number='5' header='Explore further'></NumberBulletUI>
        <Text>Users are able to see where their opinions stands in the statistics. Users may also read the supporting article to learn more.</Text>
        <CenterCont>
            <HelpImages src='\help_page_images.svg'></HelpImages>
            <NextButtonUI text="BACK" onClick={()=>router.back()}></NextButtonUI>
        </CenterCont>
      </ContContainer>
  </Container>
}