// define elements
var del = require('del'),
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	gutil = require('gulp-util'),
	config = require('../config'),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
	postcss = require('gulp-postcss'),
	sassGlob = require('gulp-sass-glob'),
	runSequence = require('run-sequence'),
	autoprefixer = require('autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	classPrefix = require('gulp-class-prefix');

// build sass and reload the browser
gulp.task('styles-dev', function() {

	// build sass
	return gulp.src(config.styles.src)
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sassGlob())
		.pipe(sourcemaps.init())
		.pipe(sass(config.styles.sassOptions))
		.pipe(postcss([ autoprefixer(config.styles.autoprefixer) ]))
		.pipe(classPrefix('vab__'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.styles.dest))
		.pipe(config.browserSync.theSyncer.stream());
});

// run sass and remove sourcemaps
gulp.task('styles-production', function() {

	config.styles.options.sourcemap = false;
	del(config.styles.dest + '/*.map', {force: true});
	config.styles.options.style = 'compressed';

	// build sass, compass style
	return gulp.src(config.styles.src)
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sassGlob())
		.pipe(sass(config.styles.sassOptions))
		.pipe(gulp.dest(config.styles.dest));

});