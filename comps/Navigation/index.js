import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'

const Component4Cont = styled.div`
   display: flex;
   justify-content: center;
   bottom: 0;
   width:100%;
   position:fixed;
   z-index: 1;
`
const Component4Nav = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap');
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FFF;
    border-top: 1px solid #D9D9D9;
    min-width: 100%;
    height:70px;
    font-family: 'Arimo', sans-serif;
    color: #3D3E46;
    font-size: 10px;

`
const Component4NavHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 107px;
`

const Component4NavForYou = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 107px;
`

const Component4NavCategories = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

const Component4NavIcon =styled.div`
    padding: 4px;
`

const NavigationUI = ({
    routeTo1='/home',
    routeTo2='/foryou',
    routeTo3='/categories',
    Iconcolor1="#3E3D46",
    Iconcolor2="#3E3D46",
    Iconcolor3="#3E3D46",

}) => {
    const router = useRouter();
    return <Component4Cont>
        <Component4Nav>
            <Component4NavHome onClick={()=>router.push(routeTo1)}>
                <Component4NavIcon>
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.55 21H3.45C2.81487 21 2.3 20.4941 2.3 19.8701V10.8312H0L10.6858 0.331374C10.9015 0.119212 11.1942 0 11.4994 0C11.8046 0 12.0973 0.119212 12.313 0.331374L23 10.8312H20.7V19.8701C20.7 20.4941 20.1851 21 19.55 21ZM9.2 13.0909H13.8V18.7403H18.4V9.50701L11.5 2.72782L4.6 9.50701V18.7403H9.2V13.0909Z" fill={Iconcolor1}/>
                    <path d="M11.5 2.5L4.5 9.5V19H18.5V9.5L11.5 2.5Z" fill={Iconcolor1} stroke={Iconcolor1}/>
                    <path d="M9 14V19V21H14V14H9Z" fill="white" stroke="white"/>
                    </svg>
                </Component4NavIcon>
                Home
            </Component4NavHome>
            <Component4NavForYou onClick={()=>router.push(routeTo2)}>
                <Component4NavIcon>
                    <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4286 23H4.57143V20.7H11.4286V23ZM11.4286 19.55H4.57143L4.31657 17.25C4.17947 16.4892 3.95272 15.7476 3.64114 15.0409C3.23657 14.4659 2.81486 13.9748 2.40686 13.4952C0.90756 12.0811 0.0396014 10.1174 0 8.05C0 3.60411 3.58172 0 8 0C12.4183 0 16 3.60411 16 8.05C15.9535 10.1048 15.0922 12.0556 13.608 13.4677L13.5886 13.4906C13.1817 13.9702 12.7611 14.467 12.3646 15.0362C12.0533 15.7449 11.8258 16.4879 11.6869 17.25L11.4286 19.55ZM8 2.3C4.84565 2.3038 2.28949 4.87594 2.28571 8.05C2.28571 9.8256 3.02171 10.6869 4.13486 11.9922C4.55771 12.489 5.03771 13.0502 5.50629 13.7068C6.07494 14.8187 6.46345 16.0148 6.65714 17.25H9.344C9.54269 16.0184 9.93057 14.8254 10.4937 13.7137C10.9509 13.0571 11.4297 12.4924 11.8514 11.9956L11.8686 11.9749C12.9794 10.6639 13.7143 9.798 13.7143 8.05C13.7105 4.87594 11.1543 2.3038 8 2.3Z" fill={Iconcolor2}/>
                    <path d="M6.49998 17.5H9.49998C9.49998 15.9 12.8333 11.1667 14.5 9C14.5 6.66667 13.1 2 7.49998 2C0.499983 2 0.999983 9.5 2.49998 11C3.69998 12.2 5.66665 15.8333 6.49998 17.5Z" fill={Iconcolor2} stroke={Iconcolor2}/>
                    </svg>
                </Component4NavIcon>
                For You
            </Component4NavForYou>
            <Component4NavCategories onClick={()=>router.push(routeTo3)}>
                <Component4NavIcon>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 20H13V13H20V20ZM8 20H1V13H8V20ZM20 8H13V1H20V8ZM8 8H1V1H8V8Z" fill={Iconcolor3} stroke={Iconcolor3} stroke-width="2"/>
                    </svg>
                </Component4NavIcon>
                Categories
            </Component4NavCategories>
        </Component4Nav>
    </Component4Cont>
}

export default NavigationUI