import './Square.css';
import { PropsWithChildren } from 'react';

export interface SquareProps {
  value: string | null;
  onSquareClick: (index: number) => void;
  index: number;
}

function Square({value, onSquareClick, index}: PropsWithChildren<SquareProps>) {
  const handleClick = () => {
    if (value) return; // Do not change the value if square is already occupied by a marker.
    onSquareClick(index);
  }

  return <div className="bg-blue-200 square text-black font-bold cursor-pointer" onClick={handleClick}>
    <p>{value}</p>
  </div>;
}

export default Square;
