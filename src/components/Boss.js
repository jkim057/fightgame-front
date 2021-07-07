import React from 'react';

const Boss = ({bossHp, clickAttack, resetStats, active }) => {
    const classes = {
        // entrance
        "0": "bossImg animate__animated animate__bounceInLeft",
        // take damage
        "1": "bossImg animate__animated animate__shakeX",
        // waiting for player to heal
        "2": "bossImg animate__animated animate__pulse",
        // restarting game
        "3": "bossImg animate__animated animate__backInDown",
        // attack fighter
        "4": "bossImg animate__animated animate__swing",
        // standby
        "5": "bossImg animate__animated animate__pulse"

                

    }

    return (
        <div className="bossContainer" onClick={clickAttack}>
                <h1 className="bossName bossStatus">Boss</h1> 
                <p className="bossHp bossStatus" onClick={resetStats}> HP : {bossHp} / 1000 </p>
                <img className={classes[active]} src="../img/boss.jpg" alt="boss"/>
           

            {/* do I have to set a delay on the boss animation to FOLLOW the fighter animation? */}
        </div>
    );
};

export default Boss;