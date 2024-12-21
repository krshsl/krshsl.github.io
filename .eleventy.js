const htmlmin = require("./src/config_utils/htmlmin.js");

module.exports = function (config) {
  config.addTransform("htmlmin", htmlmin);

  config.addCollection("all_projects", function (collectionApi) {
    var data = collectionApi.getFilteredByGlob("./src/projects/*.md");
    for (item in data) {
      console.log(data[item].inputPath);
    }
    return data;
  });

  return {
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
    pathPrefix: "/",
  };
};
