import React from 'react';
import { Arguments } from '../types/game';
import { OPERATIONS } from './ButtonSet';

interface ExpressionContainerProps {
  args: Arguments;
  operation: string | null;
  isGameChoosed: boolean;
}

// eslint-disable-next-line react/function-component-definition
const ExpressionContainer: React.FC<ExpressionContainerProps> = ({
  args,
  operation,
  isGameChoosed,
}): JSX.Element | null => (
  isGameChoosed
    ? (
      <>
        {
      (operation !== OPERATIONS.root)
        ? (
          <p>
            {args[0]}
            {' '}
            {operation}
            {' '}
            {args[1]}
          </p>
        )
        : (
          <p>
            {operation}
            {' '}
            {args[1]}
          </p>
        )
}
        <p>equals</p>
      </>
    )
    : null
);

export default ExpressionContainer;
