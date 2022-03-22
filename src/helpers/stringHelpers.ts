import { OPERATIONS } from '../const/const';

function getExpressionString(
  operation: string,
  a: number,
  b: number,
): string {
  switch (operation) {
    case OPERATIONS.sum:
      return `$$${a} + ${b}$$`;
    case OPERATIONS.subtract:
      return `${a} - ${b}`;
    case OPERATIONS.multiply:
      return `${a} * ${b}`;
    case OPERATIONS.divide:
      return `${a} / ${b}`;
    case OPERATIONS.power:
      return `$$${a}^{${b}}$$`;
    case OPERATIONS.root:
      return `$$\\sqrt{${a}}$$`;
    default:
      return '';
  }
}

export default getExpressionString;
