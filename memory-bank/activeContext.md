# 当前上下文（Active Context）

> 记忆库「现在」。P1 写计划、P4 写结果；≤150 行（见 AGENTS.md §4.1）。

## 当前焦点（≤30 行）

**工作重点**：寅铠官网改版 S2–S6 已完成首轮全量实现并通过构建验证。

**最近变更**：
- 产品图高清化：发现产品详情页共 13 张图（全部源分辨率 435x288，无更大原图）；用 jimp 做 2x bicubic 放大+卷积锐化 → 870x576，覆盖 public/images/products/（文件名不变原位替换，yk3e-line 删除、新增 yk3e-palletizer 与 yk6-line-alt）
- 首页"产品与服务"三卡片接入真实设备图（businessImages：line→yk6-line-alt / palletizing→ykal-loader / vision→ykol-vision），卡片顶部图 + 图标标题行，hover 图片微缩放
- build 通过

**下一步**：
1. 视觉走查（用户在内置浏览器确认）
2. yk3e/yk-bending 产品对应关系确认（TODO）
3. 产品参数真实数据、伙伴名单（待用户提供）

**关键决策**：
- 弹性布局：rem 基准 + clamp 视口联动 + EP 尺寸变量 rem 化；≤768px 根字号走 clamp 下限 12px
- 视觉：深色工业科技风，能源绿 #00c48c 主色
- 数组型 i18n 消息统一用 tm()/rt() 读取（t() 会字符串化）

## 当前处理中的错误

（仅列编号与状态，详情见 errorlog.md）

- 无

## 上一焦点概要

- 2026-09-15：完成需求澄清（Vue3 vs React 对比后选定 Vue 3；页面板块全选；中英双语）；经两轮讨论确定引入 Element Plus
