# 原型实现说明

自行启动本地服务器，并在当前环境可用的浏览器中打开预览。能够自行运行时，不要把启动服务器的步骤交给用户。

进行较大的视觉修改前，如果视觉来源不清楚或已不再符合当前目标，使用 Product Design 插件的 `get-context` skill。用户给出可长期沿用的原型设计反馈、偏好或决策时，将其记录到 `AGENTS.md`。

根据已选定的生成式设计稿实现时，以该图片作为布局、组件结构、密度、间距、颜色、字体、可见内容和层级的事实来源。

复刻 Kay Verma 首屏到项目区时，“滚动渐变”指三层组合行为：问答与快捷入口随滚动上移并渐隐、项目区覆盖纵向透明渐变、项目内容进入视口时从透明下移态过渡到原位。

复刻 Kay Verma 的信息层级时，首屏只保留一条简短职业定位；背景、地点、时区和详细能力通过快捷入口、项目卡或对话渐进披露。项目使用短名称，卡片说明限制为一句话。

顶部招聘入口在桌面端和移动端统一使用 `Need backend or AI integration help?`，不为移动端提供含义模糊的缩写文案。

作品面固定使用 `Backend & AI Portfolio`，以 Java/Spring 后端为主要职业定位、AI 集成为补充方向。首页精选作品为 CPcash Wallet、Digimart 和 Quad Agent；三张 4:3 素材均作为概念插图，而不是真实产品截图、精确架构图或运行指标。

CPcash Wallet 和 Digimart 使用 `Live Product · Visit site`；没有许可证的 Quad Agent 使用 `Source Available · View on GitHub`，不得写成 Open Source。
