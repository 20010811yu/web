# 当前上下文（Active Context）

> 记忆库「现在」。P1 写计划、P4 写结果；≤150 行（见 AGENTS.md §4.1）。

## 当前焦点（≤30 行）

**工作重点**：寅铠官网改版 S2–S6 已完成首轮全量实现并通过构建验证。

**最近变更**：
- 网站优化包（参照优秀企业官网）：①SEO 基础——src/seo.js 每路由中英 title/description（router afterEach + NavBar 切语言联动 + NewsDetail 动态页）、index.html 补 description/keywords/OG/Organization JSON-LD、public/sitemap.xml+robots.txt（域名占位 TODO）；②体验——移动端底部悬浮联系栏 MobileContactBar（电话/微信弹码/询盘）、BackTop 返回顶部、v-reveal 滚动进入动效（IntersectionObserver，prefers-reduced-motion 降级）；③细节——新闻上/下篇导航、27 张图转 WebP（总体积约 -70%，jimp 不支持 webp 故用 sharp）、hero 预加载
- build 通过

**下一步**：
1. 视觉走查（动效/联系栏在真机的表现）
2. Formspree 表单（等用户注册 endpoint）；部署（等用户确认平台）
3. 伙伴名单、锁螺母线参数、新闻增补（待用户提供）

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
