export type Arguments = [number, number];

export interface GameState {
  isGameChoosed: boolean;
  isPlayed: boolean;
  args: Arguments;
  operation: string;
}

export const actionTypeSum = 'sum';
export const actionTypeSubtract = 'subtract';
export const actionTypeMultiply = 'multiply';
export const actionTypeDivide = 'divide';
export const actionTypePower = 'power';
export const actionTypeRoot = 'root';
export const actionTypeGetAnswer = 'get_answer';
export const actionTypeNext = 'next';
export const actionTypeExit = 'exit';

interface GameQuestionActions <T> {
  type: T;
  payload: Arguments;
}

interface GameNextAction {
  type: typeof actionTypeNext;
  payload: Arguments;
}

interface GameExitAction {
  type: typeof actionTypeExit;
}

interface GameGetAnswerAction {
  type: typeof actionTypeGetAnswer,
}

export type GameAction = GameQuestionActions<typeof actionTypeSum>
| GameQuestionActions<typeof actionTypeSubtract>
| GameQuestionActions<typeof actionTypeMultiply>
| GameQuestionActions<typeof actionTypeDivide>
| GameQuestionActions<typeof actionTypePower>
| GameQuestionActions<typeof actionTypeRoot>
| GameNextAction
| GameExitAction
| GameGetAnswerAction;
