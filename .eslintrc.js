module.exports = {
  env: {
    browser: true
  },
  extends: ['react-app', 'plugin:jsx-a11y/recommended', 'prettier'],
  rules: {
    'import/no-named-as-default': 0,
    'no-labels': 0,
    'no-unused-labels': 0,
    'no-console': 1,
    'import/no-anonymous-default-export': 0
  }
}
