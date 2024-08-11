import React, { useState } from 'react';

function RollDice({currentdice,rollDice}) {
  // const [currentdice, setCurrentdice] = useState(1);

  // const randomnumber = (min, max) => {
  //   return Math.floor(Math.random() * (max - min) + min);
  // };

  // const rollDice = () => {
  //   const rand = randomnumber(1, 7);
  //   setCurrentdice(rand);
  // };

  return (
    <main className='diceimg' onClick={rollDice}>
      <div className="imges">
        <img src={`./img/dice_${currentdice}.png`} alt={`${currentdice}`} />
      </div>
      <p style={{ fontSize: '24px' }}>Click on Dice to roll</p>
    </main>
  );
}

export default RollDice;
