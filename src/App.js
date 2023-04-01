import './App.css';
import _Navbar from './components/Navbar';
import Spotlight from './components/Spotlight';

function App() {
  return (
    <div className="App">
      <_Navbar />
      <div>
        <Spotlight />
      </div>
    </div>
  );
}

export default App;
