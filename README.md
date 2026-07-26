# 驻马店第四代住宅前期研究网站 V1.0

这是一个可直接部署到 GitHub Pages 的纯静态网站，不依赖框架、构建工具或外部 CDN。

## 本地查看

直接双击 `index.html` 即可浏览。  
也可以在目录中运行：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 发布到 GitHub Pages

1. 新建一个 GitHub 仓库。
2. 将本文件夹内所有文件上传到仓库根目录。
3. 打开仓库 `Settings` → `Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/ (root)`。
6. 保存后，GitHub 会生成公开网址。

## 主要页面

- `index.html`：网站首页
- `cases.html`：案例库
- `case.html?id=...`：案例详情
- `policy.html`：政策解读
- `compare.html`：案例横向对比
- `issues.html`：问题与风险
- `zhumadian.html`：驻马店地方研究
- `about.html`：研究方法和数据结构

## 数据与 InDesign

- `content.json`：结构化内容
- `assets/data.js`：供静态网页直接读取的同源数据
- 后续 InDesign UXP/JavaScript 脚本可读取 `content.json`，按页面模板自动创建原生可编辑版面。
