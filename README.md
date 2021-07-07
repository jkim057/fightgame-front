# FIGHT GAME

![fightgameAppScreenshot-v1](https://media.git.generalassemb.ly/user/35453/files/ca9e9b80-deae-11eb-93cf-e6ee2637c099)
## Description

Challenger, there is a boss in your way.
Show them who the real boss is! Punch them with your sword, guzzle down your potions, or valiantly charge in the other direction to fight another day!  

## View the deployed version here!
It's deployed here => https://fight-game-front.herokuapp.com/

## Wireframes
![combat-wireframe](https://media.git.generalassemb.ly/user/35453/files/25ce8f00-deab-11eb-8ddd-38fcc6e9bbae)
![wireframes](https://media.git.generalassemb.ly/user/35453/files/ff5e2300-dead-11eb-8518-c7398f511b49)
## Tech Stack
### Frontend:
1. Javascript, CSS, React.js

## Dependencies
1. react with create-react-app
2. DOM with react-router-dom
3. Animation.css with animate.css --save

## User Stories
1. I want a chance to win against the boss.(user).
1. 1 button spam is a boring game. (user)
1. Did I win or did I lose? Is there anyway to know? (user)
1. How do I know if the buttons to do stuff actually DID stuff? (user)
## Major Hurdles/ Unresolved Issues
1. Attempted to link 3 functions in 3 seperate components into single button and pass down the event at the same time, struggled with this until I remember that I needed to move those functions into single function on main app.js page and pass that new combined function down into the 3 components. repeated that process for the reset button as well. ✅

1. Page was not displaying image and names and health bars in correct position. Eventually realized excessive number of div containers from previous state of code was interfering with display: grid command. Refracting code cleared up issues. Page now displays boss status next to image(placeholder) and the fighter status next to image(placeholder)✅

1. Was trying to find a way to disable attacking & healing if fighter hp <= 0 and disable healing if fighter hp > 9, and found a way to A. Disable the button, and also B. present onclick commands from being sent during game over ✅

1. Trying to setup start screen with equipment selection, trying to useCallBack and overlay to build it. ➡️ EDIT: Might do this with modals

1. How do I add battle/reaction animations? toggleClass on buttonClick for attack and what not? it sounds good, but not sure how it is actually done. Might save this for post MVP ➡️ EDIT: Got some animations in ✅

1. Animations need to be set up setTimeout and set up the sequence of attack/reactions and then return to wait screen otherwise animations won't play properly


## What's done?
1. TurnTally tracker, but kinda basic ✅
1. fighterHP tracker done ✅
1. bossHP With randomized damaged done ✅
1. linked 3 trackers into single button press for start and reset.  ✅
1. created example of animation movement. ✅
1. Reorganize so fighterIMG + fighterHP would be in same component.  ✅
1. Reorganize so bossIMG + bossHP would be in same component. ✅
1. Set limits on heals so players can't spam heals to survive. ✅
1. New issue, grid is not holding bosses properly EDIT: Grid now holds items correctly ✅
1. Display: want to have status bar next to fighter/boss image ✅
1. add item heal functionality? ✅
1. prevent attack or heal if fighterHp hits 0 ✅
1. prevent heal when HP is max or higher ✅
1. prevent infinite heal spam ✅ 
1. Replace image placeholders with actual image ✅
1. Add win and lose notifications for end screenwith modals ✅
1. Need way to trigger win/lose status when either boss HP hits 0 or player HP hits 0 ✅

✅
❌
## Future Plans

### next steps:
1. need to link the 3 seperate trackers to 1 button press ✅
1. need to link animation to button press. ✅
1. Need to be able to get animation to play in right order
1. Need to get animation to be able to repeat
1. Need to fix mobile formatting

### MVP
#### Bronze Goals
1. Mobile Formatting:
1. Fix the mobile formatting

2. Start Screen:
2. setup start screen with modals
2. Add Start screen modal that allows users to pick equipment

3. Equipment:
3. add hitrate/chance to calculator
3. Pass equipment choice down as state into combat calculator
3. Equipment choice image has to show up
#### Silver Goals
1. battle animation onClick for attack button ✅
1. healing animation onClick for heal button ✅
1. running animation onClick for flee button ✅
2. Need to be able to get animations to play in sequence & repeat themselves
#### Gold Goals
1. Need way for add form that players can add name
1. Need way to connect winners object to backend? (so winner object with equipment(?), name, and score)


# Sources:
1. https://animate.style/ for Animate.css 
1. https://www.npmjs.com/package/react-loading-overlay-ts
1. https://www.pluralsight.com/guides/create-a-hover-button-in-a-react-app
1. https://reactjs.org/docs/conditional-rendering.html
