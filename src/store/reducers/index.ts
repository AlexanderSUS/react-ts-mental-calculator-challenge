import { combineReducers } from 'redux';
import gameReducer from './gameStateReducer';

export const rootReducer = combineReducers({
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
