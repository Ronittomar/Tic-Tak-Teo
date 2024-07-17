import React, { useState } from 'react'
import './App.css';
import Square from './Square/Square';

const renderForm =[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
const App = () => {

  const [gameState, setGameState] = useState(renderForm);
  const [currentPlayer,setCurrentPlayer] = useState('circle');
  const [finishedState,setFinishedState] = useState(false);


  return (
    <div className='main-div'>
       <div className='move-detection'>
          <div className='left'>
            YourSelf
          </div>
          <div className='right'>
            Opponent
          </div>
        </div>
      <div>
        <h1 className='game-heading water-background'>Tic Tac Toe</h1>
        <div className='square-wrapper'>
          {
            gameState.map(arr=>
                arr.map(e=>{
                return <Square 
                finishedState={finishedState}
                setFinishedState={setFinishedState}
                currentPlayer={currentPlayer}
                setCurrentPlayer = {setCurrentPlayer}
                setGameState={setGameState}
                id={e} key={e}/>;
              })
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App