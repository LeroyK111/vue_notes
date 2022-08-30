// 导入帮手提示
const { defineConfig } = require("@vue/cli-service");
// 个性化定制脚手架
// https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = defineConfig({
  // 输入vue inspec > vue.config.js，即可传出所有配置
  transpileDependencies: true,
  // vue脚手架配置，避免因为组件名称没有遵循大驼峰命名而报错
  lintOnSave: true,
});
