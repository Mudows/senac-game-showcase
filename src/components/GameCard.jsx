import React from 'react';

export default function GameCard(props) {
  return (
    <div className="game-cards">
      <a href={props.gameLink} target="_blank" rel="noreferrer">
        <img src={props.gameImage} alt={props.imgAlt} />
      </a>
      <p>{props.gameTitle}</p>
      <p>{props.gameDescription}</p>
    </div>
  );
}
