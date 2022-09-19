import React from 'react';
import GameCard from './GameCard';
import { gameList } from '../helper/games';

export default function Content() {
  return (
    <div className="page-content">
      <p>
        Este curso foi desenvolvido para quem deseja aprender a criar games e
        entrar num dos maiores, mais rentáveis e promissores mercados no Brasil
        e no mundo. Não precisa ter conhecimento prévio. O curso completo
        garante uma formação robusta onde os alunos criam seus primeiros jogos.
      </p>
      <div className="card-box">
        {gameList.map((game) => (
          <GameCard
            gameImage={game.img}
            gameLink={game.url}
            imgAlt={game.alt}
            gameTitle={game.name}
            gameDescription={game.description}
          />
        ))}
      </div>
    </div>
  );
}
