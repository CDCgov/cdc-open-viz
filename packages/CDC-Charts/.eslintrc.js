module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@wordpress/eslint-plugin/custom',
    'plugin:@wordpress/eslint-plugin/es5',
    'plugin:@wordpress/eslint-plugin/esnext',
    'plugin:@wordpress/eslint-plugin/jsx-a11y',
    'plugin:@wordpress/eslint-plugin/react'
  ],
  parserOptions: {
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
