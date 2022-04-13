import { createTheme, style } from '@vanilla-extract/css';

// theme 생성
export const [themeClass, vars] = createTheme({
  color: {
    brand: 'blue',
  },
  font: {
    body: 'arial',
  },
});


// style 생성
export const exampleStyle = style({
  background: 'pink',
  color: 'white'
});
