# using what?
1. react with create-react-app
2. react-router-dom
3. animation.css with animate.css --save


# What's setup?
1. TurnTally tracker, but kinda basic ✅
1. fighterHP tracker done ✅
1. bossHP With randomized damaged done ✅
1. linked 3 trackers into single button press for start and reset.
1. created example of animation movement
1. Reorganize so fighterIMG + fighterHP would be in same component
1. Reorganize so bossIMG + bossHP would be in same component
✅
❌

# next steps:
1. need to link the 3 seperate trackers to 1 button press ✅
1. need to link animation to button press.
1. New issue, grid is not holding bosses properly
1. Display, want to have status bar next to fighter/boss image
1. add item heal functionality?

# challenges/blockers:
1. Attempted to link 3 functions in 3 seperate components into single button and pass down the event at the same time, struggled with this until I remember that I needed to move those functions into single function on main app.js page and pass that new combined function down into the 3 components. repeated that process for the reset button as well. ✅

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


  // on button click, the left image and the right image have to go to the middle
  // on button click, the math algorithms (hit rate + damage) also have to run
  // if hit rate is higher then 70, then it needs to be considered a hit
  // if it's a hit, the damage needs to be subtracted from the boss' life
  // user hit or miss, the user needs to lose 1 life

  // onClick, calculate math formulas
  // what does the battle logic need to do?
  // if(boss hp >0) {
  //   Hit chance (seperate component to pull in?)
  //     Hit chance calculator
  //     Hit chance = equipment # + RNG [math.floor(math.random * 100)
  //       if(hit change = 0)
  //         - Maybe a joke score if they hit 0 (critical miss)
  //         - Miss
  //         - Player hp = 0
  //         - Special notification?
  //         <p> ` C R I T I C A L    M I S S` </p>
  //         <p> `holy smokes you missed so hard you chopped off your sword hand AND wrecked yourself. Take this L and try again. </p>
  //       else if(hit chance >= 1 && hit chance < 70)
  //         - Miss
  //         - Player hp = player hp  -2
  //       elseif (hit chance >=70 && hit chance < 99)
  //         - Hit
  //         - Run damage calculator
  //       elseif (hit chance >= 100)
  //         - Hit 
  //         - Run damage calculator
  //         - Critical hit status:
  //           - Multiple damage by 3
  //           - Need special notification of hit too
  //           - <p> C R I T I C A L   H I T ! `</p>
  //           - <p>‘ sweet mother you just hit the sweet spot. You gone and broke ‘em in half!`</p>

  //     Damage calculator
  //       Damage = (equipment # + RNG (math.floor(math.random * 100) x3(if critical hit)if (damage >=100)
  //         Boss HP = 0
  //         Special notification
  //         <p> ‘ C R I T I C A L   D A M A G E ` <p>
  //           <p>’ You just smacked them so hard they’re gone and joined the choir invisible. THIS IS A EX - BOSS! </p>
  //           - End game
  //           - Calculate score
  //       elseif (damage <= 99)
  //         Boss hp - damage
  //         player hp-1
  //         Turn counter + 1
  //         Go back to the waiting screen?
  //       elseif (boss hp <= 0){
  //       - Score calculator(based off of turn counter)
  //        <p> ` You won! Your score was ${player.score} & you took {player.turns}` </p>

  //        elseif(playerhp = 0 && boss hp > 0){
  //          Score calculator(based off of turn counter)
  //          <p> ` You are defeated! Your score was ${player.score} & you took {player.turns}` </p>
  
