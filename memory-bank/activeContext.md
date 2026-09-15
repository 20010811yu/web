# 当前上下文（Active Context）

> 记忆库「现在」。P1 写计划、P4 写结果；≤150 行（见 AGENTS.md §4.1）。

## 当前焦点（≤30 行）

**工作重点**：搭建项目规则与记忆库、skill 体系；网站代码尚未初始化。

**最近变更**：
- 2026-09-15 创建 AGENTS.md v1.0（融合 memory-bank v2.1 工作流 + 官网规范，含 Element Plus 按需引入约定）
- 2026-09-15 初始化 memory-bank/ 7 个核心文件 + archive/
- 2026-09-15 创建 3 个 skill：company-website-dev / add-page / pre-commit-check

**下一步**：
1. S2：`npm create vite` 初始化项目，安装 vue-router / vue-i18n / element-plus / unplugin-vue-components
2. S3：搭建 i18n、路由、design tokens、Element Plus 主题覆盖、Navbar/Footer
3. S4：按 data → 公共组件 → 各页面的顺序实现 7 个页面

**关键决策**：
- UI 框架选型 Element Plus（用户确认），按需引入 + CSS 变量覆盖主题色
- 不引入 Tailwind/sass，样式用原生 CSS design tokens

## 当前处理中的错误

（仅列编号与状态，详情见 errorlog.md）

- 无

## 上一焦点概要

- 2026-09-15：完成需求澄清（Vue3 vs React 对比后选定 Vue 3；页面板块全选；中英双语）；经两轮讨论确定引入 Element Plus
