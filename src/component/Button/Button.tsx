import { exampleStyle } from "./Button.css";

interface btnProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: btnProps) => (
  <button onClick={onClick} className={exampleStyle}>
    {text}
  </button>
);

export default Button;
