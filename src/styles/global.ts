import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  body, input, select, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }
`;
