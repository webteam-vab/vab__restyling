// define elements
var del = require('del'),
	gulp = require('gulp'),
	config = require('../config'),
	changed = require('gulp-changed'),
	imagemin = require('gulp-imagemin'),
	runSequence = require('run-sequence');

// first delete the dest folder
// then add optimized images
// to avoid clutter
gulp.task('images', function () {
	runSequence('images-delete', 'images-optimize');
});

// delete images destination folder
gulp.task('images-delete', function(){
	return del.sync(config.images.dest + '/**/**/**', {force: true});
});

// add optimized images
gulp.task('images-optimize', function () {
    return gulp.src(config.images.src)
        .pipe(imagemin(config.images.options))
        .pipe(gulp.dest(config.images.dest));
});
