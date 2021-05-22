import React from 'react';
import styled from 'styled-components';

const Component9Cont = styled.div`
    width: 256px;
    height: 256px;
    text-align: center;    
    display: flex;
    justify-content: center;
    align-items: center;  
    position:relative;
    
`;
const Component9box = styled.div`
    width: 256px;
    height: 256px;
    background-color: ${props=>props.bgcolor};
    border: solid black 3px;
    text-align: center;    
    display: flex;
    justify-content: center;
    align-items: center;  
    //animation: spin 3s ease-out 2s infinite;
    
`;

const Component9Text = styled.h3`
    font-weight: bold;
    font-size: 36px;
    line-height: 41.4px;
    color: #000000;
    position:absolute;
`;

const LogoUI = ({
    bgcolor='#FFFFFF',
    text='NUANCE',    
}) => 
{
    return <Component9Cont>
        <Component9box bgcolor={bgcolor}></Component9box>
        <Component9Text>{text}</Component9Text>
    </Component9Cont>
}

export default LogoUI;