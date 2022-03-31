import React from 'react';
import Answer from './answer.js';
import Question from './question.js';
import NextButton from './nextbutton.js';
import QuestionProvider from './questionprovider.js';
import './quiz.css';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.nextQuestion = this.nextQuestion.bind(this);
    this.questionprovider = new QuestionProvider();

    let question = this.questionprovider.retrieveQuestion();
    this.state = {
      text: question.text,
      answer: question.answer
    };
  }

  render() {
    return(
      <div className="quiz">
        <Question text={ this.state.text } />
        <Answer text={ this.state.answer } />
        <NextButton clickHandler={ this.nextQuestion } />
      </div>
    );
  }

  nextQuestion() {
    let question = {};

    if (this.questionprovider.questionsLeft())
      question = this.questionprovider.retrieveQuestion();

    else {
      question = {
        text: 'No hay más preguntas',
        answer: '-'
      };
    }
    
    this.setState({
      text: question.text,
      answer: question.answer
    });
  }
}

export default Quiz;