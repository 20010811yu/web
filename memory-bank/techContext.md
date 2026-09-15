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

（S2 初始化后填写实际版本）

- vue / vue-router / vue-i18n / element-plus
- devDeps：vite / @vitejs/plugin-vue / unplugin-vue-components
- 函数式组件样式：ElMessage 等需确认 ElementPlusResolver importStyle 配置生效

## 关键约束（硬规则，详见 AGENTS.md 第二部分）

1. Element Plus 禁全量引入；主题色经 CSS 变量覆盖
2. 文案禁止硬编码，全部进 i18n 语言包（中英同步）
3. 提交前 `npm run build` 必须通过
