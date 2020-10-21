module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint-config-airbnb/whitespace',
  ],
  parserOptions: {
    es2021: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'max-len': 0,
    'jsdoc/require-param': 0,
    'comma-dangle': 0
  },
};
