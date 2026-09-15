# 技术上下文（Tech Context）

> 记忆库「用什么建」。技术栈、环境、约束、依赖。新依赖/工具链变化时更新。

## 技术栈

| 类别 | 选型 | 备注 |
|------|------|------|
| 框架 | Vue 3（`<script setup>`） | 组合式 API |
| 构建 | Vite | 零配置起步 |
| 路由 | Vue Router 4 | history 模式 |
| 国际化 | vue-i18n 9 | 中英双语 |
| UI 库 | Element Plus | **按需引入**：unplugin-vue-components + ElementPlusResolver；禁全量注册 |
| 样式 | 原生 CSS + CSS 变量 | 不用 Tailwind/sass |

## 环境约束

- 平台：Windows（Git Bash）；包管理器 npm
- Git 仓库：D:\website，远程 `git@github.com:20010811yu/web`（SSH），分支 main
- Node 版本：以本机安装为准，初始化时记录实际版本

## 依赖清单

- vue ^3.5 / vue-router ^4.4 / vue-i18n ^9.14 / element-plus ^2.8 / @element-plus/icons-vue ^2.3
- devDeps：vite ^5.4 / @vitejs/plugin-vue ^5.2 / unplugin-vue-components ^0.27
- 函数式组件样式：ElMessage 已按需引入样式（`element-plus/es/components/message/style/css`）
- Node/npm：本机安装版本可用（build 通过）

## 关键约束（硬规则，详见 AGENTS.md 第二部分）

1. Element Plus 禁全量引入；主题色经 CSS 变量覆盖
2. 文案禁止硬编码，全部进 i18n 语言包（中英同步）
3. 提交前 `npm run build` 必须通过
