import React from 'react'
import Styled from 'styled-components'

const ButtonStyled = Styled.div`
  display: inline-flex;
  font-weight: 700;
  border: 1px solid white;
  border-radius: .5em;
  color: white;
  min-width: 128px;
  margin: 1em;
  padding: .7em;
  box-sizing: border-radius;
  justify-content: center;
  cursor:pointer;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  align-items: center;
`
export const WhiteButton = Styled(ButtonStyled)`
  background: white;
  color: black;
  min-height: fit-content;
`

const Button = ({ children, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  )
}


export default Button