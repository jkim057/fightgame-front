import React, { useState } from 'react';

import { 
  TurnTally, 
  FighterHP, 
  BossHP 
} from './components'

// need to stick { useState, useEffect }  into the import from react

function App() {
  // const [action, setAction] = useState([]);
  const [bossHp, setBossHp] = useState(1000);
  const [fighterHp, setFighterHp] = useState(10)
  const [turn, setTurn] = useState(0)

  const decreaseBossHp = () => {
      let damage = Math.floor(Math.random() * 1001)
      let lastHp = bossHp

      // if boss hp is less than 0 return 0
      if(lastHp - damage <= 0) {
          setBossHp(0)
      } else {
          lastHp = lastHp - damage
          setBossHp(lastHp)
      }
  }

  const decreaseFighterHp = () => {
      setFighterHp(lastHp => lastHp - 1)
  }

  const increaseTurn = () => {
      setTurn(lastTurn => lastTurn +1)
  }



  
  function handleClick(event){
    decreaseBossHp();
    decreaseFighterHp();
    increaseTurn();
    // console.log('click')
  };

  function resetStats(event){
    setBossHp(1000);
    setTurn(0);
    setFighterHp(10);
  }
  
  return (
    <div className="App">>
      <div className="models">
        <img src="" alt="fighter" srcset="" />
        <img src="" alt="boss" srcset="" />
      </div>
      <div className="status">
        <button onClick={handleClick}> go time</button>
        <button onClick={resetStats}>reset stats</button>
        <TurnTally
          turn={turn}
          setTurn={setTurn}
          handleClick={handleClick}
          resetStats={resetStats}
          />
        <FighterHP
          fighterHp={fighterHp}
          setFighterHp={setFighterHp}
          decreaseFighterHp={decreaseFighterHp}
          handleClick={handleClick}
          resetStats={resetStats}
        />
        <BossHP 
          bossHp={bossHp}
          setbossHp={setBossHp}
          decreaseBossHp={decreaseBossHp}
          handleClick={handleClick}
          resetStats={resetStats}
        />
      </div>
    </div>
  );
}

export default App;
