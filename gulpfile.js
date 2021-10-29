"use strict";

const { series, parallel, watch } = require("gulp");
var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

// Compile CSS
function buildStyles() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
}

exports.buildStyles = buildStyles;

exports.default = function () {
  // You can use a single task
  watch("./sass/**/*.scss", series(buildStyles));
  // Or a composed task
  // watch("src/*.js", series(clean, javascript));
};
