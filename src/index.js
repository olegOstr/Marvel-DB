import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {BrowserRouter as Router} from 'react-router-dom';
import 'normalize.css';
import './static/styles/index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
