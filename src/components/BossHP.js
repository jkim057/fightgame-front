import React, { useState } from 'react';

const BossHP = () => {
    const [hp, setHp] = useState(100);
    
    
    const decreaseHp = () => {
        let damage = Math.floor(Math.random() * 101)
        let lastHp = hp
  
        // if boss hp is less than 0 return 0
        if(lastHp - damage <= 0) {
            setHp(0)
        } else {
            lastHp = lastHp - damage
            setHp(lastHp)
        }
    }

    return(
        <div>
        <div className="BossHp">
            <button onClick={decreaseHp}> why won't you go down</button>
            <p> Boss HP : { hp } </p>
        </div>
        <button onClick={()=> setHp(100)}>reset</button>
        </div>
    );
};

export default BossHP;