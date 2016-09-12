var gulp = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('default', function() {
	runSequence('init', 'watch', 'browser-sync');
});

gulp.task('init', ['iconfont', 'svg', 'styles-dev', 'scripts-dev', 'images']);