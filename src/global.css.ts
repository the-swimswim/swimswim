import { createGlobalTheme } from "@vanilla-extract/css";

const root = createGlobalTheme(".app", {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  fonts: {
    heading: "Georgia, Times, Times New Roman, serif",
    body: "system-ui",
  },

  colors: {
    primary: "blue",
    secondary: "brown",
  },
});

export const vars = { ...root };
