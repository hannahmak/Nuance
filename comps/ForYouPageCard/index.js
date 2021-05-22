import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const PromptCont = styled.div`
    width:333px;
    height:198px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    position:relative;
    margin:10px;
    transition: all .2s ease-in-out;

    &:hover
    {
        transform: scale(1.02);
    }
    box-shadow: 2px 4px 5px 0px #00000059;

`;

const Component1Header = styled.div`
    background-color:${props=>props.bgcolor};
    width:237px;
    height:44px;
    position:absolute;
    z-index:1;
    top:27px;
    left:-6px;
`;

const Component1HeaderText = styled.h3`
    font-style: italic;
    font-weight: bold;
    font-size: 23px;
    color: #F5F5F5;
    margin-left:10px;
    text-transform:uppercase;

`;

const Component1Img = styled.img`
    object-fit:cotain;
    overflow:hidden;
    
`;

const Component1TextCont = styled.div`
    width:320px;
    display:flex;
    position:absolute;
    justify-content:space-between;
    align-items:center;

`;
const Component1Text = styled.p`
    font-size:13px;
    font-weight:bold;
    margin:3px 10px 10px 12px;
    color:#FFF;

`;
const PromptIcon = styled.div`

`



const PromptCardUI = ({
    bgcolor='#ECCD97',
    headertext='Featured',
    bodytext='Question Goes Here',
    src='/imagesample.png',
    routeTo='/home',
    onClick=()=>{}
}) => 
{
    const router = useRouter();
    return <PromptCont onClick={onClick}>
        <Component1Header bgcolor={bgcolor}><Component1HeaderText>{headertext}</Component1HeaderText></Component1Header>
        <Component1Img src={src}></Component1Img>
        <Component1TextCont>
           <Component1Text>{bodytext}</Component1Text>
           <PromptIcon><svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.10254 7.66884L1.9189 0.40849L0.228771 2.11667L5.72707 7.67368L0.22877 13.2307L1.9189 14.9292L9.10254 7.66884Z" fill="white"/>
</svg>
</PromptIcon>
        </Component1TextCont>
    </PromptCont>
}

export default PromptCardUI;