import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import Player from './components/Player';
import Projects from './components/Projects';

import registerServiceWorker from './registerServiceWorker';
import "normalize.css"
import './styles/app.css'

const Fragment = React.Fragment;

const App = () => {
  return (
    <Fragment>
      <Home />
      <Projects />
      <Player />
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();