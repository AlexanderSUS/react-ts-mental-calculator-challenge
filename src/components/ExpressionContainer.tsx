import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Arguments } from '../types/game';
import getExpressionString from '../helpers/stringHelpers';

interface ExpressionContainerProps {
  args: Arguments;
  operation: string;
}

const ExpressionContainer: React.FC<ExpressionContainerProps> = ({
  args,
  operation,
}): JSX.Element => (
  <MathJaxContext>
    <MathJax dynamic>
      {getExpressionString(operation, ...args)}
    </MathJax>
  </MathJaxContext>
);

export default ExpressionContainer;
