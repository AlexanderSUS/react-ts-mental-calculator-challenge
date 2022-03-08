export interface GameState {
  isGameChoosed: boolean;
  isPlayed: boolean;
  numA: null | number;
  numB: null | number;
  operation: null | string;
  answer: number;
  userAnswer: null | string;
  isAnswerTrue: boolean;
}

export enum GameActionTypes {
  SUM = 'SUM',
  SUBTRACT = 'SUBTRACT',
  MULTIPLY = 'MULTIPLY',
  DIVIDE = 'DIVIDE',
  DEGREE = 'DEGREE',
  ROOT = 'ROOT',
  SET_ANSWER = 'SET_ANSWER',
  NEXT = 'NEXT',
  EXIT = 'EXIT',
  DEFINE_IS_ANSWER_TRUE = 'DEFINE_IS_ANSWER_TRUE',
}

interface GameQuestionActions <T> {
  type: T;
  payload: [number, number];
}

interface GameSetAnswerAction {
  type: GameActionTypes.SET_ANSWER;
  payload: string;
}

interface GameNextAction {
  type: GameActionTypes.NEXT;
  payload: [number, number];
}

interface GameExitAction {
  type: GameActionTypes.EXIT;
}

interface GameDefineAnswerAction {
  type: GameActionTypes.DEFINE_IS_ANSWER_TRUE,
  payload: boolean,
}

export type GameAction = GameQuestionActions<GameActionTypes.SUM>
| GameQuestionActions<GameActionTypes.SUBTRACT>
| GameQuestionActions<GameActionTypes.MULTIPLY>
| GameQuestionActions<GameActionTypes.DIVIDE>
| GameQuestionActions<GameActionTypes.DEGREE>
| GameQuestionActions<GameActionTypes.ROOT>
| GameSetAnswerAction
| GameNextAction
| GameExitAction
| GameDefineAnswerAction;
