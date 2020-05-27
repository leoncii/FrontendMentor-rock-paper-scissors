import React, { useState, useContext } from 'react'
import { Token } from '../token'
import Styled from 'styled-components'
import { WhiteButton } from '../button'
import Context from '../../context'
import { ScoreContext } from '../../App'

const P = Styled.p`
  letter-spacing: 2px;
  font-weight: 700;
  padding-top:5px;
  color: black;
`
const H2 = Styled.h2`
  /* color: black; */
  padding-top: 1.5em;
`
const Table = Styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* gap: 10px; */
  /* justify-content: center; */
  margin-top:3em; 
  display: grid;
  grid-template-columns: 130px 130px;
  grid-gap: 30px 50px;
  justify-content: center;
  justify-items: center;
  position: relative;
  /* z-index:99; */
  & div:nth-of-type(3) {
    /* border: 5px solid rgba(0,0,0,.3); */
    grid-column: span 2;
  }
  .in-game {
    text-align: center;
  }
  .results {
    text-align: center;
  }
  input {
    position: absolute;
    /* display: none; */
    top:-115px;
    left:0px;
    width:2px;
    min-height: 10px;
  }
  line {
    display: ${({ gaming }) => !gaming ? 'block' : 'none'};
    height: 10px;
    min-height: fit-content;
    width: 100px;
    background: rgba(0,0,0,.3);
    position: absolute;
    top: 60px;
    left: 200px;
    right: 0px;
  }
  &:efore {
    content: '';
    height: 10px;
    width:100px;
    /* width: 100px; */
    /* min-height: fit-content; */
    background: rgba(0,0,0,.3);
    position: absolute;
    left: 170px;
    right: 100px;
    top: 125px;
    transform: rotate(55deg)
  }
  &:fter {
    content: '';
    width: 100px;
    height: 10px;
    background: rgba(0,0,0,.3);
    position: absolute;
    left: 270px;
    right: 0px;
    top: 125px;
    transform: rotate(-55deg)
    /* transform-origin: left top; */
  }
`

const choosenItems = [
  'paper',
  'rock',
  'scissors'
]


const TableGame = () => {
  const { score, setScore } = useContext(ScoreContext)
  const [gaming, setGaming] = useState(false)
  const [machinePicked, setMachinePicked] = useState('default')
  const [pick, setPick] = useState('')
  const [showResult, setShowResult] = useState('indecisive machine')
  const [suma, setSuma] = useState(0)

  const onClic = async (name) => {
    setGaming(true)
    setPick(name)
    const pickedInterval = await intervalMachinePicked()
    const finalyResult =  comparingPick(name, pickedInterval)

    handleScore(finalyResult)
  }

  const handleScore = (final) => {
    if (final === 'Win') {
      return setScore(score + 1)
    }
  }
  const intervalMachinePicked = () => {
    return new Promise((res, rej) => {
      let newPick
      const interval = setInterval(() => {
        newPick = choosenItems[getRandomNumber(0, 3)]
        setMachinePicked(newPick)
      }, 100)
      setTimeout(() => {
        clearInterval(interval)
        res(newPick)
      }, 2000)
    })
  }
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  const handleAgain = () => {
    setGaming(false)
    setShowResult('indecisive machine')
  }

  const comparingPick = (me, machine) => {
    if (machine === me) {
      setShowResult('Draw')
      return 'Draw'
    }
    if (me === 'paper') {
      if (machine === 'scissors') {
        setShowResult('Lose')
        return 'Lose'
      }
      if (machine === 'rock') {
        setShowResult('Win')
        return 'Win'
      }
    }

    if (me === 'rock') {
      if (machine === 'scissors') {
        setShowResult('Win')
        return 'Win'
      }
      if (machine === 'paper') {
        setShowResult('Lose')
        return 'Lose'
      }
    }
    
    if (me === 'scissors') {
      if (machine === 'rock') {
        setShowResult('Lose')
        return 'Lose'
      }
      if (machine === 'paper') {
        setShowResult('Win')
        return 'Win'
      }
    }
  }

  return (
    <Table gaming={gaming}>
      {/* <span className="line"></span> */}
      <input type="text" name="eggs" id="eggs" value='hola'/>
      {
        !gaming ? (
          <>
            <Token name="rock" onClick={onClic} />
            <Token name="scissors" onClick={onClic} />
            <Token name="paper" onClick={onClic} />
          </>
        ) : (
            <>

              <div className='in-game'>
                <Token name={pick} />
                <P>You</P>
              </div>
              <div className='in-game'>
                <Token name={machinePicked} />
                <P>Bot</P>
              </div>
              <div className='results'>
                <H2> {showResult}</H2>

                {/* {
                  showResult !== 'indecisive machine' && (
                    <Context.Consumer>
                      {
                        ({ actualizar, score }) => {
                          setTimeout(() => {
                            // handleScore(actualizar, suma)
                            setSuma(score + 1)
                            return actualizar(suma)
                          }, 0)
                        }
                      }
                    </Context.Consumer>
                  )
                } */}
                <WhiteButton onClick={handleAgain}>
                  Try Again
                </WhiteButton>
              </div>
            </>
          )
      }
    </Table>
  )
}

export default TableGame