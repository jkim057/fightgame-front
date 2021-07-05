import React, { useState } from 'react';

// imported components into index.js file 
import { 
  TurnTally, 
  // FighterHP, 
  // BossHP,
  Fighter,
  Boss 
} from './components'

// imported CSS and Animate.css for styling and animation
import './App.css';
import 'animate.css'



function App() {
  // setup states for HP(fighter & boss) and turns.
  const [bossHp, setBossHp] = useState(1000);
  const [fighterHp, setFighterHp] = useState(10)
  const [turn, setTurn] = useState(0)

  // boss damage taken function, setup with random damage numbers
  const decreaseBossHp = () => {
      let damage = Math.floor(Math.random() * 501)
      let lastHp = bossHp

      // if boss hp is less than 0 return 0
      if(lastHp - damage <= 0) {
          setBossHp(0)
      } else {
          lastHp = lastHp - damage
          setBossHp(lastHp)
      }
  }

  // fighter taken function, fairly straight forward for the time being
  const decreaseFighterHp = () => {
      setFighterHp(lastHp => lastHp - 1)
  }
  // fighter healing function, fairly straight forward.
  // might set limit on healing so players can't just heal spam
  const healFighterHp = () => {
    setFighterHp(lastHp => lastHp + 2)
  }

  // turn tracker function, might build the score around this. might also use something similar to limit healing
  const increaseTurn = () => {
      setTurn(lastTurn => lastTurn +1)
  }




  // Handle functions (or how I remembered how to pass multiple functions in single prop to multiple components.)
    // different set of functions in the handleClick for when different options chosen ( first handle click for attack, second handle click for healing.)

  // when player choose to fight, boss hp goes down, fighter hp goes down, turn tally goes up
  function clickAttack(event){
    decreaseBossHp();
    decreaseFighterHp();
    increaseTurn();
    // console.log('click')
  };

  // when player chooses heal, fighter hp goes up, turn tally goes up, boss takes no damage.
  function clickHeal(event){
    healFighterHp();
    increaseTurn();
  }

  // total reset of turns and hp.
  function resetStats(event){
    setBossHp(1000);
    setTurn(0);
    setFighterHp(10);
  }

  
  return (
    <div className="container">
      <div className="models">
        <Boss
          bossHp={bossHp}
          setbossHp={setBossHp}
          decreaseBossHp={decreaseBossHp}
          handleClick={clickAttack}
          resetStats={resetStats} />
        <Fighter
          fighterHp={fighterHp}
          setFighterHp={setFighterHp}
          decreaseFighterHp={decreaseFighterHp}
          handleClick={clickAttack}
          resetStats={resetStats} />
      </div>
      <div className="menu">
        <TurnTally
          turn={turn}
          setTurn={setTurn}
          handleClick={clickAttack}
          resetStats={resetStats}
          />
        <button onClick={clickAttack}> go time </button>
        <button onClick={clickHeal}> heal me </button>
        <button onClick={resetStats}>game over man, try again?</button>
        {/* <FighterHP fighterHp={fighterHp} setFighterHp={setFighterHp} decreaseFighterHp={decreaseFighterHp} handleClick={clickAttack} resetStats={resetStats}/> */}
        {/* <BossHP bossHp={bossHp} setbossHp={setBossHp} decreaseBossHp={decreaseBossHp} handleClick={clickAttack} resetStats={resetStats}/> */}
      </div>
    </div>
  );
}

export default App;
