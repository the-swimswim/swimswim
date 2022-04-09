import { style } from "@vanilla-extract/css";
import { vars } from "../../global.css";

const cursorStyle = style({
  position: "absolute",

  width: "8px",
  height: "8px;",
  top: "50%",
  left: "50%",

  borderRadius: "50%",
  backgroundColor: "brown",

  pointerEvents: "none",
  transform: "translate(-50%, -50%)",
  transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
});

export { cursorStyle };
