const CleanCSS = require("clean-css");
const Terser = require("terser");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/fonts');
    eleventyConfig.addPassthroughCopy('src/resources');
    eleventyConfig.addPassthroughCopy({
        "src/icons/favicons": "/"
    });
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    return {
        dir: { input: 'src', output: 'dist' },
        passthroughFileCopy: true,
        templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
        htmlTemplateEngine: 'njk'
    }
}
