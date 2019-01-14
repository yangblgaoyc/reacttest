/**
 * Created by yangbolun on 2019/1/11.
 */
import Banner from '../common_component/BannerB.jsx';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {NavLink as Link} from 'react-router-dom';



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
    var ssrDomStr = renderToString(
        <Banner data={{data:data}}  />
    );
    app.get('/index', function (req, res) {
        res.render('index', {
            "title": "首页",
            css: ['/css/styles.css'],
            js: ['/jsssr/swiper/js/swiper.js','/jsssr/ssrjs/index.js'],
            'message':ssrDomStr,
        });
    });
}