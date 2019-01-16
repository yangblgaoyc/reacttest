/**
 * Created by yangbolun on 2019/1/11.
 */
import React from "react";
import {StaticRouter as Router} from 'react-router-dom';
import RouteConfig from '../Config/RouteNode';
import { renderToString } from 'react-dom/server';
import Banner from '../component/Banner';
import ColumnTitle from '../component/ColumnTitleIndex';
import path from 'path';


module.exports = function(app,sendFilePath) {
    const html = renderToString(
        <Router>
            {RouteConfig}
        </Router>
    );
    const banner = renderToString(
        <div>
            <Banner/>
            <Router><ColumnTitle data={{title:'最新资讯'}}/></Router>
        </div>
    );
    app.get('/index', function (req, res) {
        res.render('index', {component:banner});
    });
}