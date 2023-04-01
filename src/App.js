import './App.css';
import _Navbar from './components/Navbar';
import Spotlight from './components/Spotlight';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <_Navbar />
      <div>
        <Spotlight />
        <div className='justify-content-center'>
          <Movies />
        </div>
      </div>
    </div>
  );
}

export default App;
