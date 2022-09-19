import React from 'react';
import senacWhite from '../img/senac_logo_branco.png';
import { socialNetworks } from '../helper/socialNetworks';

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={senacWhite} alt="Senac" />
      </div>
      <div>
        <p>© Todos os Direitos Reservados - 2017.</p>
      </div>
      <div>
        {socialNetworks.map((network) => (
          <a href={network.url} className="social-btn-white" target="_blank" rel="noreferrer">
            <i className={network.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
}
