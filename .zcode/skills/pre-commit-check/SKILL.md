---
name: pre-commit-check
description: 提交前检查与 Git 收尾（P4+P5）。任何改动交付前使用：构建验证、硬编码文案扫描、记忆库逐文件同步检查与体积红线核对、输出检查清单、Conventional Commits 提交并推送远程。
---

# 提交前检查（P4）+ Git 同步（P5）

任何任务交付前的强制收尾流程，规范依据仓库根目录 `AGENTS.md` §4–§6。

## P4 提交前检查

1. **构建验证**：`npm run build` 必须通过，失败则回到开发流程修复
2. **规范扫描**：
   - 硬编码文案：扫描改动文件中的中文字符串，确认都已进 i18n 语言包且中英同步
   - 目录归位：改动文件是否符合 AGENTS.md §9 目录职责
   - Element Plus：确认无全量注册、无 `!important` 硬覆盖、新色值走 CSS 变量
3. **记忆库逐文件同步检查**：以 `git status` / `git diff` 的实际改动清单为影响范围依据（不凭记忆），对 `memory-bank/` 全部 md 文件逐一判断：
   - 受影响 → 立即更新（错误详情统一指向 ERR 编号；多文件对同一事实描述必须一致）
   - 不受影响 → 显式记录「无需更新 + 原因」，不允许静默跳过
   - 变更映射：错误相关 → errorlog → systemPatterns → techContext；功能迭代 → activeContext → progress → projectbrief；新依赖 → techContext
4. **体积红线核对**：被改动的核心文件逐一对账——activeContext ≤150 行、progress ≤80 行、systemPatterns ≤210 行、errorlog 🟢 条目已压缩；超线先「归档到 memory-bank/archive/ 再压缩」，归档是搬移不是删除
5. **输出检查清单**（写入交付说明，逐文件）：
   ```text
   ✅ 已更新：<文件名>（<摘要>）
   ➖ 无需更新：<文件名>（<原因>）
   一致性核对：版本号 ▢ 构建状态 ▢ 决策结论 ▢ ERR 编号 ▢
   体积红线：activeContext ▢ progress ▢ systemPatterns ▢ errorlog ▢
   ```

## P5 Git 同步（自动执行）

1. **自动触发**：只要本次任务产生了文件更新，P5 必须自动执行——无需用户提示、无需用户确认、禁止询问"是否提交"
2. `git add -A` → `git commit` → `git push`（Windows Git Bash 下用 `;` 分隔多条命令）
3. 提交信息 Conventional Commits：`<类型>: <摘要>`，类型限 feat/fix/style/refactor/docs/build/chore；一次性提交全部变更（代码 + 记忆库）
4. 交付前确认 `git status` 干净、`git status -sb` 无 ahead/behind
5. 交付说明附提交哈希与远程分支（如 `3fc7a86 → origin/main`）
6. push 失败（网络/SSH/权限）：不回滚本地 commit，记录失败原因，下次任务优先补推
