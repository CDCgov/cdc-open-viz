module.exports = {
    env: {
        browser: true,
    },
    extends: ['react-app', 'plugin:jsx-a11y/recommended', 'prettier'],
    parserOptions: {
        es2021: true,
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['prettier'],
    rules: {
        'import/no-named-as-default': 0,
        'no-labels': 0,
        'no-unused-labels': 0,
        "import/no-anonymous-default-export": 0
    },
}
