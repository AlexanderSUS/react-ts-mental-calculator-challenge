import React from 'react';
import { useDispatch } from 'react-redux';
import getArguments from '../helpers/getRandomArguments';
import { GameActionTypes } from '../types/game';

interface AnswerContainerProps {
  isPlayed: boolean;
  isUserAnswerTrue: boolean;
  answer: number;
  userAnswer: number;
}

// eslint-disable-next-line react/function-component-definition
const AnswerContainer: React.FC<AnswerContainerProps> = ({
  isPlayed, isUserAnswerTrue, answer, userAnswer,
}) => {
  const dispatch = useDispatch();
  const nextQuestion = () => {
    dispatch({ type: GameActionTypes.NEXT, payload: getArguments() });
  };

  return (
    <>
      {(isPlayed && isUserAnswerTrue)
           && (
             <>
               <span>
                 {answer}
               </span>
               <h4>Success!</h4>
               <div>
                 Your Answer =
                 {userAnswer}
               </div>
               <button type="button" onClick={nextQuestion}>Next</button>
             </>
           )}
      {(isPlayed && !isUserAnswerTrue)
           && (
             <>
               <span>
                 {answer}
               </span>
               <div>
                 Your Answer =
                 {userAnswer}
               </div>
               <button type="button" onClick={nextQuestion}>Next</button>
             </>
           )}
    </>
  );
};

export default AnswerContainer;
