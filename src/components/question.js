import React from 'react';
import './question.scss';

const Question = (props) => {
  return (
    <div className="question">{ props.text }</div>
  );
}

export default Question;