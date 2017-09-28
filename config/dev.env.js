var path = require('path');
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  env: 'development',
  // globalConfig 中的 key 需要为 JSON 字符串
  globalConfig: {
    NODE_ENV: JSON.stringify("development")
  },
  index: path.resolve(__dirname, '../dist/index.html'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  cssSourceMap: false
})
