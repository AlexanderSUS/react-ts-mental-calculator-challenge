import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
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

const StyledOperationButton = styled.button`
  width: 100px;
  heght: 100px;
  font-size: 2rem; 
`;

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
    <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem' }}>
      {
      operationSigns.map((operation, index) => (
        <StyledOperationButton
          key={operation}
          type="button"
          onClick={dispatchers[index]}
        >
          <MathJaxContext>
            <MathJax>
              {operation}
            </MathJax>
          </MathJaxContext>
        </StyledOperationButton>
      ))
    }
    </div>
  );
}

export default ButtonSet;
