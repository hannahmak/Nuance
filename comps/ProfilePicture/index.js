import React from 'react'
import styled from 'styled-components'

const ProfileCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-conent: center;
    align-items: center;
`

const ProfilePicture = styled.div`
    display: flex;
    width: 73px;
    height: 73px;
    left: 218px;
    top: 863px;    
    background-image: url(${props=>props.img});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #C4C4C4;
    border-radius: 40px;
    margin-left: 11.5px;
    margin-right: 11.5px;
`

const ProfileName = styled.p`
    width: 69px;
    font-family: Arimo;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #000000;
`

const ProfilePictureUI = ({
    name = 'name',
    img = 'https://place-puppy.com/100x100'
}) => {
    return <ProfileCont>
        <ProfilePicture img={img}></ProfilePicture>
        <ProfileName>{name}</ProfileName>
    </ProfileCont>
    
}

export default ProfilePictureUI