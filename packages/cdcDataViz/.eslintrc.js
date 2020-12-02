module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint-config-airbnb/whitespace',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    es2021: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'max-len': 0,
    'jsdoc/require-param': 0,
    'comma-dangle': 0,
    '@typescript-eslint/comma-dangle': 0,
    'no-use-before-define': 0
  },
};
