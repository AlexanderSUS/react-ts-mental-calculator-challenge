import {
  settingsActionChangePowerCapacity,
  settingsActionChangeDivideCapacity,
  settingsActionChangeMultiplyCapacity,
  settingsActionChangeRootCapacity,
  settingsActionChangeSubtractCapacity,
  settingsActionChangeSumCapacity,
} from '../types/settings';

export function handleSumRadio(e: React.FormEvent<HTMLInputElement>) {
  return { type: settingsActionChangeSumCapacity, payload: +e.currentTarget.value };
}

export function handleSubtractRadio(e: React.FormEvent<HTMLInputElement>) {
  return { type: settingsActionChangeSubtractCapacity, payload: +e.currentTarget.value };
}

export function handleMultiplyRadio(e: React.FormEvent<HTMLInputElement>) {
  return { type: settingsActionChangeMultiplyCapacity, payload: +e.currentTarget.value };
}

export function handleDivideRadio(e: React.FormEvent<HTMLInputElement>) {
  return { type: settingsActionChangeDivideCapacity, payload: +e.currentTarget.value };
}

export function handlePowerRadio(e: React.FormEvent<HTMLInputElement>) {
  return { type: settingsActionChangePowerCapacity, payload: +e.currentTarget.value };
}

export function handleRootRadio(e: React.FormEvent<HTMLInputElement>) {
  return { type: settingsActionChangeRootCapacity, payload: +e.currentTarget.value };
}
