module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint-config-airbnb/whitespace'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    es2021: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  rules: {
    "no-use-before-define": "off",
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'max-len': 0,
    'jsdoc/require-param': 0,
    'comma-dangle': 0
  },
};
