import React from 'react';

const Fighter = ({fighterHp, clickAttack, clickHeal, resetStats}) => {
    return (
        <div className="fighterContainer" onClick={clickAttack}>
                <h1 className="fighterName fighterStatus" onClick={clickHeal} >Fighter</h1>
                <p className="fighterHp fighterStatus" onClick={resetStats}> HP : {fighterHp} / 10 </p>
            <p className='fighterImg animate__animated animate__bounceInRight'>Fighter</p>
            {/* <img src="" alt="fighter" srcset="" /> */}
        </div>
    );
};

export default Fighter;