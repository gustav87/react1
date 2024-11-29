import './Board.css';
import Square from "./Square";
import { useState, useEffect } from "react";
import { PropsWithChildren } from 'react';

export interface BoardProps {
  reset: boolean;
}

function Board({reset}: PropsWithChildren<BoardProps>) {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
  const [gameWon, setGameWon] = useState(false);

  const handleClick = (index: number) => {
    const newSquares = squares.slice();
    newSquares[index] = currentPlayer;
    setSquares(newSquares);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  useEffect(() => {
    if (determineGameWon()) {
      setGameWon(true);
    }
  }, [squares])

  useEffect(() => {
    resetGame();
    setGameWon(false);
  }, [reset])

  const resetGame = (): void => {
    setSquares(Array(9).fill(null));
  }

  const determineGameWon = (): boolean => {
    // Check for row wins
    if (squares[0] && squares[0] === squares[1] && squares[1] === squares[2]) return true;
    if (squares[3] && squares[3] === squares[4] && squares[4] === squares[5]) return true;
    if (squares[6] && squares[6] === squares[7] && squares[7] === squares[8]) return true;

    // Check for column wins
    if (squares[0] && squares[0] === squares[3] && squares[3] === squares[6]) return true;
    if (squares[1] && squares[1] === squares[4] && squares[4] === squares[7]) return true;
    if (squares[2] && squares[2] === squares[5] && squares[5] === squares[8]) return true;

    // Check for diagonoal wins
    if (squares[0] && squares[0] === squares[4] && squares[4] === squares[8]) return true;
    if (squares[2] && squares[2] === squares[4] && squares[4] === squares[6]) return true;
    return false;
  }

  return <div className={gameWon ? "gameWon" : ""}>
    <div className="flex flex-row">
      <Square value={squares[0]} onSquareClick={handleClick} index={0}></Square>
      <Square value={squares[1]} onSquareClick={handleClick} index={1}></Square>
      <Square value={squares[2]} onSquareClick={handleClick} index={2}></Square>
    </div>
    <div className="flex flex-row">
      <Square value={squares[3]} onSquareClick={handleClick} index={3}></Square>
      <Square value={squares[4]} onSquareClick={handleClick} index={4}></Square>
      <Square value={squares[5]} onSquareClick={handleClick} index={5}></Square>
    </div>
    <div className="flex flex-row">
      <Square value={squares[6]} onSquareClick={handleClick} index={6}></Square>
      <Square value={squares[7]} onSquareClick={handleClick} index={7}></Square>
      <Square value={squares[8]} onSquareClick={handleClick} index={8}></Square>
    </div>
  </div>
}

export default Board;
