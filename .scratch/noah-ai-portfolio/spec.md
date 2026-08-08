# Noah AI 作品集

Status: ready-for-agent

## Problem Statement

Noah Wang 需要在 Upwork cover letter 中附上一个公开链接，让潜在客户在很短时间内理解他的定位、相关经历、两个代表性 AI 项目以及下一步如何联系他。仅依赖 Upwork 资料或完整简历，会让客户需要自行筛选大量信息，也不能针对具体项目自然追问。

现有参考站点 Kay Verma AI Portfolio 提供了合适的视觉语言、首页节奏和首页进入对话的交互骨架，但它也存在内容幻觉、事实矛盾、失效交互、错误外链和不符合 Noah 业务目标的转化路径。直接复制会继承这些问题。

同时，Noah 的私有简历只能用于人工整理公开内容，不能提交到 Git、部署到生产环境、由运行时读取或提供给访客下载。作品集必须以经过确认的站点公开资料和公开项目内容为唯一事实边界；即使 DeepSeek 不可用，作品面也必须继续完成核心介绍和 Upwork 转化。

## Solution

构建一个部署在 Streamlit Community Cloud 的英文 AI 作品集。它在视觉上忠实复刻目标站点的白色极简风格、页面节奏、卡片语言、动画层次和首页到对话的核心交互，同时用 Noah Wang 的真实资料、项目内容和 Upwork 转化路径完全替换目标站点内容。

首页提供无需模型即可浏览的作品面，包括定位、能力、经历、两个项目、合作流程入口和公开联系渠道。快捷卡片使用确定性的站点公开资料；自由提问则由服务端调用 DeepSeek，以自然的第一人称资料口吻回答，并持续明确自己是 AI 作品集而不是 Noah 本人。它不使用 RAG、向量数据库、检索、证据卡片或适配度标签。

主要转化目标是让潜在客户带着用例、数据、现有技术栈和工作流回到 Upwork 与 Noah 沟通。邮箱是辅助联系渠道，GitHub 是项目和源码入口。私有简历、API Key 和其他私人信息不会进入公开仓库、浏览器或生产对话上下文。

## User Stories

