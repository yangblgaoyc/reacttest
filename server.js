import express from "express";
const app = express();
import path from 'path';
import http from "http";
// import mongoose from 'mongoose';
// import credentials from './dataCredentials';
import fs from 'fs';
import ejs from 'ejs';

app.engine('html',ejs.__express);   //使用ejs模板引擎解析html视图文件
app.set('view engine', 'html');
app.set('views',path.join(__dirname, 'build'))
// 改成node更新
// switch(app.get('env')) {
//     case 'development':
//         mongoose.connect(credentials.mongo.development.connectionString,{useNewUrlParser:true}, credentials.opts);
//         break;
//     case 'production':
//         mongoose.connect(credentials.mongo.production.connectionString,{useNewUrlParser:true}, credentials.opts);
//         break;
//     default:
//         throw new Error('Unknown execution environment: ' + app.get('env'));
// }

app.set('port',process.env.PORT||8080);

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('body-parser')());

//遍历所有路由文件函数
function readDirSync(path) {
    const route = fs.readdirSync(path);
    route.forEach(function (ele) {
        const info = fs.statSync(path + "/" + ele)
        if (info.isDirectory()) {
            readDirSync(path + "/" + ele);
        } else {
            require(path + '/' + ele)(app);
        }
    });
}

//路由引入
readDirSync('./controller');

app.get('*', function (req, res) {
    res.sendFile(__dirname+'/build/home.html');
});

//404
// app.use(function(req,res,next){
//     res.status(404);
//     res.render('404');
// });

//500或统一服务器error错误
// app.use(function(err,req,res,next){
//     console.error(err.stack);
//     res.status(500);
//     res.render('500')
// });

// 引用集群，防止线程死掉而宕机
function startServer(){
    http.createServer(app).listen(app.get('port'),function(){
        console.log('express started in http://localhost:' + app.get('env') + 'mode on http://localhost: ' + app.get('port') + ';press ctrl-c; to terminate')
    });
}

if(require.main === module){
    // 本js应用程序直接运行；启用应用服务器；
    startServer();
}
else {
    // 应用 程序作为一个模块通过"require"引入：导出函数
    // 创建服务期
    module.exports = startServer;
}





