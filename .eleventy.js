module.exports = function (eleventyConfig) {
  // call functions on eleventyConfig here

  // add support for yaml data files
  eleventyConfig.addDataExtension("yaml", (contents) => require("js-yaml").load(contents));

  // add navbar plugin
  eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));

  // add current year to a page
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // order the homepage items
  const collectionSorted = require('./config/collections/collectionSorted');
  eleventyConfig.addCollection('HomepageLeftSorted', (collection) => collectionSorted(collection, 'HomepageLeft'));
  eleventyConfig.addCollection('HomepageRightSorted', (collection) => collectionSorted(collection, 'HomepageRight'));

  // add a filter to format dates
  eleventyConfig.addFilter('numberToMonth', require('./config/filters/numbertomonth'));

  // add formats to be processed
  eleventyConfig.addTemplateFormats([
    "css",
    "js",
    "json"
  ]);

  // these files and folders will be copied without being processed by 11ty
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/kwikken"); // just for fun, remove if you want
};

module.exports.config = {
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dir: {
    input: "src",
    includes: "_includes",
    data: "_data",
    output: "_dist"
  }
};