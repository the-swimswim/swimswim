interface btnProps {
  text: string;
  onClick: () => void;
}

const TransparentButton = ({ text, onClick }: btnProps) => (
  <button onClick={onClick}>{text}</button>
);

export default TransparentButton;
