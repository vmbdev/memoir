import React from 'react';
import './question.css';

class Question extends React.Component {
  render() {
    return(
      <div className="question">{this.props.text}</div>
    );
  }
}

export default Question;