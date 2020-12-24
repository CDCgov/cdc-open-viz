module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'react-app'
  ],
  parserOptions: {
    es2021: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/no-named-as-default': 0,
    'no-labels': 0,
    'no-unused-labels': 0,
    'import/no-anonymous-default-export': 0
  }
};