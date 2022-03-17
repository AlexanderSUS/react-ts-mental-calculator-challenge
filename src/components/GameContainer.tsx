import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getAnswer from '../helpers/answerHelper';
import useTyepedSelector from '../hooks/useTypedSelector';
import { actionTypeGetAnswer } from '../types/game';
import AnswerContainer from './AnswerContainer';
import AnswerInputContainer from './AnswerInputContainer';
import EscapeButton from './EscapeButton';
import ExpressionContainer from './ExpressionContainer';
import GameSelectLayout from './GameSelectLayout';
import compareAnswers from '../helpers/compareAnswers';

export type InputRef = HTMLInputElement;

const GameContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const {
    isGameChoosed,
    isPlayed,
    args,
    operation,
  } = useTyepedSelector((s) => s.game);

  const [userAnswer, setUserAnswer] = useState(0);
  const [isUserAnswerTrue, setIsUserAnswerTrue] = useState(false);
  const answer = Math.round(getAnswer(operation as string, args) * 10) / 10;

  const checkAnswer = () => {
    if (ref.current?.value) {
      setUserAnswer(Number(ref.current.value));
      dispatch({ type: actionTypeGetAnswer });
    }
  };

  useEffect(() => {
    setIsUserAnswerTrue(compareAnswers(answer, userAnswer));
  }, [userAnswer, answer]);

  return (
    <>
      <GameSelectLayout isGameChoosed={isGameChoosed} />
      <ExpressionContainer args={args} operation={operation} isGameChoosed={isGameChoosed} />
      <AnswerInputContainer
        ref={ref}
        checkAnswer={checkAnswer}
        isGameChoosed={isGameChoosed}
        isPlayed={isPlayed}
      />
      {isPlayed
      && (
      <AnswerContainer
        isUserAnswerTrue={isUserAnswerTrue}
        answer={answer}
        userAnswer={userAnswer}
      />
      )}
      <EscapeButton isGameChoosed={isGameChoosed} />
    </>
  );
};

export default GameContainer;
