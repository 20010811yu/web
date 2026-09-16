# 当前上下文（Active Context）

> 记忆库「现在」。P1 写计划、P4 写结果；≤150 行（见 AGENTS.md §4.1）。

## 当前焦点（≤30 行）

**工作重点**：寅铠官网改版 S2–S6 已完成首轮全量实现并通过构建验证。

**最近变更**：
- **部署配置**：GitHub Actions（.github/workflows/deploy.yml）push main 自动构建发布 GitHub Pages；vite base=/web/；dist/404.html 做 SPA 回退；router history 接 BASE_URL。**待用户手动**：GitHub 仓库 Settings→Pages→Source 选 GitHub Actions
- **CMS 后台**：Decap CMS 挂在 /admin（public/admin/），可表单编辑新闻/职位/站点联系信息（src/data/content/*.json），保存即提交 GitHub 触发部署。**待用户**：创建 GitHub OAuth App 并把 Client ID 填入 public/admin/config.yml 的 app_id
- 内容 JSON 化：news/jobs/site 抽到 src/data/content/*.json，组件经 tv() 双语渲染；图片路径统一相对路径 + imgSrc()（src/utils/img.js）补 BASE_URL 前缀；27 图 WebP 后新 uploads 归 CMS
- dev server 访问路径变更为 localhost:5173/web/

**下一步**：
1. 用户启用 Pages + 创建 OAuth App（见 admin/index.html 注释）
2. Formspree 表单（等 endpoint）；真实素材（案例/手册/新闻/伙伴名单）

**下一步**：
1. 视觉走查（用户在内置浏览器确认）
2. 自动锁螺母生产线旧站无参数页（TODO 待用户提供）；YK-7B 设备重量旧站缺失已省略
3. 伙伴名单与授权确认（待用户提供）

**关键决策**：
- 弹性布局：rem 基准 + clamp 视口联动 + EP 尺寸变量 rem 化；≤768px 根字号走 clamp 下限 12px
- 视觉：深色工业科技风，能源绿 #00c48c 主色
- 数组型 i18n 消息统一用 tm()/rt() 读取（t() 会字符串化）

## 当前处理中的错误

（仅列编号与状态，详情见 errorlog.md）

- 无

## 上一焦点概要

- 2026-09-15：完成需求澄清（Vue3 vs React 对比后选定 Vue 3；页面板块全选；中英双语）；经两轮讨论确定引入 Element Plus
