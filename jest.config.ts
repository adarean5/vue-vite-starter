/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",

    // An array of file extensions your modules use
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node", "vue"],

    // A map from regular expressions to paths to transformers
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        ".*\\.(vue)$": "vue-jest",
    },
};
