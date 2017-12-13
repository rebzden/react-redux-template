import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './helpers';
import { BrowserHistory } from './helpers/BrowserHistory';

ReactDOM.render((
<Provider store={Store}>
    <Router history={BrowserHistory}>    
        <App />
    </Router>
</Provider>
), document.getElementById('root'));
registerServiceWorker();
