import { OPERATIONS } from '../const/const';

export default function getAnswer(operation: string, args: [number, number]) {
  switch (operation) {
    case OPERATIONS.sum:
      return args[0] + args[1];
    case OPERATIONS.subtract:
      return args[0] - args[1];
    case OPERATIONS.multiply:
      return args[0] * args[1];
    case OPERATIONS.divide:
      return args[0] / args[1];
    case OPERATIONS.power:
      return args[0] ** args[1];
    case OPERATIONS.root:
      return Math.sqrt(args[0]);
    default:
      return 0;
  }
}
