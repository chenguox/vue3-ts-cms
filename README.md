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

# 项目规范

| 文件命名规范 | 要求                        | 例子           |
| ------------ | --------------------------- | -------------- |
| 文件夹       | 统一小写，多个单纯使用-分割 | not-found      |
| 文件         | 统一小写，多个单纯使用-分割 | date-format.ts |

| 编写组件规范       | 要求                                  | 例子                                                   |
| ------------------ | ------------------------------------- | ------------------------------------------------------ |
| 组件的文件名       | 统一小写, 多个单词使用-分割           | login.vue、login-panel.vue                             |
| **组件的目录结构** | src 下编写组件，统一在  index.ts 导出 | 编写：button/src/button.vue<br />导出：button/index.ts |

[配置代码规范](https://github.com/Coder-Cgx/vue3-ts-cms/blob/master/src/docs/CodeSpecification.md)

[项目搭建](https://github.com/Coder-Cgx/vue3-ts-cms/blob/master/README.Build.md)
