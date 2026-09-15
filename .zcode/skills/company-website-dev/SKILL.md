---
name: company-website-dev
description: 公司官网开发流程。执行任何官网开发任务（新功能、改版、修 bug、样式调整）时使用，按 P0-P3 生命周期走：先全量读记忆库，再规划、按 AGENTS.md 规范实施、验证，最后交给 pre-commit-check 收尾。
---

# 官网开发流程（P0 → P3）

执行官网相关开发任务时严格按以下流程，规范细节以仓库根目录 `AGENTS.md` 为唯一权威来源。

## P0 任务启动（强制第一步）

按固定顺序全量阅读 `memory-bank/` 下 7 个核心文件：
projectbrief → productContext → activeContext → systemPatterns → techContext → progress → errorlog。
重点吸收：activeContext 的当前重点与下一步、systemPatterns 的「已知陷阱与规避模式」、errorlog 的「防回归清单」。归档目录 `memory-bank/archive/` 不读。

## P1 理解与规划

1. 澄清任务需求；有歧义先问用户，不臆测
2. 确定涉及的页面/组件/数据文件
3. 规划定稿后更新 `memory-bank/activeContext.md`：工作重点 + 计划 + 下一步

## P2 实施开发

编码前先查 errorlog.md 防回归清单，然后按 AGENTS.md 第二部分规范实施：

- **技术栈**：Vue 3 `<script setup>` + Vite；不引入清单外依赖
- **Element Plus**：按需使用现成组件；禁全量注册；品牌色经 CSS 变量覆盖，不用 `!important` 硬覆盖
- **双语**：所有用户可见文案中英两个语言包同时录入，key 用 `页面.区块.字段` 层级；数据文件用 `{ zh, en }` 字段
- **目录**：视图进 views/、复用组件进 components/、数据进 data/、全局样式进 assets/styles/
- **样式**：design tokens 变量优先，响应式断点 768/1024
- **错误实时入档**：实施中遇到返工/多次尝试/环境坑，当场写入 errorlog.md（ERR-xxx 编号 + 时间字段），不攒到收尾

## P3 验证与调试

1. `npm run build` 必须通过
2. 自查：路由可达、中英切换正常且无缺翻译、窄屏（≤768px）布局正常
3. 调试中更新 errorlog.md 对应条目状态（🔴→🟡→🟢），复现时更新原条目
4. 普适教训沉淀到 systemPatterns.md「已知陷阱与规避模式」；环境约束结论写 techContext.md

## 移交收尾

P3 通过后，提示接下来执行 **pre-commit-check** skill 完成 P4（记忆库同步检查）+ P5（Git 提交推送），不要跳过直接宣布完成。
