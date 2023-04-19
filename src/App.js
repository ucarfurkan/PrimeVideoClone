import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './components/Main';
import MovieDetails from "./components/MovieDetails";
import Layout from "./components/Layout"

function App() {
  const [datas, setDatas] = useState([]);


  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setDatas(data.data));
  }, []);

  return (
    (

      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main datas={datas} />} />
              <Route path="content">
                <Route path=":contentName" element={<MovieDetails />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  );
}

export default App;
