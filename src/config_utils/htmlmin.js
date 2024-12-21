const htmlmin = require("html-minifier-terser");

// minify the html final documents
module.exports = (value, outputPath) => {
  if ((outputPath || "").endsWith(".html")) {
    return htmlmin.minify(value, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
    });
  }
  return value;
};
