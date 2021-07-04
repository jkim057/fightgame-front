import React from 'react';

const TurnTally = ({turn, setTurn, handleClick, resetStats}) => {


    return(
        <div>
            <div className="turnTally" onClick={handleClick}>
                <p onClick={resetStats} > Turn : { turn } </p>
            </div>
        </div>
    );
};

export default TurnTally;