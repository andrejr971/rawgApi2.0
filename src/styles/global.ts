import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background-color: #f7f7f7;
    --background-color-secundary: #0d0c10;
    --color: #dddddf;
    --color-secundary: #3e3d43;
    --color-dark: #131217;
    --color-active: #4a8ad4;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: var(--background-color-secundary);
    font: 15px 'Roboto', sans-serif;
    color: var(--color);
    overflow-y: scroll;
  }

  body::-webkit-scrollbar {
  width: 5px;
  background: var(--color-secundary);
  border-radius: 2px;
}

body::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: #a9a5bc;
}

  input, select {
    font: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
