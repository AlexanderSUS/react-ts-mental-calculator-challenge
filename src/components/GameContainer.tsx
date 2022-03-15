import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getAnswer from '../helpers/answerHelper';
import useTyepedSelector from '../hooks/useTypedSelector';
import { GameActionTypes } from '../types/game';
import AnswerContainer from './AnswerContainer';
import AnswerInputContainer from './AnswerInputContainer';
import EscapeButton from './EscapeButton';
import ExpressionContainer from './ExpressionContainer';
import GameSelectLayout from './GameSelectLayout';

export type InputRef = HTMLInputElement;

// eslint-disable-next-line react/function-component-definition
const GameContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const compareAnswers = (right: number, user: number): boolean => right === user;
  const ref = useRef<HTMLInputElement>(null);

  const {
    isGameChoosed,
    isPlayed,
    args,
    operation,
  } = useTyepedSelector((s) => s.game);

  const [userAnswer, setUserAnswer] = useState(0);
  const [isUserAnswerTrue, setIsUserAnswerTrue] = useState(false);
  const answer = getAnswer(operation as string, args);

  const checkAnswer = () => {
    if (ref.current?.value) {
      setUserAnswer(Number(ref.current.value));
      dispatch({ type: GameActionTypes.GET_ANSWER });
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
      <AnswerContainer
        isPlayed={isPlayed}
        isUserAnswerTrue={isUserAnswerTrue}
        answer={answer}
        userAnswer={userAnswer}
      />
      <EscapeButton isGameChoosed={isGameChoosed} />
    </>
  );
};

export default GameContainer;
