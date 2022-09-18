import React from "react";

export default function GameCard(props) {
  return(
    <>
      <div>
        <img src={props.gameImage} alt={props.imgAlt} />
      </div>
      <p>{props.gameTitle}</p>
      <p>{props.gameDescription}</p>
    </>
  )
}