/**
 * Created by yangbolun on 2019/1/11.
 */
import Banner from '../component/Banner.jsx';
import ColumnTitle from '../component/ColumnTitleIndex';
import React from 'react';
import {StaticRouter as Router} from 'react-router-dom';
import { renderToString } from 'react-dom/server';



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
                <Router location={req.url}><ColumnTitle data={{title:'最新资讯'}}/></Router>
            </div>
        );
        res.render('index', {
            "title": "首页",
            css: ['/css/infomation.css'],
            js: ['/jsssr/swiper/js/swiper.js','/jsssr/ssrjs/index.js'],
            'message':ssrDomStr,
        });
    });
}