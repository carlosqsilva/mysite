import React from 'react';
import ReactDOM from 'react-dom';
import Home from './sections/home';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components'

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Space Mono", monospace, sans-serif;
    font-variant-ligatures: no-common-ligatures;
    font-size: 1em;
    color: #282B2E;
  }
`
ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
