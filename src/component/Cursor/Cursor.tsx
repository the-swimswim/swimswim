import useMousePosition from "../../hook/useMousePosition";
import { cursorStyle } from "./Cursor.css";

const Cursor = () => {
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        className={cursorStyle}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default Cursor;
