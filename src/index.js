import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import Player from './components/Player';
import Projects from './components/Projects';

import registerServiceWorker from './registerServiceWorker';
import "normalize.css"
import './styles/app.css'

const Fragment = React.Fragment;

class App extends React.Component {
  componentDidMount() {
    const ele = document.getElementById("loader")
    if (ele) {
      setTimeout( () => {
        ele.classList.add("ready")
        setTimeout( () => {
          ele.outerHTML = ''
        }, 4000)
      }, 3000)
    }
  }

  render() {
    return (
      <Fragment>
        <Home />
        <Projects />
        <Player />
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();