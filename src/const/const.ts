type ButtonLabelOperationsType = {
  [key: string]: string;
};

type OpetationsType = {
  sum: string,
  subtract: string,
  multiply: string,
  divide: string,
  power: string,
  root: string,
};

export const OPERATIONS: OpetationsType = {
  sum: 'sum',
  subtract: 'subtract',
  multiply: 'multiply',
  divide: 'divide',
  power: 'power',
  root: 'root',

};

export const buttonLabelOperations: ButtonLabelOperationsType = {
  sum: '+',
  subtract: '-',
  multiply: '*',
  divide: '/',
  power: 'x2',
  root: 'root',
};