1. As a 潜在客户, I want 打开 cover letter 中的作品集链接后立即看到 Noah Wang 的姓名与专业定位, so that 我可以快速判断是否值得继续了解
2. As a 潜在客户, I want 在首屏看到这是一个 AI Portfolio, so that 我不会误以为自己正在直接与 Noah 本人交谈
3. As a 潜在客户, I want 看到“Production AI Systems Engineer — Agents, RAG, and Full-Stack Delivery”的清晰定位, so that 我可以快速匹配自己的 AI 项目需求
4. As a 潜在客户, I want 在首屏看到 Noah 的七年工程经验背景, so that 我能理解他不仅具备演示型 AI 开发经验
5. As a 潜在客户, I want 看到基于 Noah 当前 Upwork 头像制作的友好 3D 头像, so that 作品集具有明确、可信且一致的个人识别
6. As a 潜在客户, I want 在桌面和手机上获得完整且稳定的页面体验, so that 我可以从 Upwork 的任意设备顺畅浏览
7. As a 潜在客户, I want 通过 Me 快捷入口了解 Noah 的精简背景, so that 我不必阅读完整简历
8. As a 潜在客户, I want 通过 Projects 快捷入口查看两个代表性 AI 项目, so that 我可以聚焦最相关的交付能力
9. As a 潜在客户, I want 通过 Skills 快捷入口浏览分组后的核心技术能力, so that 我能快速核对所需技术栈
10. As a 潜在客户, I want 通过 Experience 快捷入口了解 Noah 的职业经历, so that 我可以理解其 AI 与后端经验的连续性
11. As a 潜在客户, I want 通过 Contact 快捷入口看到公开联系渠道, so that 我能立即采取下一步行动
12. As a 潜在客户, I want 在 DeepSeek 不可用时仍能使用全部快捷入口和项目链接, so that 核心作品集不会因模型故障失效
13. As a 潜在客户, I want 输入关于 Noah、项目、经历或相关技术的问题, so that 我能针对自己的项目快速获得更相关的介绍
14. As a 潜在客户, I want 看到流式生成的回答, so that 对话感觉及时自然而不是长时间无反馈
15. As a 非英语潜在客户, I want AI 使用我的提问语言回答, so that 我可以用最熟悉的语言了解 Noah
16. As a 潜在客户, I want AI 使用自然、自信、略带幽默的第一人称资料口吻, so that 回答像个人化介绍而不是僵硬的简历摘要
17. As a 潜在客户, I want 回答偶尔使用适量 emoji 但不过度随意, so that 对话友好又保持专业
18. As a 潜在客户, I want AI 在报价、档期、合同和私人判断上明确由 Noah 最终确认, so that 我不会把模型回答误认为正式承诺
19. As a 潜在客户, I want 在询问当前合作条件时看到 `$25/hr`、`30+ hrs/week` 和支持 contract-to-hire, so that 我能进行初步合作判断
20. As a 潜在客户, I want 被提醒最终范围、开始时间和条款应在 Upwork 与 Noah 确认, so that 后续沟通有明确边界
21. As a 潜在客户, I want 在询问完整简历时获得精简概述和 Upwork 链接, so that 我能继续评估而不会接触私有文件
22. As a 潜在客户, I want 看到 China · UTC+8 的公开时区信息, so that 我可以判断协作时间是否合适
23. As a 潜在客户, I want 了解 Noah 在支付、钱包、区块链、电商和银行后端方面的七年背景, so that 我可以判断其生产系统经验是否相关
24. As a 潜在客户, I want 了解 Java、Spring、Redis、RabbitMQ、并发和分布式系统是 Noah 的补充背景, so that 我能理解其全栈 AI 定位背后的工程基础
25. As a 潜在客户, I want 看到四段公开雇主经历及准确日期, so that 我可以核对职业时间线
26. As a 潜在客户, I want 看到已确认可公开的 CPcash Wallet 经历, so that 我能理解 Noah 的钱包业务背景
27. As a 潜在客户, I want 数字商品市场经历以通用描述呈现, so that 我能了解相关经验而不会看到未确认公开的内部项目名
28. As a 潜在客户, I want 了解 Noah 毕业于 Jimei University, so that 我可以获得必要的教育背景
29. As a 潜在客户, I want 了解 Noah 的中文为母语且英文可用于交流, so that 我能预期协作语言
30. As a 潜在客户, I want Skills 卡片只展示经过核验且与 AI 交付直接相关的能力, so that 我不会被夸大的技术清单误导
31. As a 潜在客户, I want AI Systems、Backend/Data 和 Product Delivery 三组技能清晰分开, so that 我能快速扫描 Noah 的能力结构
32. As a 潜在客户, I want 看到 Knowledge Engine 项目被描述为 production-oriented 且 source available, so that 我能理解其工程目标又不会误认为已有生产验证
33. As a 潜在客户, I want 看到 Quad Agent 被描述为全栈 LangGraph AI Agent Workspace, so that 我能理解它覆盖的产品与代理工作流
34. As a 潜在客户, I want 两个项目都显示 Source Available 状态, so that 我能准确理解可访问内容
35. As a 潜在客户, I want 项目卡片整体可点击并在新标签页打开 GitHub, so that 我可以直接检查项目源码
36. As a 潜在客户, I want 项目卡片明确显示 View on GitHub, so that 我不会误以为链接指向在线演示
37. As a 潜在客户, I want 项目区域使用项目中已有的真实截图或 GIF, so that 我可以直观看到真实界面和能力
38. As a 潜在客户, I want 作品集避免 Live、Production Proven、Enterprise Proven 和 Open Source 等未经证实标签, so that 我获得诚实的项目预期
39. As a 潜在客户, I want 作品集不把 Quad Agent 标记为 Local-first, so that 页面文案聚焦对客户更重要的交付价值
40. As a 潜在客户, I want 点击 Ask About My Process 后在对话中看到五步合作流程, so that 我能理解 Noah 如何推进项目
41. As a 潜在客户, I want 合作流程涵盖需求与数据、架构与风险、最小纵向切片、可靠性与测试、部署与交接, so that 我能预期一个具体的合作方式
42. As a 潜在客户, I want 点击顶部 Looking for a talent? 后先进入一条相关对话, so that 我可以在离开站点前理解 Noah 如何帮助我的 AI 项目
43. As a 潜在客户, I want 在相关回答和页面底部看到明确的 Upwork 行动入口, so that 我能带着上下文回到 Upwork 联系 Noah
44. As a 潜在客户, I want Upwork 是最突出的合作渠道, so that 我知道正式沟通应在哪里继续
45. As a 潜在客户, I want 看到 `noahacgn@gmail.com` 作为辅助邮箱, so that 我有一个直接联系选项
46. As a 潜在客户, I want 看到 Noah 的 GitHub 入口, so that 我可以继续浏览他的公开项目
47. As a 潜在客户, I want 页面不展示电话和未经确认的社交账号, so that Noah 的私人信息不会被不必要地公开
48. As a 潜在客户, I want 顶部不展示 Source 按钮, so that 导航保持精简并聚焦 About
49. As a 潜在客户, I want 桌面和平板宽度下仍能看到 About 入口, so that 精简导航后仍能了解 AI 作品集的边界
50. As a 潜在客户, I want 对话页底部的 `@noahacgn` 打开 GitHub, so that 作者身份和公开源码入口保持一致
51. As a 潜在客户, I want About 弹窗简洁说明 AI 属性、公开资料来源、DeepSeek 生成和承诺边界, so that 我能理解回答是如何产生的
52. As a 潜在客户, I want 输入框附近看到不要提交秘密信息且消息会发送给 DeepSeek 的提示, so that 我能做出知情选择
53. As a 潜在客户, I want 无关问题得到简短自然的范围提示, so that 作品集不会伪装成通用 ChatGPT
54. As Noah Wang, I want 作品集拒绝提示注入、角色替换和虚构经历的要求, so that 公开资料边界不会被访客改写
55. As Noah Wang, I want 浏览器永远不能读取 DeepSeek API Key, so that 密钥只存在于可信服务端环境
56. As Noah Wang, I want 私有简历不进入 Git 历史、部署产物或运行时上下文, so that 原始个人资料保持本地私有
57. As Noah Wang, I want 生产回答只使用人工整理的站点公开资料, so that 公开事实范围清晰可维护
58. As Noah Wang, I want 作品集不提供简历文件上传、查看或下载能力, so that 私有简历不会意外泄露
59. As Noah Wang, I want 站点不使用第三方分析服务, so that 第一版保持简单且不增加访客追踪
60. As Noah Wang, I want 站点不要求访客注册或登录, so that Upwork 客户可以立即使用
61. As Noah Wang, I want 对话不写入数据库或跨会话持久化, so that 第一版没有不必要的数据保留
62. As a 潜在客户, I want 浏览器返回或点击 Noah 名称时回到首页并清空当前会话, so that 我能明确开始一次新的浏览
63. As a 潜在客户, I want 初始问题保留在可分享 URL 中, so that 我可以刷新或分享同一入口语境
64. As a 潜在客户, I want 页面不增加 New Chat 或 Reset 按钮, so that 界面保持接近目标站点的简洁骨架
65. As a 潜在客户, I want 输入最多支持 2,000 个字符并获得明确反馈, so that 极长输入不会破坏应用
66. As a 潜在客户, I want 对话保留最近 12 条消息的语境, so that 连续追问保持相关又不会无限增长上下文
67. As a 潜在客户, I want 单次回答保持约 700 tokens 内, so that 内容足够具体但仍适合快速阅读
68. As a 潜在客户, I want 模型调用超过 30 秒时看到友好的失败状态, so that 我不会无期限等待
69. As a 潜在客户, I want 在 DeepSeek 余额不足或供应商失败时仍能继续浏览静态作品面, so that 服务故障不会变成空白页
70. As Noah Wang, I want 第一版不显示问题次数或自定义使用配额, so that 潜在客户可以自然探索而不会看到成本控制界面
71. As Noah Wang, I want 使用 Streamlit Community Cloud 免费部署, so that 我可以用低成本维护公开链接
72. As Noah Wang, I want 在发送 cover letter 前预热可能休眠的 Streamlit 应用, so that 客户首次打开时减少冷启动等待
73. As Noah Wang, I want 通过 Streamlit Secrets 配置生产密钥, so that 密钥不被提交到公开仓库
74. As a 维护者, I want 通过一条浏览器级测试 seam 验证完整公开旅程, so that 测试聚焦用户可见行为而不是实现细节
75. As a 维护者, I want 默认测试使用可控的 DeepSeek 假实现, so that 测试稳定、免费且不接触真实密钥
76. As a 维护者, I want 能够显式执行一次真实 DeepSeek 冒烟验收, so that 部署前可以确认供应商集成仍然可用
77. As a 维护者, I want 在相同桌面与移动端视口对照目标站点和实现截图, so that 视觉复刻的差异可以被明确发现和修正
78. As a 潜在客户, I want 页面没有目标站点中失效按钮、错误跳转、空白间距和事实矛盾, so that 复刻结果比参考站点更可靠
79. As a 潜在客户, I want 页面动画轻微、稳定且不妨碍阅读, so that 作品集显得精致而不是分散注意力
80. As a 键盘用户, I want 输入、按钮、弹窗和外链具有清晰焦点与可操作语义, so that 我无需鼠标也能完成核心旅程

