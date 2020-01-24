module.exports = {
  env: {},
  extends: "standard",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {}
  },
  globals: {
    _: true
  },
  parser: "babel-eslint",
  rules: {
    "prefer-promise-reject-errors": 0,
    "standard/no-callback-literal": 0,
    "prefer-const": "error",
    "import/newline-after-import": ["error", { count: 1 }],
    "object-curly-spacing": [2, "always"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "import/newline-after-import": ["error", { count: 1 }],
  }
};
