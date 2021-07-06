import React, { useState, useCallback, useEffect } from 'react';
// import LoadingOverlay from 'react-loading-overlay-ts';
import  'react-router-dom'
import { 
  TurnTally, 
  // FighterHP, 
  // BossHP,
  Fighter,
  Boss 
} from './components'
// imported components into index.js file 
import './App.css';
import 'animate.css'
// imported CSS and Animate.css for styling and animation

/////// Functions ///////

function App() {
  // setup states for HP(fighter & boss) and turns.
  const [bossHp, setBossHp] = useState(1000);
  let maxHp = 10
  const [fighterHp, setFighterHp] = useState(maxHp)
  const [turn, setTurn] = useState(0)

  // boss damage taken function, setup with random damage numbers
  const decreaseBossHp = () => {
      let damage = Math.floor(Math.random() * 101)
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

  const gameOver = () => {
    if(fighterHp <= 0){
      return true
    }
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

  // can I set this to be my toggleClass function?
  // const battleAnim = () => {
  //   // on click, add fighter swig animation, 
  // }

  

  // The overlay just shows up, but there's no way to get rid of it.

    // const [isActive, setActive] = useState(true)
    // const overlayClick = useCallback(() => {
    //   setActive(value => !value)
    // }, [])

  
  return (
    // <LoadingOverlay
    //   active={isActive}
    //   spinner
    //   text='Welcome to FIGHT GAME. Choose your weapon'
    // >
    //   <div style={{ height: 200 }}>
    //     <p>Some content or children or something.</p>
    //     <button onClick={overlayClick}>Toggle active</button>
    //   </div>

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
          {/* if bossHP is less than/equal to 0, buttons are disabled */}
          <p> What do you want to do? </p>
        <button 
          disabled={!bossHp > 0 || fighterHp === 0}
          onClick={(e) => {
            if (!gameOver()) return clickAttack()}}> go time </button>
        <button 
          disabled={fighterHp === 10 || fighterHp === 0 || !bossHp > 0}
          onClick={(e) => {
            if (!gameOver()) return clickHeal()}}> heal me </button>
        <button onClick={resetStats}>flee you fools</button>
        {/* need to link flee button resetStats to end screen and score calculation trigger */}
        {/* <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveLeft())
                }}>Left</button> */}

      </div>
    </div>
    // </LoadingOverlay>
  );
}

export default App;
