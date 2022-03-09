export type Arguments = [number, number];
export interface GameState {
  isGameChoosed: boolean;
  isPlayed: boolean;
  args: Arguments;
  operation: null | string;
}

export enum GameActionTypes {
  SUM = 'SUM',
  SUBTRACT = 'SUBTRACT',
  MULTIPLY = 'MULTIPLY',
  DIVIDE = 'DIVIDE',
  DEGREE = 'DEGREE',
  ROOT = 'ROOT',
  GET_ANSWER = 'GET_ANSWER',
  NEXT = 'NEXT',
  EXIT = 'EXIT',
}

interface GameQuestionActions <T> {
  type: T;
  payload: Arguments;
}

interface GameNextAction {
  type: GameActionTypes.NEXT;
  payload: Arguments;
}

interface GameExitAction {
  type: GameActionTypes.EXIT;
}

interface GameGetAnswerAction {
  type: GameActionTypes.GET_ANSWER,
}

export type GameAction = GameQuestionActions<GameActionTypes.SUM>
| GameQuestionActions<GameActionTypes.SUBTRACT>
| GameQuestionActions<GameActionTypes.MULTIPLY>
| GameQuestionActions<GameActionTypes.DIVIDE>
| GameQuestionActions<GameActionTypes.DEGREE>
| GameQuestionActions<GameActionTypes.ROOT>
| GameNextAction
| GameExitAction
| GameGetAnswerAction;
