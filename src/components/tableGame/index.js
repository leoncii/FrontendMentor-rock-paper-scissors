import React from 'react'
import { Token } from '../token'
import Styled from 'styled-components'

const Table = Styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* gap: 10px; */
  /* justify-content: center; */
  display: grid;
  grid-template-columns: 130px 130px;
  grid-gap: 30px 50px;
  justify-content: center;
  justify-items: center;
  position: relative;
  z-index:99;
  & div:nth-of-type(3) {
    /* border: 5px solid rgba(0,0,0,.3); */
    grid-column: span 2;
  }
  .line {
    height: 10px;
    min-height: fit-content;
    background: rgba(0,0,0,.3);
    position: absolute;
    top: 60px;
    left: 50px;
    right: 50px;
  }
  &:before {
    content: '';
    height: 10px;
    /* min-height: fit-content; */
    background: rgba(0,0,0,.3);
    position: absolute;
    left: -10px;
    right: 100px;
    top: 125px;
    transform: rotate(55deg)
  }
  &:after {
    content: '';
    /* width: 50px; */
    height: 10px;
    background: rgba(0,0,0,.3);
    position: absolute;
    left: 85px;
    right: 0px;
    top: 125px;
    transform: rotate(-55deg)
    /* transform-origin: left top; */
  }
`

const TableGame = () => {
  return (
    <Table>
      <span className="line"></span>
      <Token name="rock" />
      <Token name="scissors" />
      <Token name="paper" />
    </Table>
  )
}

export default TableGame