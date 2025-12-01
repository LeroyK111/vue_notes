# dsCenterClient

本文件旨在为前端开发制定提交信息的规范，确保团队协作中提交信息的统一性、清晰性和可追溯性。
本项目国际化项目，需要中英文。

维护者有义务保持vite，node，vue等等依赖为latest version

## Project Setup

```sh
npm install --legacy-peer-deps
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


## 提交commit内容
我们遵循 Conventional Commits 规范，提交信息结构如下：
<类型>(<范围>): <简短描述>
组成部分
```
类型：表示变更的类型，常用类型包括：
feat：新增功能或特性。
fix：修复 bug。
style：代码样式调整（不影响功能，如 CSS 或格式化）。
refactor：代码重构（不改变外部行为）。
docs：文档更新。
test：添加或更新测试代码。
chore：杂项任务（如更新依赖、构建工具等）。

范围（可选）：指定受影响的模块或组件（如 ui、api、button、header）。
简短描述：简洁概述变更内容，建议控制在 50-72 字符。
```
示例仅供参考
```
feat(button): 添加提交按钮的加载状态
fix(api): 修复用户认证错误
style(header): 调整头部内边距以优化对齐
refactor(form): 优化输入验证逻辑
docs(readme): 更新安装说明
test(login): 为登录组件添加单元测试
chore(deps): 升级 React 至 18.3.1
```


## 使用方式

```
node lts作为引擎
npm作为包管理器
vue作为框架
vite作为打包
typescript作为主要语法（不推荐使用any, never）
vue-i18作为国际化翻译框架
vue-router作为路由
pinia作为全局状态管理
axios作为http请求器
websocket使用socket.io作为管理器（需要后端同样支持socket.io）
style推荐使用tailwindcss + sass（不做强制要求）
```
其他依赖项及三方库可自行使用。

### 开发环境
后端服务：
```
.env.development
```
### 测试环境
后端服务:
```
.env.test
```
### 生产环境
后端服务：
```
.env.production
```

## 目录及文件注释
我实在是懒得弄这个， 这里就看文件中的leroyk的注释吧
```
treeDocs.txt
```