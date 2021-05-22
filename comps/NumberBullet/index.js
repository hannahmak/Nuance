import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 27px;
    width: 27px;
    background-color: #3E3D46;
    text-align: center;
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap');
    color: #FFF;
    font-family: Arimo;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    margin: 14px;
`

const Text = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap');
    font-family: Arimo;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
`
const NumberBulletUI = ({
    number = '1',
    header = 'Header',
}) => {
   
    return <Container>
        <Box>{number}</Box>
        <Text>{header}</Text>
    </Container>
}

export default NumberBulletUI