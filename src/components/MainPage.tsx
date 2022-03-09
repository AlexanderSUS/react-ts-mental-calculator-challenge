import React from 'react';
import ButtonSet from './ButtonSet';

interface MainPageProps {
  isGameChoosed: boolean;
}

// eslint-disable-next-line react/function-component-definition
const MainPage: React.FC<MainPageProps> = ({ isGameChoosed }): JSX.Element | null => (
  !isGameChoosed
    ? (
      <>
        <h1>Choose math operation</h1>
        <ButtonSet />
      </>
    )
    : null
);

export default MainPage;
