const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const os = require('os');//os.cpus().Length 一般会取不到值，这里直接size:4,而不是size:os.cpus().length
const HappyPack = require('happypack');
// const happypackThreadPool = Happypack.ThreadPool({size:4});//size:os.cpus().Lengt根据电脑的idle，配置当前最大的线程数量
const happypackThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {

    entry:'./src/app.js', //入口文件配置为app.js文件。若入口文件为index.js,这里可以直接写成'./src'
//入口文件很多的话，可以写成下面的格式：
    /*
    entry:{
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
    }
    */
    output: {
        filename:'bundle.js',//js合并后的输出的文件，命名为bundle.js
        path:path.resolve(__dirname,'build'),//指令的意思是：把合并的js文件，放到根目录build文件夹下面
        //publicPath:'',生成文件的公共路径，‘/work/reactweb/dist’ 生产环境下所有的文件路径将会添加这个公共路径
    },
//多个入口的输出文件格式
    /*
    output: {
        filename:'[name].js',//name相当于变量，等同于pageOne/pageTwo/pageThree
        path:path.resolve(__dirname,'build'),//
    }
    */

    plugins : [
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template : 'src/index.html'
        }),
        new cleanWebpackPlugin(['build']),
        new ExtractTextPlugin("styles.css"),   //插件声明
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
            id:"happybabel",
            loaders:['babel-loader'],
            threadPool:happypackThreadPool,
            cache:true,
            verbose:true
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./build/manifest.json'),
        }),
    ],

    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                // exclude:/(node_modules|bower_components)/,//排除XXX类型文件
                enforce:'pre',
                loader:'eslint-loader',
                include:path.resolve(__dirname,'src')
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({    //使用ExtractTextPlugin 插件
                    fallback:"style-loader",
                    use:["css-loader","postcss-loader"]
                }),

            },
            {   //配置辅助loader
                test:/\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
                loader:'url-loader',
                options:{limit:8192,name:"images/[name].[ext]"}
            },
            { //处理图片外的其他文件类型
                test:/\.(appcache|svg|eot|ttf|woff|woff2|mp3|pdf)(\?|$)/,
                include:path.resolve(__dirname,'src'),
                loader:'file-loader?name=[name].[ext]'
            }
        ]
    },

    devtool:'eval-soure-map',

    resolve:{
        extensions:['.js','jsx','less','.css','.scss']//后缀名自动补全
    },

    devServer:{
        //contentBase: path.join(__dirname,"dist"),//用于静态文件的目录，不设置默认为当前根目录
        // contentBase:[path.join(__dirname,'public'),path.join(__dirname,'assets')],//支持多路径
        // publicPath:"/assets", 服务器地址:http://localhost:8080 ,output file:http://localhost:8080/assets/bundle.js
        //compress:true,//gzip压缩
        //headers:{"X-Custom-Foo":"bar"},
        open :true,
        hot:true,//是否启用热更新
        port:9200,
        historyApiFallback:true,//html5接口,设置为true，所有路径均转到index.html
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