import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'

const AboutButtonCont = styled.div`
    position: relative;
    bottom: 12%;
    left: 40%;
`
const Path = styled.path`
    &:hover{
        fill:#8BB09C;
    }
`

const AboutButtonUI = ({
}) => 
{
    const router = useRouter()

    return <AboutButtonCont onClick={()=>router.push('/about')}>
       <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
           <Path d="M29.2778 31H1.72222C0.771065 31 0 30.2289 0 29.2778V1.72222C0 0.771065 0.771065 0 1.72222 0H29.2778C30.2289 0 31 0.771065 31 1.72222V29.2778C31 30.2289 30.2289 31 29.2778 31ZM2.44444 2.44444V15.5V28.5556H28.5556V15.5V2.44444H15.5H2.44444ZM18.9444 24.1111H13.7778V17.2222H12.0556V13.7778H17.2222V20.6667H18.9444V24.1111ZM17.2222 10.3333H13.7778V6.88889H17.2222V10.3333Z" fill="#2E3A59"/>
       </svg>
    </AboutButtonCont>
}

export default AboutButtonUI