import { IButtonProps } from "../../types";
import "./style.css";

const RectangleButton = ({ text, onClick }: IButtonProps) => (
  <button className="button--rectangle" onClick={onClick}>
    {text}
  </button>
);

export default RectangleButton;
