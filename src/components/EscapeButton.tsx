import React from 'react';
import { useDispatch } from 'react-redux';
import { actionTypeExit } from '../types/game';

interface EscapeButtonProp {
  isGameChoosed: boolean
}

const EscapeButton: React.FC<EscapeButtonProp> = ({ isGameChoosed }): JSX.Element | null => {
  const dispatch = useDispatch();

  const escape = () => {
    dispatch({ type: actionTypeExit });
  };

  return (isGameChoosed
    ? <button type="button" onClick={escape}>Escape</button>
    : null
  );
};
export default EscapeButton;
