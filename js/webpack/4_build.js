// 四、构建命令

require('shelljs/global')
env.NODE_ENV = 'production'
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.production.config')
 
var spinner = ora('building for production...')
spinner.start()
 
var staticPath = __dirname + '/../public/dist/'
rm('-rf', staticPath)
mkdir('-p', staticPath)
 
webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})

`
写一个build.js，然后在package.json里面添加 script 参数

"build": "node build.js"//这里记得写自己build.js路径
`
