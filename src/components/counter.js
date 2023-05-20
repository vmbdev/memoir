import React from 'react';
import './counter.scss';

const Counter = (props) => {
  return (
    <div className="counter">
      <span className="counter__title">{ props.title }</span>
      <span className="counter__resolved">{ props.resolved }</span>
      <span className="counter__total">{ props.total }</span>
    </div>
  );
}

export default Counter;