import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;

`

const HeaderBannerCont = styled.div`
    display: flex;
    height: 20px;
    width: 358px;
    background: ${props=>props.bgcolor};
    border-radius: 0px 0px 3px 3px;
    padding-left: 10px;
    margin-bottom: 20px;
`

const HeaderBannerText = styled.h1`
    position: relative;
    bottom: 40%;
    font-family: Arimo;
    font-style: italic;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    text-transform: uppercase;
`

const HeaderBannerUI = ({
       text = 'Header',
       bgcolor = '#8BB09C'
}) => {
    return <Container>
        <HeaderBannerCont bgcolor={bgcolor}>
            <HeaderBannerText>{text}</HeaderBannerText>
        </HeaderBannerCont>
    </Container>
}

export default HeaderBannerUI