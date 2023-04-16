import React from 'react'
import styled from 'styled-components'
import { DefaultTheme } from '../../styled/Styled'
export default function Trial() {
  return (
    <TrialCont>
    <FreeText><FreeTrial>Try it free 7 days</FreeTrial> then $20/mo. thereafter</FreeText>
    </TrialCont>
  )
}

const TrialCont = styled.div`
display: flex;
  min-width: 327px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
border-radius: 10px;
background-color: ${DefaultTheme.Accent.Blue};
margin-left: 24px;
margin-right: 24px;
margin-top: 64px;
` 
const FreeText = styled.p`
  font-size: 15px;
line-height: 26px;
text-align: center;
font-weight: ${DefaultTheme.weighths.medium};
margin-top: 18px;
margin-bottom: 18px;
width: 194px;
margin-left: 67px;
`
const FreeTrial = styled.span`
  color: ${DefaultTheme.primery.white};
  font-weight: ${DefaultTheme.weighths.big};

`