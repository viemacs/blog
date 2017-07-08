// 二、开发环境配置–config

var webpack = require('webpack');
var path = require('path')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base')
var getEntries = require('./getEntries')
 
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
 
var assetsInsert = require('./assetsInsert')
 
module.exports = merge(baseConfig, {
  entry: getEntries(hotMiddlewareScript),
  devtool: '#eval-source-map',
  output: {
    filename: './[name].[hash].js',
    path: path.resolve('./dist'),
    publicPath:'./dist'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new assetsInsert()
  ]
})

`
说说这个配置中的一些难点：

1、getEntries 是用来配置入口文件，一般很多人是自己手写，或者SPA页面，只有一个入口， 很容易就写出来，但是公司中，很多情况，是需要多入口，也就是多路由的Url，这个时候入口的配置就比较麻烦，我这里是放单独一个文件里面配置，我们公司是靠规定来执行，也就是一个文件夹所有的main.js都认为是入口文件，其他都忽略。
`

function getEntry(hotMiddlewareScript) {
    var pattern = paths.dev.js + 'project/**/main.js';
    var array = glob.sync(pattern);
    var newObj = {};
 
    array.map(function(el){
        var reg = new RegExp('project/(.*)/main.js','g');
        reg.test(el);
        if (hotMiddlewareScript) {
            newObj[RegExp.$1] = [el, hotMiddlewareScript];
        } else {
            newObj[RegExp.$1] = el;
        }
    });
    return newObj;
}

`
2、assetsInsert 是用来做模板替换的，一个小插件把template里面的值替换成打包后的css或者js。
`
