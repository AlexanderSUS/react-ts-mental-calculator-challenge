import {
  GameAction, GameState,
  actionTypePower,
  actionTypeDivide,
  actionTypeExit,
  actionTypeGetAnswer,
  actionTypeMultiply,
  actionTypeNext,
  actionTypeRoot,
  actionTypeSubtract,
  actionTypeSum,
} from '../../types/game';
import { OPERATIONS } from '../../const/const';

export const initialState: GameState = {
  isGameChoosed: false,
  isPlayed: false,
  args: [0, 0],
  operation: 'sum',
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const gameReducer = (state: GameState = initialState, action: GameAction): GameState => {
  switch (action.type) {
    case actionTypeSum:
      return {
        ...state,
        isGameChoosed: true,
        args: action.payload,
        operation: OPERATIONS.sum,
      };
    case actionTypeSubtract:
      return {
        ...state,
        isGameChoosed: true,
        args: action.payload,
        operation: OPERATIONS.subtract,
      };
    case actionTypeMultiply:
      return {
        ...state,
        isGameChoosed: true,
        args: action.payload,
        operation: OPERATIONS.multiply,
      };
    case actionTypeDivide:
      return {
        ...state,
        isGameChoosed: true,
        args: action.payload,
        operation: OPERATIONS.divide,
      };
    case actionTypePower:
      return {
        ...state,
        isGameChoosed: true,
        args: action.payload,
        operation: OPERATIONS.power,
      };
    case actionTypeRoot:
      return {
        ...state,
        isGameChoosed: true,
        args: action.payload,
        operation: OPERATIONS.root,
      };
    case actionTypeGetAnswer:
      return {
        ...state, isPlayed: true,
      };
    case actionTypeNext:
      return {
        ...state,
        isGameChoosed: true,
        isPlayed: false,
        args: action.payload,
      };
    case actionTypeExit:
      return {
        ...state,
        isGameChoosed: false,
        isPlayed: false,
        args: [0, 0],
        operation: OPERATIONS.sum,
      };
    default:
      return state;
  }
};

export default gameReducer;
