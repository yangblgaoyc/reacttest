/**
 * Created by yangbolun on 2019/1/11.
 */
import React from "react";
import {StaticRouter as Router} from 'react-router-dom';
import RouteConfig from '../Config/RouteNode';
import { renderToString } from 'react-dom/server';


module.exports = function(app) {
    const html = renderToString(
        <Router>
            {RouteConfig}
        </Router>
    );
    app.get('/index', function (req, res) {
        res.render('infomation', {component:html});
    });
}