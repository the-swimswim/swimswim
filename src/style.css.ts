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
export const appStyle = style({
  background: vars.color.primary,
  color: vars.color.text,
  height: '10vh',
});
