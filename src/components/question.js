import React from 'react';
import './question.css';

function Question(props) {
  return(
    <div className="question">{props.text}</div>
  );
}

export default Question;