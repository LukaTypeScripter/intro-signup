import React from 'react'

import styled from 'styled-components'
import { DefaultTheme } from '../../styled/Styled'
export default function Header() {
  return (
    <HeaderComp>
<Slogan>
Learn to code by watching others
</Slogan>
<About>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </About>
    </HeaderComp>
  )
}


export const HeaderComp = styled.header`
 text-align: center;
`
export const Slogan = styled.h1 `
margin-top: 88px;
font-size: 28px;
line-height: 36px;
color: ${DefaultTheme.primery.white};
width: 327px;
margin-left: 24px;
`
export const About = styled.p`
width: 327px;
margin-left: 24px;
margin-right: 24px;
font-size: 16px;
line-height: 26px;
margin-top: 16px;
color:${DefaultTheme.primery.white};
font-weight: ${DefaultTheme.weighths.avrege};
`