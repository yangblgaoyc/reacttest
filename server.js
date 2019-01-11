import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

import React from 'react';
import { renderToString } from 'react-dom/server';

const server = new webpackDevServer(webpack(config),{
    hot:true,//是否启用热更新
    historyApiFallback : {
        rewrites: [
            // shows views/404.html on all other pages
            { from: /index/, to: '/build/index.html' },
            { from: /infomation/, to: '/build/infomation.html' },
        ]
    },
    inline:true,//是否实时刷新，即代码有更改，自动刷新浏览器
    stats:{colors:true},//显示bundle文件信息，不同类型的信息用不同的颜色显示
});

const ReactApp = (props) => <h1>Hello SSR from 123</h1>;

server.app.get('/index',function(req,res){
    const ssrDomStr = renderToString(
        <ReactApp />
    );

    res.send(html.repalce('<div id="root"></div>', `<div id="root">${ssrDomStr}</div>`));
    return;
});

// server.app.get('*',function(req,res){
//     res.sendFile(__dirname+'/build/infomation.html');
// });

server.listen(8080,function() {
    console.log('正常打开8080端口')
});




