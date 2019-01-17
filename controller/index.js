/**
 * Created by yangbolun on 2019/1/11.
 */
import React from "react";
import {StaticRouter as Router} from 'react-router-dom';
import RouteConfig from '../Config/RouteNode';
import { renderToString } from 'react-dom/server';
import Banner from '../component/Banner';
import ColumnTitle from '../component/ColumnTitleIndex';


module.exports = function(app,sendFilePath) {
    const html = renderToString(
        <Router>
            {RouteConfig}
        </Router>
    );

    app.get('/index', function (req, res) {
        const context = {};
        const banner = renderToString(
            <div>
                <Banner/>
                <Router location={req.url} context={context}><ColumnTitle data={{title:'最新资讯'}}/></Router>
            </div>
        );
        res.render('index', {component:banner});
    });
}