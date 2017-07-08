`
其实Webpack的入门指导文章非常多，配置方式也各有各样，这里我推荐题叶大神的入门级指南–Webpack 入门指迷，如果不知道Webpack是什么或者不是很清楚各项配置含义的开发者，可以看此文章扫扫盲。毕竟我这篇文章并不是特别基础。
`

//一、base.js

var path = require('path')
var baseConfig = {
    resolve: {
        extensions: ['', '.js'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url?limit=8192&context=client&name=[path][name].[hash:7].[ext]'
        },
        {
            test: /\.css$/,
            loader: 'style!css!autoprefixer',
        },
        {
            test: /\.scss$/,
            loader: 'style!css!autoprefixer!sass'
        }]
    }
};
 
module.exports = baseConfig;

`
解读下这个基本配置：

1、resolve 解析模块依赖的时候，受影响的配置项。

extensions 决定了哪些文件后缀在引用的时候可以省略点，Webpack帮助你补全名称。
fallback 当webpack在 root（默认当前文件夹，配置时要绝对路径） 和 modulesDirectories（默认当前文件夹，相对路径）配置下面找不到相关modules，去哪个文件夹下找modules
alias 这个大家应该比较熟悉，requirejs之类的都有，就是别名，帮助你快速指向文件路径，少写不少代码，而且不用关心层级关系，需要注意的是：在scss之类的css预编译中引用要加上~，以便于让loader识别是别名引用路径。

2、module 解析不同文件使用哪些loader，这个比较简单，很多文章都有，就不多说了，注意的是，这里的scss可以换成你自己的预编译器，例如：sass、less、stylus等，或者直接用postcss都行，当然还可以用一种通用方法，后面补上。
`
