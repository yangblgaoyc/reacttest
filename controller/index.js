/**
 * Created by yangbolun on 2019/1/11.
 */
import React from "react";
import {StaticRouter as Router} from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Banner from '../spaSsrcomponent/Banner.jsx';
import ColumnTitle from '../spaSsrcomponent/ColumnTitleIndex.jsx';


module.exports = function(app) {
    const data = [
        {
            image: '/images/j20.jpeg',
            title: '图片1',
            // link: 'http://jd.com'
        },
        {
            image: '/images/j10.jpeg',
            title: '图片2',
            // link: 'http://jd.com'
        }
    ];
    app.get('/index', function (req, res) {
        const ssrDomStr = renderToString(
            <div>
                <Banner data={{data:data}}  />
                <Router location={req.url}>
                    <ColumnTitle data={{title:'最新资讯',url:'/news'}}/>
                </Router>
            </div>
        );
        res.render('index', {component:ssrDomStr});
    });
};