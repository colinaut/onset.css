const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const postcssEasyImport = require('postcss-easy-import');
const importUrl = require('postcss-import-url');

module.exports = {
    plugins: process.env.NODE_ENV === 'development' ? [
        postcssEasyImport({
            path: ['src/css']
        }),
        importUrl(),
        postcssPresetEnv(),
    ] : [
        postcssEasyImport({
            path: ['src/css']
        }),
        importUrl(),
        postcssPresetEnv(),
        cssnano(),
    ],
};