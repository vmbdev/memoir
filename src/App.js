import Quiz from './components/quiz.js';
import Sidebar from './components/sidebar.js';
import data from './db.js';

function App() {
  return (
    <div className="App">
      <Sidebar linkList={ data.map((item, index) => ({index: index, title: item.title})) }/>
      <Quiz data={ data } />
    </div>
  );
}

export default App;