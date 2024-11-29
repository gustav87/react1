import Board from '@/components/TicTacToe/Board';
import { useState } from 'react';

function TicTacToe() {
  const [reset, setReset] = useState<boolean>(false);
  return <>

    <h1 className="text-2xl mb-5">A Tic Tac Toe game following the official React tutorial.</h1>
    <Board reset={reset}></Board>
    <button className="m-3 border px-2" onClick={() => setReset(!reset)}>Reset Game</button>
  </>
}

export default TicTacToe;
