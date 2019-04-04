const mix = require('laravel-mix');
const cssImport = require('postcss-import');
const tailwind = require('tailwindcss');
const cssNested = require('postcss-nested');
const cssPresetEnv = require('postcss-preset-env');
const glob = require('glob-all');
const purgeCss = require('@fullhuman/postcss-purgecss');

mix.postCss('./input.pcss', './output.css', [
    cssImport(),
    tailwind('./tailwind.js'),
    cssNested(),
    cssPresetEnv(),
    purgeCss({
        content: glob.sync([
            path.join(__dirname, 'resources/views/**/*.blade.php'),
        ]),
        extractors: [{
            extractor: class {
                static extract (content) {
                    return content.match(/[A-z0-9-:\/]+/g) || [];
                }
            },
            extensions: ['html', 'js', 'php'],
        }],
    }),
]).options({
    processCssUrls: false,
});
