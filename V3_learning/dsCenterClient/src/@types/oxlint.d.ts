// 文件名: oxlint.d.ts (或 global.d.ts)

declare module "eslint-plugin-oxlint" {
  // 由于我们不知道其确切类型，最简单的做法是将其导出类型设置为 any
  const pluginOxlint: any;
  export default pluginOxlint;
}
