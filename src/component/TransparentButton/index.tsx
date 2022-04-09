import { IButtonProps } from "../../types";
import "./style.css";

const TransparentButton = ({ text, onClick }: IButtonProps) => (
  <button className="button--transparent" onClick={onClick}>
    {text}
  </button>
);

export default TransparentButton;
