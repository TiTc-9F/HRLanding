# HRLanding

Nuxt 4 + Vue 3 + TypeScript + Vite 專案，套件管理使用 **pnpm**。推到 `main` 會自動部署到 GitHub Pages。

## 環境需求

- Node.js 26（版本寫在 `.nvmrc`）
- pnpm（版本寫在 `package.json` 的 `packageManager`）

## 安裝

```bash
pnpm install
```

## 開發

啟動開發伺服器，網址為 `http://localhost:3000`：

```bash
pnpm run dev
```

## 型別檢查

```bash
pnpm run typecheck
```

## 打包

```bash
pnpm run build
```

預覽打包結果：

```bash
pnpm run preview
```

## 部署

推到 `main` 後，GitHub Actions（`.github/workflows/deploy.yml`）會自動 build 並部署到 GitHub Pages。
需先在 repo 的 **Settings → Pages** 將 Source 設為 **GitHub Actions**。

更多資訊請見 [Nuxt 文件](https://nuxt.com/docs/getting-started/introduction)。
