import { createTheme, style } from '@vanilla-extract/css';

// theme 생성
export const [themeClass, vars] = createTheme({
  color: {
    primary: 'pink',
    text: 'white',
  },
  font: {
    body: 'arial',
  },
});

// style 생성
export const exampleStyle = style({
  background: vars.color.primary,
  color: vars.color.text,
});