import {
  DigitCapacity, SettingsAction,
  settingsActionChangePowerCapacity,
  settingsActionChangeDivideCapacity,
  settingsActionChangeMultiplyCapacity,
  settingsActionChangeRootCapacity,
  settingsActionChangeSubtractCapacity,
  settingsActionChangeSumCapacity,
} from '../../types/settings';

const initialState = {
  sum: 1000,
  subtract: 1000,
  multiply: 100,
  divide: 100,
  power: 10,
  root: 100,
};

const settingsReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: DigitCapacity = initialState,
  action: SettingsAction,
): DigitCapacity => {
  switch (action.type) {
    case settingsActionChangeSumCapacity:
      return {
        ...state, sum: action.payload,
      };
    case settingsActionChangeSubtractCapacity:
      return {
        ...state, subtract: action.payload,
      };
    case settingsActionChangeMultiplyCapacity:
      return {
        ...state, multiply: action.payload,
      };
    case settingsActionChangeDivideCapacity:
      return {
        ...state, divide: action.payload,
      };
    case settingsActionChangePowerCapacity:
      return {
        ...state, power: action.payload,
      };
    case settingsActionChangeRootCapacity:
      return {
        ...state, root: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