## Implementation Decisions

### 产品与架构

- 第一版是单个 Streamlit 应用，由 Python 服务端和 Streamlit Components v2 自定义前端组成。自定义前端直接作为组件运行，不使用 iframe 嵌入另一个站点。
- 应用划分为五个清晰职责：站点公开资料、作品面与视觉组件、会话和 URL 状态、对话编排、DeepSeek 网关。私有简历不属于任何运行时模块。
- 作品面是主产品，不是模型故障时临时出现的降级内容。首屏、快捷卡片、项目、联系渠道和行动入口均不依赖 DeepSeek。
- 快捷入口读取确定性的站点公开资料并渲染静态卡片；只有自由文本提问调用 DeepSeek。
- 不实现 RAG、embedding、向量数据库、检索工具、证据工具、证据卡片、引用 ID、事实验证面板或 claim catalog。GitHub 只是项目入口，不是证据系统。
- 不实现 Fit 按钮、结构化适配度、推荐标签或 FIT 评分。访客可以自由询问是否适合某类项目，AI 以普通对话回答。

### 视觉与交互

- 复刻边界以 `https://www.kayverma.com/` 为视觉和交互参考：忠实匹配白色背景、系统无衬线字体、留白节奏、圆角、卡片层级、轻量动画、首页构成及进入对话的骨架。
- 不复制目标站点的个人内容、错误、幻觉、失效 Process 行为、错误 CTA、GitHub Star 请求、矛盾地点、英文限定或空白布局问题。
- 实施时先用浏览器重新捕获目标首页、对话入口、快捷卡片、项目卡片、Contact、About 及桌面和移动端关键状态。视觉验收必须把目标截图与实现截图置于同一比较上下文中，而不是只看单张实现截图。
- Hero 固定使用 `Hey, I'm Noah Wang 👋`、`AI Portfolio` 和 `Production AI Systems Engineer — Agents, RAG, and Full-Stack Delivery`。
- 以 Noah 当前 Upwork 头像为人物依据，通过图像生成制作大号圆形 3D/Memoji 风格头像；头像只做轻微漂浮动画，并在对话视图复用较小版本。不得生成伪视频或暗示实时真人形象。
- 首页快捷入口固定为 `Me / Projects / Skills / Experience / Contact`；目标站点的 Fun 被 Experience 替换，不出现 Fit。
- 顶部不展示 `Source` 按钮；作品集仓库地址仍可作为 AI 回答的公开资料。
- 顶部 `Looking for a talent?` 进入对话，并使用与“How can Noah help with my AI project?”含义一致的初始问题；它不直接把访客送离站点。
- 首页项目区只显示一行两列的两个项目卡片。卡片整体可点击、在新标签页打开 GitHub，并显示 `View on GitHub` 与 `Source Available`。
- 项目区底部提供 `Ask About My Process`，点击后在对话中展示合作流程；首页不增加独立的静态流程区。
- 页面底部保留明确的 Upwork CTA；对话答案可根据语境再次显示 Upwork CTA。
- 首页不增加独立 Experience 时间线。七年经验在 Hero、内容和 Experience 卡片中表达。
- About 使用轻量弹窗，说明 AI 作品集属性、站点公开资料、DeepSeek 生成和本人承诺边界，不展开技术架构论文。
- 浏览器返回或点击 Noah 名称时回到首页并清空当前会话。不增加 New Chat 或 Reset 控件。
- 初始提问编码在 URL 查询参数中，以支持刷新和分享。无需为忠实复刻强制实现真实 `/chat` 路由，只需达到相同的可见行为。
- 桌面与移动端都必须保持内容顺序、点击区域、文本可读性和卡片完整性。动画不得导致首屏布局跳动、裁切或大块空白。
- 交互控件使用适合其行为的语义元素，并提供键盘焦点、弹窗焦点管理和可理解的标签。

