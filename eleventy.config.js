export default function(eleventyConfig) {

    eleventyConfig.addLayoutAlias("default", "_includes/layouts/default.njk");
    eleventyConfig.addGlobalData('layout', 'layouts/default.njk');

    eleventyConfig.addPassthroughCopy("styles/2025.2.css");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("app/");
    eleventyConfig.addPassthroughCopy("content-box/images");
    eleventyConfig.addPassthroughCopy("content-electronics/images");
    eleventyConfig.addPassthroughCopy("content-electronics/circuitjs");
    eleventyConfig.addPassthroughCopy("content-electronics/factoryfuzz-pedal-circuitjs-source.txt");
    eleventyConfig.addPassthroughCopy("content-software/images");
    eleventyConfig.addPassthroughCopy("content-software/downloads");
    eleventyConfig.addPassthroughCopy("scripts");

};
