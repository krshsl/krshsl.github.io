const htmlmin = require("html-minifier-terser");

module.exports = function (config) {
	config.addTransform("htmlmin", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				minifyCSS: true,
			});

			return minified;
		}

		// If not an HTML output, return content as-is
		return content;
	});

	return {
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src",
			output: "dist",
		},
		pathPrefix: "/",
	};
};
