# Vue Ts Cms

# 简介

该项目使用了最新的 `vue3`,`vite2`,`TypeScript`等主流技术开发，用于将学到的知识进行实线，正在不断开发完善。

# 预览

- 占无

测试账号： admin/123456

效果截图（占无）

# 技术栈

- 开发工具 : Visual Studio Code
- 编程语言 : TypeScript 4.x + JavaScript
- 构建工具 : Vite 2.x / Webpack5.x
- 前端框架 : Vue 3.x
- 路由工具 : Vue Router 4.x
- 状态管理 : Pinia / Vuex 4.x
- UI 框架 : Element Plus
- 可视化 : Echart5.x
- 富文本 : WangEditor
- 工具库 : @vueuse/core + dayjs + countup.js
- CSS 预编译 : Sass / Less
- HTTP 工具 : Axios
- Git Hook 工具 : husky
- 代码规范 : EditorConfig + Prettier + ESLint
- 提交规范 : Commitizen + Commitlint
- 自动部署 : Centos + Jenkins + Nginx

[配置代码规范]()

[项目搭建](https://github.com/Coder-Cgx/vue3-ts-cms/blob/master/README.Build.md)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
