// define elements
var del = require('del'),
	gulp = require('gulp'),
	config = require('../config'),
	changed = require('gulp-changed'),
	imagemin = require('gulp-imagemin'),
	runSequence = require('run-sequence');

// first delete the dest folder
// then add optimized svg
// to avoid clutter
gulp.task('svg', function () {
	runSequence('svg-delete', 'svg-optimize');
});

// delete svg destination folder
gulp.task('svg-delete', function(){
	return del.sync(config.svg.dest + '/**/**/**', {force: true});
});

// add optimized svg
gulp.task('svg-optimize', function () {
    return gulp.src(config.svg.src)
        .pipe(imagemin(config.svg.options))
        .pipe(gulp.dest(config.svg.dest));
});
