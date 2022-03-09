import React from 'react';
import { useDispatch } from 'react-redux';
import { GameActionTypes } from '../types/game';

interface EscapeButtonProp {
  isGameChoosed: boolean
}

// eslint-disable-next-line react/function-component-definition
const EscapeButton: React.FC<EscapeButtonProp> = ({ isGameChoosed }): JSX.Element | null => {
  const dispatch = useDispatch();

  const escape = () => {
    dispatch({ type: GameActionTypes.EXIT });
  };

  return (isGameChoosed
    ? <button type="button" onClick={escape}>Escape</button>
    : null
  );
};
export default EscapeButton;
