import React from 'react';
import { useDispatch } from 'react-redux';
import getArguments from '../helpers/getRandomArguments';
import { GameActionTypes } from '../types/game';

export const OPERATIONS = {
  sum: '+',
  subtract: '-',
  multiply: '*',
  divide: '/',
  degree: 'x2',
  root: 'root',
};

const operationSigns = Object.values(OPERATIONS);

function ButtonSet() {
  const data = getArguments();

  const dispatch = useDispatch();

  function loadSumGame() {
    dispatch({ type: GameActionTypes.SUM, payload: data });
  }

  function loadSubtractGame() {
    dispatch({ type: GameActionTypes.SUBTRACT, payload: data });
  }

  function loadMultiplyGame() {
    dispatch({ type: GameActionTypes.MULTIPLY, payload: data });
  }

  function loadDivideGame() {
    dispatch({ type: GameActionTypes.DIVIDE, payload: data });
  }

  function loadDegreeGame() {
    dispatch({ type: GameActionTypes.DEGREE, payload: data });
  }

  function loadRootGame() {
    dispatch({ type: GameActionTypes.ROOT, payload: data });
  }

  const helpers = [
    loadSumGame, loadSubtractGame, loadMultiplyGame, loadDivideGame, loadDegreeGame, loadRootGame,
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {
    operationSigns.map((o, index) => <button key={o} type="button" onClick={helpers[index]}>{o}</button>)
    }
    </div>
  );
}

export default ButtonSet;
