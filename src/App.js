import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1 className='app-title'><span className='col-1'>Tile</span><span className='col-2'>Match</span> </h1>

 <div className='d-flex'>
  <div>Player 1 : ➕</div>
  <div>Player 2 : ➖</div>
 </div>

     <div className='box-container'>
     <div className='row'>
      <div className=' box'></div>
      <div className=' box'></div>
      <div className=' box'></div>
     </div>

     <div className='row'>
      <div className=' box'></div>
      <div className=' box'></div>
      <div className=' box'></div>
     </div>

     <div className='row'>
      <div className=' box'></div>
      <div className=' box'></div>
      <div className=' box'></div>
     </div>
     <button type='button' className='btn-reset'>Reset</button>
     </div>
    </div>
  );
}

export default App;
