const backend_url = import.meta.env.VITE_BACKEND_URL;

function TicTacToe() {
  return <>
    <h1 className="text-2xl mb-5" onClick={handleClick}>Here's a Tic Tac Toe game I made!</h1>
    <div onClick={send}>Test backend</div>
  </>
}

function handleClick() {
  console.log(backend_url);
}

async function send() {
  try {
    const res = await fetch(`${backend_url}/api/tests`);
    const json = await res.json();
    console.log(json);
  } catch (e: unknown) {
    console.error(e);
  }
}

async function send_await_without_try_catch() {
  const res = await fetch(`${backend_url}/api/tests`);
  if (res.ok) {
    const json = await res.json();
    console.log(json);
  } else {
    console.error("lol");
  }
}

function send_promise() {
  fetch(`${backend_url}/api/test`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error("Something went wrong with the database.");
      }
    })
    .then(res => {
      if (res) {
        console.log(res);
      }
    })
    .catch(err => {
      console.error(err);
    })
}

export default TicTacToe;

