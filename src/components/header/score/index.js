import React from 'react'
import Styled from 'styled-components'

const ScoreStyled = Styled.div`
  background: white;
  text-align: center;
  padding: 10px 0;
  border-radius: 5px;
  small {
    color: #2a45c2;
  }
  p {
    background: white;
    color: #565468;
  }
`

export function Score() {
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>12</p>
    </ScoreStyled>
  )
}

// export Score