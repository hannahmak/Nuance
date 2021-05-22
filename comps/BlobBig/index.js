import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Blob = styled.div`
    position:absolute;
    z-index:-1;
    bottom:-120px;
    right:-120px;
    animation: move1 13s ease-in-out 3s infinite;
    transform-origin: 50% 50%;
`


const BlobBig = ({

}) => 
{
    const router = useRouter();
    return <Blob>
    <svg opacity='0.5'width="533" height="549" viewBox="0 0 533 549" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M461.51 160.338C508.569 384.935 408.999 421.635 361 449.999C320.999 473.635 237.999 473.646 131 459C116.116 456.963 -15.3193 433.518 48.3729 275.814C112.065 118.11 210.896 134.096 312.449 88.1138C393.69 51.3278 445.674 120.936 461.51 160.338Z" fill="#E1E1E1"/>
    </svg>
    </Blob>
}

export default BlobBig;