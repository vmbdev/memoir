import React, { useState, useEffect } from 'react';
import './answer.css';

function Answer(props) {
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

  const getClass = () => {
    return "answer answer--state-" + (revealed ? "revealed" : "hidden");
  }

  return(
    <div className={getClass()} onClick={ () => {
      handleClick();
      if (revealed === true)
        props.handleAnswer()
    } }>
        {text}
    </div>
  );
}

export default Answer;