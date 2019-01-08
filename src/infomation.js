require('./css/common.css');
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import RouteConfig from '../Config/Route.jsx';

ReactDOM.render(
    <Router>
        {RouteConfig}
    </Router>
    ,document.getElementById('root')
);




