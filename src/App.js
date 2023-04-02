import './App.css';
import { useState, useEffect } from "react"
import _Navbar from './components/Navbar';
import Spotlight from './components/Spotlight';
import Movies from './components/Movies';

function App() {
  const [datas, setDatas] = useState([]);


  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setDatas(data.data));
  }, []);

  return (
    (
      Boolean(datas.length) && <div className="App">
        <_Navbar />
        <div>
          <Spotlight datas={datas} />
          <div className='justify-content-center'>
            <Movies datas={datas} />
          </div>
        </div>
      </div>
    )
  );
}

export default App;
