import React from "react";
import senac_logo2 from '../img/senac_logo2.png';
import { socialNetworks } from "../helper/socialNetworks";

export default function Header () {
  return(
    <div className="page-header">
      <div>
      <input type="image" src={ senac_logo2 } alt="Logo Senac" />
      </div>
      <div>
      <h1>Games Showcase</h1>
      <h3>Amostra de jogos do curso de Game Design do Senac RJ</h3>
      </div>
      <div>
      {socialNetworks.map((network) => (
          <a href={network.url} className="social-btn-blue" target="_blank" rel="noreferrer">
            <i className={network.icon}></i>
          </a>
        ))}
      </div>
    </div>
  )
}
