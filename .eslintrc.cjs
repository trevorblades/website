// @ts-check

/** @type {import('eslint').ESLint.ConfigData} */
const eslintConfig = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "@trevorblades",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/triple-slash-reference": "warn",
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  overrides: [
    {
      files: ["*.mdx"],
      extends: ["plugin:mdx/recommended"],
    },
    {
      files: ["*.yml"],
      extends: ["plugin:yml/standard"],
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      rules: {
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
      },
    },
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
};

module.exports = eslintConfig;
