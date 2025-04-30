## 功能需求

1. 應用列表

   - 顯示排名頭100個免費應用
   - 支持垂直滾動，及每10個記錄一頁
   - 每個記錄的應用圖案顯示成圓形

2. 應用推薦

   - 顯示排名頭10個推薦應用
   - 支持水平滾動
   - 每個記録的應用圖案要顯示成方形圖角
   - 顯示位置在應用列表上排

3. 應用搜尋
   - 使用關鍵宇搜尋，只顯示搜尋命中的應用記錄到應用列表及應用推薦組件
   - 搜尋列永遠固定在頁面的最頂，就算應用列表垂直滾動時也是固定
   - 每次打字的時候，會立即進行搜尋

### 加分項目 | Bonus

1. 🤔 使用React Ant Design UI -> Shadcn
2. ✅ 使用Redux作進一步狀態管理
3. ✅ 應用列表垂直滾動時支持lazy loading
4. ✅ 有寫test case (jest)
5. 🤔 有responsive設計 -> 只有針對圖片
6. ✅ CSS用到Tailwind
7. ✅ 查API等數據時，有loading過場提升UX
8. ✅ 滾動時會有過場動畫
9. 🤔 有做用Webpack做js chunk -> 使用 Vite
10. ✅ 用localstorage實現cache
11. ✅ 任何技術技巧顯示更高水平
    - Custom hooks
    - lint + prettier unify code style

## 開發技術 | Tech Stack

- **React 版本 / React Version**: React 19.0
- **全域狀態管理 / Global State Management**: Redux Toolkit
- **數據請求 / Data Fetching**: axios 資料取得和緩存 / Data fetching and caching
- **開發語言 / Development Language**: TypeScript
- **UI 框架與樣式/UI Framework & Styling**: Tailwind CSS + Shadcn
- **開發規範 / Development Standards**: Airbnb ESLint
- **打包工具 / Bundler**: Vite

---

### 環境要求 | Prerequisites

- Node.js v22.14.0 (建議使用 nvm 進行版本管理)
  **(Recommended: Use nvm for version management)**
- Yarn 套件管理器
  **Yarn package manager**

### 安裝依賴 | Install Dependencies

```bash
yarn install --pure-lock
```

### 開發模式 | Development Mode

一般開發（HTTP）:  
**Run in development mode (HTTP):**

```bash
yarn run dev
```

### 執行測試 | Run The Test Cases

```bash
yarn run test
```

### 測試報告 | See The Testing Report

```bash
yarn run test:coverage
```

### 建置專案 | Build The Project

```bash
yarn run build
```

### 預覽靜態檔案 | Preview Static Files

```bash
yarn run preview
```

---

## 自動化功能 | Automation Features

- **程式碼品質控制 | Code Quality Control**
  - TypeScript 類型檢查 | TypeScript type checking
  - ESLint 程式碼規範檢查 | ESLint code linting
  - 自動程式碼格式化 | Automatic code formatting
