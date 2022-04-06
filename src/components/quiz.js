import React, { useEffect, useState, useRef } from 'react';
import Answer from './answer.js';
import Question from './question.js';
import './quiz.css';

function Quiz (props) {
  const question = useRef();
  const [text, setText] = useState("Cargando...");
  const [answer, setAnswer] = useState("Cargando...");

  useEffect(() => {
    if (props.chapter)
      props.questionnaire.load(Number.parseInt(props.chapter));
    else
      props.questionnaire.load(0);

    question.current = props.questionnaire.retrieveQuestion();

    setText(question.current.text);
    setAnswer(question.current.answer);
  }, [props.questionnaire, props.chapter]);

  const nextQuestion = () => {
    if (props.questionnaire.questionsLeft())
      question.current = props.questionnaire.retrieveQuestion();

    else {
      question.current = {
        text: 'No hay más preguntas',
        answer: '-'
      };
    }
    
    setText(question.current.text);
    setAnswer(question.current.answer);
  }

  return(
    <div className="quiz">
      <Question text={ text } />
      <Answer text={ answer } handleAnswer={ nextQuestion } />
    </div>
  );
} 

export default Quiz;