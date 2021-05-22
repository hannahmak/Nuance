import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router' 

const BannerCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
`

const Component3Header = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap');
    font-family: 'Arimo', sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: #3D3E46;
    text-transform: uppercase;
`

const BackButton = styled.div`
    position:absolute;
    left:23px;

`
const Path = styled.path`
    &:hover{
        fill:#8bb09c;
    }
`

const BannerNoBackUI = ({
        text='Nuance',

}) => {
    const router = useRouter();
    return <BannerCont>
        <BackButton onClick={()=>router.back()}>
        <svg width="21" height="34" viewBox="0 0 21 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M0 17L17.0003 34L21 30.0003L7.98815 16.9887L21 3.97704L17.0003 0L0 17Z" fill="#3D3E46"/>
        </svg>
        </BackButton>
        <Component3Header>{text}</Component3Header>
    </BannerCont>
    
}

export default BannerNoBackUI