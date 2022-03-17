import React from 'react';
import { useDispatch } from 'react-redux';
import getArguments from '../helpers/getRandomArguments';
import useTyepedSelector from '../hooks/useTypedSelector';
import { actionTypeNext } from '../types/game';

interface AnswerContainerProps {
  isUserAnswerTrue: boolean;
  answer: number;
  userAnswer: number;
}

const AnswerContainer: React.FC<AnswerContainerProps> = ({
  isUserAnswerTrue, answer, userAnswer,
}) => {
  const { game, settings } = useTyepedSelector((state) => state);
  const dispatch = useDispatch();
  const nextQuestion = () => {
    dispatch({
      type: actionTypeNext,
      payload: getArguments(settings[game.operation as keyof typeof settings]),
    });
  };

  return (
    <>
      <span>
        {answer}
      </span>
      {
        isUserAnswerTrue
        && <h4>Success!</h4>
      }
      <div>
        Your Answer =
        {userAnswer}
      </div>
      <button type="button" onClick={nextQuestion}>Next</button>
    </>
  );
};

export default AnswerContainer;
