import React from 'react';

interface DigitsSteiitngsProps {
  operationName: string;
  handler: (e: React.FormEvent<HTMLInputElement>) => void;
  limitStateValue: number;
}

const RADIOS = ['limit1', 'limit2', 'limit3', 'limit4'];
const CAPACITY = [10, 100, 1000, 10000];

function checkIsChecked(stateCapacity:number, currentCapacity: number): boolean {
  return stateCapacity === currentCapacity;
}

const DigitsSteiitngs: React.FC<DigitsSteiitngsProps> = (
  { operationName, handler, limitStateValue },
): JSX.Element => (

  <form>
    <fieldset>
      <legend>
        Digit limit for
        {' '}
        {operationName}
      </legend>
      {
        RADIOS.map((radioName, i) => (
          <div key={radioName}>
            <label htmlFor={radioName}>{CAPACITY[i]}</label>
            <input
              id={radioName}
              name="limit"
              type="radio"
              value={CAPACITY[i]}
              onChange={(e) => handler(e)}
              checked={checkIsChecked(limitStateValue, CAPACITY[i])}
            />
          </div>
        ))
      }
    </fieldset>
  </form>
);

export default DigitsSteiitngs;
