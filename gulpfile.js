"use strict";

const { series, parallel, watch } = require("gulp");
var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var cleanCss = require("gulp-clean-css");

// Compile CSS
function buildStyles() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("styles.css")) // combine css files
    .pipe(cleanCss()) // minify css file
    .pipe(gulp.dest("./dist/css"));
}

exports.buildStyles = buildStyles;

// Combine JS files
function combineJS() {
  return gulp
    .src("./js/*.js")
    .pipe(concat("all.js")) // combine js files
    .pipe(uglify()) // minify js file
    .pipe(gulp.dest("./dist/js"));
}

exports.combineJS = combineJS;

exports.default = function () {
  // You can use a single task
  watch("./sass/**/*.scss", series(buildStyles));
  // Or a composed task
  watch("./js/*.js", series(combineJS));
};
