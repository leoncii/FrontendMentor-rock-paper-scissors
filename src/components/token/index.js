import React from 'react'
import Styled from 'styled-components'

const Items = Styled.div`
    width: 130px;
    height: 130px;
    border: 15px solid ${(props) => props.color.base};
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    background: ${({ name }) => (name === 'default') ? 'transparent' : 'white'};
    cursor: pointer;
    position:relative;
    z-index:2;
    box-shadow:0 5px 0 ${(props) => props.color.border};
    &:active{
      /* border: 10px solid yellow; */
      transform: scale(.9);

    }
    .box {
      box-shadow: 0 -4px 0 #babfd4;
      flex: 1;
      align-self: stretch;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
    }
  `
const Img = Styled.img`
  background: white;
    min-block-size: fit-content;
  `

const colors = {
  paper: {
    base: '#516ef4',
    border: '#2543c3',
  },
  rock: {
    base: '#de3a5a',
    border: '#980e31',
  },
  scissors: {
    base: '#eca8le',
    border: '#c76c14',
  },
  default: {
    base: 'trasparent',
    border: 'trasparent',
  }
}

export const Token = ({ name, onClick }) => {
  // let name = name
  function handleClick() {
    console.log('[Name]:', name)
    onClick(name)
  }

  const color = colors[name]

  return (
    <Items color={color} onClick={handleClick} name={name}>
      <div className='box'>
        <Img src={`../../images/icon-${name}.svg`} alt="paper-image" />
      </div>
    </Items>
  )

}


// export  Token