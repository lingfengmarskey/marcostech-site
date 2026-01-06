module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "prettier",
  ],
  overrides: [
    // Astro files
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
      rules: {
        // 让 Astro 里未使用变量更合理些（可按你喜好调整）
        "no-unused-vars": "warn",
      },
    },
    // JS/TS
    {
      files: ["*.js", "*.cjs", "*.mjs", "*.ts"],
      rules: {
        "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      },
    },
  ],
};
