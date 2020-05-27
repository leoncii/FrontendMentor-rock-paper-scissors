import React, { useState, createContext } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [score, setScore] = useState(0)


  const value = {
    actualizar: (data) => {
      // score = score + data
      setScore(data)
    },
    score: score,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}