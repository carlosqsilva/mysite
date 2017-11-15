import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import registerServiceWorker from './registerServiceWorker';
import './styles/app.css'

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
