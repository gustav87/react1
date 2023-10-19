import './State.css';
import { sculptureList } from '@/data/stateData.js';
import { useState } from 'react';

function State() {
  const [index, setIndex] = useState(0);
  const [colorState, setColorState] = useState("transparent");
  let sculpture = sculptureList[index];

  const resetState = () => {
    console.log(colorState);
    setColorState("transparent");
  }

  return <>
    <div className="flex justify-around w-2/4">
      <div className="w-2/4">
        <button className="text-red-500 hover:text-red-300 block" onClick={() => setColorState("red")}>Set red state</button>
        <button className="text-green-500 hover:text-green-300 block" onClick={() => setColorState("green")}>Set green state</button>
        <div className={`mt-5 px-2 inline-block text-white text-center cursor-default border-2 ${colorState}`} onClick={resetState}>
          <p>{colorState}</p>
        </div>
      </div>
      <div className="w-2/4">
        <button className="border-2 px-2 hover:text-black" onClick={incrementIndex}>Next</button>
        <h2>
          <i>{sculpture.name}</i>
          by {sculpture.artist}
        </h2>
        <h3>({index + 1} of {sculptureList.length})</h3>
        <img src={sculpture.url} alt={sculpture.alt}/>
        <p>{sculpture.description}</p>
      </div>
    </div>
  </>

  function incrementIndex() {
    if (index >= sculptureList.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }
}

export default State;
