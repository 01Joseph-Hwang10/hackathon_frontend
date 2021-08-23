// eslint-disable-next-line
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "@typescript-eslint/eslint-plugin"],
  rules: {
    indent: ["warn", 2],
    "linebreak-style": ["warn", "unix"],
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "@typescript-eslint/no-explicit-any": 0,
    "react/prop-types": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unused-vars": [1, { argsIgnorePattern: "[_]{3,}" }],
    "@typescript-eslint/no-namespace": 0,
  },
};
