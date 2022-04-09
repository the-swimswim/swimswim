import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});

export const colors = {
  main: "blue",
  secondary: "red",
};

export const exampleStyle = style({
  backgroundColor: vars.color.brand,
  fontFamily: vars.font.body,
  color: "black",
  padding: 10,
});
