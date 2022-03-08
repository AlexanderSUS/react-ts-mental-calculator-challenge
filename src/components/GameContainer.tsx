import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import getArguments from '../helpers/getRandomArguments';
import useTyepedSelector from '../hooks/useTypedSelector';
import { GameActionTypes } from '../types/game';

// eslint-disable-next-line react/function-component-definition
const GameContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const compareAnswers = (right: number, user: number): boolean => right === user;
  const ref = useRef<HTMLInputElement>(null);

  const {
    isGameChoosed,
    isPlayed,
    numA,
    numB,
    operation,
    answer,
    userAnswer,
    isAnswerTrue,
  } = useTyepedSelector((s) => s.game);

  const checkAnswer = () => {
    if (ref.current?.value) {
      dispatch({ type: GameActionTypes.SET_ANSWER, payload: ref.current.value });
      console.log(answer, Number(userAnswer));
      dispatch({
        type: GameActionTypes.DEFINE_IS_ANSWER_TRUE,
        payload: compareAnswers(answer, Number(userAnswer)),
      });
      console.log('answer is True', isAnswerTrue);
    }
  };

  const nextQuestion = () => {
    dispatch({ type: GameActionTypes.NEXT, payload: getArguments() });
  };

  useEffect(() => {
    console.log('useEffect', userAnswer);
  }, [userAnswer]);

  return (
    <>
      { !isGameChoosed && <h1>Choose math operation</h1>}
      { isGameChoosed && (
      <span>
        {numA}
        {' '}
        {operation}
        {' '}
        {numB}
        {' '}
        equals
      </span>
      )}
      {(isGameChoosed && !isPlayed)
        && (
        <>
          <input type="number" placeholder="your answer" ref={ref} />
          <button type="button" onClick={checkAnswer}>Submit</button>
        </>
        )}
      {(isPlayed && isAnswerTrue)
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
      {(isPlayed && !isAnswerTrue)
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

export default GameContainer;
