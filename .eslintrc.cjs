// @ts-check

/** @type {import('eslint').ESLint.ConfigData} */
const eslintConfig = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "@trevorblades",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:astro/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/consistent-type-imports": "warn",
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
};

module.exports = eslintConfig;
