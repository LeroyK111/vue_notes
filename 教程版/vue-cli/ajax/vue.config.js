const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  // 配置代理服务器，指向服务器url
  // devServer: {
  //   proxy: "http://127.0.0.1:5000",
  // }

  devServer: {
    proxy: {
      "^/api": {
        target: "http://127.0.0.1:8000",
        // 对路径转发进行替换
        pathRewrite: {'^/api' : ''},
        // websocket
        ws: true,
        // 设定请求来源，匿名访问
        changeOrigin: true,
      },
      "^/foo": {
        target: "http://127.0.0.1:5001",
      },
    },
  },
});
