// define elements
var gulp = require('gulp'),
	config = require('../config'),
	iconfont = require('gulp-iconfont'),
  imagemin = require('gulp-imagemin'),
	consolidate = require('gulp-consolidate');

// define task
gulp.task('iconfont', function() {
  return gulp.src(config.iconfont.src)
  .pipe(imagemin(config.images.options))
    .pipe(iconfont(config.iconfont.options))
    .on('glyphs', function(glyphs, options) {

      gulp.src(config.iconfont.stylesTemplate)
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: config.iconfont.options.fontName,
          fontPath: config.iconfont.options.fontPath,
          className: config.iconfont.options.className
        }))
        .pipe(gulp.dest(config.iconfont.stylesDest));

    })
    .pipe(gulp.dest(config.iconfont.dest));
});