# 当前上下文（Active Context）

> 记忆库「现在」。P1 写计划、P4 写结果；≤150 行（见 AGENTS.md §4.1）。

## 当前焦点（≤30 行）

**工作重点**：寅铠官网改版 S2–S6 已完成首轮全量实现并通过构建验证。

**最近变更**：
- S2 脚手架：手写 Vite 工程，依赖 vue3.5 / router4.4 / vue-i18n9.14 / element-plus2.8 / unplugin-vue-components
- S3 基础：弹性缩放（root clamp + 全站 rem + EP 尺寸变量 rem 化）、深色 design tokens、NavBar/Footer/PageHero、中英 i18n 全量语言包
- S4 数据：products/history/news/jobs/partners 双语数据（内容取自旧站，partner 仅有 logo 直链，产品参数为 TODO 占位）
- S5 页面：Home/Products/About/News/NewsDetail/Contact/Careers 全部实现
- S6 验证：`npm run build` 通过；preview 下 7 条路由全部 200

**下一步**：
1. 视觉走查（浏览器多宽度截图自查）与真实素材替换
2. 产品参数表真实数据（待用户提供，标 TODO）
3. 合作伙伴名单与授权 logo（待用户提供）

**关键决策**：
- 弹性布局：rem 基准 + clamp 视口联动 + EP 尺寸变量 rem 化；≤768px 根字号走 clamp 下限 12px
- 视觉：深色工业科技风，能源绿 #00c48c 主色
- 数组型 i18n 消息统一用 tm()/rt() 读取（t() 会字符串化）

## 当前处理中的错误

（仅列编号与状态，详情见 errorlog.md）

- 无

## 上一焦点概要

- 2026-09-15：完成需求澄清（Vue3 vs React 对比后选定 Vue 3；页面板块全选；中英双语）；经两轮讨论确定引入 Element Plus
