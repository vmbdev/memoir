import React, { useState, useEffect } from 'react';
import './answer.css';

const Answer = (props) => {
  const [text, setText] = useState("Mostrar");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setText("Mostrar");
    setRevealed(false);
  }, [props.text]);
  
  const handleClick = () => {
    if (revealed === false) {
      setText(props.text);
      setRevealed(true);
    }
  }

  return (
    <div
      className={ "answer answer--state-" + (revealed ? "revealed" : "hidden") }
      onClick={() => {
        handleClick();
        if (revealed === true)
          props.handleAnswer()
      }}
    >
      {text}
    </div>
  );
}

export default Answer;