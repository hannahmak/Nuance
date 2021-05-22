import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Component6Cont = styled.div`
    width: 180px;
    height: 60px;
    background-color: ${props=>props.bgcolor};
    border-radius: 3px;    
    border:2px solid #3e3d46;
    display: flex;
    justify-content: center;
    align-items: center;    
    color: ${props=>props.color};
    opacity:${props=>props.opacity};

    &:hover {
        background-color:${props=>props.hoverColorBG};
        border:2px solid ${props=>props.hoverColorBG};
        color:${props=>props.hoverColor};
    }
    `;
    
    const Component6Text = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap'); 
    font-family: 'Arimo', sans-serif;
    font-size: 18px;
    line-height: 20.7px;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.05em;
    user-select:none;
    `;

const NextButtonUI = ({
    bgcolor='#3E3D46',
    text='NEXT',
    color='#fff',
    hoverColor='#fff',
    opacity='100%',
    hoverColorBG='#8bb09c',
    onClick=()=>{}
}) => 
{
    const router = useRouter();
    return <Component6Cont onClick={onClick} hoverColorBG={hoverColorBG} opacity={opacity} hoverColor={hoverColor} color={color} bgcolor={bgcolor}>
        <Component6Text>{text}</Component6Text>
    </Component6Cont>
}

export default NextButtonUI;