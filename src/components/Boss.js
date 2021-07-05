import React from 'react';

const Boss = ({bossHp, clickAttack, resetStats }) => {
    return (
        <div className="bossContainer" onClick={clickAttack}>
                <h1 className="bossName bossStatus">Boss</h1> 
                <p className="bossHp bossStatus" onClick={resetStats}> HP : {bossHp} / 1000 </p>
                <p className='bossImg animate__animated animate__bounceInLeft'> Boss </p>
           
            {/* <img src="" alt="boss" srcset="" /> */}
            {/* do I have to set a delay on the boss animation to FOLLOW the fighter animation? */}
        </div>
    );
};

export default Boss;