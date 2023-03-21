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
    ]
  },
  devServer: {
    proxy: {  //配置跨域
      target: 'http://localhost:8080',  //这里后台的地址模拟的;应该填写你们真实的后台接口
    }
  },
})
