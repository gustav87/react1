import Board from '@/components/TicTacToe/Board';
import { useState } from 'react';
const backend_url = import.meta.env.VITE_BACKEND_URL;

function TicTacToe() {
  const [reset, setReset] = useState<boolean>(false);
  return <>

    <h1 className="text-2xl mb-5">A Tic Tac Toe game following the official React tutorial.</h1>
    <Board reset={reset}></Board>
    <button className="m-3 border px-2" onClick={() => setReset(!reset)}>Reset Game</button>
    <p className="text-sm cursor-pointer" onClick={send}>Test backend</p>
  </>
}

async function send() {
  console.log(backend_url);
  try {
    const res = await fetch(`${backend_url}/api/test`);
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

