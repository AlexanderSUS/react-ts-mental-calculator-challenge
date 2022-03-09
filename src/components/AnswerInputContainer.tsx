import React from 'react';

interface AnswerInputContainerProps {
  checkAnswer: () => void,
  isGameChoosed: boolean,
  isPlayed: boolean,
}

type InputRef = HTMLInputElement;

const AnswerInputContainer = React.forwardRef((
  props: AnswerInputContainerProps,
  ref: React.Ref<InputRef>,
) => (
  (props.isGameChoosed && !props.isPlayed)
    ? (
      <>
        <input type="number" placeholder="your answer" ref={ref} />
        <button type="button" onClick={props.checkAnswer}>Submit</button>
      </>
    )
    : null
));

export default AnswerInputContainer;