### 站点公开资料

- 对外显示名固定为 Noah Wang。Upwork 上的 Noah W. 仅视为同一公开资料的缩写显示，不用作本站主名称，也不推断法定身份。
- 可公开概述包括：中国、UTC+8、七年工程经验、30+ hrs/week、支持 contract-to-hire。城市和费率不放在静态 Hero。
- 当前费率 `$25/hr`、30+ hrs/week 与 contract-to-hire 仅在相关提问中回答；范围、开始时间和最终条款由 Noah 在 Upwork 确认。
- 公开雇主时间线固定为：Merypto（CPcash），2024 年 8 月至 2026 年 6 月；SandPay，2021 年 10 月至 2024 年 5 月；Shanghai Jibeike，2020 年 10 月至 2021 年 8 月；Xiamen Ruanyun，2019 年 5 月至 2020 年 7 月。
- 可以公开支付、钱包、区块链、电商、银行后端背景以及 CPcash Wallet 名称和公开链接。数字商品市场仅作通用描述，不出现任何未确认公开的内部项目名。
- Java、Spring、Redis、RabbitMQ、并发和分布式系统作为 Experience 与针对性问答中的补充能力，不进入 Hero 或主要技能定位。
- 教育信息为 Jimei University；语言信息为中文母语、英文 Conversational。它们进入 Me 或相关回答，不进入首屏核心文案。
- Skills 卡片约 16 项，固定按三组组织：
  - AI Systems：LangGraph、LangChain、RAG、Hybrid Retrieval、Agent Workflows。
  - Backend/Data：Python、FastAPI、PostgreSQL/pgvector、Elasticsearch、Redis、Neo4j。
  - Product Delivery：React/TypeScript、Streaming/SSE、OpenTelemetry、Docker、Automated Testing。
