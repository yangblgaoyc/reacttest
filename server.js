const webpack = require('webpack');//引入webpack模块
const webpackDevServer = require('webpack-dev-server');//引入服务器模块
const config = require('./webpack.config');//引入webpack配置文件

const server = new webpackDevServer(webpack(config),{
    //contentBase: path.join(__dirname,"dist"),//用于静态文件的目录，不设置默认为当前根目录
    // contentBase:[path.join(__dirname,'public'),path.join(__dirname,'assets')],//支持多路径
    // publicPath:"/assets", 服务器地址:http://localhost:8080 ,output file:http://localhost:8080/assets/bundle.js
    //compress:true,//gzip压缩
    //headers:{"X-Custom-Foo":"bar"},
    hot:true,//是否启用热更新
    // historyApiFallback:true,//html5接口,设置为true，所有路径均转到index.html
    historyApiFallback : {
        rewrites: [
            // shows views/404.html on all other pages
            { from: /./, to: '/build/infomation.html' },
        ]
    },
    inline:true,//是否实时刷新，即代码有更改，自动刷新浏览器
    stats:{colors:true},//显示bundle文件信息，不同类型的信息用不同的颜色显示
    /*
    proxy:{     //服务器代理配置
        "/api":{  //相对路径已/api打头，将会触发代理
            target:"http://localhost:3000", //代理地址
            pathRewrite:{"^/api":""}, //路径替换
            secure:false //跨域
        }
    }
    */

});

server.app.get('*',function(req,res){
    res.sendFile(__dirname+'/build/infomation.html');
});


// const express = require("express");
// const app = express();
// const path = require('path');
//
// app.get('*', function (req, res) {
//     res.send(__dirname+'/build/infomation');
// })
//
// var server = app.listen(8080, function () {
//     // var host = server.address().address
//     // var port = server.address().port
//     //
//     // console.log("应用实例，访问地址为 http://%s:%s", host, port)
// })



