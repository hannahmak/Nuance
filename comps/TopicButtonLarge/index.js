import React from 'react'; 
import styled from 'styled-components'; 

const Component8Cont = styled.div     
`  
    width: 260px;
    height: 154px;
    border-radius: 3px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;   

    &:hover
    {
        transform: scale(1.02);
    }

`;

const Component8Img = styled.img                 // put image in public folder
`       
`;

const Component8Banner = styled.div       
`   
    width: 260px;
    height: 22px;
    background:${props=>props.bgcolor};
    border-radius: 0px 0px 3px 3px;
    position:absolute;
    display: flex;
    align-items: flex-end;  
    padding-bottom:0px; 
    display: flex;
`

const Component8BannerText = styled.p  
`
    position:absolute;
    bottom:-5px;
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap'); 
    font-family: 'Arimo', sans-serif;
    text-transform: uppercase;
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    margin:0px;
    padding-left:10px;
`


const TopicButtonLargeUI = ({     
    bgcolor='#ECCD97',
    src='/CarForYou.png',
    bannertext='next',    
    onClick=()=>{},
}) => 

{
    return <Component8Cont onClick={onClick}>
        <Component8Img src={src}></Component8Img>
        <Component8Banner bgcolor={bgcolor}>
            <Component8BannerText>{bannertext}</Component8BannerText>
            </Component8Banner>
    </Component8Cont>
}

export default TopicButtonLargeUI;