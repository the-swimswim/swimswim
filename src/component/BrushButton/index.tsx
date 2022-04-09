import { IButtonProps } from "../../types";
import "./style.css";

enum ButtonSizeList {
  SMALL = "SMALL",
  LARGE = "LARGE",
}

const BrushButton = ({ text, onClick }: IButtonProps) => (
  <button className="button--brush" onClick={onClick}>
    {text}
  </button>
);

export default BrushButton;
