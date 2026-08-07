# Issue tracker：本地 Markdown

本仓库的 issue 和规格说明以 Markdown 文件形式存放在 `.scratch/` 中。

## 约定

- 每项功能使用一个目录：`.scratch/<feature-slug>/`
- 规格说明位于 `.scratch/<feature-slug>/spec.md`
- 每个实施 ticket 使用一个独立文件：`.scratch/<feature-slug>/issues/<NN>-<slug>.md`，从 `01` 开始编号；不得合并为单个 tickets 文件
- Triage 状态记录在每个 issue 文件顶部附近的 `Status:` 行中，角色字符串见 `triage-labels.md`
- 评论与对话历史追加到文件末尾的 `## Comments` 标题下

## 当技能要求“发布到 issue tracker”时

在 `.scratch/<feature-slug>/` 下创建新文件；目录不存在时一并创建。

## 当技能要求“获取相关 ticket”时

读取引用路径对应的文件。用户通常会直接提供路径或 issue 编号。

## Wayfinding 操作

供 `/wayfinder` 使用。每项工作使用一个 **map** 文件，并为每个 ticket 建立一个 **child** 文件。

- **Map**：`.scratch/<effort>/map.md`，包含 Notes、Decisions-so-far 和 Fog 正文
- **Child ticket**：`.scratch/<effort>/issues/NN-<slug>.md`，从 `01` 开始编号，正文中记录问题；`Type:` 行记录 ticket 类型（`research`、`prototype`、`grilling` 或 `task`），`Status:` 行记录 `claimed` 或 `resolved`
- **阻塞关系**：在文件顶部附近使用 `Blocked by: NN, NN`；列出的所有文件均为 `resolved` 后，该 ticket 才解除阻塞
- **Frontier**：扫描 `.scratch/<effort>/issues/`，寻找仍开放、未阻塞且未认领的文件；编号最小者优先
- **认领**：开始工作前，将 `Status:` 设置为 `claimed` 并保存
- **解决**：将答案追加到 `## Answer` 标题下，把 `Status:` 设置为 `resolved`，然后在 `map.md` 的 Decisions-so-far 中追加上下文指针（摘要和链接）
