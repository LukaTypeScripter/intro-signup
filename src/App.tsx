import { useState } from 'react'
import Header from './components/Header/Header'
import Trial from './components/Trial/Trial'
import Inputs from './components/inputs/Inputs'
import { GlobalStyle } from './styled/Styled'



function App() {
  

  return (
  <>
  <Header/>
  <Trial/>
  <Inputs/>
  <GlobalStyle/>
  </>
  )
}

export default App
