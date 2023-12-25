module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vuejs-accessibility/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parserOptions: {
      parser: "@babel/eslint-parser",
      sourceType: "module",
      ecmaVersion: 2018,
      ecmaFeatures: {
        globalReturn: false,
        impliedStrict: false,
        jsx: false,
      },
    },
  },
  plugins: ["vuejs-accessibility", "vue"],
  rules: {},
};
