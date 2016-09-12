var gulp = require('gulp'),
	config = require('../config');

config.browserSync.theSyncer = require('browser-sync').create();

gulp.task('browser-sync', function() {
    return config.browserSync.theSyncer.init(config.browserSync.options);
});

gulp.task('browser-reload', function() {
    return config.browserSync.theSyncer.reload();
});