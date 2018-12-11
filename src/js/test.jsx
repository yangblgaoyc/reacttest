import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink,Route,BrowserRouter,HashRouter as Router, Swith,Redirect} from 'react-router-dom';
import RouteConfig from '../../Config/Route.jsx';

var div=document.createElement("div");
div.setAttribute("id","root");
document.body.insertBefore(div,document.body.childNodes[1]);

ReactDOM.render(
    <Router>
        {RouteConfig}
    </Router>
    ,document.getElementById('root'));

