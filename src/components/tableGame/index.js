import React, { useState } from 'react'
import { Token } from '../token'
import Styled from 'styled-components'
import { WhiteButton } from '../button'

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
  const [gaming, setGaming] = useState(false)
  const [machinePicked, setMachinePicked] = useState('default')
  const [pick, setPick] = useState('')
  const [showResult, setShowResult] = useState('')

  const onClic = async (name) => {
    setGaming(true)
    setPick(name)
    // const machinePicked = 
    const pickedInterval = await intervalMachinePicked()
    console.log("[Machine choose]:", machinePicked)
    const finalyResult = comparingPick(name, pickedInterval)
    setShowResult(finalyResult)
    console.log(finalyResult)
  }
  const intervalMachinePicked = () => {
    return new Promise((res, rej) => {
      let newPick
      const interval = setInterval(() => {
        newPick = choosenItems[getRandomNumber(0, 3)]
        setMachinePicked(newPick)
      }, 500)
      setTimeout(() => {
        clearInterval(interval)
        res(newPick)
      }, 2000)
    })
    // let newRandom = choosenItems[getRandomNumber(0, 3)]
    // setMachinePicked(newRandom)
    // return choosenItems[newRandom]
  }
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  const handleAgain = () => {
    setGaming(false)
  }

  const comparingPick = (me, machine) => {
    if (machine === me) return 'Draw'
    if (me === 'paper') {
      if (machine === 'scissors') {
        return 'lose'
      }
      if (machine === 'rock') {
        return 'win'
      }
    }

    if (me === 'rock') {
      if (machine === 'scissors') {
        return 'win'
      }
      if (machine === 'paper') {
        return 'lose'
      }
    }

    if (me === 'scissors') {
      if (machine === 'rock') {
        return 'lose'
      }
      if (machine === 'paper') {
        return 'win'
      }
    }

  }

  return (
    <Table gaming={gaming}>
      {/* <span className="line"></span> */}
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
                <p>Your pick</p>
              </div>
              <div className='in-game'>
                <Token name={machinePicked} />
                <p>Bot picked</p>
              </div>
              <div className='results'>
                <h2> You {showResult}</h2>
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