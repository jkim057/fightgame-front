# How to play?
It's deployed here => https://fight-game-front.herokuapp.com/

# using what?
1. react with create-react-app
2. DOM with react-router-dom
3. Animation.css with animate.css --save
<!-- 4. Overlays with react-loading-overlay-ts -->
<!-- 4. Styled components with styled-components -->


# What's setup?
1. TurnTally tracker, but kinda basic ✅
1. fighterHP tracker done ✅
1. bossHP With randomized damaged done ✅
1. linked 3 trackers into single button press for start and reset.  ✅
1. created example of animation movement. ✅
1. Reorganize so fighterIMG + fighterHP would be in same component.  ✅
1. Reorganize so bossIMG + bossHP would be in same component. ✅
1. Set limits on heals so players can't spam heals to survive. ✅
✅
❌

# next steps:
1. need to link the 3 seperate trackers to 1 button press ✅
1. need to link animation to button press. ✅
2. Need to be able to get animation to play in right order
3. Need to get animation to be able to repeat
1. New issue, grid is not holding bosses properly ✅
1. Display, want to have status bar next to fighter/boss image ✅
1. add item heal functionality? ✅
1. prevent attack or heal if fighterHp hits 0 ✅
1. prevent heal when HP is max or higher ✅
1. prevent infinite heal spam ✅ 

1. Replace image placeholders with actual image

# MVP
1. Add win and lose notifications (modals)
1. setup start screen and end screen with react-loading-overlay-ts or modal
2. Need way to trigger end screen when either boss HP hits 0 or player HP hits 0
## Bronze Goals
1. add hitrate/chance to calculator
1. Need to add start screen and end screen
1. Add Start screen modal that allows users to pick equipment
1. Pass equipment choice down as state into combat calculator
1. Equipment choice image has to show up
## Silver Goals
1. battle animation onClick for attack button ✅
1. healing animation onClick for heal button ✅
1. running animation onClick for flee button ✅
2. Need to be able to get animations to play in sequence & repeat themselves
## Gold Goals
1. Need way for add form that players can add name
1. Need way to connect winners object to backend? (so winner object with equipment(?), name, and score)
# challenges/blockers:
1. Attempted to link 3 functions in 3 seperate components into single button and pass down the event at the same time, struggled with this until I remember that I needed to move those functions into single function on main app.js page and pass that new combined function down into the 3 components. repeated that process for the reset button as well. ✅

1. Page was not displaying image and names and health bars in correct position. Eventually realized excessive number of div containers from previous state of code was interfering with display: grid command. Refracting code cleared up issues. Page now displays boss status next to image(placeholder) and the fighter status next to image(placeholder)✅

1. Was trying to find a way to disable attacking & healing if fighter hp <= 0 and disable healing if fighter hp > 9, and found a way to A. Disable the button, and also B. present onclick commands from being sent during game over ✅

1. Trying to setup start screen with equipment selection, trying to useCallBack and overlay to build it. ➡️ EDIT: Might do this with modals

1. How do I add battle/reaction animations? toggleClass on buttonClick for attack and what not? it sounds good, but not sure how it is actually done. Might save this for post MVP ➡️ EDIT: Got some animations in, need to set up setTimeout and set up the sequence


# Sources:
https://www.npmjs.com/package/react-loading-overlay-ts

