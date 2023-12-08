// @ts-check

/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@trevorblades",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:mdx/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: true,
    },
  },
  plugins: ["simple-import-sort"],
  rules: {
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/consistent-type-imports": "warn",
  },
};

module.exports = eslintConfig;
