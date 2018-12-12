require('./css/css.css');
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import RouteConfig from '../Config/Route.jsx';

const element  = <h1>Hello, world</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);

ReactDOM.render(
    <Router>
        {RouteConfig}
    </Router>
    ,document.getElementById('root')
);




