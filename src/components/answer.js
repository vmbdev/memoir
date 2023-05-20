import React, { useState, useEffect } from 'react';
import './answer.scss';

const Answer = (props) => {
  const [text, setText] = useState("Mostrar");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setText("Mostrar");
    setRevealed(false);
  }, [props.text]);
  
  const handleClick = () => {
    if (!revealed) {
      setText(props.text);
      setRevealed(true);
    }
    else {
      props.handleAnswer()
    }
  }

  return (
    <div
      className={ "answer answer-" + (revealed ? "revealed" : "hidden") }
      onClick={ handleClick }
    >
      { text }
    </div>
  );
}

export default Answer;