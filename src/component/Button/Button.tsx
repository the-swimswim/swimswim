interface btnProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: btnProps) => (
  <button onClick={onClick}>{text}</button>
);

export default Button;
