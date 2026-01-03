
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

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

	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", 			// "atom", "rss", "json"
		outputPath: "/feed.atom.xml",
		collection: {
			name: "article", 	// iterate over `collections.article`, from "tags: article" in front matter
			limit: 10,     		// 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Declan Bright",
			subtitle: "",
			base: "https://declanbright.com/",
			author: {
				name: "Declan Bright"
			}
		}
	});

	eleventyConfig.addPlugin(feedPlugin, {
		type: "json", 			// "atom", "rss", "json"
		outputPath: "/feed.json",
		collection: {
			name: "article", 	// iterate over `collections.article`, from "tags: article" in front matter
			limit: 10,     		// 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Declan Bright",
			subtitle: "",
			base: "https://declanbright.com/",
			author: {
				name: "Declan Bright"
			}
		}
	});
};