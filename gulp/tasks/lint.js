var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config = require('../config').jshint;

gulp.task('lint', function() {
	return gulp.src(config.src)
		.pipe(jshint(config.options))
		.pipe(jshint.reporter(stylish));
});
