import React, { useContext } from 'react'
import { HeaderStyled, HeaderMain } from './style'
import { Score } from './score'
import Styled from 'styled-components'
import Context from '../../context'
import { ScoreContext } from '../../App'

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
let suma = 0
const handleNewScore = (score) => {
  // let sm = suma = suma + score
  // return sm
}
function Header() {
  const { score } = useContext(ScoreContext)
  return (
    <HeaderStyled>
      <h1>Rock,<br /> Paper,<br /> and Scissors.</h1>
      <Div>
        <Small>Score</Small>
        <P>
          {score}
        </P>
      </Div>
    </HeaderStyled>
  )
}

export default Header