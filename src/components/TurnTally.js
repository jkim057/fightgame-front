import React, { useState } from 'react';

const TurnTally = () => {
    const [turn, setTurn] = useState(0)

    const increaseTurn = () => {
        setTurn(lastTurn => lastTurn +1)
    }

    return(
        <div>
        <div className="turnTally">
            <button onClick={increaseTurn}> Start it up</button>
            <p> Turn : { turn} </p>
        </div>
        <button onClick={()=> setTurn(0)}>reset</button>
        </div>
    );
};

export default TurnTally;