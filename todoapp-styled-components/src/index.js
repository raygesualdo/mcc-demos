import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components'

// `void` is so our linter doesn't complain
void injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    appearance: none;
    font-smoothing: antialiased;
  }

  body {
    font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #4d4d4d;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    font-smoothing: antialiased;
    font-weight: 300;
  }

  button,
  input[type="checkbox"] {
    outline: none;
  }

  .todoapp {
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
`

ReactDOM.render(
  <App />,
  document.querySelector('.todoapp')
);