- 不公开手机号、年龄、性别、内部部门、未经确认的项目名称、完整简历文本、简历文件或任何本地路径。
- 访客索要完整简历时，仅返回精简职业概述和 Upwork 资料链接，不提供文件或下载。

### 项目内容

- Knowledge Engine 使用标题 `Knowledge Engine — Evidence-First Enterprise RAG Platform`，链接 `https://github.com/noahacgn/knowledge-engine`。文案定位为 production-oriented/source-available reference，不声称 production ready、production proven、enterprise proven、live 或当前 CI 全部通过。
- Knowledge Engine 可以简洁描述其 LangGraph 工作流、混合检索、低证据拒答、授权边界、可控查询和可靠摄取设计，但不能把源码能力外推为真实生产部署、客户指标或线上验证。
- Knowledge Engine 视觉素材优先选择仓库已有的 grounded evidence、trace、ingestion 和 Atlas 界面，不制作假 UI。
- Quad Agent 使用标题 `Quad Agent — Full-Stack LangGraph AI Agent Workspace`，链接 `https://github.com/noahacgn/quad-agent`。文案聚焦全栈 Agent Workspace，不在可见标签使用 Local-first。
- Quad Agent 可以简洁描述 Web Search、File RAG、PPT 生成、Deep Research、可重放流式事件和 HITL 工作流，但不声称 exactly-once、事实正确性保证、完整本地数据保证、线上部署或未经验证的 DeepSeek 兼容性。
- Quad Agent 视觉素材优先选择仓库已有的 Web Search、File RAG、PPT 和 Deep Research GIF 或端到端截图，不制作假演示。
- 两个项目都没有许可证和公开在线演示，因此统一使用 `Source Available`，不得使用 `Open Source`、`Live` 或演示按钮。

### AI 对话

