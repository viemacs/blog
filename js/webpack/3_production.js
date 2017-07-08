// 三、打包环境配置–production

var webpack = require('webpack');
var path = require('path')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base')
var getEntries = require('./getEntries')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var assetsInsert = require('./assetsInsert')
 
var productionConf = merge(baseConfig, {
    entry: getEntries(),
    output: {
        filename: './[name].[hash].js',
        path: path.resolve('./public/dist'),
        publicPath: './'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new ExtractTextPlugin('./[name].[hash].css', {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new assetsInsert()
    ]
})
 
productionConf.module.loaders = [
             {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url?limit=8192&context=client&name=[path][name].[hash:7].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css'),
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }]
 
module.exports = productionConf

`
基本跟开发的差不多，差别在于：

1、使用ExtractTextPlugin 来打包css，所以要干掉原来base的loaders，重新写了一个，在最下面。

2、UglifyJsPlugin 给js压缩代码。其他没有什么好解释的了，一样的。
`
