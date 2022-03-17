import React from 'react';
import { Arguments } from '../types/game';
import { OPERATIONS, buttonLabelOperations } from '../const/const';

interface ExpressionContainerProps {
  args: Arguments;
  operation: string;
  isGameChoosed: boolean;
}

const ExpressionContainer: React.FC<ExpressionContainerProps> = ({
  args,
  operation,
  isGameChoosed,
}): JSX.Element | null => (
  isGameChoosed
    ? (
      <>
        <span>
          { (operation !== OPERATIONS.root)
            ? (`${args[0]} ${buttonLabelOperations[operation]} ${args[1]}`)
            : (`${operation} ${args[0]}`) }
        </span>
        <p>equals</p>
      </>
    )
    : null
);

export default ExpressionContainer;
