module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img')

  return {
    dir: { input: 'src', output: 'dist' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
