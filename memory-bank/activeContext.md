# 当前上下文（Active Context）

> 记忆库「现在」。P1 写计划、P4 写结果；≤150 行（见 AGENTS.md §4.1）。

## 当前焦点（≤30 行）

**工作重点**：官网优化包（v0.1.8）：修复部署域名不一致、工程化补齐（ESLint/Prettier/CI）、性能与 SEO 增强。

**最近变更**：
- 域名统一为品牌域名 `https://www.yinkaish.com`（sitemap.xml / robots.txt Sitemap 绝对地址 / admin config.yml site_url，弃用 github.io 旧地址）
- MobileContactBar 硬编码「微信」接入 i18n（新增 footer.wechatLabel 中英 key）
- 新增独立 404 页（views/NotFound.vue，替换原静默重定向首页）
- 全站 img 补 width/height（产品 870×576 / 新闻 850×560 / 公司 866×465 / 二维码 92×92 / logo 132×128）防 CLS
- 删除未引用的 old-banner.webp（304K）；移除 main.css 未加载的 Inter 字体声明
- 新增 ESLint 10（flat config + eslint-plugin-vue）+ Prettier，`npm run lint` / `npm run format`，清理 4 处未用 import
- 新增 GitHub Actions CI（.github/workflows/ci.yml：npm ci → lint → build）
- seo.js 路由切换同步更新 og:title/description/url + canonical + twitter:card；index.html 补 og:url/og:locale/twitter 标签

**下一步**：
1. 视觉走查与产品图对应关系确认（yk3e / yk-bending，TODO 待用户）
2. 产品参数真实数据（待用户）；伙伴名单与授权确认（待用户）
3. Formspree 表单 endpoint（待用户）
4. 可选：git 历史瘦身（.git 42MB，曾误提交 node_modules）

**关键决策**：
- 域名基准确定为 www.yinkaish.com（与公司邮箱域名一致；Netlify 分配域名未入档）
- lint 规则放宽 vue 模板格式类规则（格式交 Prettier，保持现有代码风格不动）

## 当前处理中的错误

（仅列编号与状态，详情见 errorlog.md）

- 无

## 上一焦点概要

- 2026-09-15：部署切 Netlify（git-gateway 登录），内容 JSON 化，CMS 三集合就绪
- 2026-09-15：完成需求澄清与首轮全量实现（Vue 3 + Element Plus，中英双语，7 视图）
