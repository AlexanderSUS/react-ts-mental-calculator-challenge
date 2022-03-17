import { combineReducers } from 'redux';
import gameReducer from './gameStateReducer';
import settingsReducer from './settingsStateReducer';

export const rootReducer = combineReducers({
  game: gameReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
