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
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:mdx/recommended",
    "plugin:prettier/recommended",
  ],
};

module.exports = eslintConfig;
