import React from 'react'

function Gameplay({toggle}) {
  return (
    <div className='container'>
      <div>
        <img src="./img/dices 1.png" alt="" />
      </div>

      <div className="content">
        <h1>DICE GAME </h1>
        <button className='btn'  onClick={()=>toggle()}> Play Now </button>
      </div>
    </div>
  )
}

export default Gameplay; 

