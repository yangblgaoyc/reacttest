// const webpack = require('webpack');//引入webpack模块
// const webpackDevServer = require('webpack-dev-server');//引入服务器模块
// const config = require('./webpack.config');//引入webpack配置文件
//
// const server = new webpackDevServer(webpack(config),{
//     hot:true,//是否启用热更新
//     historyApiFallback : {
//         rewrites: [
//             // shows views/404.html on all other pages
//             { from: /./, to: '/build/infomation.html' },
//         ]
//     },
//     inline:true,//是否实时刷新，即代码有更改，自动刷新浏览器
//     stats:{colors:true},//显示bundle文件信息，不同类型的信息用不同的颜色显示
// });
//
// server.app.get('*',function(req,res){
//     // res.sendFile(__dirname+'/build/infomation.html');
// });
//
// server.listen(8080,function() {
//     console.log('正常打开8080端口')
// });
const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs');
const React = require('react');
const renderToString = require('react-dom');
// const Banner = require('./common_component/Banner.js');
console.log(renderToString)

app.use(express.static('build'));
app.get('/index', function(req, res, next) {
    // var ssrDomStr = renderToString(<Banner />);
    // res.sendFile(__dirname+'/build/index.html');
    // // res.send(ssrDomStr);
    // res.send(html.repalce('<div id="root"></div>', `<div id="root">${ssrDomStr}</div>`));
    //
    // return;

});
app.get('*', function(req, res, next) {
    res.sendFile(__dirname+'/build/infomation.html');
});


var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})



