import React from 'react';
import { useDispatch } from 'react-redux';
import {
  loadSumGame,
  loadSubtractGame,
  loadMultiplyGame,
  loadDivideGame,
  loadPowerGame,
  loadRootGame,
} from '../actionCreators/game';
import { buttonLabelOperations } from '../const/const';
import useTyepedSelector from '../hooks/useTypedSelector';

const operationSigns = Object.values(buttonLabelOperations);

function ButtonSet() {
  const dispatch = useDispatch();
  const { game, settings } = useTyepedSelector((state) => state);
  const actionCreators = [
    loadSumGame, loadSubtractGame, loadMultiplyGame, loadDivideGame, loadPowerGame, loadRootGame,
  ];

  const dispatchers = actionCreators.map((
    actionCreator,
  ) => () => dispatch(actionCreator(settings[game.operation as keyof typeof settings])));

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {
      operationSigns.map((operation, index) => (
        <button
          key={operation}
          type="button"
          onClick={dispatchers[index]}
        >
          {operation}
        </button>
      ))
    }
    </div>
  );
}

export default ButtonSet;
