# 领域文档

本文说明工程技能在探索代码库时应如何使用本仓库的领域文档。

## 探索前阅读

- 仓库根目录的 **`CONTEXT.md`**；或者
- 如果根目录存在 **`CONTEXT-MAP.md`**，按照其中的指引读取与当前主题相关的各个 `CONTEXT.md`
- **`docs/adr/`** 中与即将处理区域相关的 ADR；在多上下文仓库中，还应检查 `src/<context>/docs/adr/` 中的上下文级决策

如果这些文件不存在，直接继续，不要报告缺失，也不要预先建议创建。`/domain-modeling` 技能会在术语或决策真正明确后按需创建它们。

## 文件结构

单上下文仓库：

```text
/
├── CONTEXT.md
├── docs/adr/
│   ├── 0001-event-sourced-orders.md
│   └── 0002-postgres-for-write-model.md
└── src/
```

多上下文仓库（根目录存在 `CONTEXT-MAP.md`）：

```text
/
├── CONTEXT-MAP.md
├── docs/adr/                          ← 系统级决策
└── src/
    ├── ordering/
    │   ├── CONTEXT.md
    │   └── docs/adr/                  ← 上下文级决策
    └── billing/
        ├── CONTEXT.md
        └── docs/adr/
```

## 使用词汇表中的术语

当输出内容命名领域概念时，例如 issue 标题、重构提案、假设或测试名称，应使用 `CONTEXT.md` 中定义的术语，不要改用词汇表明确排除的同义词。

如果词汇表中没有所需概念，这通常意味着正在引入项目未使用的语言，或确实存在领域模型缺口；前者应重新考虑，后者应记录并交由 `/domain-modeling` 处理。

## 标明与 ADR 的冲突

如果输出内容与现有 ADR 冲突，应明确指出，而不是静默覆盖：

> 与 ADR-0007（事件溯源订单）冲突，但值得重新讨论，因为……
