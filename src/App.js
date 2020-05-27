import React, { createContext, useState } from 'react'
import Header from './components/header'
import { GlobalStyles, Wrapper } from './components/styleGlobal'
import TableGame from './components/tableGame'
import Rules from './components/rules'
import Context from './context'

export const ScoreContext = createContext()

function App() {
  const [score, setScore] = useState(0)
  return (
    <ScoreContext.Provider value={{
      score,
      setScore
    }}>
      <Context.Provider>
        <GlobalStyles />
        <Wrapper>
          <Header />
          <TableGame />
          <Rules />
        </Wrapper>
      </Context.Provider>
    </ScoreContext.Provider>
  )
}

export default App