import React from "react";
import senac_logo2 from '../img/senac_logo2.png';

export default function Header () {
  return(
    <div className="page-header">
      <input type="image" src={ senac_logo2 } alt="Logo Senac" />
      <h1>Games Showcase</h1>
      <h3>Amostra de jogos do curso de Game Design do Senac RJ</h3>
    </div>
  )
}
