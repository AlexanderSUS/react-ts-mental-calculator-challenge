import React from 'react';
import { useDispatch } from 'react-redux';
import useTyepedSelector from '../hooks/useTypedSelector';
import { OPERATIONS } from '../const/const';
import DigitsSteiitngs from '../components/DigitsSteiitngs';
import {
  handleSumRadio,
  handleSubtractRadio,
  handleMultiplyRadio,
  handleDivideRadio,
  handlePowerRadio,
  handleRootRadio,
} from '../actionCreators/settings';

function SettingsPage() {
  const dispatch = useDispatch();

  const actionCreators = [
    handleSumRadio,
    handleSubtractRadio,
    handleMultiplyRadio,
    handleDivideRadio,
    handlePowerRadio,
    handleRootRadio,
  ];

  const handlers = actionCreators.map((action) => (
    e: React.FormEvent<HTMLInputElement>,
  ) => dispatch(action(e)));

  const {
    sum, subtract, multiply, divide, power, root,
  } = useTyepedSelector((state) => state.settings);

  const limitStateValues = [
    sum, subtract, multiply, divide, power, root,
  ];

  return (
    <>
      { Object.values(OPERATIONS).map(
        (o, i) => (
          <DigitsSteiitngs
            key={o}
            operationName={o}
            handler={handlers[i]}
            limitStateValue={limitStateValues[i]}
          />
        ),
      ) }
    </>
  );
}

export default SettingsPage;
