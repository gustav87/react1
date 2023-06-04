import './Button.css'; // Tell webpack that Button.js uses these styles

export interface ButtonProps {
    color: string;
    size?: number;
    text: string;
}

function Button({ color, size = 100, text }: ButtonProps) {
  const styles = {
    width: `${size}px`,
    height: `${size/4}px`
  }
  return (
    <div className={`Button ${color} text-2xl font-bold`} style={styles}>
      <div className={"underline"}>{text}</div>
    </div>

    // <div className={`Button ${color}`} style={{width: `${size}px`, height: `${size/4}px`}}></div>
  )
}

export default Button;

