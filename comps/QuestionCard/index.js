import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Component1Cont = styled.div`
    width:340px;
    height:296px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    position:relative;
    margin:25px;
    transition: all .2s ease-in-out;

    &:hover
    {
        transform: scale(1.02);
    }
    box-shadow: 2px 4px 5px 0px #00000059;

`;

const Component1Header = styled.div`
    background-color:${props=>props.bgcolor};
    width:265px;
    height:60px;
    position:absolute;
    z-index:1;
    top:34px;
    left:-5px;
`;

const Component1HeaderText = styled.h3`
    font-style: italic;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    color: #F5F5F5;
    margin-left:5px;
    text-transform:uppercase;
    text-align:left;

`;

const Component1Img = styled.img`
    filter:brightness(47%);
    object-fit:cover;
    overflow:hidden;
    
`;

const Component1TextCont = styled.div`
    width:340px;
    display:flex;
    flex-direction:column;
    position:absolute;

`;
const Component1Text = styled.p`
    font-size:12px;
    margin:3px 35px 20px 12px;
    color:#FFF;
    text-align:left;

`;
const Component1SubHeader = styled.h5`
    font-size:14px;
    margin:3px 12px 0px 12px;
    color:${props=>props.headercolor};
    text-transform:uppercase;
    text-align:${props=>props.headingalign};

`;
const Component1Line = styled.div`
position: absolute;
width: ${props=>props.linewidth};
height: 0px;
border: 1px solid ${props=>props.linecolor};
left:${props=>props.lineleft};
top:10px;

`;


const QuestionCardUI = ({
    bgcolor='#333',
    headertext='Featured',
    subheadertext='Cereal Or Milk First?',
    bodytext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae eros a urna semper feugiat ut sed sem. Sed porta, arcu at elementum tempor.',
    src='/imagesample.png',
    linewidth='120px',
    lineleft='218px',
    linecolor='#ECCD97',
    headercolor='#ECCD97',
    headingalign='left',
    routeTo='/home'
}) => 
{
    const router = useRouter();
    return <Component1Cont onClick={()=>router.push(routeTo)}>
        <Component1Header bgcolor={bgcolor}><Component1HeaderText>{headertext}</Component1HeaderText></Component1Header>
        <Component1Img src={src}></Component1Img>
        <Component1TextCont>
            <Component1Line linecolor={linecolor} linewidth={linewidth} lineleft={lineleft}></Component1Line>
           <Component1SubHeader headingalign={headingalign} headercolor={headercolor}>{subheadertext}</Component1SubHeader> 
           <Component1Text>{bodytext}</Component1Text>
        </Component1TextCont>
    </Component1Cont>
}

export default QuestionCardUI;