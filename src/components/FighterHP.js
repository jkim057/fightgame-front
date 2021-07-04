import React from 'react';

const FighterHP = ({fighterHp, setFighterHp, handleClick, resetStats}) => {

    return(
        <div>
            <div className="fighterHp" onClick={handleClick}>
                <p onClick={resetStats}> Fighter HP : { fighterHp } </p>
            </div>
        </div>
    );
};

export default FighterHP;