import React, { useState } from 'react'
import Styled from 'styled-components'
import Button from '../button'

const RulesStyled = Styled.div`
    text-align:center;

  .close-button {
    margin-top: 1em;
  }
  .rules-overlay {
    display: flex;
    /* background: white; */
    position: fixed;
    padding: 4em 0;
    align-items: center;
    justify-content: space-evenly;
    left: 0;
    right: 0;
    top: 0;
    buttom: 0;
    flex-direction: column;
    z-index: 999;
  }
  h1 {
    color: #3b4262;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: -2px;
    margin-bottom: 1em;
  }
`

const Rules = () => {
  const [visible, setVisible] = useState(false)
  function handleClick() {
    console.log('asdasd')
    setVisible(!visible)
  }
  return (
    <RulesStyled >
      {
        visible && (
          <div className="rules-overlay">
            <h1>Rules</h1>
            <img src="../public/images/image-rules.svg" alt="rules overlay" />
            <img className="close-button" onClick={handleClick} src="../public/images/icon-close.svg" alt="close overlay" />
          </div>
        )
      }
      <Button onClick={handleClick} >
        rules
        </Button>
    </RulesStyled>
  )
}

export default Rules
