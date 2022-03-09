export default function getAnswer(operation: string, args: [number, number]) {
  switch (operation) {
    case '+':
      return args[0] + args[1];
    case '-':
      return args[0] - args[1];
    case '*':
      return args[0] * args[1];
    case '/':
      return args[0] / args[1];
    case '**':
      return args[0] ** args[1];
    case 'root':
      return Math.sqrt(args[0]);
    default:
      return 0;
  }
}
