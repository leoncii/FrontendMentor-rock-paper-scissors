import React from 'react'
import Styled from 'styled-components'

const ButtonStyled = Styled.div`
  display: inline-flex;
  border: 1px solid white;
  border-radius: .5em;
  min-width: 128px;
  padding: 1em;
  box-sizing: border-radius;
  justify-content: center;
`
const Button = () => {
  return (
    <ButtonStyled>
      <h1>soy el boton</h1>
    </ButtonStyled>
  )
}


export default Button