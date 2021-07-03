import React, { useState } from 'react';

const FighterHP = () => {
    const [hp, setHp] = useState(10)

    const decreaseHp = () => {
        setHp(lastHp => lastHp - 1)
    }

    return(
        <div>
        <div className="fighterHp">
            <button onClick={decreaseHp}> ugh the pain</button>
            <p> Fighter HP : { hp } </p>
        </div>
        <button onClick={()=> setHp(0)}>reset</button>
        </div>
    );
};

export default FighterHP;