import React from 'react'
import { HeaderStyled, HeaderMain } from './style'
import { Score } from './score'
import Styled from 'styled-components'

const Div = Styled.div`
  background: white;
  border-radius: 5px;
  /* z-index: 1000; */
  width: 35%;
  max-height: 100%;
  display:grid;
  place-content: flex start;
  align-content: center;
  justify-items: center;
`
const Small = Styled.small`
  color: #2a45c2;
  /* font-weigth:700; */
  font-weight: 700;
  background: white;
`
const P = Styled.p`
  font-weight: 700;
  background: white;
  color: #565468;
`

function Header() {
  return (
    <HeaderStyled>
      <h1>Rock,<br /> Paper,<br /> and Scissors.</h1>
      {/* <Score /> */}
      <Div>
        <Small>Score</Small>
        <P>100</P>
      </Div>
    </HeaderStyled>
  )
}

export default Header