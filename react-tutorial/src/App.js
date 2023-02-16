import Navbar from './navbar';
import Home from './Home';

function App() {
const title = 'Välkommen till Niklas blog';

  return (
    <div className="App">
      <Navbar />
    <div className="content">
    <Home />
    </div>
    </div>
  );
}

export default App;
