const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const cleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const os = require('os');//os.cpus().Length 一般会取不到值，这里直接size:4,而不是size:os.cpus().length
const HappyPack = require('happypack');
// const happypackThreadPool = Happypack.ThreadPool({size:4});//size:os.cpus().Lengt根据电脑的idle，配置当前最大的线程数量
const happypackThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
function recursiveIssuer(m) {
    if (m.issuer) {
        return recursiveIssuer(m.issuer);
    } else if (m.name) {
        return m.name;
    } else {
        return false;
    }
}
module.exports = {

    // entry:'./src/app.js', //入口文件配置为app.js文件。若入口文件为index.js,这里可以直接写成'./src'
//入口文件很多的话，可以写成下面的格式：
    /*
    entry:{
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
    }
    */

    entry: {
        home:'./src/home.js',
        index:'./src/index.js'
        // home:[
        //     'webpack-dev-server/client?http://localhost:8080',  // 热更新监听此地址
        //     'webpack/hot/dev-server',  // 启用热更新
        //     './src/home.js',
        //     path.resolve(__dirname, 'src', 'home')
        // ]
        // ,
        // index:[
        //     './src/index.js',
        //     // './src/js/ssrjs/index.js',
        //     path.resolve(__dirname, 'src', 'index')
        // ]
    },

    //多个入口的输出文件格式
    output: {
        filename:'[name].js',//js合并后的输出的文件，命名为bundle.js
        path:path.resolve(__dirname,'build/'),//指令的意思是：把合并的js文件，放到根目录build文件夹下面
        // publicPath:'/',//生成文件的公共路径，‘/work/reactweb/dist’ 生产环境下所有的文件路径将会添加这个公共路径
        // publicPath:'/'
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template : 'src/home.ejs',
            chunks:['home']
        }),
        new HtmlWebpackPlugin({
            title:'<%- component %>',
            filename: 'index.html',
            template : 'src/index.ejs',
            chunks:['index']
        }),
        // new cleanWebpackPlugin(['build']),
        // new ExtractTextPlugin("styles.css"),   //插件声明
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: "[id].css"
        }),
        require('autoprefixer'),
        // new webpack.optimize.UglifyJsPlugin(
        //     {output: {
        //             comments:false,//删除代码中所有注释
        //         },
        //         compress:{
        //             warnings:false,
        //         }
        //     }),
        new HappyPack({
            id:"happyBabel",
            loaders:['babel-loader'],
            threadPool:happypackThreadPool,
            cache:true,
            verbose:true
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./build/manifest.json'),
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                // exclude:/(node_modules|bower_components)/,//排除XXX类型文件
                enforce:'pre',
                loader:'eslint-loader',
                include:path.resolve(__dirname,'src'),
                options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
                    formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                }
            },
            {
                test:/\.(js|jsx)$/,
                include:path.resolve(__dirname),
                loader:'happypack/loader?id=happyBabel'

            },
            {
                test:/\.css$/,
                // use:ExtractTextPlugin.extract({    //使用ExtractTextPlugin 插件
                //     fallback:"style-loader",
                //     use:["css-loader","postcss-loader"]
                // }),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],

            },
            {   //配置辅助loader
                test:/\.(png|jpg|jpeg|gif)$/,
                loader:'url-loader',
                options:{
                    limit:8192,
                    name:"images/[name].[ext]",
                    // publicPath : '../'
                }
            },
            { //处理图片外的其他文件类型
                test:/\.(appcache|svg|eot|ttf|woff|woff2|mp3|pdf|otf)$/,
                // test : /\.(ttf|eot|woff|woff2|svg|otf)$/,
                include:path.resolve(__dirname,'src'),
                loader:'file-loader',
                options:{
                    limit:8192,
                    name:"images/[name].[ext]",
                    publicPath : '../'
                }
            }
        ]
    },

    devtool:'eval-soure-map',

    resolve:{
        extensions:['.js','jsx','less','.css','.scss']//后缀名自动补全
    },

    devServer:{
        contentBase: path.join(__dirname,"build"),//用于静态文件的目录，不设置默认为当前根目录
        // contentBase:[path.join(__dirname,'public'),path.join(__dirname,'assets')],//支持多路径
        // publicPath:path.resolve(__dirname,'build'), //服务器地址:http://localhost:8080 ,output file:http://localhost:8080/assets/bundle.js
        //compress:true,//gzip压缩
        //headers:{"X-Custom-Foo":"bar"},
        open :true,
        hot:true,//是否启用热更新
        port:8080,
        // historyApiFallback:true,//html5接口,设置为true，所有路径均转到index.html
        historyApiFallback : {
            rewrites: [
                // shows views/404.html on all other pages
                { from: /home/, to: '/home.html' },
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
    }
}


// 若要启动node js api 的热更新功能，需要修改webpack.config.json 的entry的代码。
// 注意：在用webpack生成最终的build文件用于生产环境的时候，请先把热更新代码屏蔽掉，否则运行build里面的index.hmtl 时，会一直报错： GET http://localhost:8080/sockjs-node/info?t=1510883222453 net::ERR_CONNECTION_REFUSED msgClose @ client:164 abstract-xhr.js:132。
