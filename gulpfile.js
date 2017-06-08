var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	prefix      = require('gulp-autoprefixer'),
	sourcemaps	= require('gulp-sourcemaps');


// gulp.task ('hello', function(){
// 	console.log('hello kidi');
// })

gulp.task('sass', function(){
	return gulp.src('sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))// Coverts Sass to CSS with gulp-sass
		.pipe(prefix())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./'))
})


gulp.task('default', function(){
	gulp.watch('sass/**/*.scss',['sass']);
});

