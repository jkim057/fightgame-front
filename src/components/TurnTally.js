import React from 'react';

const TurnTally = ({turn, setTurn, clickAttack, clickHeal,resetStats}) => {


    return(
        <div onClick={clickHeal}>
            <div className="turnTally" onClick={clickAttack}>
                <p onClick={resetStats} > Turn : { turn } </p>
            </div>
        </div>
    );
};

export default TurnTally;