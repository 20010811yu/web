# 当前上下文（Active Context）

> 记忆库「现在」。P1 写计划、P4 写结果；≤150 行（见 AGENTS.md §4.1）。

## 当前焦点（≤30 行）

**工作重点**：寅铠官网改版 S2–S6 已完成首轮全量实现并通过构建验证。

**最近变更**：
- **部署改为 Netlify**（GitHub Pages 的 PKCE 登录有缺陷，弃用）：base 回归 /，删 deploy.yml，public/_redirects 做 SPA 回退；CMS backend 改 git-gateway（Netlify Identity 邮箱邀请登录，无需 GitHub OAuth App）
- **待用户操作**：① Netlify 用 GitHub 登录并导入仓库（build: npm run build，publish: dist）→ 自动部署；② Site configuration → Identity → Enable；③ Identity → Git Gateway → Enable；④ 邀请编辑者邮箱；⑤ 之后 /admin/ 用邮箱密码登录
- 内容 JSON 化与 imgSrc/tv 助手、CMS 三个集合（news/jobs/site）均已就绪

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
