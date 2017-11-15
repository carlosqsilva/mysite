import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import registerServiceWorker from './registerServiceWorker';
import './global.css'

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
