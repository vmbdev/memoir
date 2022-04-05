import { useEffect, useState, useRef } from 'react';
import Answer from './answer.js';
import Question from './question.js';
import Questionnaire from '../services/questionnaire.js';
import './quiz.css';

function Quiz (props) {
  const questionnaire = useRef();
  const question = useRef();
  const [text, setText] = useState("Cargando...");
  const [answer, setAnswer] = useState("Cargando...");

  useEffect(() => {
    questionnaire.current = new Questionnaire(props.data)
    questionnaire.current.load(0);
    question.current = questionnaire.current.retrieveQuestion();

    setText(question.current.text);
    setAnswer(question.current.answer);
  }, [props.data]);

  const nextQuestion = () => {
    if (questionnaire.current.questionsLeft())
      question.current = questionnaire.current.retrieveQuestion();

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