import { GameAction, GameActionTypes, GameState } from '../../types/game';
import { OPERATIONS } from '../../components/ButtonSet';

const initialState: GameState = {
  isGameChoosed: false,
  isPlayed: false,
  args: [0, 0],
  operation: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const gameReducer = (state: GameState = initialState, action: GameAction): GameState => {
  switch (action.type) {
    case GameActionTypes.SUM:
      return {
        ...state,
        isGameChoosed: true,
        args: action.payload,
        operation: OPERATIONS.sum,
      };
    case GameActionTypes.SUBTRACT:
      return {
        ...state,
        isGameChoosed: true,
        args: action.payload,
        operation: OPERATIONS.subtract,
      };
    case GameActionTypes.MULTIPLY:
      return {
        ...state,
        isGameChoosed: true,
        args: action.payload,
        operation: OPERATIONS.multiply,
      };
    case GameActionTypes.DIVIDE:
      return {
        ...state,
        isGameChoosed: true,
        args: action.payload,
        operation: OPERATIONS.divide,
      };
    case GameActionTypes.DEGREE:
      return {
        ...state,
        isGameChoosed: true,
        args: action.payload,
        operation: OPERATIONS.degree,
      };
    case GameActionTypes.ROOT:
      return {
        ...state,
        isGameChoosed: true,
        args: action.payload,
        operation: OPERATIONS.root,
      };
    case GameActionTypes.GET_ANSWER:
      return {
        ...state, isPlayed: true,
      };
    case GameActionTypes.NEXT:
      return {
        ...state,
        isGameChoosed: true,
        isPlayed: false,
        args: action.payload,
      };
    case GameActionTypes.EXIT:
      return {
        ...state,
        isGameChoosed: false,
        isPlayed: false,
        args: [0, 0],
        operation: null,
      };
    default:
      return state;
  }
};

export default gameReducer;
