import './answer.css';
import { useState, useEffect } from 'react';

function Answer(props) {
  const [text, setText] = useState("Mostrar");

  useEffect(() => {
    setText("Mostrar");
  }, [props.text]);
  
  function handleClick() {
    setText(props.text);
  }

  return(
    <div className="answer" onClick={ handleClick }>
        {text}
    </div>
  );
}

export default Answer;