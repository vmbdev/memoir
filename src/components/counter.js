import React from 'react';
import './counter.css';

const Counter = (props) => {
  return (
    <div className="counter">
      <span className="counter__title">{ props.title }</span>&nbsp;-&nbsp;
      <span className="counter__resolved">{ props.resolved }</span>&nbsp;/&nbsp;
      <span className="counter__total">{ props.total }</span>
    </div>
  );
}

export default Counter;