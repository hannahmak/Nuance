import React, { Component } from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router' 

const Component5Cont = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 53px;
    margin-top: 0px;
    align-items:center;
    border-top:1px solid #D9D9D9;
    justify-content:flex-start;

    &:hover{
        background-color:lightgrey;
    }
    
`

const Component5Text = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap'); 
    font-family: 'Arimo', sans-serif;
    font-weight:bold;
    font-size: 14px;
    color: #3E3D46;
    margin:0px 0px 0px 52px;
    white-space:nowrap;
    user-select:none;
`

const Component5Arrow = styled.img`
    margin-right:11px;
`

const TextFlexCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex:2;
`
const IconFlexCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    flex:1;

`

const QuestionButtonUI = ({
    text="Question Text",
    routeTo="/home"
}) => {
    const router = useRouter();
    return <Component5Cont onClick={()=>router.push(routeTo)}>
        <TextFlexCont>
            <Component5Text>{text}</Component5Text>   
        </TextFlexCont>
        <IconFlexCont>
            <Component5Arrow src='/ArrowRight.png'></Component5Arrow>
        </IconFlexCont>
    </Component5Cont>
}

export default QuestionButtonUI