const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ],
    devtool: 'source-map'
    
  },
  // devServer: {
  //   proxy: {
  //     //  '/yu'为请求前缀，用于控制是不是走代理，想走代理时就在请求前缀前边加上这个请求前缀
  //     '/api': {
  //       target: 'http://localhost:8080',
  //       pathRewrite: { "^/api": "" }, //重写路径  匹配以/yu为开头的路径都变为空字符串 
  //       // ws: true, //用于支持websocket
  //       changeOrigin: true //用于控制请求头中的host值
  //     },
  //   }
  // },
})
