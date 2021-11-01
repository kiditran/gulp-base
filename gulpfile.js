"use strict";

const { series, parallel, watch } = require("gulp");
var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var concat = require("gulp-concat");

// Compile CSS
function buildStyles() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
}
// Combine JS files
gulp.task("scripts", function () {
  return gulp
    .src("./js/*.js")
    .pipe(concat("all.js"))
    .pipe(gulp.dest("./dist/"));
});

exports.buildStyles = buildStyles;

exports.default = function () {
  // You can use a single task
  watch("./sass/**/*.scss", series(buildStyles));
  // Or a composed task
  watch("src/lib/*.js", series(clean, javascript));
};
