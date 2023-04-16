import React from 'react'
import styled from 'styled-components'
import { DefaultTheme } from '../../styled/Styled'
export default function Inputs() {
  return (
   <InPutCont>
<Form>
<FirstInput/>
<Input/>
<Input/>
<Input/>
<Btn>CLAIM YOUR FREE TRIAL</Btn>
</Form>

   </InPutCont>
  )
}

const InPutCont = styled.div`
  display: flex;
  min-width: 327px;
  margin-left: 24px;
  margin-right: 24px;
  background-color: ${DefaultTheme.primery.white};
  margin-top: 24px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
border-radius: 10px;
`
const Form = styled.form`
  
`
const FirstInput = styled.input `
  height: 56px;
width: 279px;
border-radius: 5px;
margin:24px 24px 0 24px;
border: 1px solid #DEDEDE;
`
const Input = styled.input `
  height: 56px;
width: 279px;
border-radius: 5px;
margin-top: 16px;
margin-left: 24px;
margin-right: 24px;
border: 1px solid #DEDEDE;
`

const Btn = styled.button `
  height: 56px;
width: 279px;
border-radius: 5px;
text-align: center;
background-color: ${DefaultTheme.primery.Green};
font-size: 15px;
line-height: 26px;
font-weight: ${DefaultTheme.weighths.medium};
margin-left: 24px;
margin-top: 16px;
border: none;
outline: none;
`