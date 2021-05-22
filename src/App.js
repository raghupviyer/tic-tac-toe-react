import { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "./Box";

function App() {
  const [turn, setTurn] = useState(true)
  const [player, setPlayer] = useState('')
  const [boxes, setBoxes] = useState([null,null,null,null,null,null,null,null,null])
  const [resultDeclared, setresultDeclared] = useState(false)
  
  useEffect(() => {
    turn
      ?setPlayer('X')
      :setPlayer('O')
  }, [turn])

  const clickBox = (index) => {
    const arr = boxes
    arr[index] = player
    setBoxes([...arr])
    let bool = false
    for(let set of winningSets){
      if(set.every(el => boxes[el] === player)){
        setresultDeclared(!resultDeclared)
        bool = true
        break;
      }
    }
    if(boxes.every(box => box !== null)){
      setresultDeclared(!resultDeclared)
      bool = true
      setPlayer('NOBODY')
    }
    !bool && setTurn(!turn)
  }

  const okay = () => {
    setBoxes([null,null,null,null,null,null,null,null,null])
    setresultDeclared(!resultDeclared)
  }

  return (
    <Board>
      {boxes.map((box, index) => {
        return <Box mark={box} player={player} index={index} clickBox={clickBox}/>
      })}
      {resultDeclared && (<Result>
        THE WINNER IS {player}
        <button onClick={okay}>OKAY!</button>
      </Result>)}
    </Board>
  );
}

export default App;

const Board = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 50px 50px 50px;
  justify-content: center;
  margin: 100px auto;
  button{
    padding: 1rem;
    font-weight: 700;
    background-color: rosybrown;
    color: white;
    border: 3px solid white;
    border-radius: 12px;
  }
  span{
    width: 100%;
  }
`

const Result = styled.div`
  width: max-content;
  font-family: 'Raleway', sans-serif;
`

const winningSets = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,7,8],
]

// 012
// 345
// 678


// [
//   {
//     position: [0,0],
//     mark: null
//   },
//   {
//     position: [0,1],
//     mark: null
//   },
//   {
//     position: [0,2],
//     mark: null
//   },
//   {
//     position: [1,0],
//     mark: null
//   },
//   {
//     position: [1,1],
//     mark: null
//   },
//   {
//     position: [1,2],
//     mark: null
//   },
//   {
//     position: [2,0],
//     mark: null
//   },
//   {
//     position: [2,1],
//     mark: null
//   },
//   {
//     position: [2,2],
//     mark: null
//   },
// ]