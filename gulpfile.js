"use strict";

const { series, parallel, watch } = require("gulp");
var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var concat = require("gulp-concat");
var cleanCss = require("gulp-clean-css");
var browserify = require("browserify");
var source = require("vinyl-source-stream");

// Copy html file
function copyFiles() {
  return gulp.src("./src/*.html").pipe(gulp.dest("./dist"));
}
exports.copyFiles = copyFiles;

// Compile CSS
function buildStyles() {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("styles.css")) // combine css files
    .pipe(cleanCss()) // minify css file
    .pipe(gulp.dest("./dist/css"));
}
exports.buildStyles = buildStyles;

// Combine JS files
function combineJS() {
  return browserify("./src/js/main.js")
    .bundle()
    .on("error", function () {})
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./dist/js/"));
}
exports.combineJS = combineJS;

exports.default = function () {
  watch("./src/*.html", series(copyFiles));
  watch("./src/sass/**/*.scss", series(buildStyles));
  watch("./src/js/*.js", series(combineJS));
};
