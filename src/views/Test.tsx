import { useState } from 'react';

const backend_url = import.meta.env.VITE_BACKEND_URL;

function Test() {
  const [x, setX] = useState();

  return <>
    <div className="flex justify-around w-2/4">
      <p className="cursor-pointer react1-clickable" onClick={getBoyNames}>Get boy names</p>
    </div>
  </>

  async function getBoyNames() {
    const url = `${backend_url}/api/test/boynames`;
    // const url = `${backend_url}/api/test/weather`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const x = await res.json();
        console.log(x);
      }
    } catch (e: unknown) {
      console.error(e);
    }
  }
}

export default Test;