- 模型固定为 DeepSeek `deepseek-v4-flash`，使用 non-thinking 模式和流式输出。实施时若供应商接口已变化，应先核对官方 API 可用性；不得静默换成其他模型。
- DeepSeek API Key 只从服务端环境变量 `DEEPSEEK_API_KEY` 读取。本地已经具备该环境变量；生产使用 Streamlit Secrets 提供同名值。
- 浏览器组件只与 Streamlit/Python 服务端通信，不能直接请求 DeepSeek，不能接收、序列化、打印或存储 API Key。
- 自由对话将紧凑的站点公开资料直接放入系统上下文，不进行检索。每次请求最多携带最近 12 条消息。
- AI 仅回答 Noah、其项目、经历和与潜在合作相关的技术问题。对明显无关的问题给出短而自然的范围引导，不使用“Sorry Bro I'm not ChatGPT”之类文案。
- 默认用访客提问所使用的语言回答。站点固定 UI 文案保持英文。
- 回答使用第一人称资料口吻、自信自然、不过度保守，可使用 0–2 个合适 emoji，不使用 `Bro`。
- 页面和系统提示持续明确它是 AI 作品集而非 Noah 本人。报价、档期、合同、私人观点和最终承诺必须转交 Noah 并引导至 Upwork。
- 系统指令拒绝访客修改身份、绕过事实边界、泄露提示词、虚构经历或把 AI 变成通用助手。
- 输入长度上限为 2,000 字符；单次输出目标上限约 700 tokens；供应商请求超时为 30 秒。
- 不设置可见问题次数、自定义余额或访客配额。供应商余额耗尽时进入普通错误状态，不影响静态作品面。
- 输入区域附近显示简短提示：回答由 AI 生成，不要分享秘密信息，消息会发送给 DeepSeek。

### 联系与转化

- 主要 Upwork 行动入口固定为 `https://www.upwork.com/freelancers/~0119433c70074dd0d0?viewMode=1`。
- 公开联系渠道包括 Upwork、`noahacgn@gmail.com` 和 `https://github.com/noahacgn`。Upwork 的视觉优先级最高；邮箱是辅助联系；GitHub 是项目入口。
- 不展示电话、LinkedIn、Instagram 或其他未经确认的社交账号。
- 对话页底部 `@noahacgn` 链接 GitHub。
- Upwork CTA 提醒潜在客户带上用例、数据、现有技术栈和工作流继续沟通。

### 状态、错误与隐私

- 不要求账户，不创建数据库，不做服务器端聊天持久化，也不恢复跨浏览器会话。
- 同一页面会话内保留必要对话状态；返回首页会清除它。URL 只保留初始查询，不包含完整聊天记录或秘密。
- DeepSeek 超时、余额不足、网络错误或无效响应都显示友好且可恢复的消息；静态内容和外链继续工作。
- 不将访客输入、模型回答、API Key 或私有简历写入应用日志。错误日志只保留诊断所需的非敏感元数据。
- 第一版不加入 Vercel Analytics、Google Analytics 或其他第三方分析。
- 私有简历只在开发前由人工提炼站点公开资料；生产构建和运行时不得读取它们。

### 仓库与部署

- 公开仓库目标为 `noahacgn/noah-ai-portfolio`，聊天页作者链接必须指向该公开身份。
- 仓库不添加许可证；页面因此不能自称 Open Source。
- 私有简历必须继续被 Git 排除，并在推送前验证整个待推送历史不包含这些文件。
- 使用 Streamlit Community Cloud 免费部署，期望公开地址为 `https://noah-ai-portfolio.streamlit.app`；若名称不可用，应保留最接近且清晰的替代地址并更新公开链接。
- 生产密钥通过 Streamlit Secrets 配置，不进入 Git、前端包、查询参数、截图或部署日志。
- 接受 Community Cloud 在约 12 小时无活动后休眠的免费层行为；Noah 在发送重要 cover letter 前手动预热应用。
- 当前本地仓库没有远端；实施会话需要创建或连接目标 GitHub 仓库、推送公开历史并完成 Streamlit 部署。

## Testing Decisions

