export const settingsActionChangeSumCapacity = 'sum_limit';
export const settingsActionChangeSubtractCapacity = 'subtract_limit';
export const settingsActionChangeMultiplyCapacity = 'multiply_limit';
export const settingsActionChangeDivideCapacity = 'divide_limit';
export const settingsActionChangePowerCapacity = 'power_limit';
export const settingsActionChangeRootCapacity = 'root_limit';

export type DigitCapacity = {
  sum: number,
  subtract: number,
  multiply: number,
  divide: number,
  power: number,
  root: number,
};

interface ChangeCapacity<T> {
  type: T;
  payload: number;
}

export type SettingsAction = ChangeCapacity<typeof settingsActionChangePowerCapacity>
| ChangeCapacity<typeof settingsActionChangeSumCapacity>
| ChangeCapacity<typeof settingsActionChangeSubtractCapacity>
| ChangeCapacity<typeof settingsActionChangeMultiplyCapacity>
| ChangeCapacity<typeof settingsActionChangeDivideCapacity>
| ChangeCapacity<typeof settingsActionChangeRootCapacity>;
