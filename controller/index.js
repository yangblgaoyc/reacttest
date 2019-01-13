/**
 * Created by yangbolun on 2019/1/11.
 */
import Banner from '../common_component/BannerB.jsx';
import React from 'react';
import { renderToString } from 'react-dom/server';
// var ReactApp = (props) => <h1>Hello SSR from </h1>;


module.exports = function(app) {
    const data = [
        {
            image: '/img/j20.jpeg',
            title: '图片1',
            // link: 'http://jd.com'
        },
        {
            image: '/img/j10.jpeg',
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
            css: ['/css/common.css','/css/banner.css','/swiper/css/swiper.min.css'],
            js: ['/swiper/js/swiper.js','/ssrjs/index.js'],
            'message':ssrDomStr,
        });
    });
}