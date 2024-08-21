const { parallel, watch } = require("gulp");

// Pull each tasks
const sass = require("./gulp-tasks/sass.js");

// Attach watcher to each concurrent tasks
const watcher = () => {
  watch("./src/scss/**/*.scss", { ignoreInitial: true }, sass);
};

// ensures each task runs in parallel
exports.default = parallel(sass);

// watcher task which is responsible for running all tasks in parallel
exports.watch = watcher;
