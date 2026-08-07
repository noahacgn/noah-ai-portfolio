# Noah AI Portfolio

面向 Upwork 潜在客户的公开 AI 作品集。首页无需模型即可浏览 Noah Wang 的定位、项目、合作入口与公开联系方式；自由提问由服务端调用 DeepSeek，并持续明确这是 AI Portfolio，而不是 Noah 本人。

在线地址：<https://noah-ai-portfolio.streamlit.app>

公开仓库：<https://github.com/noahacgn/noah-ai-portfolio>

## 本地运行

需要 Python 3.12+、Node.js 20+。

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -e .
Set-Location noah_portfolio\frontend
npm ci
npm run build
Set-Location ..\..
.\.venv\Scripts\python.exe -m streamlit run streamlit_app.py
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
.\.venv\Scripts\python.exe scripts\deepseek_smoke.py
```

该脚本只输出模型名、分块数、字符数和耗时，不打印 Key、请求正文或回答正文。

## Streamlit Community Cloud

当前生产配置使用 `main` 分支、`streamlit_app.py` 入口和 Python 3.13。根目录的 `requirements.txt` 让 Community Cloud 使用 uv/pip 安装当前项目，依赖版本仍以 `pyproject.toml` 为唯一来源。

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
