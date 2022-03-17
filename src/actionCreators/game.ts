import getArguments from '../helpers/getRandomArguments';
import {
  actionTypeSum, actionTypeSubtract,
  actionTypeMultiply,
  actionTypeDivide,
  actionTypePower,
  actionTypeRoot,
} from '../types/game';

export function loadSumGame(limit: number) {
  return { type: actionTypeSum, payload: getArguments(limit) };
}

export function loadSubtractGame(limit: number) {
  return { type: actionTypeSubtract, payload: getArguments(limit) };
}

export function loadMultiplyGame(limit: number) {
  return { type: actionTypeMultiply, payload: getArguments(limit) };
}

export function loadDivideGame(limit: number) {
  return { type: actionTypeDivide, payload: getArguments(limit) };
}

export function loadPowerGame(limit: number) {
  return { type: actionTypePower, payload: getArguments(limit) };
}

export function loadRootGame(limit: number) {
  return { type: actionTypeRoot, payload: getArguments(limit) };
}
