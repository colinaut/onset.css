const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const postcssEasyImport = require('postcss-easy-import');
const importUrl = require('postcss-import-url');

module.exports = {
    plugins: [
        postcssEasyImport({
            path: ['src/css']
        }),
        importUrl(),
        postcssPresetEnv(),
        cssnano({preset: ['default', {
            discardComments: false,
            normalizeWhitespace: false
        }]}),
    ],
};