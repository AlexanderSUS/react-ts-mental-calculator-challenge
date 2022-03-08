import { GameAction, GameActionTypes, GameState } from '../../types/game';
import getAnswer from '../../helpers/answerHelper';
import { OPERATIONS } from '../../components/ButtonSet';

const initialState: GameState = {
  isGameChoosed: false,
  isPlayed: false,
  numA: null,
  numB: null,
  operation: null,
  answer: 0,
  userAnswer: null,
  isAnswerTrue: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const gameReducer = (state: GameState = initialState, action: GameAction): GameState => {
  switch (action.type) {
    case GameActionTypes.SUM:
      return {
        ...state,
        isGameChoosed: true,
        numA: action.payload[0],
        numB: action.payload[1],
        operation: OPERATIONS.sum,
        answer: getAnswer(OPERATIONS.sum, action.payload[0], action.payload[1]),
      };
    case GameActionTypes.SUBTRACT:
      return {
        ...state,
        isGameChoosed: true,
        numA: action.payload[0],
        numB: action.payload[1],
        operation: OPERATIONS.subtract,
        answer: getAnswer(OPERATIONS.subtract, action.payload[0], action.payload[1]),
      };
    case GameActionTypes.MULTIPLY:
      return {
        ...state,
        isGameChoosed: true,
        numA: action.payload[0],
        numB: action.payload[1],
        operation: OPERATIONS.multiply,
        answer: getAnswer(OPERATIONS.multiply, action.payload[0], action.payload[1]),
      };
    case GameActionTypes.DIVIDE:
      return {
        ...state,
        isGameChoosed: true,
        numA: action.payload[0],
        numB: action.payload[1],
        operation: OPERATIONS.divide,
        answer: getAnswer(OPERATIONS.divide, action.payload[0], action.payload[1]),
      };
    case GameActionTypes.DEGREE:
      return {
        ...state,
        isGameChoosed: true,
        numA: action.payload[0],
        numB: action.payload[1],
        operation: OPERATIONS.degree,
        answer: getAnswer(OPERATIONS.degree, action.payload[0], action.payload[1]),
      };
    case GameActionTypes.ROOT:
      return {
        ...state,
        isGameChoosed: true,
        numA: action.payload[0],
        operation: OPERATIONS.root,
        answer: getAnswer(OPERATIONS.root, action.payload[0]),
      };
    case GameActionTypes.SET_ANSWER:
      return {
        ...state,
        isPlayed: true,
        userAnswer: action.payload,
      };
    case GameActionTypes.DEFINE_IS_ANSWER_TRUE:
      return {
        ...state,
        isAnswerTrue: action.payload,
      };
    case GameActionTypes.NEXT:
      return {
        ...state,
        isGameChoosed: true,
        isPlayed: false,
        numA: action.payload[0],
        numB: action.payload[1],
        answer: getAnswer(state.operation as string, action.payload[0], action.payload[1]),
        isAnswerTrue: false,
      };
    case GameActionTypes.EXIT:
      return {
        ...state,
        isGameChoosed: false,
        isPlayed: false,
        numA: null,
        numB: null,
        operation: null,
        isAnswerTrue: false,
      };
    default:
      return state;
  }
};

export default gameReducer;
