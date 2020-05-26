import React from 'react'
import Header from './components/header'
import { GlobalStyles, Wrapper } from './components/styleGlobal'
import TableGame from './components/tableGame'
import Rules from './components/rules'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <TableGame/>
        <Rules />
      </Wrapper>
    </div>
  )
}

export default App