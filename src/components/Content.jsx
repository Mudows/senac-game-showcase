import React from 'react';
import GameCard from './GameCard';
import { gameList } from '../helper/games';

export default function Content() {
  return (
    <div className="page-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        pharetra neque, ut blandit sapien laoreet quis. Integer et tincidunt
        eros. Nam dolor odio, aliquet ac urna vitae, lobortis sagittis eros. Sed
        imperdiet sit amet est a molestie. Nunc consequat neque sed mauris
        convallis, sed ultrices massa eleifend. Proin ut consectetur est. Nulla
        facilisi. Duis eu enim urna. Curabitur et ultrices leo.
      </p>
      <div className="card-box">
        {gameList.map((game) => (
          <GameCard
            gameImage={game.img}
            gameLunk={game.url}
            imgAlt={game.alt}
            gameTitle={game.name}
            gameDescription={game.description}
          />
        ))}
      </div>
    </div>
  );
}
