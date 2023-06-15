/* eslint-disable no-undef */
module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
    },
    rules: {
      // Custom rules or overrides can be added here
    },
  };