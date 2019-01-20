require('./styles/common.css');
require('../src/img/icon_j20.jpg');
require('../src/img/icon_81.jpeg');
require('../src/img/j20.jpeg');
require('../src/img/j10.jpeg');
require('../src/img/arrow.png');
require('../src/img/ball.png');

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import RouteConfig from '../Config/Route.jsx';
import {store} from '../clientModel/index';
import { Provider } from 'react-redux';//引进组件

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            {RouteConfig}
        </Router>
    </Provider>
    ,document.getElementById('root')
);




