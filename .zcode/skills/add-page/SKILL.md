---
name: add-page
description: 为官网新增页面的固定步骤清单。当用户要求新增页面/栏目/板块（如"加一个案例展示页"）时使用，覆盖视图、路由、导航、双语包、构建验证全流程。
---

# 新增页面固定步骤

前置：先按 **company-website-dev** skill 的 P0 全量阅读记忆库 7 文件，再执行本清单。

## 步骤

1. **新建视图**：`src/views/Xxx.vue`，PascalCase 命名，页面级样式 scoped
2. **注册路由**：`src/router/index.js` 新增路由记录，路由 name 与组件名一致（如 `name: 'Cases'`，path 用 kebab-case 如 `/cases`）
3. **导航入口**：Navbar（含移动端汉堡菜单）和 Footer 的快捷链接中加入新页面入口，菜单项文案走 i18n
4. **双语包**：`src/i18n/` 中 zh 和 en 两个语言包同时补齐 `xxx.区块.字段` 层级的全部 key；禁止只补中文；检查无硬编码文案
5. **数据文件**（如页面依赖列表数据）：放 `src/data/`，导出常量数组，文本字段用 `{ zh, en }` 结构
6. **组件复用**：页面头部用公共 PageHero 类组件；交互优先用 Element Plus 现成组件（按需），品牌展示区自定义 + design tokens
7. **Element Plus 主题**：新组件配色只用现有 CSS 变量（`--el-color-*` 与自有 tokens），不新增硬编码色值

## 收尾

- P3 验证：`npm run build` 通过；新页面中英切换正常；≤768px 布局正常；路由直达无 404
- P4/P5：执行 **pre-commit-check** skill 完成记忆库同步检查与 Git 提交推送
- 记忆库更新要点：progress.md 勾选新页面；activeContext.md 更新下一步；如新增了可复用模式写 systemPatterns.md
