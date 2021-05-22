import React from 'react'; 
import styled from 'styled-components'; 

const Component8Cont = styled.div     
`  
    width: 100vw;
    max-height: 240px;
    border-radius: 3px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;   
`;

const Component8Img = styled.img                 // put image in public folder
`  
max-height: 240px;
width: 100vw;     
`;


const Component8BannerText = styled.p  
`
    position:absolute;
    bottom:-10px;
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap'); 
    font-family: 'Arimo', sans-serif;
    text-transform: uppercase;
    font-style: italic;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
    margin:0px;
    margin-bottom: 5px;
    padding-left:10px;
`

const Component8Banner = styled.div       
`   
    width: 100vw ;
    height: 44px;
    background:${props=>props.bgcolor};
    border-radius: 0px 0px 3px 3px;
    position:absolute;
    display: flex;
    align-items: flex-end;   
    display: flex;
`

const TopicHeaderUI = ({     
    bgcolor='#8BB09C',
    src='/ClimateChangeHeaderImg.png',
    bannertext='next',    
}) => 

{
    return <Component8Cont>
        <Component8Img src={src}></Component8Img>
        <Component8Banner bgcolor={bgcolor}>
            <Component8BannerText>{bannertext}</Component8BannerText>
        </Component8Banner>
    </Component8Cont>
}

export default TopicHeaderUI;