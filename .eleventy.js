module.exports = function (eleventyConfig) {
  // eleventy configuratie
  // Dit is het startpunt waarvan de site gegenereerd wordt

  // ondersteun yaml bestanden
  // nodig om leiding.yaml te lezen
  eleventyConfig.addDataExtension("yaml", (contents) => require("js-yaml").load(contents));

  // voeg navbar plugin toe
  eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));

  // Voeg jaar van genereren toe aan een pagina met {% year %}
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // sorteren van de nieuwtjes op de homepagina
  const collectionSorted = require('./config/collections/collectionSorted');
  eleventyConfig.addCollection('HomepageLeftSorted', (collection) => collectionSorted(collection, 'HomepageLeft'));
  eleventyConfig.addCollection('HomepageRightSorted', (collection) => collectionSorted(collection, 'HomepageRight'));

  // Getal naar maandnaam 
  // bv {{ 1 | numberToMonth }} geeft januari
  eleventyConfig.addFilter('numberToMonth', require('./config/filters/numbertomonth'));

  // Extra bestandstypes die 11ty moet verwerken
  // (Hiermee kan je ook 11ty functies gebruiken in deze bestanden)
  eleventyConfig.addTemplateFormats([
    "css",
    "js",
    "json"
  ]);

  // Deze bestanden of mappen worden gekopieerd naar de output zonder verwerking
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/kwikken"); // onbelangrijk, verwijder als je wil
};

module.exports.config = {
  // njk (Nunjucks) is de standaard template engine
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dir: {
    // locaties die 11ty gebruikt
    input: "src",
    includes: "_includes",
    data: "_data",
    output: "_dist"
  }
};