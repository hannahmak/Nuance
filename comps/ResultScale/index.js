import React from 'react';
import styled from 'styled-components';

const Component2Cont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    width:344px;
`;

const Component2slider = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    position:absolute;
    left:${props=>props.slider};

`;

const Component2slidertext = styled.p`
    font-family: Arimo;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    margin: 0px;
    color: #3E3D46;
`;

const Component2slidericon = styled.img`
    width:10px;
    height:10px;
`;

const Component2graph = styled.div`
    width:334px;
    height:50px;
    border-radius:3px;
    background-color:#FAD;
    margin-top:30px;
    display:flex;
`;

const Component2agree = styled.div`
    width:200px;
    height:50px;
    background: #8BB09C;
    border-radius: 3px 0px 0px 3px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Component2agreeper = styled.p`
    font-family: Arimo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #E5E5E5;
    margin:0px;
    margin-top:6px;
`;

const Component2agreetext = styled.p`
    font-family: Arimo;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #E5E5E5;
    margin:0px;
`;

const Component2disagree = styled.div`
    width:134px;
    height:50px;
    background: #3E3D46;
    border-radius: 0px 3px 3px 0px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Component2disagreeper = styled.p`
    font-family: Arimo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #E5E5E5;
    margin:0px;
    margin-top:6px;
`;

const Component2disagreetext = styled.p`
    font-family: Arimo;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #E5E5E5;
    margin:0px;
`;

const Component2unsure = styled.div`
    width:71px;
    height:50px;
    background: #D37F65;
    border-radius: 0px 0px 0px 0px;
    display:flex;
    flex-direction:column;
    align-items:center;
    display:${props=>props.UnsureVisiblity};
`;
const Component2unsureper = styled.p`
    font-family: Arimo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #E5E5E5;
    margin:0px;
    margin-top:6px;
`;
const Component2unsuretext = styled.p`
    font-family: Arimo;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #E5E5E5;
    margin:0px;
`;

const ResultScaleUI = ({
    AgreePer='67%',
    UnsurePer='23%',
    DisagreePer='33%',
    slider='85px',
    UnsureVisiblity='none'
}) => 
{
    return <Component2Cont>
        <Component2slider slider={slider}>
            <Component2slidertext>You</Component2slidertext>
            <Component2slidericon src="/Comp2SliderIcon.svg"></Component2slidericon>
        </Component2slider>
        <Component2graph>
            <Component2agree>
                <Component2agreeper>{AgreePer}</Component2agreeper>
                <Component2agreetext>Agree</Component2agreetext>
            </Component2agree>
            <Component2unsure UnsureVisiblity={UnsureVisiblity}>
                <Component2unsureper>{UnsurePer}</Component2unsureper>
                <Component2unsuretext>Unsure</Component2unsuretext>
            </Component2unsure>
            <Component2disagree>
                <Component2disagreeper>{DisagreePer}</Component2disagreeper>
                <Component2disagreetext>Disagree</Component2disagreetext>
            </Component2disagree>
        </Component2graph>
    </Component2Cont>
}

export default ResultScaleUI;