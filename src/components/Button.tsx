import './Button.css'; // Tell webpack that Button.js uses these styles

export interface ButtonProps {
    color: string;
}

function Button({ color }: ButtonProps) {
  return (
    <div className={`Button ${color}`}></div>
  )
}

export default Button;

