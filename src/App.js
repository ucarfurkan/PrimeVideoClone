import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './components/Main';
import MovieDetails from "./components/MovieDetails";
import Layout from "./components/Layout"

function App() {
  return (
    (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="content">
                <Route path=":contentName" element={<MovieDetails/>} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>

      </>
    )
  );
}

export default App;
