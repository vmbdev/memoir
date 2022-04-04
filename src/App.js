import Quiz from './components/quiz.js';
import data from './db.js';

function App() {
  return (
    <div className="App">
      <Quiz data={data} />
    </div>
  );
}

export default App;