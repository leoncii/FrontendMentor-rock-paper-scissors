import React from 'react'
import Styled from 'styled-components'

const ButtonStyled = Styled.div`
  display: inline-flex;
  border: 1px solid white;
  border-radius: .5em;
  color: white;
  min-width: 128px;
  padding: 1em;
  box-sizing: border-radius;
  justify-content: center;
  cursor:pointer;
  text-transform: uppercase;
  letter-spacing: 2.5px;
`
export const WhiteButton = Styled(ButtonStyled)`
  background: white;
  color: black;
  font-weight: 700;
  min-width: 220px;
`

const Button = ({ children, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  )
}


export default Button