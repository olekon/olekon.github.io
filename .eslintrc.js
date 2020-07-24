module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        $nuxt: true
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended'
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        'max-len': ['warn', 120, 4],
        quotes: ['warn', 'single'],
        indent: ['warn', 4],
        semi: ['error', 'always'],
        'vue/html-indent': ['warn', 4],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': 'off'
    }
};
