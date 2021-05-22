import React from 'react';
import styled from 'styled-components';

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

const ButtonNextRandomUI = ({
    bgcolor='#3E3D46',
    text='NEXT',
    color='#fff',
    hoverColor='#fff',
    opacity='100%',
    hoverColorBG='#8bb09c',
}) => 
{
    return <Component6Cont onClick={Random} hoverColorBG={hoverColorBG} opacity={opacity} hoverColor={hoverColor} color={color} bgcolor={bgcolor}>
        <Component6Text>{text}</Component6Text>
    </Component6Cont>
}

function Random()
{

    let question = Math.floor(Math.random() * 4);

    if(question === 0) 
    {
        location.href = '/questionprompt/Electric vehicles are a better option'
    }

    if(question === 1) 
    {
        location.href = '/questionprompt/Countries should have open borders'
    }

    if(question === 2) 
    {
        location.href = '/questionprompt/COVID lock-downs are necessary and beneficial'
    }

    if(question === 3) 
    {
        location.href = '/questionprompt/Universal Basic Income could solve poverty'
    }
}

export default ButtonNextRandomUI