var gulp = require('gulp'),
	config = require('../config');

gulp.task('watch', function() {
    gulp.watch(config.styles.src, ['styles-dev']);
	gulp.watch(config.scripts.src, ['scripts-dev']);
	gulp.watch(config.images.src, ['images']);
	gulp.watch(config.svg.src, ['svg']);
	gulp.watch(config.swf.src, ['swf']);
	gulp.watch(config.sketch.src, ['sketch']);
	gulp.watch(config.iconfont.src, ['iconfont']);
	gulp.watch(config.markup.src, ['browser-reload']);
});