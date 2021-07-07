import React from 'react';
// import fighterImg from './img/fighter.jpg'

const Fighter = ({fighterHp, clickAttack, clickHeal, resetStats, healLimit, active}) => {
    const classes = {
        // entrance
        "0": "fighterImg animate__animated animate__bounceInRight",
        // attack boss
        "1": "fighterImg animate__animated animate__flip",
        // heal self
        "2": "fighterImg animate__animated animate__heartBeat",
        // restart game
        "3": "fighterImg animate__animated animate__backInDown",
        // take damage from boss
        "4": "fighterImg animate__animated animate__shakeX",
        // standby
        "5": "fighterImg animate__animated animate__pulse"

        

    }

    return (
        <div className="fighterContainer" onClick={clickAttack}>
                <h1 className="fighterName fighterStatus" onClick={clickHeal} >Fighter</h1>
                <p className="fighterHp fighterStatus" onClick={resetStats}> HP : {fighterHp} / 10 </p>
                <p className="fighterHeals fighterStatus"> Heals Left : {healLimit} </p>
                {/* javascript expression of objects makes the classes show up conditionally */}
            <p className={classes[active]}>Fighter</p>
            {/* <img src="./img/fighter.jpg" alt="fighter"/> */}
        </div>
    );
};

export default Fighter;