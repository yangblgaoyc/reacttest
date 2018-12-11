const webpack = require('webpack');
const path = require("path");
const fs=require('fs');
const vendors = [
    'react', //这里添加第三方库文件
    'react-dom',
    'react-router-dom'
];

module.exports = {

    entry: {
        vendor: vendors,
    },
    output: {
        path: path.join(__dirname+'/build'),
        filename: '[name].js',
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname+"/build"+'/manifest.json'),
            name: '[name]',
            context: __dirname,
        }),
    ],
};