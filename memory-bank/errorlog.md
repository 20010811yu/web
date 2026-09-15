# 错误日志（Error Log）

> 问题—解决方式的唯一事实来源。🔴 未解决 → 🟡 规避中 → 🟢 已解决；复现更新原条目，不另开新条目。🟢 条目压缩为一行摘要；防回归清单永不压缩。

## 错误条目

### ERR-001 git add -A 误提交 node_modules/dist
- **状态**：🟢
- **分类**：环境工具链
- **现象**：首次实现提交时 67b691b 包含 11971 个 node_modules 文件（12025 files changed）
- **上下文**：仓库初始化时未创建 .gitignore，pre-commit 直接 `git add -A`
- **发生时间**：2026-09-15
- **根本原因**：.gitignore 缺失 + 自动提交流程使用 add -A 无暂存检查
- **解决方式**：commit 未推送前发现；新增 .gitignore（node_modules/dist/日志）→ `git reset --soft` 回退 → 重新提交 dc6fbe0 并推送，远程无污染
- **解决时间**：2026-09-15
- **验证结果**：`git ls-files | grep -c node_modules` = 0；status 干净
- **教训**：项目脚手架第一步必须先建 .gitignore；pre-commit-check 增加暂存清单检查

## 防回归清单（编码前必查，完整保留）

- [ ] Element Plus 必须按需引入（ElementPlusResolver），禁止全量 `app.use(ElementPlus)`
- [ ] 新增文案必须中英两个语言包同时补齐，禁止硬编码
- [ ] 提交前必须 `npm run build` 通过
- [ ] 记忆库更新遵守体积红线（activeContext ≤150 / progress ≤80 / systemPatterns ≤210）
- [ ] Windows Git Bash 下多条命令用 `;` 分隔确认兼容性

## 🟢 已解决（压缩摘要）

（暂无）
