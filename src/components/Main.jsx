import { useState, useEffect } from "react"
import Spotlight from './Spotlight';
import Movies from './Movies';

function Main(props) {
const {datas} = props;

  return (
    (
      Boolean(datas.length) && <div className="App">
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

export default Main;
