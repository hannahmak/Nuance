import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Component6Cont = styled.div`
    width: 180px;
    height: 60px;
    margin: 5px;
    background-color: ${props=>props.bgcolor};
    border-radius: 3px;  
    color: #E5E5E5;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.05em;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color:#8bb09c;
    }
`;

const Component6Text = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap'); 
    font-family: 'Arimo', sans-serif;
    font-size: 18px;
    line-height: 20.7px;
    color: #F5F5F5;
`;

const ButtonAUI = ({
    bgcolor='#3E3D46',
    text='NEXT',
    routeTo='/home',
    onClick=()=>{}     
}) => 
{
    const router = useRouter();
    return <Component6Cont bgcolor={bgcolor} onClick={onClick}>
        <Component6Text>{text}</Component6Text>
    </Component6Cont>
}

export default ButtonAUI;