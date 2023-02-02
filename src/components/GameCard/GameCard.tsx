import React from 'react';
import './GameCard.css';

function GameCard() {
  return (
    <div className="gamecard">
      <div className="gamecard__title">
        <h4 className="gamecard__name">Name of game</h4>
        <p className="gamecard__description">Descriptoin of game</p>
      </div>
      <div className="gamecard__image-block">
        <img className="gamecard__image" src="https://ouch-cdn2.icons8.com/z6SdE9V5igFri3ElNWyAuv3Fy3mw70QtNAbJBnCiSQw/rs:fit:252:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODUx/L2RhODljOTg1LWJi/ZTMtNGEwNC1hZTNm/LWY2ZjBlNjRjNjdm/Yi5zdmc.png" alt="" />
      </div>
    </div>
  );
}

export default GameCard;
