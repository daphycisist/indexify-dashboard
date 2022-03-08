import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
    letter-spacing: -0.0005em;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    color: inherit;
  }
`;

export default GlobalStyles;
