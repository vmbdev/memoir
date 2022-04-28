import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import Quiz from './components/quiz.js';
import Sidebar from './components/sidebar.js';
import Version from './components/version.js'
import RandomSelector from './components/randomselector.js';
import Questionnaire from './services/questionnaire.js';
import data from './db.js';

const App = () => {
  const questionnaire = useRef(new Questionnaire(data));
  const { chapter } = useParams();
  const [randomActive, setRandomActive] = useState(true);

  const randomToggleChanged = (e) => {
    setRandomActive(e.target.checked);
    questionnaire.current.setRandom(e.target.checked);
  }

  return (
    <div className="App">
      <Sidebar>
        <ul>
          { questionnaire.current.getIndex().map(item => <li key={ item.index }><Link to={ "/chapter/" + item.index }>{ item.title }</Link></li>) }
        </ul>
        <RandomSelector active={ randomActive } randomToggleChanged={ randomToggleChanged } />
        <Version />
      </Sidebar>
      <Quiz questionnaire={ questionnaire.current } chapter={ chapter } />
    </div>
  );
}

export default App;