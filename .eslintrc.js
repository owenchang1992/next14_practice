module.exports = {
  // 此設定項主要用於指示此.eslintrc檔案是Eslint在專案內使用的根層級文件，且 ESLint 不應在該目錄之外搜尋設定檔
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  // eslint:recommended ：該配置集是 ESLint 內建的“推薦”，它打開一組小的、合理的規則，用於檢查眾所周知的最佳實踐
  // @typescript-eslint/recommended：此配置集是typescript-eslint的推薦，它與eslint:recommended相似，但它啟用了特定於ts的規則
  // @typescript-eslint/eslint-recommended ：此配置集停用 eslint:recommended 配置集中已經由 typeScript 處理的規則，防止eslint和typescript之間的衝突。
  // prettier（即eslint-config-prettier）關閉所有可能幹擾 Prettier 規則的 ESLint 規則，確保將其放在最後，這樣它就有機會覆蓋其他配置集
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  // 預設情況下，Eslint使用其內建的Espree 解析器，該解析器與標準JavaScript 運行時和版本相容，而我們需要將ts代碼解析為eslint相容的AST，所以此處我們使用@typescript-eslint/ parser。
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // @typescript-eslint 外掛程式使得我們能夠在我們的儲存庫中使用typescript-eslint套件定義的規則集。
  plugins: ['@typescript-eslint'],
  rules: {},
};
