const backend_url = import.meta.env.VITE_BACKEND_URL;

function State() {
  return <>
    <h1 className="text-2xl mb-5">State stuff</h1>
    <button className="text-red-500 hover:text-red-300" onClick={() => setState("red")}>Red state</button>
    <button className="text-green-500 hover:text-green-300" onClick={() => setState("green")}>Green state</button>
    <div className="mt-5 w-20 bg-transparent text-white text-center cursor-default border-2" onClick={setState}>State</div>
  </>
}

function setState(color) {
  console.log(color);
}

export default State;

