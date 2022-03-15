import React from 'react';
import ButtonSet from './ButtonSet';

interface GameSelectLayoutProps {
  isGameChoosed: boolean
}

function GameSelectLayout({ isGameChoosed }: GameSelectLayoutProps): JSX.Element | null {
  return (
    !isGameChoosed
      ? (
        <>
          <h1>Select math operation</h1>
          <ButtonSet />
        </>
      )
      : null

  );
}

export default GameSelectLayout;
