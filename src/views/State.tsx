const backend_url = import.meta.env.VITE_BACKEND_URL;
import { sculptureList } from '@/data/stateData.js';
import { useState } from 'react';

function State() {
  const [index, setIndex] = useState(0);
  const [colorState, setColorState] = useState("transparent");
  let sculpture = sculptureList[index];

  return <>
    <button className="text-red-500 hover:text-red-300" onClick={() => setColor("red")}>Red state</button>
    <button className="text-green-500 hover:text-green-300" onClick={() => setColor("green")}>Green state</button>
    <div className={`mt-5 w-20 bg-transparent text-white text-center cursor-default border-2 bg-${colorState}-400`} onClick={getColor}>State</div>

    <button onClick={incrementIndex}>Next</button>
    <h2>
      <i>{sculpture.name} </i>
      by {sculpture.artist}
    </h2>
    <h3>({index + 1} of {sculptureList.length})</h3>
    <img src={sculpture.url} alt={sculpture.alt}/>
    <p>{sculpture.description}</p>
  </>

  function incrementIndex() {
    if (index >= sculptureList.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function setColor(newColor) {
    console.log(newColor);
    setColorState(newColor);
  }

  function getColor() {
    console.log(colorState);
  }
}

export default State;

