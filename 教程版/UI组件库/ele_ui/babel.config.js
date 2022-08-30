module.exports = {
  // 可能会报not found，缺啥装啥
  // 也可能配置有问题，需要去看最新的官方文档
  presets: ["@vue/cli-plugin-babel/preset", ["@babel/preset-env", { modules: false }]],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
