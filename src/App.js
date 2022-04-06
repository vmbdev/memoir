import { useParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import Quiz from './components/quiz.js';
import Sidebar from './components/sidebar.js';
import Questionnaire from './services/questionnaire.js';
import data from './db.js';

function App() {
  const questionnaire = useRef();
  const [qReady, setQReady] = useState(false);
  const { chapter } = useParams();

  useEffect(() => {
    questionnaire.current = new Questionnaire(data);
    setQReady(true);
  }, []);

  return (
    <div className="App">
      <Sidebar linkList={ data.map((item, index) => ({index: index, title: item.title})) }/>
      { qReady && <Quiz questionnaire={ questionnaire.current } chapter={chapter} /> }
    </div>
  );
}

export default App;