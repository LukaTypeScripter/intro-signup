import React from "react";
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import bgIntroMobile from '/home/luka/Desktop/intro-signup/src/images/bg-intro-mobile.png';


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
 *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 body {
    font-family: 'Poppins', sans-serif;
    background-image: url(${bgIntroMobile});
    background-repeat: no-repeat;
    background-size: cover;
    background: #FF7979;
 }
`;


export const DefaultTheme = {
    primery: {
    Red: 'hsl(0, 100%, 74%) ',
    Green: 'hsl(154, 59%, 51%)',
    white:'#FFFFFF',
    
    },
    Accent: {
        Blue: 'hsl(248, 32%, 49%)'
    },
    Neutral: {
        DarkBlue: 'hsl(249, 10%, 26%) ',
        GrayshBlue:'hsl(246, 25%, 77%)'
    },
    weighths : {
        small:400,
        avrege:500,
        medium:600,
        big:700
    }
}




