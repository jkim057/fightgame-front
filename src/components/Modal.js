import React from 'react';

const Modal = ({ bossHp, resetStats, setEndgame }) => {
    return (
        <div className="resultBack">
            <div className="resultContainer">
                <div className="resultBtnDiv">
                    <button className="resultCloseBtn" onClick={() => setEndgame(false)}> X </button>
                </div>
                <div className="resultTitle">
                { bossHp === 0 ?
                        <h1> BIG WINNER </h1> :
                        <h1>YOU LOSE </h1>
                    }
                </div>
                <div className="resultBody">
                    { bossHp === 0 ?
                        <p> You beat the boss! Great job. Play again? </p> :
                        <p> Damn, you just ate dust. Oof. Try again? </p>
                    }
                </div>
                <div className="resultFooter">
                    <button className="resultResetBtn" onClick={resetStats}>Play again?</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;