export default function(eleventyConfig) {

    eleventyConfig.addLayoutAlias("default", "_includes/layouts/default.njk");
    eleventyConfig.addGlobalData('layout', 'layouts/default.njk');

    eleventyConfig.addPassthroughCopy("ads.txt");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("app/");
    eleventyConfig.addPassthroughCopy("content-box/images");
    eleventyConfig.addPassthroughCopy("content-electronics/images");
    eleventyConfig.addPassthroughCopy("content-electronics/circuit-simulation");
    eleventyConfig.addPassthroughCopy("content-software/images");
    eleventyConfig.addPassthroughCopy("content-software/downloads");
    eleventyConfig.addPassthroughCopy("scripts");
    eleventyConfig.addPassthroughCopy("styles/2025.2.css");
};
