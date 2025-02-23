export default function(eleventyConfig) {

    eleventyConfig.addLayoutAlias("default", "_includes/layouts/default.njk");
    eleventyConfig.addGlobalData('layout', 'layouts/default.njk');

    eleventyConfig.addPassthroughCopy("styles/2025.2.css");
    eleventyConfig.addPassthroughCopy("app/");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("content-software/images");
    eleventyConfig.addPassthroughCopy("scripts");
};
