module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:vue/vue3-recommended", "prettier"],
    plugins: ["@typescript-eslint", "jest"],
    rules: {
        quotes: ["error", "double"],
    },
    env: {
        "jest/globals": true,
    },
    ignorePatterns: [".eslintrc.js", "src/shims-vue.d.ts", "node_modules/"],
};