- 只建立一个主要自动化测试 seam：从浏览器驱动完整运行中的 Streamlit 应用，在服务端注入可控的 DeepSeek 假实现。该 seam 是当前绿地仓库能够使用的最高层边界，也避免为不同模块创建大量重复测试接口。
- 好测试只断言潜在客户可观察的行为，包括可见文本、按钮结果、URL 状态、流式反馈、错误恢复、外链目标、会话清除、响应式布局和浏览器网络边界；不断言内部函数调用次数、组件树、提示词拼接实现或私有状态结构。
- 浏览器 seam 覆盖作品面、快捷卡片、项目与联系外链、About 弹窗、首页进入对话、合作流程问题、自由提问、语言跟随、返回首页、URL 分享、输入上限和键盘核心旅程。
- 同一 seam 通过可编程假实现覆盖正常分块流式输出、慢响应、30 秒超时、余额不足、供应商错误、无效响应和提示注入场景。测试不能调用真实 DeepSeek 或依赖真实余额。
- 在浏览器网络检查中验证前端只连接 Streamlit 应用，不向 DeepSeek 域名发请求，也不在 DOM、网络载荷、脚本、日志或查询参数中出现 `DEEPSEEK_API_KEY` 的值。
- 静态作品面必须在未配置 DeepSeek、假实现报错和对话失败三种状态下保持完整可用。
- 外链测试验证两个项目、Upwork、邮箱和 `@noahacgn` 的目标及新标签行为，并验证顶部不出现 Source 入口，但不把第三方页面的可用性作为应用测试成功条件。
- 视觉验收属于同一浏览器旅程的人工设计 QA：分别在一致的桌面与移动端视口捕获目标站点和实现的相同状态，将两张图放入同一比较输入，检查字体、字重、留白、半径、边框、头像尺寸、卡片密度、裁切、动画稳定性和布局跳动，修正后再次比较。
- 可访问性验收覆盖键盘导航、可见焦点、弹窗关闭与焦点返回、输入标签、链接语义和基本颜色对比。
- 真实 DeepSeek 只提供显式、非默认的本地冒烟验收：在已经设置 `DEEPSEEK_API_KEY` 的环境中发送一个无敏感信息的短问题，确认选定模型能够流式返回。它不进入默认测试或 CI，不记录 Key、完整请求或完整响应，也不用于精确文本断言。
- 部署后执行一次公开冒烟旅程：打开首页、进入一条对话、触发一个快捷卡片、打开项目链接并确认失败状态不会破坏静态页面。
- 当前仓库只有领域和工程流程文档，没有应用代码、测试框架或可复用测试先例，因此不存在需要继承的 prior art；实现时应保持这一条高层 seam，而不是为测试便利暴露新的生产接口。

## Out of Scope

- RAG、embedding、向量数据库、检索、运行时读取简历或从 GitHub 动态抓取事实。
- 证据卡片、引用、证据 ID、claim catalog、事实评分或代码级证据链接。
- Fit 按钮、结构化适配度评估、推荐分数或预设 FIT 标签。
- 通用聊天助手能力、与 Noah 及潜在合作无关的开放域问答。
- 访客账户、登录、数据库、服务端对话持久化、跨设备同步或聊天导出。
- 简历文件上传、下载、全文展示或在生产环境访问私有简历。
- 电话、年龄、性别、内部部门、未确认项目名或未经确认的社交账号。
- 第三方分析、行为跟踪、GitHub Star 计数或社交证明计数。
- 为两个代表项目提供新的托管 Demo，或把它们标记为 Live、Production Proven、Enterprise Proven 或 Open Source。
- 独立静态合作流程区、首页完整 Experience 时间线、Fun 或 Fit 快捷入口。
- 伪造真人视频、实时数字人、声音克隆或让 AI 代替 Noah 作出承诺。
- 针对 Upwork 政策的额外产品限制、站内成交能力或自动发送 cover letter。
- 第一版自定义用量计费、可见问题次数、用户余额、复杂限流后台或成本分析面板。
- 第一版第三方监控平台、专用生产基础设施或脱离 Streamlit Community Cloud 的部署。
- 复制目标站点的内容、错误、失效交互、幻觉或不相关社交链接。

## Further Notes

- 本规格使用领域词汇中的 AI 作品集、作品面、站点公开资料、私有简历、第一人称资料口吻、潜在客户、合作流程、Upwork 行动入口和公开联系渠道。
- 用户已在本机设置 `DEEPSEEK_API_KEY`。这只是本地冒烟验收的运行前提；密钥值没有被读取，也不得进入本规格或仓库。
- `deepseek-v4-flash` 是已确认的目标模型名称。由于供应商模型目录可能变化，实施者应在接入时核对 DeepSeek 官方接口；如果名称不可用，应报告阻塞而不是擅自换模型。
- Knowledge Engine 当前更准确的定位是实现充分的离线、production-oriented reference，仍缺少公开生产部署与 live evaluation；不要引用会快速过时的测试数量或 coverage 数字作为营销事实。
- Quad Agent 当前是 source-available、production-minded reference application，没有许可证或公开在线部署；不要把工程设计等同于生产证明。
- 参考站点的限制不构成本产品约束。复刻的是视觉语言、页面节奏和首页到对话的骨架，内容、事实边界、错误处理和 Upwork 转化路径均以本规格为准。
- Streamlit 免费层冷启动是已接受的运营权衡，不需要为此改变第一版技术栈。

## Comments
