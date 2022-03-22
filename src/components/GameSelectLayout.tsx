import React from 'react';
import ButtonSet from './ButtonSet';

interface GameSelectLayoutProps {
  isGameChoosed: boolean
}

function GameSelectLayout({ isGameChoosed }: GameSelectLayoutProps): JSX.Element | null {
  return (
    !isGameChoosed
      ? (
        <div>
          <h1 style={{ marginTop: 0, textAlign: 'center', fontSize: '3rem' }}>Select math operation</h1>
          <ButtonSet />
        </div>
      )
      : null

  );
}

export default GameSelectLayout;
