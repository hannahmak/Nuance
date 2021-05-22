import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Blob = styled.div`
    position:absolute;
    z-index:-2;
    top:-100px;
    left:-100px;
    animation: move2 10s ease-in-out 2s infinite;
    transform-origin: 50% 50%;

`


const BlobSmall = ({

}) => 
{
    const router = useRouter();
    return <Blob>
    <svg width="423" height="270" viewBox="0 0 423 270" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M82.2016 236.749C-43.2021 161.914 41.1082 106.813 98.9388 88.6172L261.745 25.1601C261.745 25.1601 393.317 -20.2888 397.392 62.3278C401.466 144.944 309.649 169.298 238.797 219.182C182.116 259.089 110.783 247.521 82.2016 236.749Z" fill="#4A4D61"/>
    </svg>

    </Blob>
}

export default BlobSmall;