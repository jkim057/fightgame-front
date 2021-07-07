import React, { useState } from 'react';
// useCallback, useEffect
// import LoadingOverlay from 'react-loading-overlay-ts';
import  'react-router-dom'
import { 
  TurnTally, 
  Fighter,
  Boss,
  Modal
} from './components'
// imported components into index.js file 
import './App.css';
import 'animate.css'
// imported CSS and Animate.css for styling and animation

/////// Functions ///////

function App() {
  // setup states for HP(fighter & boss) and turns.
  const [bossHp, setBossHp] = useState(1000)
  let maxHp = 10
  const [fighterHp, setFighterHp] = useState(maxHp)
  const [turn, setTurn] = useState(0)
  const [active, setActive] = useState(0)
  const [endgame, setEndgame] = useState(false)
  const [healLimit, setHealLimit] = useState(3)

  // boss damage taken function, setup with random damage numbers
  const decreaseBossHp = () => {
      let damage = Math.floor(Math.random() * 101)
      let lastHp = bossHp

      // if boss hp is less than 0 return 0
      if(lastHp - damage <= 0) {
          setBossHp(0)
          setEndgame(true)
      } else {
          lastHp = lastHp - damage
          setBossHp(lastHp)
      }
  }

  // fighter taken function, fairly straight forward for the time being
  const decreaseFighterHp = () => {
    let lastHp = fighterHp

    if(lastHp - 1 <= 0){
      setFighterHp(0)
      setEndgame(true)
    }else{
      setFighterHp(lastHp => lastHp - 1)
    }
  }
  // fighter healing function, fairly straight forward.
  // might set limit on healing so players can't just heal spam
  const healFighterHp = () => {
    setFighterHp(lastHp => lastHp + 5)
    setHealLimit(limit => limit - 1 )
  }

  // turn tracker function, might build the score around this. might also use something similar to limit healing
  const increaseTurn = () => {
      setTurn(lastTurn => lastTurn +1)
  }




  // when player choose to fight, boss hp goes down, fighter hp goes down, turn tally goes up
  function clickAttack(event){
    decreaseBossHp();
    decreaseFighterHp();
    increaseTurn();
    setActive(1);
  };

  // when player chooses heal, fighter hp goes up, turn tally goes up, boss takes no damage.
  function clickHeal(event){
    healFighterHp();
    increaseTurn();
    setActive(2);
  }

  // total reset of turns and hp.
  function resetStats(event){
    setBossHp(1000);
    setTurn(0);
    setFighterHp(maxHp);
    setHealLimit(3);
    setActive(3);
    setEndgame(false);
  }

  // can I set this to be my toggleClass function?
  // const battleAnim = () => {
    //   // on click, add fighter swig animation, 
    // }
    
    return (
      <div className="container">
        {endgame && <Modal 
                    bossHp={bossHp}
                    resetStats={resetStats}  
                    setEndgame={setEndgame}
                    />}
      <h1> FIGHT GAME</h1>
      <div className="models">
        <Boss
          bossHp={bossHp}
          setbossHp={setBossHp}
          decreaseBossHp={decreaseBossHp}
          handleClick={clickAttack}
          resetStats={resetStats}
          active={active} />
        <Fighter
          fighterHp={fighterHp}
          healLimit={healLimit}
          setFighterHp={setFighterHp}
          decreaseFighterHp={decreaseFighterHp}
          handleClick={clickAttack}
          resetStats={resetStats} 
          active={active}/>
      </div>
      <div className="menu">
        <p className="menu"> MENU </p>
        <TurnTally
          turn={turn}
          setTurn={setTurn}
          handleClick={clickAttack}
          resetStats={resetStats}
          />
          {/* if bossHP is less than/equal to 0, buttons are disabled */}
          {/* right now the click attack and click heals are disabled when fighterHp hits 0. I'm using a function called gameover for that. I also made a new state that gets called to true */}
        <button 
          disabled={!bossHp > 0 || fighterHp === 0}
          onClick={(e) => {
            if (!endgame) return clickAttack()}}> go time </button>
        <button 
          disabled={fighterHp >= 10 || fighterHp === 0 || healLimit ===0 || !bossHp > 0}
          onClick={(e) => {
            if (!endgame) return clickHeal()}}> heal me </button>
        <button onClick={resetStats}>flee you fools</button>
            </div>
    </div>
  );
}


export default App;
