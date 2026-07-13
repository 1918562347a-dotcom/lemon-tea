# LEMON TEA Vercel 部署说明

这个项目现在已经是标准静态网站，可以直接部署到 `Vercel`。

## 项目文件

- `index.html`
- `style.css`
- `script.js`
- `assets/`
- `vercel.json`

## 本地预览

```powershell
cd D:\codex生成内容\lemon-tea-website
python -m http.server 4173
```

打开：

`http://127.0.0.1:4173`

## 手机上局域网预览

```powershell
cd D:\codex生成内容\lemon-tea-website
python -m http.server 4173 --bind 0.0.0.0
```

然后在手机上打开：

`http://你的电脑局域网IP:4173`

## 发布到 Vercel

### 方法一：网页上传，最简单

1. 打开 [Vercel](https://vercel.com/)
2. 登录你的账号
3. 点击 `Add New...` → `Project`
4. 选择 `Browse` 或拖拽上传整个 `lemon-tea-website` 文件夹
5. Framework 选择 `Other`
6. Build Command 留空
7. Output Directory 留空
8. 点击 `Deploy`

部署完成后，Vercel 会给你一个公网链接。

### 方法二：通过 GitHub 发布

1. 把 `lemon-tea-website` 上传到 GitHub 仓库
2. 在 Vercel 中导入这个 GitHub 仓库
3. 其他设置保持默认
4. 点击 `Deploy`

以后你更新代码并推送到 GitHub，Vercel 会自动重新发布。

## 说明

- 这个项目不依赖后端
- 不依赖数据库
- 不需要 Node 构建
- 适合电脑、手机、平板访问
- 语言切换和购物袋交互都在前端完成
