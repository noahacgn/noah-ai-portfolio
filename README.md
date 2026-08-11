# Noah Backend & AI Portfolio

面向 Upwork 潜在客户的公开后端与 AI 集成作品集。首页无需模型即可浏览 Noah Wang 的定位、项目、合作入口与公开联系方式；自由提问由服务端调用 DeepSeek，并持续明确这是 AI 生成的作品集，而不是 Noah 本人。

在线地址：<https://noah-ai-portfolio.streamlit.app>

公开仓库：<https://github.com/noahacgn/noah-ai-portfolio>

## 本地运行

需要 uv、Python 3.13、Node.js 20+。Python 版本由 `.python-version` 固定，Python 依赖由 `uv.lock` 固定。

```powershell
uv sync --locked
Set-Location noah_portfolio\frontend
npm ci
npm run build
Set-Location ..\..
uv run --locked streamlit run streamlit_app.py
```

DeepSeek Key 只配置在服务端环境变量中：

```powershell
$env:DEEPSEEK_API_KEY = "your-key"
```

也可以在本地创建被 Git 忽略的 `.streamlit/secrets.toml`：

```toml
DEEPSEEK_API_KEY = "your-key"
```

## 验收

默认验收使用本地确定性 DeepSeek HTTP fake，不读取真实 Key，也不会调用供应商：

```powershell
Set-Location noah_portfolio\frontend
npm run typecheck
npm run test:e2e
```

需要显式验证真实供应商时，在已配置 `DEEPSEEK_API_KEY` 的本机运行：

```powershell
uv run --locked scripts\deepseek_smoke.py
```

该脚本只输出模型名、分块数、字符数和耗时，不打印 Key、请求正文或回答正文。

## Streamlit Community Cloud

当前生产配置使用 `main` 分支、`streamlit_app.py` 入口和 Python 3.13。直接依赖以 `pyproject.toml` 为唯一声明来源，完整解析结果由 `uv.lock` 锁定；Streamlit Community Cloud 识别锁文件后使用 uv 安装当前组件包及其依赖。

生产应用跟随 `main` 自动更新；普通源码变更复用现有环境，依赖文件或 Python 版本变化会触发环境重建。

Cloud 日志中的 `Updating the app files has failed: exit status 1` 可能在文件已经更新时仍然出现，不能单独作为部署失败的判断依据。入口会为包级 Python 源码计算内容指纹；检测到新版本后只重新加载一次资料、AI 网关和组件模块，避免前端已经更新但 Python 仍使用旧模块。部署后应以当前 `main` 的静态资源和快捷资料视图做双重核验。如果两者在数分钟后都没有变化，先从应用右下角依次打开 **Manage app → Reboot app → Reboot**；后续真实提交仍未出现时，再到 Workspace settings → Linked accounts 重新授权 GitHub Source control。重新授权后仍失败时，备份 Secrets，并使用相同仓库、分支、入口、Python 版本和域名重建应用。

1. 将公开仓库连接到 Streamlit Community Cloud。
2. Main file path 选择 `streamlit_app.py`。
3. 在 Advanced settings → Secrets 中配置：

   ```toml
   DEEPSEEK_API_KEY = "your-key"
   ```

4. 部署后验证首页、快捷卡片、一次自由问答、项目外链和错误恢复。
5. 在发送重要 cover letter 前手动打开一次应用完成预热。

## 公开边界

- 运行时公开资料只来自 `noah_portfolio/profile.py` 中人工整理的站点公开资料。
- 不使用 RAG、embedding、向量数据库、运行时 GitHub 抓取或私有简历读取。
- `docs/resumes/`、本地 Secrets、访客问题和模型回答不会进入公开部署产物或持久化数据库。
- 浏览器只与 Streamlit 应用通信；DeepSeek Key 不会发送到前端。
- 本仓库未提供许可证，因此页面使用 `Source Available`，不宣称 Open Source。

## 第三方声明

WebGL 流体轨迹使用 MIT 许可的第三方实现，版权与许可文本见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。该声明不构成本仓库整体的开源许可。
