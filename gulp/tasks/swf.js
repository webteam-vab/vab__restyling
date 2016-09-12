// define elements
var gulp = require('gulp'),
	config = require('../config'),
	copy = require('gulp-contrib-copy');

// just copy swf folder
gulp.task('swf', function () {
    return gulp.src(config.swf.src)
    	.pipe(copy())
        .pipe(gulp.dest(config.swf.dest));
});