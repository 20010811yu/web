# 系统模式（System Patterns）

> 记忆库「怎么建」。架构、关键技术决策、组件关系、已知陷阱与规避模式。≤210 行。

## 架构概览

```text
SPA（无 SSR）
├── main.js ── 创建 app，挂载 router + i18n
├── App.vue ── 全局布局：Navbar + router-view + Footer
├── router/ ── 路由表（含 NewsDetail 动态路由 /news/:id）
├── i18n/ ── vue-i18n 实例；localStorage 持久化；Element Plus locale 联动
├── data/ ── 结构化占位数据（news / jobs / team），双语字段 { zh, en }
├── components/ ── Navbar、Footer、NewsCard 等跨页面组件
└── views/ ── 8 个视图（Home/About/Services/Team/News/NewsDetail/Contact/Careers）
```

## 关键技术决策

| 决策 | 理由 |
|------|------|
| Vue 3 而非 React | 官网内容展示型、重维护成本，Vue 模板直观易接手，Vite/vue-i18n 官方配套成熟 |
| Element Plus 按需引入 | 组件质量与开发效率，同时控制包体积；禁全量 `app.use(ElementPlus)` |
| 原生 CSS design tokens | 品牌定制感强、少一层依赖；品牌色通过覆盖 `--el-color-primary` 等变量统一 |
| 部署 | **Netlify**（免费，从 GitHub 导入自动构建：`npm run build`，发布目录 `dist`）；根路径部署（base=/）；SPA 回退靠 public/_redirects。CMS 登录依赖 Netlify Identity，故不用 GitHub Pages |
| CMS 后台 | Decap CMS 挂 /admin（public/admin/），backend **git-gateway**（依赖 Netlify Identity+Git Gateway，邮箱邀请登录）；编辑 src/data/content/*.json（news/jobs/site），保存提交 GitHub → Netlify 自动重新部署；产品参数仍由 params.js 维护。陷阱：github+pkce 后端在部分环境下登录无反应/跳 api.netlify.com 404，故弃用 |
| 内容 JSON 化 | 高频更新内容（新闻/职位/站点信息）存 src/data/content/*.json，双语字段 {zh,en} 并列；组件用 tv()（utils/i18n-value）渲染；图片路径一律相对路径（不带前导斜杠），经 imgSrc()（utils/img）补 BASE_URL |
| 弹性缩放布局 | `html{font-size:clamp(12px,0.833vw,20px)}` 根字号随视口线性缩放；全站尺寸用 rem；EP 尺寸变量（`--el-font-size-base` 等）覆盖为 rem；≤768px 根字号固定值切移动布局。实现窗口缩放时字体/图片/图标/间距等比缩放 |
| 深色区块锚点 | v0.1.2 起全站为浅色主题（#f5f7fa 底/白卡/深灰蓝文字，品牌绿 #00a878）；首页 Hero（厂房 SVG 深色场景）与 CTA 条保留深色底（--bg-dark #0d1726），深色区内文字/按钮固定浅色，不随主题变量翻转 |
| 占位数据独立于组件 | 后续替换真实文案不动组件逻辑 |

## 关键实现路径

- **语言切换**：切换函数 → i18n.global.locale 变更 → localStorage 写入 → Element Plus locale（ref 包装 zh-cn/en）同步 → 全站 `$t()` 响应式刷新
- **数据双语渲染**：组件从 `src/data/` 取数组 → 按 `locale.value` 取字段 `item.title[locale.value]`
- **主题定制**：`src/assets/styles/` 内覆盖 Element Plus CSS 变量 + 自有 tokens，全局仅此一处

## 已知陷阱与规避模式

（承接 errorlog.md 沉淀的普适教训）

- **数组型 i18n 消息**：vue-i18n 的 `t()` 会把数组消息字符串化；必须用 `tm()` 取原始数组 + `rt()` 渲染单项（见 Products/About/Careers）
- **图片格式转换后引用同步**：批量把 public/ 下图片转 WebP 并删原图时，务必同步更新所有引用（.jpg/.png 都要覆盖），否则 Vite build 会因资源解析失败而报错；转换前用「WebP 更小才替换」策略（见 /tmp/imgtool/towebp.js 思路）
- **el-table-column width 不支持百分比**：`width="45%"` 会被当作 45px；需固定 px 或用 min-width
- **SEO 模式**：每路由 title/description 集中在 src/seo.js，router afterEach + NavBar 切语言两处调用 applyRouteSeo；动态页（NewsDetail）自行调 applyNewsSeo
