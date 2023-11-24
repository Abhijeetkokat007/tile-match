import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [player, setPlayer] = useState(1);

  const [bord, setBord] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  })

  const [gamestate, setGamestate] = useState(true);

  const [winner, setWinner] = useState(null);

  const checkWinner =() => {
    const symbol = player === 1 ? "➕" : "➖";

    if(bord[1] === symbol && bord[2] === symbol && bord[3] == symbol) {
      setWinner(player);
    }

    else if(bord[4] === symbol && bord[5] === symbol && bord[6] == symbol){
      setWinner(player);
    }

    else if(bord[7] === symbol && bord[8] === symbol && bord[9] == symbol){
      setWinner(player);
    }

    else if(bord[1] === symbol && bord[4] === symbol && bord[7] == symbol){
      setWinner(player);
    }

    else if(bord[2] === symbol && bord[5] === symbol && bord[8] == symbol){
      setWinner(player);
    }

    else if(bord[3] === symbol && bord[6] === symbol && bord[9] == symbol){
      setWinner(player);
    }

    else if(bord[1] === symbol && bord[5] === symbol && bord[9] == symbol){
      setWinner(player);
    }

    else if(bord[3] === symbol && bord[5] === symbol && bord[7] == symbol){
      setWinner(player);
    }

    setPlayer(player === 1 ? 2 : 1);
  }

  const play = (boxNo) => {
    // console.log( "BoxNo:",boxNo)

    if(bord[boxNo] !== "" || winner != null){
      return;
    }
    if(player===1){
      setBord({...bord, [boxNo] : "➕"})
    }
    else{
      setBord({...bord, [boxNo] : "➖"})
    }

    // checkWinner(player)
 
    // setPlayer(player===1? 2 : 1)
  }

  const reset = () => {
    setPlayer(1);
    setBord({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
    })
    setWinner(null);
  }

  useEffect(()=>{
    checkWinner(player);
  }, [bord])

  return (
    <div className="App">

      <h1 className='app-title'><span className='col-1'>Tile</span><span className='col-2'>Match</span> </h1>

 <div className='d-flex'>
  <div className='player-text'>Player 1 : ➕</div>
  <div className='player-text'>Player 2 : ➖</div>
 </div>
  <p className='current-text'>Current Player : {player === 1 ? "Player 2 ➖" : "Player 1 ➕" } </p>

{
  winner ? ( 
    <h1 className='winner-text'>winner is  {player === 1 ? "player 2 ➖" : "player 1 ➕"} </h1>
  ) : null
}

     <div className='box-container'>
     <div className='row'>
      <div className=' box' onClick={()=>{play(1)}} >{bord[1]} </div>
      <div className=' box' onClick={()=>{play(2)}} >{bord[2]}</div>
      <div className=' box' onClick={()=>{play(3)}} >{bord[3]}</div>
     </div>

     <div className='row'>
      <div className=' box' onClick={()=>{play(4)}} >{bord[4]}</div>
      <div className=' box' onClick={()=>{play(5)}} >{bord[5]}</div>
      <div className=' box' onClick={()=>{play(6)}} >{bord[6]}</div>
     </div>

     <div className='row'>
      <div className=' box' onClick={()=>{play(7)}} >{bord[7]}</div>
      <div className=' box' onClick={()=>{play(8)}} >{bord[8]}</div>
      <div className=' box' onClick={()=>{play(9)}} >{bord[9]}</div>
     </div>
     <button type='button' className='btn-reset' onClick={reset}>Reset</button>
     </div>
    </div>
  );
}

export default App;
