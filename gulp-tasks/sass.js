const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass")(require("sass"));

const css_src = "./src/scss/*.scss";
const css_dest = "./dist/css";

// The main Sass method grabs all root Sass files,
// processes them, then sends them to the output calculator
function buildStyles() {
  return gulp
    .src(css_src)
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(
      cleanCSS({
        level: 2,
      }),
    )
    .pipe(gulp.dest(css_dest));
}

module.exports = buildStyles;
