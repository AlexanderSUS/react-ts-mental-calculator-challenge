function getArguments(max: number = 100): [number, number] {
  return [Math.floor(Math.random() * max), Math.floor(Math.random() * max)];
}

export default getArguments;
